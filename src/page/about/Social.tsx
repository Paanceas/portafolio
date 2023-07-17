import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaCertificate } from 'react-icons/fa';

export const SocialShare = [
  {
    Social: <FaCertificate />,
    link: 'https://www.credly.com/users/paanceas/badges',
  },
  { Social: <FaTwitter />, link: 'https://twitter.com/paanceas' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/pablo_ast_/' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/paanceas/' },
  { Social: <FaGithub />, link: 'https://github.com/Paanceas' },
];

export const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};
