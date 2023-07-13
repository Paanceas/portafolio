import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaInstagram />, link: "https://www.instagram.com/pablo_ast_/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/paanceas/" },
  { Social: <FaGithub />, link: "https://github.com/Paanceas" },
];

export const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://pabloceballos.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Pablo Ceballos
            </a>{" "}
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

