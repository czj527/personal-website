import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 配置输出为静态站点
  output: 'export',

  // 配置导出目录
  distDir: 'out',

  // 配置图片域名（GitHub Pages 上的静态资源）
  images: {
    unoptimized: true,
  },

  // 配置基础路径（如果你的 GitHub 仓库名不是 username.github.io）
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
};

export default nextConfig;
