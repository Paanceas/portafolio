import { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { ScrollToTop } from './components';
import { PortafolioRouter } from './router/PortafolioRouter';

import AOS from "aos";
import "aos/dist/aos.css";

function hexToRgb() {
  const hex = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    AOS.init();
    // const mainColorHex = "#f29a86";
    // document.documentElement.style.setProperty('--main-color', mainColorHex);
    const mainColorRgb = hexToRgb();
    setBackgroundColor(mainColorRgb);
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color={backgroundColor}
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <ScrollToTop />
      <PortafolioRouter />
    </>
  );
}

export default App;
