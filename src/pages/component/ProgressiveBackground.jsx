/* eslint-disable react/prop-types */
import { useState } from 'react';

const ProgressiveBackground = ({ highResSrc, children }) => {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  const handleHighResLoad = () => {
    setIsHighResLoaded(true);
  };

  return (
    <div
      className="glass-effect transition-all duration-500"
      style={{
        background: isHighResLoaded
          ? `linear-gradient(
              rgba(255, 255, 255, 0.15), 
              rgba(255, 255, 255, 0.05)
            ), url(${highResSrc}) center/cover no-repeat`
          : "linear-gradient(to bottom, rgba(17, 17, 27, 0.8), rgba(30, 30, 45, 0.6))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Load the high-res image but keep it hidden */}
      <img
        src={highResSrc}
        alt="High Resolution Background"
        onLoad={handleHighResLoad}
        style={{ display: "none" }}
      />
      {children}
    </div>
  );
};

export default ProgressiveBackground;
