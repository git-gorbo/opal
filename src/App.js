
import React, { useEffect, useState } from 'react';
import './App.css';
import DesktopView from './DesktopView';
import MobileView from './MobileView';


function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-[#FDF9FF]'>
      {screenWidth >= 1440 ? <DesktopView /> : null}
      {screenWidth <= 425 ? <MobileView /> : null}
    </div>
  );
}

export default App;
