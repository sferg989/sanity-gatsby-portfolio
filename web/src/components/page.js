import React from 'react'
import Project from '../components/project'
import Container from '../components/container'

function Page (props) {
  const {
    relatedProjects
  } = props
  const myObjStr = JSON.stringify(relatedProjects)
  console.log(myObjStr)
  return (
    <Container>
      {relatedProjects && relatedProjects.length > 0 && (
        <ul>
          {relatedProjects.map(relatedProject => (
            <>
              <Project {...relatedProject} />
            </>
          ))}
        </ul>
      )}
    </Container>
  )
}

export default Page
