import * as React from "react"
import { HeadFC, graphql } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'
import { BLOCKS, Block, Inline, } from "@contentful/rich-text-types"
import { RenderRichTextData, ContentfulRichTextGatsbyReference, renderRichText } from 'gatsby-source-contentful/rich-text'
import BlockCMS, { BlockPros } from "../../components/BlockCMS"

import Layout from '../../components/Layout';
import { ProjectItemProps } from '../../components/ProjectItem';
import Chat, { ChatProps } from '../../components/Chat';
import Quote, { QuoteProps } from "../../components/Quote"
import classNames from "classnames"

export interface ProjectProps extends ProjectItemProps {
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>,
  chat: ChatProps,
  quote: QuoteProps,
  blockProject: Array<BlockPros>,
}

interface ProjectPageProps {
  data: {
    contentfulProjet: ProjectProps
  }
}

const ProjectPage: React.FC<ProjectPageProps> = ({ data }) => {
  const { chat, image, title, who, whoText, what, how, description, quote, blockProject } = data.contentfulProjet;
  const gatsbyImage: IGatsbyImageData | undefined = getImage(image);
  const gatsbyWho: IGatsbyImageData | undefined = who ? getImage(who) : undefined;

  const renderRichTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => <h1>{children}</h1>,
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => null,
    },
  }

  return (
    <Layout isProject={true} layoutClass={`uam_project-${'mbnr'}`}>
      <header className="uam_headerPage uam_headerProject uam_projectItem">
        <div className="uam_projectItem_inner uam_wrapper">
          <h1 className="uam_headerPage_title">{title}</h1>

          <div className="uam_headerExcerpt">
            <div className="uam_excerpt uam_excerpt-header uam_box uam_box-corner">
              <h2 className="uam_excerpt_title uam_cartridge">
                <span className="uam_cartridge_title">En bref</span>
              </h2>
              <div className="uam_excerpt_inner uam_box_inner">
                {description.raw && renderRichText(description, renderRichTextOptions)}
              </div>
            </div>

            <div
              className="uam_headerProject_bg uam_projectItem_bg"
              style={{
                backgroundImage: `url('${gatsbyImage?.images.fallback?.src}')`
              }}
            />

            <ul>
              <li>
                <h2 className="uam_headerExcerpt_title">Qui ?</h2>
                <p>
                  {
                    gatsbyWho ? <GatsbyImage image={gatsbyWho} alt={title} as="span" /> :
                      whoText
                  }
                </p>
              </li>
              <li>
                <h2 className="uam_headerExcerpt_title">Quoi ?</h2>
                <p>{what}</p>
              </li>
              <li>
                <h2 className="uam_headerExcerpt_title">Comment ?</h2>
                <p>{how}</p>
              </li>
            </ul>

            <div className="uam_chat">
              <Chat {...chat} />
            </div>
          </div>
        </div>
      </header>
      <div className="uam_viewport_content">
        {Quote && <Quote {...quote} />}

        <div className={classNames("uam_block", {'uam_block-bg': true})}>
          <h3 className="uam_block_title">[ Au boulot <i className="uam_icon_hand"></i> ]</h3>

          <div className="uam_step uam_wrapper">
            <BlockCMS blockProject={blockProject} />
          </div>
        </div>
      </div>
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
      who {
        gatsbyImageData(layout: CONSTRAINED)
      }
      whoText,
      what
      how
      description {
        raw
      }
      chat {
        chat {
          teamMember {
            name
            job,
            jobShort,
            photo {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          message {
            message
          }
        }
      }
      quote {
        author
        color
        quote {
          raw
        }
      }
      blockProject {
        ... on ContentfulBlockImageTexte {
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
          imageText,
          title,
          link,
          description {
            raw
          }
          internal {
            type
          }
        }
        ... on ContentfulBlockSlideTexte {
          slideList {
            gatsbyImageData(layout: CONSTRAINED)
          }
          imageText,
          title,
          link,
          description {
            raw
          }
          internal {
            type
          }
        }
        ... on ContentfulBlockImage {
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
          internal {
            type
          }
        }
      }
    }
  }
`;

export default ProjectPage

export const Head: HeadFC = () => <title>Project Page</title>
