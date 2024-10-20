import { useParams } from 'react-router-dom';
import championsData from '../Data/champions_data.json';
import { SiRiotgames } from 'react-icons/si';
import ColorThief from 'colorthief';
import { useEffect, useState } from 'react';

import {
  assassinIcon,
  fighterIcon,
  mageIcon,
  marksmanIcon,
  supportIcon,
  tankIcon,
} from '../assets/icon/icons';

const roleIconMap = {
  Marksman: marksmanIcon,
  Mage: mageIcon,
  Tank: tankIcon,
  Assassin: assassinIcon,
  Fighter: fighterIcon,
  Support: supportIcon,
};
// Helper to convert RGB to HSL and return the saturation
const rgbToHsl = ([r, g, b]) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic (gray)
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100]; // Return HSL with saturation in percentage
};

const ChampionDetails = () => {
  const { championName } = useParams();
  const [themeColors, setThemeColors] = useState(['#ffffff', '#ffffff']); // Store top 2 vibrant colors

  // Find the champion
  const champion = championsData.find(
    (champ) => champ?.name?.toLowerCase() === championName?.toLowerCase()
  );

  const roles = champion?.role?.split('/').map((role) => role.trim()) || [];
  const backgroundImage = champion?.skins?.[0]?.image || ''; // Use the data URL or Base64 image

  useEffect(() => {
    const extractColor = async () => {
      try {
        const colorThief = new ColorThief();
        const img = new Image();
        img.crossOrigin = 'anonymous'; // Prevent CORS issues

        img.src = backgroundImage;
        img.onload = () => {
          const palette = colorThief.getPalette(img, 5); // Get top 5 colors

          // Convert RGB to HSL and sort by saturation
          const sortedBySaturation = palette
            .map((color) => ({
              color,
              hsl: rgbToHsl(color),
            }))
            .sort((a, b) => b.hsl[1] - a.hsl[1]); // Sort by saturation (HSL[1])

          // Get the top 2 most vibrant colors
          const [first, second] = sortedBySaturation;
          setThemeColors([
            `rgb(${first.color.join(',')})`,
            `rgb(${second.color.join(',')})`,
          ]);
        };
        img.onerror = (err) => console.error('Error loading image:', err);
      } catch (error) {
        console.error('Error extracting color:', error);
      }
    };

    if (backgroundImage) {
      extractColor();
    }
  }, [backgroundImage]);

  if (!champion) {
    return (
      <div className="container mx-auto text-white">
        <h1 className="text-4xl font-bold">Champion Not Found</h1>
        <p>We couldn’t find any champion with the name {championName}.</p>
      </div>
    );
  }

  return (
    <div className=" ">
      {/* Background with skin[0] image */}
      <div
        className="flex w-full justify-between   px-16 gap-5"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.5)
          ), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '50vw',
        }}
      >
        {/* Champion Info */}
        <div className="flex flex-col w-6/12">
          <div className="text-2xl pl-8 items-center flex font-bold mb-8 pt-5 gap-1">
            <SiRiotgames size={23} />
            <div className="text-sm">
              RIOT
              <div className="-mt-2">GAMES</div>
            </div>
          </div>

          {/* Role Icons */}
          <div className="flex gap-4 mr-3">
  {roles.map((role) => {
    const roleIcon = roleIconMap[role.trim()]; // Get the corresponding icon, trimming whitespace
    return roleIcon ? (
      <div
        key={role}
        className="relative p-2 overflow-hidden rounded-xl flex items-center justify-center 
                   border-white border-opacity-20 border bg-opacity-80 shadow-lg shadow-white/10 bg-gray-700"
      >
        <img
          src={roleIcon}
          alt={role}
          className="size-8 z-0 brightness-[200] pointer-events-none"
        />
        <h1
          style={{
            color: themeColors, // Use the theme color for text, if desired
          }}
          className="text-2xl font-bold ml-2" // Added margin-left for spacing
        >
          {role} {/* Display each role */}
        </h1>
        
      </div>
    ) : null;
  })}
</div>

          <h1
  className="text-9xl relative  h-fit font-bold saturate-100 brightness-150 bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(160deg, ${themeColors[0]} 0%, ${themeColors[1]} 70%, #ffffff 100%)`,
  }}
>
  {champion.name}

  <h1
  className="text-9xl absolute  top-0 blur-3xl h-fit font-bold  "
  style={{
    color: ` ${themeColors[2]}`,
  }}
>
  {champion.name}
</h1>
</h1>




          <p className="text-lg italic mb-4">{champion.subname}</p>
          <p className="text-md mb-6">{champion.description}</p>
        </div>

        {/* Abilities Section with Glass Effect */}
        <div
  className="mt-16   relative flex flex-col p-4 rounded-xl h-full justify-center items-center
             bg-white/10 backdrop-blur-lg shadow-md border border-white/20"
             style={{
             
           
               border: `1px solid ${themeColors[0]}`, // Border color using the first vibrant color
             }}     
>

  <div className="flex flex-col gap-6 w-full max-w-lg">
    {champion.abilities.map((ability) => (
      <div
        key={ability.name}
        className="flex items-center   bg-slate-800/70 gap-8 p-4 rounded-2xl"
        style={{
         // Gradient background
       
        }}
      >
        <img
          src={ability.image}
          alt={ability.name}
          style={{     
            border: `3px solid ${themeColors[0]}`, // Border color using the first vibrant color
          }}  
          className="w-12 h-12 rounded-full border p-1 border-white"
        />
        <p className="text-lg text-white">{ability.name}</p>
      </div>
    ))}
  </div>
  <div
    style={{
      border: `5px solid ${themeColors[0]}`, // Border color using the first vibrant color
    }}
     className=' absolute top-0 blur-lg  h-full w-full'> </div>

</div>


      </div>
<div className=' pb-10   bg-gradient-to-b from-gray-950 to-black'>
      <h2
  style={{
    borderTop: `2px solid ${themeColors[0]}`, // Border color using the first vibrant color
  }}
  className="text-2xl   pt-10  relative" // Added padding-top for spacing
>
  <div className=' pl-5'>
  AVAILABLE SKINS
  </div>
  <div
    style={{
      borderTop: `3px solid ${themeColors[0]}`, // Border color using the first vibrant color
    }}
     className=' absolute top-0 blur-lg w-full'></div>
</h2>



<div className="  flex gap-4 m-0 overflow-x-scroll pl-5  overflow-hidden rounded-lg  pb-5  mt-4">
  {champion.skins.map((skin) => (
    <div
      key={skin.name}
      className=" relative  min-w-[22vw]  rounded-lg     rounded-t-3xl p-2" // Added padding and background
    >
      <img src={skin.image} alt={skin.name} className=" pointer-events-none object-cover rounded-t-3xl  w-full h-48" />
     
      <p
      style={{
        borderTop: `2px solid ${themeColors[0]}`, // Border color using the first vibrant color
      }}
       className=" bg-slate-500/30 w-full p-3  backdrop-blur-md   border-t   rounded-b-lg   ">{skin.name}</p>
   
      
    </div>
  ))}
</div>

</div>
  
   
     
    </div>
  );
};

export default ChampionDetails;
