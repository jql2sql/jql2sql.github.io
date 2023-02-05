import { defaultTheme } from '@vuepress/theme-default'

export default {
  base: '/pages/',
  lang: 'en-US',
  title: 'jql2sql',
  dest: 'pages',
  description: 'Transpiling JQL to SQL for comprehensive, flexible searching',
  theme: defaultTheme({
    // set config here
    sidebar: [
      {
        text: 'Demo',
        link: 'https://jql2sql.github.io/',
      },
      {
        text: 'Features',
        link: '/features/',
      },
      {
        text: 'Getting started',
        link: '/getting-started/',
      },
      {
        text: 'Contribute website',
        link: '/contribute-website/',
      }
    ]    
  }),
}