import { LuImport } from 'react-icons/lu';

import saidImage from '../assets/myimage.webp';
import pdf from '../assets/Said_Magdy_Frontend_Developer_React.pdf';

const Hero = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'saidcv';
    link.click();
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="lg:grid lg:grid-cols-12">
          <div className="col-span-8 mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
            <h1>
              Said magdy
              <br />
              Elamy
            </h1>
          </div>
          <div className="col-span-4 mt-8">
            <img
              src={saidImage}
              alt="said Image"
              loading="eager"
              width="460"
              height="480"
              className="h-[25rem] w-full rounded-full object-contain opacity-100 lg:h-[30rem]"
            />
          </div>
        </div>
        <div className="mt-8">
          <div
            onClick={downloadPDF}
            className="flex cursor-pointer items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
          >
            <span>Said Magdy Resume</span>
            <LuImport className="ml-2" />
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </section>
  );
};

export default Hero;
