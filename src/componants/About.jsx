import { ABOUT, laibrariesIcon } from "../constants";

const About = () => {
  return (
    <section className="container m-auto " id="about">
      <h2 className="my-10 text-center text-3xl lg:text-7xl">Aboyt Me</h2>
      <div className="flex items-center justify-center">
        <p className="m-8 max-w-6xl text-2xl lg:text-3xl">{ABOUT}</p>
      </div>
      <div className="lg:flex grid grid-cols-4 items-center  justify-center lg:mb-28 ml-5 gap-8">{laibrariesIcon.map((icon,index)=>
        <h3 className={`text-[#${icon.style}]  lg:[&>*]:text-[5rem] [&>*]:text-[3rem] hover:scale-125 duration-400 ease-in`} key={index} title={icon.title}>{icon.icon}</h3>
      )}</div>
    </section>

  );
};

export default About;
