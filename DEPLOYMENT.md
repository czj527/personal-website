# GitHub Pages 部署指南

本指南将帮助你将个人网站部署到 GitHub Pages。

## 前提条件

1. 一个 GitHub 账号
2. 已安装 Git
3. 已创建的 GitHub 仓库

## 方法 1: 使用 GitHub Actions（推荐）

### 步骤 1: 推送代码到 GitHub

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Personal website"

# 添加远程仓库
git remote add origin https://github.com/your-username/your-repo.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 步骤 2: 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 Settings 标签
3. 在左侧菜单中找到 Pages
4. 在 Build and deployment 下，找到 Source
5. 选择 GitHub Actions

### 步骤 3: 验证部署

- 推送代码后，GitHub Actions 会自动运行
- 等待构建完成（通常 1-2 分钟）
- 访问 `https://your-username.github.io/your-repo/`

## 方法 2: 手动部署

### 步骤 1: 构建项目

```bash
pnpm build
```

这会在 `out` 目录生成静态文件。

### 步骤 2: 部署到 gh-pages 分支

```bash
# 安装 gh-pages 工具（可选）
pnpm add -D gh-pages

# 使用 npm script 部署
```

或者在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "export": "next build",
    "deploy": "next build && gh-pages -d out -t true"
  }
}
```

然后运行：

```bash
pnpm deploy
```

### 步骤 3: 启用 GitHub Pages

1. 进入仓库的 Settings → Pages
2. Source 选择 Deploy from a branch
3. Branch 选择 gh-pages，文件夹选择 /(root)
4. 点击 Save

## 配置自定义域名

### 步骤 1: 购买域名

从域名注册商（如 Namecheap、GoDaddy 等）购买域名。

### 步骤 2: 添加 CNAME 文件

在 `public` 目录下创建 `CNAME` 文件：

```
your-domain.com
```

### 步骤 3: 配置 DNS

在你的域名注册商处添加 DNS 记录：

- 类型: CNAME
- 名称: @ (或 www)
- 值: your-username.github.io

### 步骤 4: 在 GitHub 设置域名

1. 进入仓库的 Settings → Pages
2. 在 Custom domain 中输入你的域名
3. 点击 Save

## 常见问题

### 1. 部署后页面空白

检查 `next.config.ts` 中的 `basePath` 设置：

```typescript
const nextConfig = {
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name',
};
```

### 2. GitHub API 限流

如果你遇到 GitHub API 限流，可以在 GitHub 创建 Personal Access Token：

1. 访问 https://github.com/settings/tokens
2. 点击 Generate new token (classic)
3. 选择需要的权限
4. 添加到 `.env.local`：

```bash
GITHUB_TOKEN=your_token_here
```

### 3. 图片不显示

GitHub Pages 不支持 Next.js 的 Image Optimization，在 `next.config.ts` 中已配置：

```typescript
images: {
  unoptimized: true,
}
```

## 自动化更新

每次你推送代码到 main 分支时，GitHub Actions 会自动构建并部署你的网站。

如果你想在本地预览生产构建：

```bash
pnpm build
pnpm start
```

## 性能优化

- 使用 GitHub Pages 的 CDN
- 图片使用 WebP 格式
- 压缩静态资源
- 启用 Gzip 压缩（GitHub Pages 自动处理）

## 监控和统计

你可以集成以下工具来监控网站：

- Google Analytics
- Vercel Analytics（如果部署到 Vercel）
- Cloudflare Analytics

## 更新日志

建议在 README.md 中维护一个更新日志，记录每次更新和改进。

## 需要帮助？

- 查看 [GitHub Pages 文档](https://docs.github.com/en/pages)
- 查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)
- 提交 Issue 到 GitHub 仓库
