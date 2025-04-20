import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

function Description() {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-24 px-6 md:px-20'
    >
      <h1 className='text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent mb-3'>
        Create AI Images
      </h1>
      <p className='text-neutral-600 text-lg mb-12 text-center'>
        Turn Your Imagination Into Visuals
      </p>

      <div className='flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center max-w-6xl w-full'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className='flex-1'
        >
          <h2 className='text-2xl sm:text-3xl font-semibold mb-5 text-gray-800'>
            Introducing The AI-Powered <br /> Text To Image Generator
          </h2>
          <p className='text-gray-600 leading-relaxed mb-4'>
            Bring your ideas to life with our Free AI Image Generator. Whether you need stunning visuals for work, creativity, or inspiration — our tool transforms your imagination into art, instantly.
          </p>
          <p className='text-gray-600 leading-relaxed'>
            Describe it, imagine it, and watch it come to life. Experience the power of AI in your creative workflow with ease and style.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          src={assets.sample_img_1}
          alt="Sample AI image"
          className='w-80 xl:w-96 rounded-xl shadow-lg transition-all hover:scale-[1.02]'
        />
      </div>
    </motion.div>
  );
}

export default Description;
