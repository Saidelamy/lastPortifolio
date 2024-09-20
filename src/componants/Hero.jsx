import { LuImport } from 'react-icons/lu';
import saidImage from '../assets/myimage.JPG';
const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="lg:grid lg:grid-cols-12">
          <h1 className="col-span-8 mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
            Said magdy
            <br />
            Elamy
          </h1>
          <img
            src={saidImage}
            alt="said Image"
            className="col-span-4 mt-8 h-[25rem] w-full rounded-full object-contain opacity-70 lg:h-[30rem]"
          />
        </div>
        <div className="mt-8">
          <a
            href="/Benson-Langford.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
          >
            <span>Resume.pdf</span>
            <LuImport className="ml-2" />
          </a>
        </div>
        <div className="w-full"></div>
      </div>
    </section>
  );
};

export default Hero;
