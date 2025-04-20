import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-32 px-4'
    >
      <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center mb-3'>
        How It Works
      </h1>
      <p className='text-lg text-neutral-600 mb-10 text-center'>
        Transform words into stunning visuals in just a few steps
      </p>

      <div className='space-y-6 w-full max-w-3xl'>
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className='flex items-start gap-5 p-6 sm:px-8 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer'
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={item.icon} width={50} alt={item.title} className='mt-1' />
            <div>
              <h2 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-1'>
                {item.title}
              </h2>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
