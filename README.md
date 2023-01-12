# Introduction

This repo is to develop website for jql2sql package.

# Directory structure

## /: Root directory of this repo
please place both files and dirs to build website such as Vue3, vuepress2, and so on

## /docs: URL's root directory when user visit https://jql2sql.github.io
We redirect this to https://jql2sql.github.io/demo, to let visitor experience demo.

## /docs/demo: https://jql2sql.github.io/demo
The demo page to introduce key feature of jql2sql package.

# Development

Most of website is developed by both [vuepress2](https://v2.vuepress.vuejs.org) and markdown.

# vuepress2

```
vuepress dev docs --config my-config.js
```
