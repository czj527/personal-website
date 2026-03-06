import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import BlogLinks from '@/components/BlogLink';
import Contact from '@/components/Contact';
import { getUserProfile, getUserRepositories } from '@/lib/github';
import { blogLinks } from '@/lib/data';
import { UserProfile, Project } from '@/types';

export default async function Home() {
  // 从环境变量获取 GitHub 用户名，默认为 'torvalds'
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'torvalds';

  // 获取用户信息和仓库
  let profile: UserProfile;
  let projects: Project[];

  try {
    profile = await getUserProfile(githubUsername);
    projects = await getUserRepositories(githubUsername);
  } catch (error) {
    console.error('Failed to fetch GitHub data:', error);
    // 使用默认数据作为回退
    profile = {
      name: 'Your Name',
      bio: 'Full Stack Developer | Open Source Enthusiast',
      avatar: 'https://github.com/github.png',
      location: 'Your City',
      company: 'Your Company',
      blog: 'https://yourblog.com',
      github: `https://github.com/${githubUsername}`,
      email: 'your-email@example.com',
    };
    projects = [];
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Hero profile={profile} />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            我的项目
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            我在 GitHub 上的开源项目
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {projects.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400">
              暂无项目展示
            </p>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            最新文章
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            我的技术博客和文章
          </p>

          <BlogLinks blogs={blogLinks} />
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}
