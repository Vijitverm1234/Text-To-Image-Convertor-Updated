import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'
function Testimonials() {
  return (
    <motion.div   initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}>
       <div className='flex flex-col items-center justify-center my-20 py-12 '>
       <div className='flex flex-col items-center text-center'>
        <h1 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent mb-3'>
          Customer Testimonials
        </h1>
        <p className='text-lg text-gray-500 mb-12'>
          What Our Users Are Saying
        </p>
      </div>
       <div className='flex flex-wrap gap-6 '>
       {testimonialsData.map((item,index)=>(
        <div className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.05] transition-all    ' key={index}>
         <div className='flex flex-col items-center'>
            <img src={item.image} className='rounded-full w-14'alt="" />
            <h2 className='text-xl font-semibold mt-3'>{item.name}</h2>
            <p className='text-gray-400'>{item.role}</p>
            <div className='flex mb-4'>
              {Array(item.stars).fill().map((item,index)=>(
            <img src={assets.rating_star} key={index}alt="" />
 ))}
            </div>
            <p className='text-center text-sm text-gray-600'>{item.text}</p>
         </div>
        </div>
       ))}
       </div>
       </div>
    </motion.div>
  )
}

export default Testimonials
