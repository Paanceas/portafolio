import { useEffect } from 'react'
import AOS from "aos";
import AnimatedCursor from 'react-animated-cursor';
import { ScrollToTop } from './components';
import { PortafolioRouter } from './router/PortafolioRouter';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="0, 72, 186"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <ScrollToTop />
      <PortafolioRouter />
    </>
  )
}

export default App
