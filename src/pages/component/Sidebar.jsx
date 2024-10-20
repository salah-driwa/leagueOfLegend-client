/* eslint-disable react/prop-types */
import { useState } from 'react';
import { SiRiotgames } from 'react-icons/si';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const [isDifficultOpen, setIsDifficultOpen] = useState(false);
  const [isPositionOpen, setIsPositionOpen] = useState(true);
  const [isCostOpen, setIsCostOpen] = useState(false);
  const [selectedDifficult, setSelectedDifficult] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [cost, setCost] = useState(300); // Default cost

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case 'difficult':
        setIsDifficultOpen((prev) => !prev);
        break;
      case 'position':
        setIsPositionOpen((prev) => !prev);
        break;
      case 'cost':
        setIsCostOpen((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleDifficultChange = (option) => {
    setSelectedDifficult(option);
  };

  const handlePositionChange = (option) => {
    setSelectedPosition(option);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  return (
    <section className="relative   min-w-80 h-full   overflow-hidden">
      <div className="  w-fit  min-w-80 bg-gradient-to-br z-50 relative  h-full flex flex-col max-h-screen overflow-y-scroll">
        <div className="text-2xl items-center flex font-bold mb-8 mt-5 gap-1 justify-center">
          <SiRiotgames size={30} />
          <div>
            RIOT<br />
            <div className="-mt-3">GAMES</div>
          </div>
        </div>
        <div className="space-y-1 ">
          <DropdownFilter
            label="Difficult"
            isOpen={isDifficultOpen}
            toggleDropdown={() => toggleDropdown('difficult')}
            options={['Normal', 'Medium', 'Hard']}
            selectedOption={selectedDifficult}
            onOptionChange={handleDifficultChange}
          />
          <DropdownFilter
            label="Position"
            isOpen={isPositionOpen}
            toggleDropdown={() => toggleDropdown('position')}
            options={['All', 'Top lane', 'Support', 'jungle', 'Bot lane','Mid lane']}
            selectedOption={selectedPosition}
            onOptionChange={handlePositionChange}
          />
          <CostSlider
            label="Cost"
            value={cost}
            onChange={handleCostChange}
            isOpen={isCostOpen}
            toggleDropdown={() => toggleDropdown('cost')}
          />
          <DropdownFilter
            label="Realize date"
            isOpen={false}
            toggleDropdown={() => {}}
            options={[]}
          />
        </div>
        <div className="mt-auto space-y-4">
  
        </div>
      </div>
      <div className="w-full z-0 top-0 absolute h-full rounded-l-3xl backdrop-blur-[12px] border-white border border-opacity-25"></div>
    </section>
  );
};

const DropdownFilter = ({ label, isOpen, toggleDropdown, options = [], selectedOption, onOptionChange }) => (
  <div>
    <div
      className="flex items-center bg-gray-400 bg-opacity-15 pb-3 justify-between pt-3 px-5 cursor-pointer font-semibold border-t border-opacity-10 border-white"
      onClick={toggleDropdown}
    >
      <span className=' '>{label}</span>
      {isOpen ? (
        <IoIosArrowUp className="bg-gray-200 bg-opacity-25 border border-white border-opacity-10 shadow-xl shadow-black/20 hover:bg-opacity-40 p-1 rounded-md" size={24} />
      ) : (
        <IoIosArrowDown className="bg-gray-200 bg-opacity-25 border border-white border-opacity-10 shadow-xl shadow-black/20 hover:bg-opacity-40 p-1 rounded-md" size={24} />
      )}
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          {options.map((option) => (
            <li
              key={option}
              className={`flex items-center cursor-pointer px-5 py-1.5 hover:bg-gray-200 hover:bg-opacity-15 hover:text-gray-300 ${selectedOption === option ? 'bg-gray-200 bg-opacity-5' : ''}`} // Add background opacity for selected
              onClick={() => onOptionChange(option)}
            >
              <span className={`w-4 h-4 mr-2 rounded-[5px] border bg-gray-700 border-gray-300 flex items-center justify-center`}>
                {selectedOption === option && <span className="w-2.5 h-2.5 rounded-[2px] bg-white" />} {/* Dot for selected state */}
              </span>
              {option}
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </div>
);

const CostSlider = ({ label, value, onChange, isOpen, toggleDropdown }) => (
  <div>
    <div className="font-semibold py-3 px-5 w-full bg-gray-400 bg-opacity-15 flex items-center justify-between cursor-pointer" onClick={toggleDropdown}>
      {label}
      {isOpen ? (
        <IoIosArrowUp className="bg-gray-200 bg-opacity-25 border border-white border-opacity-10 shadow-xl shadow-black/20 hover:bg-opacity-40 p-1 rounded-md" size={24} />
      ) : (
        <IoIosArrowDown className="bg-gray-200 bg-opacity-25 border border-white border-opacity-10 shadow-xl shadow-black/20 hover:bg-opacity-40 p-1 rounded-md" size={24} />
      )}
    </div>
    {isOpen && ( // Show slider only when dropdown is open
      <div className=' mx-5 mt-2'>
        <div className="flex justify-between ">
          <span>{value} RP</span>
        </div>
        <input
          type="range"
          min={300}
          max={10000}
          value={value}
          onChange={onChange}
          className="w-full"
        />
      </div>
    )}
  </div>
);


export default Sidebar;
