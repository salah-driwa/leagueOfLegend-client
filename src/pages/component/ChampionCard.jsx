/* eslint-disable react/prop-types */
// src/components/ChampionCard.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assassinIcon, fighterIcon, mageIcon, marksmanIcon, supportIcon, tankIcon } from "../../assets/icon/icons";

const roleIconMap = {
  Marksman: marksmanIcon,
  Mage: mageIcon,
  Tank: tankIcon,
  Assassin: assassinIcon,
  Fighter: fighterIcon,
  Support: supportIcon,
};

const ChampionCard = ({ champion }) => {
  const [isImageLoading, setIsImageLoading] = useState(true); // Loading state for the image
  const navigate = useNavigate();
  const roles = champion.role.split("/").map((role) => role.trim());

  const handleCardClick = () => {
    navigate(`/${champion.name}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="border relative min-w-[10vw] h-fit w-fit hover:bg-opacity-50 bg-slate-400 bg-opacity-25 
                 border-opacity-25 border-white rounded-lg p-4 shadow-lg hover:shadow-xl cursor-pointer"
    >
      <div className="relative pointer-events-none">
        {isImageLoading && (
          <div className="  inset-0 h-36 w-64 bg-gray-700 rounded-t-lg animate-pulse"></div>
        )}
        <img
          src={champion.skins[0].image}
          alt={champion.name}
          className={`pointer-events-none object-contain z-10 rounded-t-lg ${
            isImageLoading ? "hidden" : "block"
          }`}
          onLoad={() => setIsImageLoading(false)}
          onError={() => setIsImageLoading(false)} // Ensure loading ends even if there's an error
        />
      </div>

      <div className="flex z-10 mt-4">
        <div>
          <h3 className="text-xl font-bold text-white">{champion.name}</h3>
          <p className="text-sm text-nowrap w-6/12 text-gray-400">{champion.subname}</p>
        </div>

        <div className="flex ml-auto gap-4 items-center justify-center mr-3">
          {roles.map((role) => {
            const roleIcon = roleIconMap[role];
            return roleIcon ? (
              <div
                key={role}
                className="relative p-2 overflow-hidden rounded-xl flex items-center justify-center 
                           bg-opacity-80 shadow-lg shadow-black/30 bg-gray-700"
              >
                <img
                  src={roleIcon}
                  alt={role}
                  className="w-6 h-6 z-0 brightness-[200] pointer-events-none"
                />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
