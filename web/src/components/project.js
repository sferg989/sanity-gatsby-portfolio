import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import styles from './project.module.css'

import './project.scss'

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`
const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

function Project (props) {
  const {image} = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nicole-harrington-mn.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const {
    _rawBody,
    title,
    categories,
    mainImage,
    members,
    publishedAt,
    relatedProjects,
    herosub
  } = props
  const myObjStr = JSON.stringify(herosub[0])
  console.log(myObjStr)
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div>
          <ImageBackground
            Tag="section"
            fluid={mainImage.asset.localFile.childImageSharp.fluid}
            fadeIn="soft"
            alt={mainImage.alt}
          >
            <TextBox>
              <h1 className={styles.title}>{title}</h1>
            </TextBox>
          </ImageBackground>
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {herosub && herosub.length > 0 && (
              <ul>
                {herosub.map(herosubs => (
                  <>
                    <li>{herosubs.heroMsg}</li>
                    <li>{herosubs.heroSub}</li>
                  </>
                ))}
              </ul>
            )}

            <h1 className="title">{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do YYYY")}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title="Project members" />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default Project
