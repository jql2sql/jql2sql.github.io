import { defaultTheme } from '@vuepress/theme-default'

export default {
  base: '/jql2sql.github.io/',
  lang: 'en-US',
  title: 'jql2sql',
  description: 'Transpiling JQL to SQL for comprehensive searching',
  theme: defaultTheme({
    // set config here
    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction/',
      },
      {
        text: 'Getting started',
        link: '/getting-started/',
      },
      {
        text: 'Features',
        link: '/features/',
      },
      {
        text: 'Contribute',
        link: '/contribute/',
      }
    ]    
  }),
}