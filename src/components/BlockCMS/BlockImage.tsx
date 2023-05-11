import * as React from "react"
import { GatsbyImage, getImage, ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'

import { BlockPros } from './index';

export type BlockImageProps = BlockPros & {
  image: ImageDataLike,
}

const BlockImage: React.FC<BlockImageProps> = (props) => {
  const { image } = props;
  const gatsbyImage: IGatsbyImageData | undefined = getImage(image);

  return (
    <div className="uam_img uam_img-full">
      <figure className="uam_figure-shadow">
        {gatsbyImage && <GatsbyImage image={gatsbyImage} alt={'image'} />}
        {/* <figcaption>Une autre campagne digitale pour la promotion du forfait “Praloup Prems”, une offre basée sur le dynamic pricing.</figcaption> */}
      </figure>
    </div>
  );
}

export default BlockImage
