export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60255a16eb98cb366248b6ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3gzrk2mw',
                  apiId: 'b41a6c9f-ab19-4e96-ae55-7b5a5b40a613'
                },
                {
                  buildHookId: '60255a16d383183c355e2e7b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8r4m8uy9',
                  apiId: 'c4f72732-e529-4695-8062-196b3b2a3dff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cejimenez0123/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8r4m8uy9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
