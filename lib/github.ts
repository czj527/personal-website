import { UserProfile, Project } from '@/types';

const GITHUB_API_BASE = 'https://api.github.com';

/**
 * 获取 GitHub 用户信息
 */
export async function getUserProfile(username: string): Promise<UserProfile> {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const data = await response.json();

  return {
    name: data.name || data.login,
    bio: data.bio || '',
    avatar: data.avatar_url,
    location: data.location || undefined,
    company: data.company || undefined,
    blog: data.blog || undefined,
    github: data.html_url,
    email: data.email || `https://github.com/${data.login}`,
  };
}

/**
 * 获取用户的公开仓库（排除 fork）
 */
export async function getUserRepositories(username: string): Promise<Project[]> {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const data = await response.json();

  // 过滤掉 fork 的仓库，只显示自己的项目
  return data
    .filter((repo: any) => !repo.fork)
    .map((repo: any) => ({
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description || 'No description available',
      homepage: repo.homepage || undefined,
      language: repo.language || undefined,
      stars: repo.stargazers_count,
      url: repo.html_url,
      topics: repo.topics || [],
      created_at: repo.created_at,
      updated_at: repo.updated_at,
    }));
}
