import { ABOUT, laibrariesIcon } from '../constants';

const About = () => {
  return (
    <section className="container m-auto" id="about">
      <h2 className="my-10 text-center text-3xl lg:text-7xl">About Me</h2>
      <div className="flex items-center justify-center">
        <p className="m-8 max-w-6xl text-2xl lg:text-3xl">{ABOUT}</p>
      </div>
      <div className="ml-5 grid grid-cols-4 items-center justify-center gap-8 lg:mb-28 lg:flex">
        {laibrariesIcon.map((icon, index) => (
          <h3
            className={`text-[#${icon.style}] duration-400 ease-in hover:scale-125 [&>*]:text-[3rem] lg:[&>*]:text-[5rem]`}
            key={index}
            title={icon.title}
          >
            {icon.icon}
          </h3>
        ))}
      </div>
    </section>
  );
};

export default About;
