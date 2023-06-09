import * as React from "react"
import { GatsbyImage, getImage, ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'

export interface ProjectItemProps {
  date: string,
  image: ImageDataLike,
  name: string,
  slug: string,
  title_home: string,
  what: string,
  who: ImageDataLike,
  how: string,
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  const { date, image, name, slug, title_home, what, who, how } = props;
  const gatsbyImage:IGatsbyImageData | undefined = getImage(image);
  const gatsbyWho:IGatsbyImageData | undefined = getImage(who);

  return (
    <div className="uam_projectItem" data-scroll-section>
      <h2>{title_home}</h2>
      <p>Posted: {date}</p>
      <div className="uam_projectItem_inner">
        <div className="uam_wrapper">
          <div className="uam_projectItem_bg">
            {gatsbyImage && <GatsbyImage image={gatsbyImage} alt={title_home} />}
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
                  {gatsbyWho && <GatsbyImage image={gatsbyWho} alt={name} />}
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