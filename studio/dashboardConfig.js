export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e345230019e4fd1768700d5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yodhg54o',
                  apiId: '1e691804-ea55-4699-ae13-f27e6fd2e876'
                },
                {
                  buildHookId: '5e34523079dfa87b51b05801',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-14qf34ji',
                  apiId: '8d6e4075-0121-49bb-a21a-dcc1bf034552'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sferg989/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-14qf34ji.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
