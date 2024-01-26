import React from 'react';

import { Link } from 'react-router-dom';

const Projects = ({projects}) => {
  return (
    <div id="projects" name='projects' className='min-h-screen text-gray-300 bg-[#0a192f] overflow-y-auto'>
      <div className ='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <div key={project.projectId} style={{backgroundImage: `url(${project.image})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className={`${project.projectId === 'SDC' ? 'text-1xl' : 'text-2xl'} font-bold text-white tracking-wider`}>
                  {project.projectName}
                </span>
                <div className='pt-8 text-center'>
                  <Link to={`/projects/${project.projectId}`}
                  spy={true} duration={500} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 front-bold text-lg'>View Project</Link>
                </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;

