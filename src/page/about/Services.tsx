const ServiceContent = [
  {
    icon: 'icon-mobile',
    title: 'Frontend',
    descriptions: `Como Desarrollador Frontend, creo soluciones innovadoras y atractivas para interfaces de usuario utilizando Angular, React, JS ES6 y Typescript. Mi enfoque se centra en la experiencia del usuario y la usabilidad.`,
    delayAnimation: '',
  },
  {
    icon: 'icon-desktop',
    title: 'Backend',
    descriptions: `Con conocimientos en Java SpringBoot, Node.js y Go, me especializo en desarrollar la lógica del servidor y manejo de bases de datos. Me aseguro de crear APIs robustas y eficientes.`,
    delayAnimation: '200',
  },
  {
    icon: 'icon-target',
    title: 'Software Engineer',
    descriptions: `Hábil en arquitectura cloud (AWS, Azure), colaboro en equipos ágiles, aplicando Scrum y entregando soluciones escalables y seguras en entornos de nube. Trabajo en equipo para lograr los objetivos del proyecto.`,
    delayAnimation: '400',
  },
];
export const Services = () => {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
};
