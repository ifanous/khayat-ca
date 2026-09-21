import { collection, config, fields } from "@keystatic/core";

// Local storage in `astro dev` unless KEYSTATIC_STORAGE=github is set (used
// once to run Keystatic's GitHub App onboarding, which only works in dev).
const useLocal =
  process.env.NODE_ENV === "development" &&
  process.env.KEYSTATIC_STORAGE !== "github";

export default config({
  storage: useLocal
    ? { kind: "local" }
    : { kind: "github", repo: "ifanous/khayat-ca" },
  ui: { brand: { name: "Khayat.ca" } },
  collections: {
    blog: collection({
      label: "Blog posts",
      slugField: "title",
      path: "src/content/blog/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
        }),
        description: fields.text({
          label: "Description",
          description:
            "One or two sentences. Shown in search results and on the blog index.",
          multiline: true,
          validation: { isRequired: true, length: { max: 160 } },
        }),
        pubDate: fields.date({
          label: "Publish date",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        image: fields.image({
          label: "Cover image",
          directory: "src/assets/blog",
          publicPath: "/src/assets/blog/",
        }),
        imageAlt: fields.text({ label: "Cover image description (alt text)" }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({ label: "Content", extension: "md" }),
      },
    }),
  },
});
