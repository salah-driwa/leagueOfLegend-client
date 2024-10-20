/* eslint-disable react/prop-types */
import { IoIosArrowBack, IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import marksmanImg from "../../assets/icon/Marksman_icon.webp";
import mageImg from "../../assets/icon/Mage_icon.webp";
import tankImg from "../../assets/icon/Tank_icon.webp";





import { useState } from "react";
import { assassinIcon, Bilgewater, botIcon, Demacia, fighterIcon, jungleIcon, midIcon, ShadowIsles, Shurima, supportIcon, supportRoleIcon, topIcon } from "../../assets/icon/icons";
import CustomSlider from "./CustomSlider";

const FilterBar = () => (
  <div className="flex flex-col z-50 items-center">
    <div className="flex items-center justify-between px-5 w-full mb-8">
      <IoIosArrowBack
        className="bg-gray-200 bg-opacity-25 border border-white border-opacity-10 shadow-3xl shadow-black 
        hover:bg-opacity-40 p-1 pr-1.5 rounded-xl"
        size={37}
      />
      <h1 className="text-white text-3xl">Champions List</h1>
      <div className="flex items-center gap-2">
        <IoIosNotificationsOutline
          className="bg-gray-200 bg-opacity-25 border border-white border-opacity-10 shadow-3xl shadow-black 
          hover:bg-opacity-40 p-1 rounded-xl"
          size={37}
        />
        <img src="https://i.pravatar.cc/300" alt="Profile" className="w-9 h-9 rounded-xl" />
      </div>
    </div>
    <div className="flex items-center space-x-4 p-4 bg-gray-300/10 bg-opacity-70 rounded-3xl w-full">
    <Dropdown
        label="Position"
        options={[
          { label: "Top", img: topIcon },
          { label: "Mid", img: midIcon },
          { label: "Jungl", img: jungleIcon },
          { label: "Bot", img: botIcon },
          { label: "Support", img: supportIcon },
        ]}
      />
      <Dropdown
        label="Role"
        options={[
          { label: "Marksman", img: marksmanImg },
          { label: "Mage", img: mageImg },
          { label: "Tank", img: tankImg },
          { label: "Assassin", img: assassinIcon },
          { label: "Fighter", img: fighterIcon },
          { label: "Support", img: supportRoleIcon },
        ]}
      />
      <Dropdown
        label="Region"
        options={[
          { label: "Bilgewater", img: Bilgewater },
          { label: "Demacia", img: Demacia },
          { label: "ShadowIsles", img:ShadowIsles },
          { label: "Shurima", img:Shurima },
        ]}
      />

     <CustomSlider/>
    </div>
  </div>
);

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full z-50 relative">
    
      <div
        className="bg-gray-400 bg-opacity-20 text-white p-2 rounded-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
        <img src={selected.img} alt={selected.label} className="w-6 h-6  brightness-[800]" />
        <div className=" flex  flex-col">
        <label className="block text-[12px] text-opacity-40 absolute font-medium text-white mb-1">{label}</label>
        
          <span className=" mt-3">{selected.label}</span>
          </div>
          <IoIosArrowDown className=" ml-auto  mr-3 bg-gray-200 bg-opacity-25 border border-white border-opacity-10 shadow-xl shadow-black/20 hover:bg-opacity-40 p-1 rounded-md" size={24} />
   
        </div>
      </div>
      {isOpen && (
        <div className="absolute bg-gray-600 rounded mt-1 w-full">
          {options.map((option) => (
            <div
              key={option.label}
              className="flex items-center gap-2 p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              <img src={option.img} alt={option.label} className="w-6 h-6   brightness-[800] " />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



export default FilterBar;
