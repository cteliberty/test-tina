import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  client: { skip: true },
  branch,
  clientId: "cdb04e13-22c6-4172-804a-fbc90da5cb2a", // Get this from tina.io
  token: "43e600c607d37e450edf88086c42cc0c4ba94075", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "project",
        label: "Projet",
        path: "data/project",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nom",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "title_home",
            label: "Titre sur la home",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug du projet",
            required: true,
          },
          {
            type: "image",
            name: "image_home",
            label: "Image",
            required: true,
            ui: {
              // format(value) {
              //   //add leading slash to value if it doesnt exist
              //   return value.startsWith("/") ? value : `/${value}`;
              // },
              // parse(value) {
              //   // return value.startsWith("/") ?  value.slice(1) : value;
              //   return `@images/${value.startsWith("/images") ?  value.slice(8) : value}`;
              //   // return `http://localhost:8000/${value.startsWith("/") ?  value.slice(1) : value}`;
              // },
            }
          },
          {
            type: "image",
            name: "who",
            label: "Qui",
            required: true,
          },
          {
            type: "string",
            name: "what",
            label: "Quoi",
            required: true,
          },
          {
            type: "string",
            name: "how",
            label: "Comment",
            required: true,
          },
        ],
      },
    ],
  },
});
