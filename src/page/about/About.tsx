import { Services, Social } from '.';
import { Hr } from '../../components';

const conctInfo = {
  phone: '+57 3132196834',
  email: 'pablo.ceballos@outlook.es',
  age: 26,
  location: 'Bogotá, Colombia',
};

export const About = () => {
  return (
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
                  Soy Ingeniero de Sistemas con más de 6 años de experiencia en el ámbito tecnológico, especializándome
                  en diseño y gestión de proyectos IT. Mi pasión reside en el desarrollo frontend, donde disfruto
                  creando interfaces de usuario intuitivas y visualmente atractivas. Dominando lenguajes de programación
                  como Angular, React, JS ES6 y TypeScript, soy capaz de materializar experiencias de usuario
                  excepcionales.
                </p>
                <p>
                  En mi rol de desarrollador full stack, cuento con una sólida base en desarrollo backend, utilizando
                  tecnologías como Java Spring Boot, Node.js, Nestjs y Go. Esta combinación de habilidades me faculta
                  para implementar lógica de servidor, gestionar bases de datos relacionales y no relacionales, e
                  integrar sistemas, creando así soluciones completas y escalables.
                </p>
                <p>
                  Mi compromiso con el aprendizaje continuo y el trabajo en equipo me ha llevado a trabajar bajo
                  metodologías ágiles como Scrum, Kanban y Scrumban, permitiéndome adaptarme rápidamente a los cambios y
                  colaborar eficazmente con otros profesionales en proyectos dinámicos.
                </p>
                <p>
                  Estoy enfocado en aportar valor a través de la innovación y la mejora continua en proyectos de
                  tecnología. Mi experiencia abarcando tanto el frontend como el backend me permite diseñar y ejecutar
                  soluciones sofisticadas que mejoran significativamente las operaciones empresariales y enriquecen la
                  experiencia del usuario, logrando un equilibrio óptimo entre funcionalidad, estética y eficiencia.
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
                        <span>{conctInfo.location}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul>
                      <li>
                        <label>Freelance: </label>
                        <span>Disponible</span>
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

        <Hr />

        {/* End separated */}
        <div className="title">
          <h3>¿Qué hago?</h3>
        </div>

        <Services />

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
  );
};
