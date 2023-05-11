import * as React from "react"
import { HeadFC, graphql } from "gatsby"
import { BLOCKS, Block, Inline, } from "@contentful/rich-text-types"
import { RenderRichTextData, ContentfulRichTextGatsbyReference, renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/Layout';
import ProjectItem, {ProjectItemProps} from '../components/ProjectItem';

interface IndexPageProps {
  data: {
    contentfulHome: {
      adress: RenderRichTextData<ContentfulRichTextGatsbyReference>,
      project: ProjectItemProps[]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const {adress, project} = data.contentfulHome;

  const renderRichTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => <h1>{children}</h1>,
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => null,
    },
  }

  return (
    <Layout isHome={true}>
      <div className="uam_intro" data-scroll-section>
        <a className="uam_logo" href="/">
          <i className="uam_icon_logo" data-scroll data-scroll-speed="1"></i>
        </a>
        <div className="uam_intro_footer uam_wrapper">
          {adress.raw && 
            <address>
              {renderRichText(adress, renderRichTextOptions)}
            </address>
          }
          <a className="uam_link uam_link_arrow" href="#uam-project" data-scroll-to data-no-swup>
            scroll <i className="uam_icon_arrow-long"></i>
          </a>
        </div>
      </div>
      {project.map((node:ProjectItemProps) => (
        <React.Fragment key={node.id}>
          <ProjectItem {...node} />
        </React.Fragment>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query homeEntryQuery {
    contentfulHome(node_locale: {eq: "fr"}) {
      contentful_id
      adress {
        raw
      }
      project {
        id
        title
        imageHome {
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
  }
`;

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
