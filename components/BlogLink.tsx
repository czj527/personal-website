'use client';

import { motion } from 'framer-motion';
import { BlogLink as BlogLinkType } from '@/types';
import { FaArrowRight } from 'react-icons/fa';

interface BlogLinksProps {
  blogs: BlogLinkType[];
}

export default function BlogLinks({ blogs }: BlogLinksProps) {
  return (
    <div className="grid gap-6">
      {blogs.map((blog, index) => (
        <motion.a
          key={blog.id}
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.01, x: 5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {blog.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {blog.date}
                </span>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex gap-2">
                    {blog.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <FaArrowRight className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-2" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
