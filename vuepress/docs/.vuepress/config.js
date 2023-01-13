import { defaultTheme } from '@vuepress/theme-default'

export default {
  base: '/',
  lang: 'en-US',
  title: 'jql2sql',
  dest: 'pages',
  description: 'Transpiling JQL to SQL for comprehensive searching',
  theme: defaultTheme({
    // set config here
    sidebar: [
      {
        text: 'Demo',
        link: '/',
      },
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
        text: 'Contribute jql2sql',
        link: '/contribute-jql2sql/',
      },
      {
        text: 'Contribute website',
        link: '/contribute-website/',
      }
    ]    
  }),
}