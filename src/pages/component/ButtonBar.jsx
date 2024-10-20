/* eslint-disable react/prop-types */
// src/components/ButtonBar.js
const ButtonBar = ({ categories, onSelect }) => {
    return (
      <div className="flex space-x-4 bg-gray-400  border-white border border-opacity-5 bg-opacity-20 w-fit absolute p-4 rounded-full">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className="text-white bg-gray-500 border-white border border-opacity-15 bg-opacity-50 px-4 py-2 rounded-full hover:bg-gray-700"
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default ButtonBar;
  