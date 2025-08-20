import { createRequire } from 'module'
import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineAdditionalConfig({
  lang: 'zh-Hans',
  description: '全面的英语学习指南，帮助你掌握英语听说读写技能',

  themeConfig: {
    nav: nav(),

    search: { options: searchOptions() },

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
      '/zh/reference/': { base: '/zh/reference/', items: sidebarReference() },
      '/zh/learning-tutorials/': { base: '/zh/learning-tutorials/', items: sidebarTutorials() },
      '/zh/english-content/': { base: '/zh/english-content/', items: sidebarEnglishContent() }
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页面'
    // },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024 英语学习指南`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '学习指南',
      link: '/zh/guide/getting-started',
      activeMatch: '/zh/guide/'
    },
    {
      text: '学习教程',
      link: '/zh/learning-tutorials/README',
      activeMatch: '/zh/learning-tutorials/'
    },
    {
      text: '学习资源',
      link: '/zh/reference/learning-resources',
      activeMatch: '/zh/reference/'
    },
    {
      text: '学习工具',
      items: [
        {
          text: '词汇练习',
          link: '/zh/reference/vocabulary-practice'
        },
        {
          text: '语法练习',
          link: '/zh/reference/grammar-practice'
        },
        {
          text: '听力练习',
          link: '/zh/reference/listening-practice'
        },
        {
          text: '口语练习',
          link: '/zh/reference/speaking-practice'
        }
      ]
    },
    {
      text: '英语学习内容',
      link: '/zh/english-content/README',
      activeMatch: '/zh/english-content/'
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '入门指南',
      collapsed: false,
      items: [
        { text: '开始学习英语', link: 'getting-started' },
        { text: '学习目标设定', link: 'goal-setting' },
        { text: '学习计划制定', link: 'study-plan' },
        { text: '学习方法论', link: 'learning-methodology' }
      ]
    },
    {
      text: '核心技能',
      collapsed: false,
      items: [
        { text: '听力训练', link: 'listening-skills' },
        { text: '口语练习', link: 'speaking-skills' },
        { text: '阅读技巧', link: 'reading-skills' },
        { text: '写作能力', link: 'writing-skills' }
      ]
    },
    {
      text: '语言基础',
      collapsed: false,
      items: [
        { text: '词汇积累', link: 'vocabulary-building' },
        { text: '语法掌握', link: 'grammar-mastery' },
        { text: '发音练习', link: 'pronunciation-practice' },
        { text: '语音语调', link: 'intonation-stress' }
      ]
    },
    {
      text: '进阶学习',
      collapsed: false,
      items: [
        { text: '商务英语', link: 'business-english' },
        { text: '学术英语', link: 'academic-english' },
        { text: '日常交际', link: 'daily-communication' },
        { text: '文化理解', link: 'cultural-understanding' }
      ]
    },
    {
      text: '考试准备',
      collapsed: false,
      items: [
        { text: '托福备考', link: 'toefl-preparation' },
        { text: '雅思备考', link: 'ielts-preparation' },
        { text: '四六级备考', link: 'cet-preparation' },
        { text: '考研英语', link: 'graduate-english' }
      ]
    },
    { text: '学习资源', base: '/zh/reference/', link: 'learning-resources' }
  ]
}

