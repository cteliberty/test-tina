import * as React from "react"
import { HeadFC, graphql, PageProps } from "gatsby"

import Layout from '../components/Layout';
import ProjectItem, {ProjectItemProps} from '../components/ProjectItem';
import '../scss/main.scss';

type projectNode = {
  id: string,
  excerpt: string,
  frontmatter: ProjectItemProps,
}
interface IndexPageProps {
  data: {
    allMdx: {
      nodes: [projectNode]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const header = (
    <header id="uam-header" className="uam_header" data-scroll data-scroll-repeat data-scroll-call="toggleBackToTop">
      <div className="uam_wrapper">
        <a className="uam_logo" href="/index.html">
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
    <Layout header={header}>
      <div className="uam_intro" data-scroll-section>
        <a className="uam_logo" href="index.html">
          <i className="uam_icon_logo" data-scroll data-scroll-speed="1"></i>
        </a>
        <div className="uam_intro_footer uam_wrapper">
          <address>
            <h1>un autre monde</h1>
            <p>108 avenue du lac Léman</p>
            <p>Savoie Technolac - Bat. Andromède</p>
            <p>73372 Le Bourget-du-Lac</p>
          </address>
          <a className="uam_link uam_link_arrow" href="#uam-project" data-scroll-to data-no-swup>
            scroll <i className="uam_icon_arrow-long"></i>
          </a>
        </div>
      </div>
      {data.allMdx.nodes.map((node:projectNode) => (
        <React.Fragment key={node.id}>
          <ProjectItem {...node.frontmatter} /> 
        </React.Fragment>
      ))
      }
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    allMdx {
      nodes {
        frontmatter {
          name,
          title_home,
          slug,
          // image {
          //   childImageSharp {
          //     gatsbyImageData(layout: CONSTRAINED)
          //   }
          // }
          what,
          // who {
          //   childImageSharp {
          //     gatsbyImageData(layout: CONSTRAINED)
          //   }
          // }
          how,
        }
        id
        excerpt
      }
    }
  }
`;

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
