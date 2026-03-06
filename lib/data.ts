import { BlogLink } from '@/types';

/**
 * 博客链接数据
 */
export const blogLinks: BlogLink[] = [
  {
    id: '1',
    title: '深入理解 React Hooks',
    description: 'React Hooks 的使用技巧和最佳实践',
    url: '#',
    date: '2024-01-15',
    tags: ['React', 'JavaScript'],
  },
  {
    id: '2',
    title: 'TypeScript 高级类型指南',
    description: '掌握 TypeScript 的高级类型系统',
    url: '#',
    date: '2024-02-20',
    tags: ['TypeScript', 'Frontend'],
  },
  {
    id: '3',
    title: 'Next.js 14 新特性解析',
    description: '探索 Next.js 14 的新功能和改进',
    url: '#',
    date: '2024-03-10',
    tags: ['Next.js', 'React'],
  },
];

/**
 * 联系方式配置
 */
export const contactInfo = {
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com/your-username',
  wechat: 'your-wechat-id',
};

/**
 * 配置信息
 */
export const config = {
  // GitHub 用户名
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'your-username',

  // 网站标题
  siteTitle: '个人网站',

  // 网站描述
  siteDescription: '我的个人网站，展示项目、博客和联系方式',

  // 是否启用 GitHub API
  enableGithubAPI: true,
};
