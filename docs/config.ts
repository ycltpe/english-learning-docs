import { createRequire } from 'module'
import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineAdditionalConfig({
  lang: 'en-US',
  description: 'Comprehensive English learning guide.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/getting-started',
      activeMatch: '/guide/'
    },
    {
      text: 'Resources',
      link: '/reference/learning-resources',
      activeMatch: '/reference/'
    },
    {
      text: 'Tools',
      items: [
        { text: 'Vocabulary Practice', link: '/reference/vocabulary-practice' },
        { text: 'Grammar Practice', link: '/reference/grammar-practice' },
        { text: 'Listening Practice', link: '/reference/listening-practice' },
        { text: 'Speaking Practice', link: '/reference/speaking-practice' }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Starter',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Goal Setting', link: 'goal-setting' },
        { text: 'Study Plan', link: 'study-plan' },
        { text: 'Learning Methodology', link: 'learning-methodology' }
      ]
    },
    {
      text: 'Core Skills',
      collapsed: false,
      items: [
        { text: 'Listening', link: 'listening-skills' },
        { text: 'Speaking', link: 'speaking-skills' },
        { text: 'Reading', link: 'reading-skills' },
        { text: 'Writing', link: 'writing-skills' }
      ]
    },
    {
      text: 'Language Foundations',
      collapsed: false,
      items: [
        { text: 'Vocabulary', link: 'vocabulary-building' },
        { text: 'Grammar', link: 'grammar-mastery' },
        { text: 'Pronunciation', link: 'pronunciation-practice' },
        { text: 'Intonation & Stress', link: 'intonation-stress' }
      ]
    },
    {
      text: 'Advanced Learning',
      collapsed: false,
      items: [
        { text: 'Business English', link: 'business-english' },
        { text: 'Academic English', link: 'academic-english' },
        { text: 'Daily Communication', link: 'daily-communication' },
        { text: 'Cultural Understanding', link: 'cultural-understanding' }
      ]
    },
    {
      text: 'Exam Preparation',
      collapsed: false,
      items: [
        { text: 'TOEFL', link: 'toefl-preparation' },
        { text: 'IELTS', link: 'ielts-preparation' },
        { text: 'CET-4/6', link: 'cet-preparation' },
        { text: 'Graduate Exam', link: 'graduate-english' }
      ]
    },
    { text: 'Learning Resources', base: '/reference/', link: 'learning-resources' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Resources',
      items: [
        { text: 'Overview', link: 'learning-resources' },
        { text: 'Online Courses', link: 'online-courses' },
        { text: 'Apps', link: 'learning-apps' },
        { text: 'Books', link: 'book-recommendations' },
        { text: 'Websites', link: 'website-resources' }
      ]
    },
    {
      text: 'Practice Tools',
      items: [
        { text: 'Vocabulary', link: 'vocabulary-practice' },
        { text: 'Grammar', link: 'grammar-practice' },
        { text: 'Listening', link: 'listening-practice' },
        { text: 'Speaking', link: 'speaking-practice' },
        { text: 'Reading', link: 'reading-practice' },
        { text: 'Writing', link: 'writing-practice' }
      ]
    },
    {
      text: 'Study Tips',
      items: [
        { text: 'Memory Techniques', link: 'memory-techniques' },
        { text: 'Time Management', link: 'time-management' },
        { text: 'Study Environment', link: 'study-environment' },
        { text: 'Motivation', link: 'motivation-maintenance' }
      ]
    }
  ]
}
