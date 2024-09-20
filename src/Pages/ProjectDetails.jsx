import { useParams } from 'react-router-dom';
import { PROJECTS } from './../constants/index';
const ProjectDetails = () => {
  const { productId } = useParams();

  const projectDetail = PROJECTS.find(
    (project) => project.id === parseInt(productId),
  );

  const { description, imgSrc, githubLink, liveLink, title, technologiesUsed } =
    projectDetail;
  const splitTechText = technologiesUsed.split(', ');

  console.log(productId, projectDetail, splitTechText);
  return (
    <section className="container m-auto">
      <h1 className="mt-20 border-b-2 border-lime-300 p-5 text-4xl text-white lg:text-7xl">
        {title}
      </h1>
      <div className="grid p-5 lg:grid-cols-12 lg:gap-x-9 lg:p-0">
        <div className="col-span-12 lg:col-span-8">
          <img
            className="w-full object-contain lg:h-[30rem]"
            src={imgSrc}
            alt={title}
          />
        </div>

        <div className="col-span-12 flex flex-col items-start justify-center gap-5 lg:col-span-4">
          <div className="text-white">
            <p className="mt-3 text-lg">{description}</p>
          </div>
          <div className="flex flex-wrap gap-1 [&>*]:border-2 [&>*]:bg-white [&>*]:px-2 [&>*]:opacity-50">
            {splitTechText.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              className="bg-lime-300 px-5 py-3 text-lg text-black hover:bg-lime-500"
              href={githubLink}
              target="_blank"
            >
              Github Repo
            </a>
            {liveLink ? (
              <a
                className="bg-lime-300 px-5 py-3 text-lg text-black hover:bg-lime-500"
                href={liveLink}
                target="_blanck"
              >
                Live Demo
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
