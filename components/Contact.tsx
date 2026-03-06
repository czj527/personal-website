'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWeixin } from 'react-icons/fa';
import { contactInfo } from '@/lib/data';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          联系我
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-center mb-12"
        >
          有任何问题或合作意向，欢迎通过以下方式联系我
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.a
            href={`mailto:${contactInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">邮箱</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{contactInfo.email}</p>
            </div>
          </motion.a>

          <motion.a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">查看我的代码</p>
            </div>
          </motion.a>

          <motion.a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <FaLinkedin className="text-2xl text-blue-700 dark:text-blue-300" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">职场联系</p>
            </div>
          </motion.a>

          <motion.a
            href={contactInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-full flex items-center justify-center">
              <FaTwitter className="text-2xl text-sky-500 dark:text-sky-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Twitter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">关注我的动态</p>
            </div>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
