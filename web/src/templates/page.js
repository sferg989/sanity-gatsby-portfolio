import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Page from '../components/page'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
         query samplePageTemplateQuery($id: String!) {
           samplePage: sanitySamplePage(id: { eq: $id }) {
             id
             publishedAt
             relatedProjects {
               id
               publishedAt
               herosub {
                 heroMsg
                 heroSub
               }
               categories {
                 _id
                 title
               }
               relatedProjects {
                 title
                 _id
                 slug {
                   current
                 }
               }
               mainImage {
                 crop {
                   _key
                   _type
                   top
                   bottom
                   left
                   right
                 }
                 hotspot {
                   _key
                   _type
                   x
                   y
                   height
                   width
                 }
                 asset {
                   _id
                   localFile {
                     childImageSharp {
                       fluid {
                         src
                       }
                     }
                   }
                 }
                 alt
               }
               title
               slug {
                 current
               }
               _rawBody
               members {
                 _key
                 person {
                   image {
                     crop {
                       _key
                       _type
                       top
                       bottom
                       left
                       right
                     }
                     hotspot {
                       _key
                       _type
                       x
                       y
                       height
                       width
                     }
                     asset {
                       _id
                     }
                   }
                   name
                 }
                 roles
               }
             }
           }
         }
       `

const PageTemplate = props => {
  const {data, errors} = props
  const page = data && data.samplePage
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {page && <SEO title={page.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {page && <Page {...page} />}
    </Layout>
  )
}

export default PageTemplate;