function sidebarTutorials(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '学习教程概览',
      collapsed: false,
      items: [
        { text: '教程体系介绍', link: 'README' }
      ]
    },
    {
      text: '基础技能教程',
      collapsed: false,
      items: [
        { text: '词汇积累系统', link: 'foundations/vocabulary-system' },
        { text: '语法掌握教程', link: 'foundations/grammar-mastery' },
        { text: '发音练习教程', link: 'foundations/pronunciation-practice' }
      ]
    },
    {
      text: '核心技能教程',
      collapsed: false,
      items: [
        { text: '写作能力教程', link: 'skills/writing-proficiency' },
        { text: '阅读策略教程', link: 'skills/reading-strategies' },
        { text: '口语流利教程', link: 'skills/speaking-fluency' },
        { text: '听力掌握教程', link: 'skills/listening-mastery' }
      ]
    },
    {
      text: '学习方法教程',
      collapsed: false,
      items: [
        { text: '学习策略教程', link: 'learning-methods/learning-strategies' },
        { text: '核心原则教程', link: 'learning-methods/core-principles' }
      ]
    },
    {
      text: '学习路径教程',
      collapsed: false,
      items: [
        { text: '学习路径概览', link: 'learning-path/overview' },
        { text: '学习路径规划', link: 'learning-path/path-planning' },
        { text: '课程计划模板', link: 'learning-path/course-plans' }
      ]
    },
    {
      text: '学习工具教程',
      collapsed: false,
      items: [
        { text: '学习工具使用', link: 'tools/essential-tools' }
      ]
    },
    {
      text: '练习材料',
      collapsed: false,
      items: [
        { text: '综合练习题库', link: 'practice-materials/comprehensive-exercises' }
      ]
    },
    {
      text: '评估系统',
      collapsed: false,
      items: [
        { text: '学习评估系统', link: 'assessment/learning-assessment' }
      ]
    }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '学习资源',
      items: [
        { text: '学习资源总览', link: 'learning-resources' },
        { text: '在线课程推荐', link: 'online-courses' },
        { text: '学习应用推荐', link: 'learning-apps' },
        { text: '书籍推荐', link: 'book-recommendations' },
        { text: '网站资源', link: 'website-resources' }
      ]
    },
    {
      text: '练习工具',
      items: [
        { text: '词汇练习', link: 'vocabulary-practice' },
        { text: '语法练习', link: 'grammar-practice' },
        { text: '听力练习', link: 'listening-practice' },
        { text: '口语练习', link: 'speaking-practice' },
        { text: '阅读练习', link: 'reading-practice' },
        { text: '写作练习', link: 'writing-practice' }
      ]
    },
    {
      text: '学习技巧',
      items: [
        { text: '记忆方法', link: 'memory-techniques' },
        { text: '时间管理', link: 'time-management' },
        { text: '学习环境', link: 'study-environment' },
        { text: '学习动力', link: 'motivation-maintenance' }
      ]
    }
  ]
}

function sidebarEnglishContent(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '内容概览',
      collapsed: false,
      items: [
        { text: '学习内容中心', link: 'README' }
      ]
    },
    {
      text: '词汇学习',
      collapsed: false,
      items: [
        { text: '基础词汇', link: 'vocabulary-basics' }
      ]
    },
    {
      text: '语法知识',
      collapsed: false,
      items: [
        { text: '语法知识点', link: 'grammar-points' }
      ]
    },
    {
      text: '实用对话',
      collapsed: false,
      items: [
        { text: '日常对话', link: 'daily-conversations' }
      ]
    },
    {
      text: '地道表达',
      collapsed: false,
      items: [
        { text: '习语与俚语', link: 'idioms-slang' }
      ]
    },
    {
      text: '专业英语',
      collapsed: false,
      items: [
        { text: '商务英语', link: 'business-english' }
      ]
    }
  ]
}

function searchOptions(): Partial<DefaultTheme.AlgoliaSearchOptions> {
  return {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          clearButtonTitle: '清除查询条件',
          clearButtonAriaLabel: '清除查询条件',
          closeButtonText: '关闭',
          closeButtonAriaLabel: '关闭',
          placeholderText: '搜索文档',
          placeholderTextAskAi: '向 AI 提问：',
          placeholderTextAskAiStreaming: '回答中...',
          searchInputLabel: '搜索',
          backToKeywordSearchButtonText: '返回关键字搜索',
          backToKeywordSearchButtonAriaLabel: '返回关键字搜索'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
          recentConversationsTitle: '最近的对话',
          removeRecentConversationButtonTitle: '从历史记录中删除对话'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        },
        resultsScreen: {
          askAiPlaceholder: '向 AI 提问： '
        },
        askAiScreen: {
          disclaimerText: '答案由 AI 生成，可能不准确，请自行验证。',
          relatedSourcesText: '相关来源',
          thinkingText: '思考中...',
          copyButtonText: '复制',
          copyButtonCopiedText: '已复制！',
          copyButtonTitle: '复制',
          likeButtonTitle: '赞',
          dislikeButtonTitle: '踩',
          thanksForFeedbackText: '感谢你的反馈！',
          preToolCallText: '搜索中...',
          duringToolCallText: '搜索 ',
          afterToolCallText: '已搜索',
          aggregatedToolCallText: '已搜索'
        },
        footer: {
          selectText: '选择',
          submitQuestionText: '提交问题',
          selectKeyAriaLabel: 'Enter 键',
          navigateText: '切换',
          navigateUpKeyAriaLabel: '向上箭头',
          navigateDownKeyAriaLabel: '向下箭头',
          closeText: '关闭',
          backToSearchText: '返回搜索',
          closeKeyAriaLabel: 'Esc 键',
          poweredByText: '搜索提供者'
        }
      }
    }
  }
}
