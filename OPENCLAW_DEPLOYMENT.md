# OpenClaw 部署任务说明

## 项目基本信息

### 项目名称
personal-website - 现代化个人网站

### 项目位置
/workspace/projects/personal-website

### 项目类型
Next.js 14 静态网站（可部署到 GitHub Pages）

### 技术栈
- 框架: Next.js 14 (App Router)
- 语言: TypeScript
- 样式: Tailwind CSS
- 动画: Framer Motion
- 构建工具: pnpm

### 核心功能
1. **个人简介展示** - 从 GitHub API 动态获取用户信息
2. **项目展示** - 展示 GitHub 仓库（自动过滤 fork）
3. **博客链接** - 可配置的博客文章列表
4. **联系方式** - 多种联系方式卡片
5. **响应式设计** - 支持深色模式
6. **动画效果** - 流畅的转场和交互动画

### 项目结构
```
personal-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 全局布局
│   ├── page.tsx           # 主页（从 GitHub 获取数据）
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Hero.tsx          # 个人简介组件
│   ├── ProjectCard.tsx   # 项目卡片
│   ├── BlogLink.tsx      # 博客链接
│   └── Contact.tsx       # 联系方式
├── lib/                   # 工具函数
│   ├── github.ts         # GitHub API 集成
│   └── data.ts           # 配置数据
├── types/                # TypeScript 类型
├── public/               # 静态资源
└── .github/workflows/    # GitHub Actions 配置
```

## 部署目标

### 目标平台
GitHub Pages（免费静态托管）

### 部署方式
GitHub Actions 自动部署（每次推送到 main/master 分支自动触发）

### 预期 URL
https://your-username.github.io/your-repo-name/

## 部署流程

### 阶段 1: 环境检查和准备

#### 1.1 检查项目环境
```bash
cd /workspace/projects/personal-website

# 检查 Node.js 版本（需要 18+）
node --version

# 检查 pnpm 是否安装
pnpm --version

# 检查依赖是否完整
pnpm list
```

#### 1.2 验证配置文件
- 确认 `next.config.ts` 已配置 `output: 'export'`
- 确认 `.github/workflows/deploy.yml` 存在
- 确认 `.env.local` 配置了 `NEXT_PUBLIC_GITHUB_USERNAME`

### 阶段 2: 测试构建

#### 2.1 清理旧的构建文件
```bash
rm -rf .next out node_modules/.cache
```

#### 2.2 执行生产构建
```bash
pnpm build
```

**预期结果:**
- 在 `out/` 目录生成静态文件
- 构建成功，无错误
- 输出显示 `Route (app) /` 为静态页面

#### 2.3 验证构建产物
```bash
ls -la out/
# 应该看到 index.html 等静态文件
```

### 阶段 3: Git 仓库初始化和配置

#### 3.1 初始化 Git 仓库（如果需要）
```bash
cd /workspace/projects/personal-website

# 检查是否已是 Git 仓库
if [ ! -d .git ]; then
  git init
  git branch -M main
fi
```

#### 3.2 配置 `.gitignore`
确保 `.gitignore` 包含：
```
.next/
out/
node_modules/
.env.local
.DS_Store
```

#### 3.3 添加远程仓库（需要用户提供 GitHub 仓库 URL）
```bash
# 示例（需要用户替换为实际的仓库地址）
git remote add origin https://github.com/your-username/your-repo.git
```

### 阶段 4: 推送到 GitHub

#### 4.1 添加所有文件到暂存区
```bash
git add .
```

#### 4.2 提交更改
```bash
git commit -m "feat: 部署个人网站到 GitHub Pages"
```

#### 4.3 推送到 GitHub
```bash
git push -u origin main
```

**注意:**
- 如果仓库是空的，使用 `git push -u origin main --force`（首次推送）
- 如果遇到权限问题，需要配置 SSH 或 Personal Access Token

### 阶段 5: 配置 GitHub Pages

#### 5.1 在 GitHub 仓库中配置
1. 进入仓库的 Settings → Pages
2. 在 "Build and deployment" 部分：
   - Source: 选择 "GitHub Actions"
   - （不要选择 "Deploy from a branch"）
3. 保存设置

#### 5.2 验证 GitHub Actions 工作流
1. 进入仓库的 Actions 标签
2. 查看最近的 "Deploy to GitHub Pages" 工作流
3. 等待构建完成（通常 1-2 分钟）
4. 确认显示 ✅ 成功标记

