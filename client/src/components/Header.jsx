import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        if (user) {
            navigate('./result');
        } else {
            setShowLogin(true);
        }
    };

    return (
        <motion.div
            className='flex flex-col justify-center items-center text-center my-20 px-4'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div
                className='text-blue-700 font-medium inline-flex items-center gap-2 bg-white/80 px-6 py-1 rounded-full border border-blue-300 shadow-md backdrop-blur-md'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p>✨ Best Text To Image Converter</p>
                <img src={assets.star_icon} alt="Star Icon" />
            </motion.div>

            <motion.h1
                className='text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mt-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}
            >
                Turn Text To <span className='text-blue-600'>Image</span>, In Seconds
            </motion.h1>

            <motion.p
                className='text-lg text-neutral-700 max-w-2xl mx-auto mt-6 font-medium'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 2 }}
            >
                Unleash your creativity with AI. Turn your imagination into visual art in seconds — just type, and watch the magic happen.
            </motion.p>

            <motion.button
                className='sm:text-lg text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-500 shadow-lg mt-10 px-10 py-3 rounded-full transition-all duration-300 flex items-center gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 2 }}
                onClick={onClickHandler}
            >
                Generate Images <img src={assets.star_group} className='h-6' alt="Stars" />
            </motion.button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.2 }}
                className='flex flex-wrap justify-center mt-16 gap-4'
            >
                {Array(6).fill('').map((_, index) => (
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
                        className='rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-[70px] sm:w-[80px] md:w-[90px]'
                        key={index}
                        alt={`Sample ${index + 1}`}
                    />
                ))}
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 2 }}
                className='mt-6 text-neutral-500 text-sm font-medium'
            >
                Generated Images From <span className='text-blue-600 font-semibold'>AI Imagify</span>
            </motion.p>
        </motion.div>
    );
}

export default Header;
