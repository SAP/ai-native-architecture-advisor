# Traffic metrics

GitHub's **Insights → Traffic** only retains the last **14 days** of clone and
view data. The [`traffic-snapshot`](../.github/workflows/traffic-snapshot.yml)
workflow runs weekly and appends each day's counts here so the history is kept
permanently.

| File | What it holds |
|------|---------------|
| `clones.csv` | Daily git-clone counts. **Best proxy for Claude Code / Codex installs** — both do a `git clone` when the plugin marketplace is added. |
| `views.csv`  | Daily page-view counts for the repo on GitHub (not the Pages site; that's in Cloudflare Web Analytics). |

Columns: `date,count,uniques`. Rows are de-duplicated by date, so manual
re-runs of the workflow never double-count.

## Related signals

- **Cloudflare Web Analytics** — pageviews + install-intent events on the
  GitHub Pages site (`docs/index.html`). Browser-only.
- **Download proxy** (`worker/`) — counts actual `.zip` downloads including
  non-browser clients (curl / agents), which the browser beacon cannot see.
- **Release asset `download_count`** — if/when the skill is published as a
  GitHub Release asset, exact permanent per-asset counts are available via the
  API. Not currently published.
