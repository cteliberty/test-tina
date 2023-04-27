import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export type headerTitleSeoType = {
  title: string,
}

const HeaderTitleSeo = ({ title }: headerTitleSeoType) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}

export default HeaderTitleSeo