'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { FaStar, FaCodeBranch } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {project.stars}
          </span>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {project.description}
      </p>

      {project.language && (
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
            {project.language}
          </span>
        </div>
      )}

      {project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.slice(0, 3).map((topic, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
        >
          查看代码 →
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
          >
            查看演示
          </a>
        )}
      </div>
    </motion.div>
  );
}
