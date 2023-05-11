import * as React from "react"
import BlockImageText from "./BlockImageText";
import BlockSlideText from "./BlockSlideText";
import BlockImage from "./BlockImage";
import { RenderRichTextData, ContentfulRichTextGatsbyReference } from 'gatsby-source-contentful/rich-text'

export type BlockTextProps = BlockPros & {
  imageText: string,
  title: string,
  link?: string,
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>,
}

export interface BlockPros {
  internal: {
    type: string,
  }
}

export enum BlockType {
  BLOCK_IMAGE = 'ContentfulBlockImage',
  BLOCK_IMAGE_TEXT = 'ContentfulBlockImageTexte',
  BLOCK_SLIDE_TEXT = 'ContentfulBlockSlideTexte',
}

export interface BlockCMSProps {
  blockProject: Array<BlockPros>,
}

const getBlocksDefs: () => Record<string, React.FC<any & BlockType>> = () => {
  return {
    [BlockType.BLOCK_IMAGE]: BlockImage,
    [BlockType.BLOCK_IMAGE_TEXT]: BlockImageText,
    [BlockType.BLOCK_SLIDE_TEXT]: BlockSlideText,
  };
};

const BlockCMS: React.FC<BlockCMSProps> = (props) => {
  const { blockProject } = props;
  const defs = getBlocksDefs();
  return (
    <>
      {blockProject.map((block, idx) => {
        console.log(block);

        const Component = defs[block.internal.type];
        return (
          Component && (
            <div className="uam_stepItem" key={idx}>
              <Component {...block} />
            </div>
          )
        );
      })}
    </>
  );
}

export default BlockCMS
