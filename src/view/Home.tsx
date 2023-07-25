import { Header, About, Footer, Education, Experience } from '../page';
import { Slider } from '../page/slider/Slider';

export const Home = () => {
  document.body.classList.add('theme-light');
  return (
    <div className="main-left">
      <Header />

      <Slider />

      <About />

      <Education />

      <Experience />

      <Footer />
    </div>
  );
};
