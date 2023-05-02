import * as React from "react"
import { GatsbyImage, getImage, ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'

export interface ProjectItemProps {
  id: string,
  date: string,
  image: ImageDataLike,
  slug: string,
  title: string,
  who?: ImageDataLike,
  who_text?: string,
  what: string,
  how: string,
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  const { image, slug, title, who, who_text, what, how } = props;
  const gatsbyImage:IGatsbyImageData | undefined = getImage(image);
  const gatsbyWho:IGatsbyImageData | undefined = who ? getImage(who) : undefined;

  return (
    <div className="uam_projectItem" data-scroll-section>
      <div className="uam_projectItem_inner">
        <div className="uam_wrapper">
          <div className="uam_projectItem_bg">
             {gatsbyImage && <GatsbyImage image={gatsbyImage} alt={title} />}
          </div>

          <h2 className="uam_headerPage_title" data-scroll data-scroll-speed="1">
            <a href={slug} className="uam_link" data-custom-link="true" data-link="Découvrir">
              {title}
            </a>
          </h2>

          <div className="uam_headerExcerpt">
            <ul>
              <li>
                <h3 className="uam_headerExcerpt_title">Qui ?</h3>
                <p>
                  {
                    gatsbyWho ? <GatsbyImage image={gatsbyWho} alt={title} as="span" /> :
                    who_text
                  }
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