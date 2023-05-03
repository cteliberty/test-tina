import * as React from "react"
import { HeadFC, graphql } from "gatsby"
import { BLOCKS, Block, Inline, } from "@contentful/rich-text-types"
import { RenderRichTextData, renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/Layout';
import ProjectItem, {ProjectItemProps} from '../components/ProjectItem';

interface IndexPageProps {
  data: {
    contentfulHome: {
      adress: RenderRichTextData,
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

  const header = (
    <header id="uam-header" className="uam_header" data-scroll data-scroll-repeat data-scroll-call="toggleBackToTop">
      <div className="uam_wrapper">
        <a className="uam_logo" href="/">
          <i className="uam_icon_logo"></i>
        </a>

        <div className="uam_menu">
          <a href="#" className="uam_link uam_menu_burger">
            <i className="uam_icon_burger"></i>
          </a>
          <div className="uam_submenu">
            <ul className="uam_wrapper">
              <li className="uam_submenuItem">
                <a className="uam_submenuItem_link" href="/index.html">Tous nos projets</a>
              </li>
              <li className="uam_submenuItem">
                <a className="uam_submenuItem_link" href="/about.html">L'agence <small>(sans risques)</small></a>
              </li>
              <li className="uam_submenuItem">
                <a className="uam_submenuItem_link" href="/join.html">On recrute</a>
              </li>
              <li className="uam_submenuItem">
                <a className="uam_submenuItem_link" href="/contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <Layout header={header} isHome={true}>
      <div className="uam_intro" data-scroll-section>
        <a className="uam_logo" href="index.html">
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
    contentfulHome(id: {eq: "dca7cb52-0a79-5d96-9272-be80f4a12844"}) {
      contentful_id
      adress {
        raw
      }
      project {
        id
        title
        image {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        slug
        who {
          gatsbyImageData(layout: CONSTRAINED)
        }
        who_text,
        what
        how
      }
    }
  }
`;

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
