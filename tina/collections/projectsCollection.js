export default {
  label: "Project page",
  name: "project",
  path: "content/project",
  fields: [
    {
      type: 'image',
      label: 'Main image',
      name: 'mainImage',
    },
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Client name",
      name: "client",
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      isBody: true,
      ui: {
        component: "textarea",
      },
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/projects/${document._sys.filename}`;
    },
  },
}
