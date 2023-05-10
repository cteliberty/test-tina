import {ImageDataLike} from 'gatsby-plugin-image'

export default interface ProjectProps {
  id: string,
  date: string,
  image: ImageDataLike,
  slug: string,
  title: string,
  who?: ImageDataLike,
  whoText?: string,
  what: string,
  how: string,
}