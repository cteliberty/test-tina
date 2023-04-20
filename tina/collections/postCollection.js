export default {
  label: "Blog Posts",
  name: "blog",
  path: "content/blog",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
      ui: {
        component: "textarea",
      },
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/blogs/${document._sys.filename}`;
    },
  },
}
