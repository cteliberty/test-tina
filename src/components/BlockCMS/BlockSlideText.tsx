import * as React from "react"
import classnames from 'classnames';
import { BLOCKS, Block, Inline, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage, ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import { BlockTextProps } from './index';

export type BlockSlideTextProps = BlockTextProps & {
  slideList: Array<ImageDataLike>,
}

const BlockSlideText: React.FC<BlockSlideTextProps> = (props) => {
  const { imageText, title, link, description, slideList } = props;
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
      <Swiper
        className={classnames('uam_img', 'uam_img-slider', `uam_img-${imageText}`)}
        modules={[EffectCoverflow]}
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        mousewheel={true}
        initialSlide={2}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          depth: 100,
          stretch: 250,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          1023: {
            slidesPerView: 3,
            coverflowEffect: {
              stretch: 150,
            },
          },
          499: {
            slidesPerView: 3,
            coverflowEffect: {
              stretch: 100,
            },
          },
        }}
      >
        {slideList.map((image, id) => {
          const gatsbyImage: IGatsbyImageData | undefined = getImage(image);
          return (
            <SwiperSlide key={id}>
              {gatsbyImage && <GatsbyImage image={gatsbyImage} alt={title} />}
            </SwiperSlide>
          )
        })}
      </Swiper>

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

export default BlockSlideText
