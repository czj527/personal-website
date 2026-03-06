'use client';

import { motion } from 'framer-motion';
import { UserProfile } from '@/types';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface HeroProps {
  profile: UserProfile;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-white dark:border-gray-800"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto"
        >
          {profile.bio}
        </motion.p>

        {profile.location && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 dark:text-gray-500 mb-8"
          >
            📍 {profile.location}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-6 mb-8"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href={profile.email}
            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            查看我的项目
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
