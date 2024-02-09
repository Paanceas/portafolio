import { TextLoop } from '../../components';

const conctInfo = {
  phone: '+57 3132196834',
  email: 'pablo.ceballos@outlook.es',
};

const sliderContent = {
  name: 'Pablo Ceballos',
  designation: 'Full-stack Developer',
  description: `Ingeniero de Sistemas especializado en el desarrollo de interfaces de usuario y gestión de proyectos de software. Con una sólida experiencia trabajando en una variedad de entornos, desde startups dinámicas hasta grandes corporaciones, he dedicado mi carrera a crear soluciones innovadoras y efectivas, con un énfasis particular en el desarrollo frontend. Mi enfoque no solo se limita a la estética y usabilidad, sino también a la implementación de arquitecturas en la nube y la aplicación de metodologías ágiles, garantizando así soluciones de software robustas y adaptativas que satisfacen las necesidades empresariales.`,
  btnText: ' Descargar CV',
};

export const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href={`mailto:mail%20to:${conctInfo.email}`}>{conctInfo.email}</a>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hola, Mi nombre es
                </h6>
                <h1 className="font-alt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                  {sliderContent.name}
                </h1>
                <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                  <TextLoop>
                    <p className="loop-text lead"> Software Engineer</p>
                    <p className="loop-text lead"> Frontend Developer</p>
                    <p className="loop-text lead"> Full-stack Developer</p>
                  </TextLoop>
                </div>

                <p className="desc" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                  {sliderContent.description}
                </p>
                <div className="mt-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                  <a
                    className="px-btn px-btn-white"
                    href="https://cvapp.es/r/nmUg1BG5G"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${'./img/slider/home-banner.png'})`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};
