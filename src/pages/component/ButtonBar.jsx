/* eslint-disable react/prop-types */
// src/components/ButtonBar.js
import { motion } from 'framer-motion'; // Import motion from framer-motion

const ButtonBar = ({ categories, onSelect }) => {
  return (
    <div className="flex space-x-4 bg-gray-400 border-white border border-opacity-5 bg-opacity-20 w-fit absolute p-4 rounded-full">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          onClick={() => onSelect(category)}
          className="text-white bg-gray-500 border-white border border-opacity-15 bg-opacity-50 px-4 py-2 rounded-full hover:bg-gray-700"
          initial={{ opacity: 0, scale: 0 }} // Start small and invisible
          animate={{ opacity: 1, scale: 1 }} // Fade in and scale up
          transition={{ duration: 0.5, delay: index * 0.1 }} // Apply staggered delay
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default ButtonBar;
