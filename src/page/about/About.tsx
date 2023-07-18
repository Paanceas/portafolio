import { Social } from '.';

const conctInfo = {
  phone: '+57 3132196834',
  email: 'pablo.ceballos@outlook.es',
  age: 25,
  ubication: 'Bogotá, Colombia',
};

export const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1200">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpeg" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Fullstack-Developer</p>
                  <h3>Pablo Ceballos</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              <div className="about-info">
                <div className="title">
                  <h3>Acerca de mí</h3>
                </div>

                <div className="about-text">
                  <p>
                    Soy un analista y desarrollador de software con más de 6 años de experiencia en diseño y gestión de
                    proyectos IT. En el desarrollo frontend, donde encuentro mi pasión y disfruto creando interfaces de
                    usuario intuitivas y atractivas. A través de lenguajes de programación como Angular, React, JS ES6 y
                    Typescript, puedo dar vida a experiencias de usuario excepcionales.
                  </p>
                  <p>
                    Además, como desarrollador full stack, también poseo sólidos conocimientos en el desarrollo backend
                    utilizando tecnologías como Java SpringBoot, Node.js y Go. Estas habilidades me permiten trabajar en
                    la implementación de la lógica del servidor, la manipulación de bases de datos relacionales y no
                    relacionales, y la integración de sistemas para crear soluciones completas y escalables.
                  </p>
                  <p>
                    Soy un apasionado del aprendizaje continuo y estoy comprometido con el trabajo en equipo. He
                    trabajado bajo metodologías ágiles como Scrum, lo que me permite adaptarme rápidamente a los cambios
                    y colaborar de manera efectiva con otros profesionales en proyectos dinámicos.
                  </p>
                  <p>
                    Estoy comprometido en brindar soluciones innovadoras y efectivas a los desafíos empresariales a
                    través de la creación de sistemas de información y experiencias de usuario excepcionales.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Edad: </label>
                          <span>{conctInfo.age} Años</span>
                        </li>
                        <li>
                          <label>Ubicación: </label>
                          <span>{conctInfo.ubication}</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Disponible</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <a href={`tel: ${conctInfo.phone}`}>{conctInfo.phone}</a>
                        </li>
                        <li>
                          <label>Email: </label>
                          <a href={`mailto:mail%20to:${conctInfo.email}`}>{conctInfo.email}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                "./img/border-dark.png"
              })`,
            }}
          ></div> */}

          {/* End separated */}
          {/* <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services /> */}

          {/* End .row */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                "./img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Awards.</h3>
          </div>

          <Awards /> */}
          {/* End Awards */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                "./img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};
