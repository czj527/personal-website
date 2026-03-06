# 快速入门指南

## 5 分钟启动你的个人网站

### 第一步：配置环境

1. 复制环境变量文件：
```bash
cp .env.example .env.local
```

2. 编辑 `.env.local`，设置你的 GitHub 用户名：
```bash
NEXT_PUBLIC_GITHUB_USERNAME=your-username
```

### 第二步：本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 http://localhost:3000 查看网站。

### 第三步：自定义内容

#### 更新个人简介

网站会自动从 GitHub 获取你的信息，只需在 `.env.local` 中设置你的用户名即可。

#### 更新博客链接

编辑 `lib/data.ts` 文件：

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
  // 添加更多文章...
];
```

#### 更新联系方式

编辑 `lib/data.ts` 文件：

```typescript
export const contactInfo = {
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com/your-username',
  wechat: 'your-wechat-id',
};
```

### 第四步：部署到 GitHub Pages

#### 1. 推送代码到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

#### 2. 启用 GitHub Pages

1. 进入 GitHub 仓库的 Settings → Pages
2. Source 选择 GitHub Actions
3. 保存设置

#### 3. 等待部署完成

GitHub Actions 会自动构建并部署你的网站，通常需要 1-2 分钟。

#### 4. 访问你的网站

```
https://your-username.github.io/your-repo/
```

## 常用命令

```bash
# 开发
pnpm dev              # 启动开发服务器

# 构建
pnpm build           # 构建生产版本
pnpm start           # 预览生产构建

# 其他
pnpm lint            # 运行 ESLint
```

## 添加更多动画效果

项目已经集成了 Framer Motion，你可以轻松添加动画：

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

## 自定义主题

编辑 `app/globals.css`：

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

## 需要帮助？

- 查看完整文档：[README.md](README.md)
- 部署指南：[DEPLOYMENT.md](DEPLOYMENT.md)
- 提交 Issue：GitHub Issues

## 下一步

- [ ] 更新博客链接
- [ ] 添加你的项目
- [ ] 自定义主题颜色
- [ ] 添加自定义域名
- [ ] 添加 Google Analytics

祝你使用愉快！🎉
