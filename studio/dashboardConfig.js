export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d55d5820e0a662f12f1e2e8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nki8kirf',
                  apiId: '634e1f65-122e-4fcf-8314-8946477f6cfe'
                },
                {
                  buildHookId: '5d55d58214b9d9017b53e8d5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hty3q8ih',
                  apiId: '853104d8-6232-4da8-969f-8b4d6997f136'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonniebigodes/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hty3q8ih.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
