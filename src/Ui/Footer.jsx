import { CONTACT, SOCIAL_MEDIA_LINKS } from '../constants';

const Footer = () => {
  return (
    <>
      <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-3xl">
        {CONTACT.email}
      </p>
      <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-3xl">
        {CONTACT.phone1}
      </p>
      <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-3xl">
        {CONTACT.phone2}
      </p>

      <div className="flex items-center justify-center gap-8 text-white">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="said">
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
