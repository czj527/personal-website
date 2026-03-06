# 个人网站

一个现代化的个人网站，使用 Next.js、Tailwind CSS 和 Framer Motion 构建。支持从 GitHub 动态获取用户信息和项目数据。

## ✨ 功能特性

- 🎨 现代化 UI 设计，支持深色模式
- 🚀 流畅的动画和转场效果（Framer Motion）
- 📦 自动从 GitHub 获取用户信息和项目
- 📝 博客文章展示
- 📧 多种联系方式
- 📱 响应式设计，支持移动端
- 🚀 部署到 GitHub Pages

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: React Icons
- **API**: GitHub REST API

## 📦 安装

```bash
# 克隆仓库
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 安装依赖
pnpm install

# 复制环境变量文件
cp .env.example .env.local
```

## ⚙️ 配置

编辑 `.env.local` 文件，设置你的 GitHub 用户名：

```bash
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
```

## 🚀 本地开发

```bash
# 启动开发服务器
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 📚 自定义内容

### 更新个人简介

在 `.env.local` 中设置你的 GitHub 用户名，网站会自动从 GitHub 获取你的信息。

### 更新博客链接

编辑 `lib/data.ts` 文件中的 `blogLinks` 数组：

```typescript
export const blogLinks: BlogLink[] = [
  {
    id: '1',
    title: '你的文章标题',
    description: '文章描述',
    url: 'https://your-blog-url.com',
    date: '2024-01-15',
    tags: ['React', 'JavaScript'],
  },
];
```

### 更新联系方式

编辑 `lib/data.ts` 文件中的 `contactInfo` 对象：

```typescript
export const contactInfo = {
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com/your-username',
  wechat: 'your-wechat-id',
};
```

## 🚢 部署到 GitHub Pages

### 方法 1: 使用 GitHub Actions（推荐）

1. 将代码推送到 GitHub 仓库
2. 进入仓库的 Settings → Pages
3. Source 选择 GitHub Actions
4. 推送代码，GitHub Actions 会自动构建并部署

### 方法 2: 手动部署

```bash
# 构建项目
pnpm build

# 构建后的文件在 out 目录
```

将 `out` 目录的内容推送到 `gh-pages` 分支：

```bash
git checkout -b gh-pages
git add -f out
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## 📝 添加转场特效

项目已经集成了 Framer Motion，你可以轻松添加更多动画效果。以下是示例：

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  你的内容
</motion.div>
```

## 🎨 自定义主题

编辑 `app/globals.css` 文件来自定义主题颜色：

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Pull Request！
