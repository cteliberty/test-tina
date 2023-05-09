import * as React from "react"
import { HeadFC, graphql } from "gatsby"
import { BLOCKS, Block, Inline, } from "@contentful/rich-text-types"
import { RenderRichTextData, renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../../components/Layout';
import ProjectItem, {ProjectItemProps} from '../../components/ProjectItem';

interface ProjectPageProps {
  data: {
    contentfulProjet: {
      project: ProjectItemProps
    }
  }
}

const ProjectPage: React.FC<ProjectPageProps> = ({ data }) => {
  const {project} = data.contentfulProjet;
  return (
    <Layout isHome={true}>
      <ProjectItem {...project} />
    </Layout>
  )
}

export const query = graphql`
  query homeEntryQuery($id: String) {
    contentfulProjet(id: {eq: $id}){
      id
      title
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      slug
      who {
        gatsbyImageData(layout: CONSTRAINED)
      }
      whoText,
      what
      how
    }
  }
`;

export default ProjectPage

export const Head: HeadFC = () => <title>Home Page</title>