import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function GenerateBtn() {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-20 text-center"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent mb-6">
        See The Magic. Try Now
      </h1>

      <button
        aria-label="Generate results"
        onClick={onClickHandler}
        className="inline-flex items-center gap-3 px-10 py-3 rounded-full bg-black text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500"
      >
        Generate
        {assets.star_group && (
          <img src={assets.star_group} alt="Star icon" className="h-6" />
        )}
      </button>

      {/* Optional animated glow effect */}
      {/* <div className="absolute animate-pulse w-40 h-40 bg-blue-500/20 blur-2xl rounded-full -z-10 top-[-30px] left-1/2 transform -translate-x-1/2" /> */}
    </motion.div>
  );
}

export default GenerateBtn;
