import * as React from "react"
// import { GatsbyImage, getImage, ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'
// import TinaImage from "./TinaImage";
// import { StaticImage } from "gatsby-plugin-image"

export interface ProjectItemProps {
  image_home: string,
  name: string,
  slug: string,
  title_home: string,
  what: string,
  who: string,
  how: string,
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  const { image_home, slug, title_home, what, who, how } = props;
  // const gatsbyImage:IGatsbyImageData | undefined = getImage(image);
  // const gatsbyWho:IGatsbyImageData | undefined = getImage(who);

  return (
    <div className="uam_projectItem" data-scroll-section>
      <div className="uam_projectItem_inner">
        <div className="uam_wrapper">
          <div className="uam_projectItem_bg">
            <img src={image_home} alt={title_home} />
          </div>

          <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
            <a href={slug} className="uam_link" data-custom-link="true" data-link="Découvrir">
              {title_home}
            </a>
          </h2>

          <div className="uam_headerExcerpt">
            <ul>
              <li>
                <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                <p>
                  <img src={who} alt={title_home} />
                </p>
              </li>
              <li>
                <h3 className="uam_headerExcerpt_title">Quoi ?</h3>
                <p>{what}</p>
              </li>
              <li>
                <h3 className="uam_headerExcerpt_title">Comment ?</h3>
                <p>
                  {how}
                </p>
              </li>
            </ul>

            <a href="/scf.html" className="uam_link uam_projectItem_link uam_btn uam_btn-yellow">
              <span>Découvrir le projet</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem;