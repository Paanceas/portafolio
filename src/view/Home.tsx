import { Header, About, Footer, Education } from '../page';
import { Slider } from '../page/slider/Slider';

export const Home = () => {
  document.body.classList.add('theme-light');
  return (
    <div className="main-left">
      <Header />

      <Slider />

      <About />

      <Education />

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};
