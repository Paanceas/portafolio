import { Certifications, Skills } from '.';

const educationContent = [
  {
    passingYear: '2018-actual',
    degreeTitle: 'Ingeniería de Sistemas',
    instituteName: 'UCompensar',
  },
  {
    passingYear: '2020-2021',
    degreeTitle: 'Tecnología en Diseño de software',
    instituteName: 'UCompensar',
  },
  {
    passingYear: '2018-2020',
    degreeTitle: 'Técnico en Bases de datos',
    instituteName: 'UCompensar',
  },
  {
    passingYear: '2015-2017',
    degreeTitle: 'Tecnología en análisis y desarrollo de sistemas de información',
    instituteName: 'Sena',
  },
];

export const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="title">
          <h3>Educación y competencias</h3>{' '}
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 m-15px-tb" data-aos="fade-up" data-aos-duration="1200">
            <ul className="aducation-box">
              {educationContent.map((val, i) => (
                <li key={i}>
                  <span>{val.passingYear}</span>
                  <h6>{val.degreeTitle} </h6>
                  <p>{val.instituteName}</p>{' '}
                </li>
              ))}
            </ul>
          </div>
          {/* End .col */}

          <div className="col-lg-7 ml-auto m-15px-tb" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <Skills />
          </div>
          {/* End .col */}
          <Certifications />
        </div>
      </div>
    </section>
  );
};
