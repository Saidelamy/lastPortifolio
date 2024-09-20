import { Link, NavLink } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section className="container m-auto p-8" id="projects">
      <h2 className="lg:8xl my-10 text-center text-3xl">My Work</h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {PROJECTS.map((project) => (
          <Link
            as={NavLink}
            key={project.id}
            // href={project.link}
            to={`project/${project.id}`}
            // target="_blank"
            rel="said"
            className="block"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="h-80 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 m-3 p-8 text-3xl text-white backdrop-brightness-50">
                {project.title}
                <p className="max-w-xs text-lg">
                  {project.description.slice(0, 45) + '...'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