#### 5.3 访问部署的网站
```
https://your-username.github.io/your-repo-name/
```

### 阶段 6: 验证和优化

#### 6.1 验证所有功能
- [ ] 首页加载正常
- [ ] 个人信息显示正确（从 GitHub 获取）
- [ ] 项目卡片显示正常
- [ ] 博客链接可点击
- [ ] 联系方式显示正常
- [ ] 深色模式切换正常
- [ ] 动画效果流畅
- [ ] 移动端响应式正常

#### 6.2 性能检查（可选）
- 使用 Lighthouse 检查性能
- 检查加载速度
- 优化图片和资源

#### 6.3 SEO 优化（可选）
- 确认 `metadata` 正确
- 添加 sitemap.xml
- 配置 robots.txt

## 常见问题和解决方案

### 问题 1: GitHub Actions 构建失败
**可能原因:**
- GitHub API 限流
- 依赖安装失败
- 构建配置错误

**解决方案:**
- 检查 Actions 日志
- 在 `.env.local` 添加 GitHub Token（可选）
- 验证 `next.config.ts` 配置

### 问题 2: 网站访问显示 404
**可能原因:**
- GitHub Pages 未正确配置
- 仓库名与配置不匹配
- 构建文件未正确生成

**解决方案:**
- 确认 Source 为 GitHub Actions
- 检查仓库名是否正确
- 查看 Actions 日志确认构建成功

### 问题 3: 样式或资源加载失败
**可能原因:**
- `basePath` 或 `assetPrefix` 配置错误
- 静态资源路径错误

**解决方案:**
- 在 `next.config.ts` 中正确配置 `basePath`
- 确保所有资源使用相对路径

### 问题 4: GitHub API 限流
**症状:**
- 网站显示默认数据而非真实数据
- 控制台显示 "rate limit exceeded"

**解决方案:**
1. 在 GitHub 创建 Personal Access Token
2. 在 `.env.local` 添加: `GITHUB_TOKEN=your_token`
3. 更新 `lib/github.ts` 使用 token（可选）

## 部署后续操作

### 1. 自定义域名（可选）
- 在 `public/` 添加 `CNAME` 文件
- 配置 DNS 记录
- 在 GitHub Pages 设置中添加自定义域名

### 2. 添加 Google Analytics（可选）
- 创建 GA4 账号
- 在 `app/layout.tsx` 添加 Google Analytics 脚本

### 3. 设置持续集成
- 每次 push 到 main 自动部署
- 可以设置其他分支自动部署到测试环境

### 4. 备份和恢复
- 定期备份代码到本地
- 使用 GitHub Releases 标记重要版本

## 项目维护清单

### 定期检查
- [ ] 每月检查依赖更新: `pnpm outdated`
- [ ] 每季度测试构建: `pnpm build`
- [ ] 每半年更新主要依赖

### 内容更新
- [ ] 更新博客链接（`lib/data.ts`）
- [ ] 更新联系方式（`lib/data.ts`）
- [ ] 更新个人简介（GitHub Profile）

### 性能优化
- [ ] 压缩图片
- [ ] 优化 CSS/JS 大小
- [ ] 使用 CDN 加速

## 关键配置文件

### next.config.ts
```typescript
output: 'export'           // 静态导出
distDir: 'out'             // 输出目录
images: { unoptimized: true }  // 禁用图片优化（GitHub Pages 限制）
```

### .github/workflows/deploy.yml
- 配置了自动构建和部署流程
- 每次推送到 main/master 自动触发

### .env.local
```
NEXT_PUBLIC_GITHUB_USERNAME=your-username
```

## 给 OpenClaw 的执行指令

请按以下顺序执行部署流程：

1. **检查环境** - 验证 Node.js、pnpm、依赖
2. **测试构建** - 执行 `pnpm build` 确保构建成功
3. **初始化 Git** - 初始化或检查 Git 仓库
4. **推送到 GitHub** - 提交并推送代码（需要用户提供仓库地址）
5. **配置 GitHub Pages** - 指导用户在 GitHub 配置 Pages
6. **验证部署** - 检查 GitHub Actions 和访问网站

**注意:**
- 需要用户提供 GitHub 仓库 URL
- 需要用户配置 GitHub Personal Access Token（可选，用于解决 API 限流）
- 整个过程大约需要 5-10 分钟

## 期望的最终结果

✅ 网站成功部署到 GitHub Pages
✅ 所有功能正常运行
✅ 支持自动持续集成
✅ 访问速度良好
✅ 响应式设计完美
