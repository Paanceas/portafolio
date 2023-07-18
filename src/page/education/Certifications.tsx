import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Certification, CertificationsCompanies, certificationImages } from '../../models';

export const Certifications = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const CertificationContent: Certification[] = [
    {
      name: 'Lifelong Learning',
      company: CertificationsCompanies.Credly,
      link: 'https://www.credly.com/badges/823d5cf1-4c68-424b-93e3-8f51c659421a/public_url',
      year: 2022,
    },
    {
      name: 'ViteJs',
      company: CertificationsCompanies.Platzi,
      link: 'https://platzi.com/p/pceballos/curso/3216-vitejs/diploma/detalle/',
      year: 2022,
    },
    {
      name: 'AWS Cloud Foundations',
      company: CertificationsCompanies.Credly,
      link: 'https://www.credly.com/badges/40a532b8-d34c-425d-a728-35be8f40bfaf',
      year: 2022,
    },
    {
      name: 'Principios Solid y Clean Code',
      company: CertificationsCompanies.Udemy,
      link: 'https://www.udemy.com/certificate/UC-b1c4e5cd-1d24-4621-8809-3c9d3e64287f/',
      year: 2023,
    },
    {
      name: 'AWS Cloud',
      company: CertificationsCompanies.Platzi,
      link: 'https://platzi.com/p/paanceas/curso/1323-aws-cloud-practico/diploma/detalle/',
      year: 2022,
    },
    {
      name: 'CyberOps Associate',
      company: CertificationsCompanies.Credly,
      link: 'https://www.credly.com/badges/77a6ea46-0104-4745-810c-a7362a5d4080',
      year: 2022,
    },
  ];

  return (
    <>
      <div
        className="separated"
        style={{
          backgroundImage: `url(${'img/border-dark.png'})`,
        }}
      ></div>
      {/* End separated */}

      <div className="title">
        <h3>Certificaciones</h3>{' '}
      </div>
      <div className="testimonial-wrapper">
        <Slider {...settings}>
          {CertificationContent.map((val, i) => (
            <div key={i} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
              <div className="testimonial-01 media">
                <div className="avatar">
                  <img src={certificationImages[val.company]} alt="review comments"></img>
                </div>
                <div className="media-body">
                  <h6>{val.name}</h6>
                  <p>{val.year}</p>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    Abrir certificado
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
