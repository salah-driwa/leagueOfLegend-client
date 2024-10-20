import { useState } from "react";
import { VscDiff } from "react-icons/vsc";

 function CustomSlider() {
  const [level, setLevel] = useState(2); // level ranges from 0 to 4

  const levels = [ "Easy", "Difficult", "Extreme"];

  const handleSliderChange = (e) => {
    console.log(e)
    setLevel(e);
  };

  return (
    <div className=" flex  items-center space-x-2 bg-gray-400 bg-opacity-20 text-white p-2 rounded-xl 
    cursor-pointer  ">
          <VscDiff size={30} />
        <div className=" flex flex-col  items-start gap-2 align-middle  justify-center">
      
      
      
      <div className="text-gray-300">{levels[level]}</div>
   

       
      
      <div className="flex space-x-1">
        {/* Level indicators */}
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full ${
                index <= level ? "bg-white" : "bg-gray-500"
              }`}
              onClick={()=>handleSliderChange(index)}
            />
          ))}
      </div>
      </div>
     
    </div>
  );
}

export default CustomSlider;
