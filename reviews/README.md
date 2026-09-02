# Google Reviews

This directory contains raw Google Business Profile review data exported via
[Google Takeout](https://takeout.google.com/). The build script
(`scripts/build-google-reviews.ts`) normalizes these files into a single JSON
file that the Astro site reads at build time.

## Downloading reviews from Google Takeout

1. Go to [Google Takeout](https://takeout.google.com/)
2. Sign in with the Google account that owns the Business Profile
3. Click **Deselect all**, then scroll down and select only **Business Profile**
4. Within Business Profile, click **All Business Profile data included** and
   ensure **Reviews** is checked
5. Click **Next step**, choose your export format (`.zip`), and click
   **Create export**
6. Once the export is ready, download and extract the `.zip` file
7. Navigate to the extracted folder — the reviews are JSON files inside
   `Takeout/Business Profile/Reviews/`
8. Copy **all** JSON files from that folder into this `reviews/` directory

> Google Takeout may split reviews across multiple files when there are many
> reviews (e.g. `reviews.json`, `reviews-ABHRLXUg….json`). Copy all of them —
> the build script merges and de-duplicates automatically.

## Building the normalized reviews file

Run the build script to convert the raw Takeout exports into the file the site
uses:

```shell
mise run build-reviews
```

This runs `node scripts/build-google-reviews.ts`, which:

- Reads every `.json` file in `reviews/`
- Merges all review pages into one collection
- De-duplicates reviews by their Google resource name
- Filters out star-only reviews that have no written comment
- Sorts written reviews by most recent first
- Writes the result to `src/data/google-reviews.json`

Example output:

```text
Wrote 50 text reviews (52 total) to src/data/google-reviews.json
```

## File structure

```text
reviews/
├── README.md                          ← this file
├── reviews.json                       ← Google Takeout export (page 1)
├── reviews-ABHRLXUg….json             ← Google Takeout export (page 2)
└── reviews-ABHRLXV-….json             ← Google Takeout export (page 3)

scripts/
└── build-google-reviews.ts            ← normalization script

src/data/
└── google-reviews.json                ← generated output (gitignored)
```

## How this works in CI / Netlify

The generated file `src/data/google-reviews.json` is **gitignored** — it does
not exist in the repository. This is intentional: the raw Takeout files in
`reviews/` are the source of truth, and the normalized JSON is a build
artifact.

Netlify runs `pnpm run build`, which is configured in `package.json` as:

```json
"build": "pnpm run build-reviews && astro build"
```

This means every Netlify deploy automatically:

1. Runs `build-reviews` first, generating `src/data/google-reviews.json` from
   the committed raw files in `reviews/`
2. Then runs `astro build`, which reads the generated JSON and produces the
   static site

No extra configuration is needed — Netlify just runs the standard `build`
script and everything works.

## Updating reviews

1. Re-export from [Google Takeout](https://takeout.google.com/) (see steps
   above)
2. Replace the JSON files in this directory with the new exports
3. Commit the updated files
4. The next build (local or CI) will regenerate `google-reviews.json`
   automatically
