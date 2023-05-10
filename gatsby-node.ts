import { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  actions.createTypes(`
    type ContentfulProjet {
      whoText: String
    }

    type ContentfulBlockSlideTexte {
      link: String
    }

    type ContentfulBlockImageTexte {
      link: String
    }
  `)
}