import { SOCIAL_MEDIA_LINKS } from '../constants';

const Footer = () => {
  return (
    <>
      <div className="mt-8 flex items-center justify-center gap-8 text-white">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            aria-label="Links"
            href={link.href}
            target="_blank"
            rel="said"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="my-8 text-center text-gray-400">
        &copy; compileTap. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
