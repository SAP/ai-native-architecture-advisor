/**
 * Download-proxy Worker for the AI-Native Architecture Advisor site.
 *
 * Sits ONLY on the "Download Joule skill (.zip)" link — never on the website.
 * A browser user clicking download sees the same thing as before (a file
 * downloads); the difference is that every hit — browser, curl, or an AI agent —
 * is counted server-side here BEFORE the redirect, which the client-side
 * Cloudflare Web Analytics beacon on the page cannot do (no browser, no JS).
 *
 * Flow:  client -> this Worker (logs UA + path) -> 302 -> real download URL
 *
 * Counts land in Cloudflare Analytics Engine (binding DOWNLOADS). Query them in
 * the dashboard (Workers & Pages -> your Worker -> Analytics) or via the GraphQL
 * Analytics API. The blob fields let you break "who downloaded" into
 * browser vs curl vs likely-agent.
 */

// The real artifact a download resolves to. download-directory.github.io zips a
// subfolder of the repo on the fly — same destination the site used before.
const TARGETS = {
  "joule-zip":
    "https://download-directory.github.io/?url=https://github.com/SAP/ai-native-architecture-advisor/tree/main/skills/ai-native-architecture-advisor-jwd",
};

// Coarse client classification from the User-Agent, for the analytics blob.
function classify(ua) {
  const s = (ua || "").toLowerCase();
  if (!s) return "unknown";
  if (s.includes("curl") || s.includes("wget")) return "cli";
  if (
    s.includes("python") || s.includes("node") || s.includes("go-http") ||
    s.includes("java") || s.includes("okhttp") || s.includes("libwww")
  ) return "script";
  if (
    s.includes("bot") || s.includes("claude") || s.includes("gpt") ||
    s.includes("anthropic") || s.includes("openai") || s.includes("agent")
  ) return "agent";
  if (s.includes("mozilla") || s.includes("safari") || s.includes("chrome"))
    return "browser";
  return "other";
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Path shape: /d/<key>  e.g. /d/joule-zip
    const key = url.pathname.replace(/^\/d\//, "").replace(/\/$/, "");
    const target = TARGETS[key];

    if (!target) {
      return new Response("Unknown download.", { status: 404 });
    }

    const ua = request.headers.get("user-agent") || "";
    const ref = request.headers.get("referer") || "";
    const country = request.cf && request.cf.country ? request.cf.country : "";
    const kind = classify(ua);

    // Fire-and-forget: never let logging delay or break the redirect.
    try {
      if (env.DOWNLOADS) {
        env.DOWNLOADS.writeDataPoint({
          // blobs: string dimensions you can group by in queries
          blobs: [key, kind, ua.slice(0, 256), ref.slice(0, 256), country],
          // doubles: numeric measures
          doubles: [1],
          // indexes: high-cardinality sampling key
          indexes: [key],
        });
      }
    } catch (_) {
      // swallow — counting must never block a download
    }

    return Response.redirect(target, 302);
  },
};
