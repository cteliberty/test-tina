import * as React from "react"
import classnames from 'classnames';
import { BLOCKS, Block, Inline, MARKS } from "@contentful/rich-text-types"
import { RenderRichTextData, ContentfulRichTextGatsbyReference, renderRichText } from 'gatsby-source-contentful/rich-text'
import { ThemeColor } from '../enum/Color';

export interface QuoteProps {
  author: string,
  color: ThemeColor,
  quote: RenderRichTextData<ContentfulRichTextGatsbyReference>,
}

const Quote: React.FC<QuoteProps> = (props) => {
  const {color, quote, author} = props;

  const renderRichTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong className={`text-${color}`}>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => children,
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => null,
    },
  }

  return (
    <div className={classnames('uam_quote', {color})}>
        <figure>
            <blockquote>
                <p>“{quote.raw && renderRichText(quote, renderRichTextOptions)}”</p>
            </blockquote>
            <figcaption>- {author} -</figcaption>
        </figure>
    </div>
  );
}

export default Quote
