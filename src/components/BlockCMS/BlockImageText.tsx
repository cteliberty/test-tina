import * as React from "react"
import classnames from 'classnames';
import { BLOCKS, Block, Inline, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage, ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import { BlockTextProps } from './index';

export type BlockImageTextProps = BlockTextProps & {
  image: ImageDataLike,
}

const BlockImageText: React.FC<BlockImageTextProps> = (props) => {
  const { imageText, title, link, description, image } = props;
  const gatsbyImage: IGatsbyImageData | undefined = getImage(image);
  const renderRichTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => children,
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => null,
    },
  }

  return (
    <>
      <div className={classnames('uam_img', `uam_img-${imageText}`)}>
        {gatsbyImage && <GatsbyImage image={gatsbyImage} alt={title} />}
      </div>
      <div className="uam_stepItem_content">
        <h4 className="uam_stepItem_title"><strong>#x</strong> {title}</h4>
        <div className="uam_box">
          <div className="uam_box_inner">
            {description.raw && renderRichText(description, renderRichTextOptions)}
          </div>
        </div>
        {link && <a href={link} target="_blank" className="uam_stepItem_btn uam_btn uam_btn_default">
          <i className="uam_icon_eyes"></i> Voir le site web
        </a>}
      </div>
    </>
  );
}

export default BlockImageText
