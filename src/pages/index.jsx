// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion} from 'framer-motion';
import Sidebar from './component/Sidebar';
import FilterBar from './component/FilterBar';
import ChampionCard from './component/ChampionCard';
import ButtonBar from './component/ButtonBar';
import NavigationSideBar from './component/NavigationSideBar';
import championsData from "../Data/champions_data.json"


const Home = () => {
  const categories = ['Assassins', 'Fighters', 'Mages', 'Marksmen', 'Supports', 'Tanks'];
  const handleCategorySelect = (category) => {
    console.log(`Selected category: ${category}`);
  };

  return (
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" "  
    > 
      <div className=" flex   h-screen glass-effect  relative       w-screen       ">
      <NavigationSideBar/>
      <div className='   mx-auto    w-10/12  mt-3  gap-3  flex flex-col'>
        <div     
        className=' flex       w-full  rounded-3xl border 
        bg-opacity-5    
            '>
     
      

      <Sidebar />
      <div className="flex  w-full relative pr-5">
  <div className=" w-full z-50  h-[80vh] p-5 pb-52 overflow-hidden ">
    <FilterBar />
    <div className="grid grid-cols-3 gap-6   pb-36 overflow-y-scroll pt-5 h-[42vw]   custom-scrollbar ">
      {championsData.map((champ) => (
        <ChampionCard key={champ.name} champion={champ} />
      ))}
    </div>
 
  </div>

  {/* Blurred Background */}
  <div className="w-full h-full absolute top-0 left-0 z-10 backdrop-blur-2xl rounded-r-3xl bg-white/5"></div>
</div>


   

      </div>
      <div className=" overflow-hidden  w-full flex justify-center">
      <ButtonBar categories={categories} onSelect={handleCategorySelect} />
    </div>
      </div>
    </div>
    
    </motion.div>
  );
};

export default Home;
