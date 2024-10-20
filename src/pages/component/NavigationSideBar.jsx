import img from '../../assets/icon/champIcon.png'; // Import the image
import { useState } from "react";
import { AiFillAppstore, AiOutlineUser } from "react-icons/ai";
import { BsGear, BsChatSquareDots } from "react-icons/bs";

const icons = [
  { Icon: () => <img src={img} alt="Home" className="w-5 filter brightness-200 contrast-200 " />, label: "Home" }, // Use image for Home
  { Icon: AiFillAppstore, label: "Appstore" },
  { Icon: BsChatSquareDots, label: "Chat" },
  { Icon: AiOutlineUser, label: "User" },
  { Icon: BsGear, label: "Settings" },
];

function NavigationSideBar() {
  const [selected, setSelected] = useState("Home"); // Track the selected icon

  return (
    <div
      className="flex flex-col items-center justify-center aspect-[2/1] max-w-md p-8 text-center 
       h-fit px-2 rounded-full my-auto w-20 py-3  ml-5 gradient-border relative"
    >
      {/* Render icons dynamically */}
      <div className="space-y-2 z-10">
        {icons.map(({ Icon, label }, index) => (
          <div
            key={index}
            className={`text-white rounded-full p-3 hover:bg-opacity-25 flex items-center justify-center  size-12 bg-gray-300 bg-opacity-0 transition-colors duration-300 
              ${selected === label ? "bg-opacity-20 border border-opacity-10 border-white bg-gray-300" : ""}`}
            aria-label={label}
            onClick={() => setSelected(label)} // Set the clicked icon as selected
          >
            <Icon /> {/* Render the icon or image */}
          </div>
        ))}
      </div>
      <div className="w-full z-0 absolute h-full rounded-full backdrop-blur-lg border-white border border-opacity-25"></div>
    </div>
  );
}

export default NavigationSideBar;
