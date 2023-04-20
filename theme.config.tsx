import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo'

const config: DocsThemeConfig = {
  logo: <Logo style={{width: '3rem', height: '3rem'}}/>,
  project: {
    link: 'https://github.com/adaocommunity',
  },
  chat: {
    link: 'https://discord.com/invite/BGuhdBXQFU',
  },
  docsRepositoryBase: 'https://github.com/adaocommunity/docs',
  footer: {
    text: "ADAO Community's documentation",
  },
  search: {
    loading: "Loading...",
  },
  sidebar: {
    defaultMenuCollapseLevel: 0
  },
  head: <>
    <link rel="icon" href="/favicon.ico" />
    <title>ADAO Docs</title>
    <meta name="title" content="ADAO Docs" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#fff" />
    <meta name="description" content="ADAO Community's documentation" />
    <meta name="og:title" content="ADAO Community's documentation" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@adaocommunity" />
    <meta name="twitter:creator" content="@adaocommunity" />
    <meta name="twitter:title" content="ADAO Community's documentation" />
    <meta name="twitter:description" content="ADAO Community's documentation page" />
    <meta name="twitter:image" content="https://www.theadao.io/wp-content/uploads/2022/02/ADAO-Full-Logo-Blue-Gradient.webp" />
    <meta name="twitter:image:alt" content="ADAO Community's documentation" />
  </>
}

export default config
