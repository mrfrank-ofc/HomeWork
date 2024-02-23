import React, { useState } from 'react';
import { projects } from '../../../Helpers/ProjectData';
import { Project } from '../../../Helpers/ProjectTypes';
import { IoIosLink, IoLogoGithub } from 'react-icons/io';

const ProjectsScreen: React.FC = () => {
  // Estado para controlar a expansão de cada projeto individualmente
  const [expandedIds, setExpandedIds] = useState<{ [key: number]: boolean }>({});

  // Função para alternar a exibição completa da descrição de um projeto específico
  const toggleIsExpanded = (projectId: number) => {
    setExpandedIds(prev => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  return (
    <div className='md:px-10 lg:px-20 xl:px-40 py-12 bg-sectionLight dark:bg-sectionDark min-h-screen'>
      <h2 className='text-3xl font-bold mb-8 text-center font-heading'>Projects</h2>
      <h3 className='text-xl mb-12 text-center font-body'>Things I've built so far</h3>

      {/* Layout para dispositivos móveis com rolagem lateral */}
      <div className='flex md:hidden gap-x-4 overflow-x-auto pb-8'>
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className='flex-shrink-0 bg-light dark:bg-dark rounded-2xl shadow-lg m-4'
            style={{ width: '18rem', minHeight: '24rem' }}
          >
            <img src={project.imageUrl} alt={project.title} className='rounded-t-xl object-cover w-full h-48' />
            <div className='p-4'>
              <h4 className='font-bold text-lg mb-2 font-heading'>{project.title}</h4>
              <p className='text-sm font-body'>
                {expandedIds[project.id] ? project.description : `${project.description.substring(0, 100)}...`}
              </p>
              {project.description.length > 100 && (
                <button
                  onClick={() => toggleIsExpanded(project.id)}
                  className='text-blue-500 text-xs mt-2 font-body'
                >
                  {expandedIds[project.id] ? 'Read Less' : 'Read More'}
                </button>
              )}
              <div className='mt-4 flex justify-between items-center text-sm font-body'>
                <a href={project.previewUrl} className='flex items-center underline hover:no-underline'>
                  <IoIosLink className='mr-2' />Live Preview
                </a>
                <a href={project.codeUrl} className='flex items-center underline hover:no-underline'>
                  <IoLogoGithub className='mr-2' />View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Layout de grid para desktop */}
      <div className='hidden md:grid  md:grid-cols-4 md:gap-4 place-items-center'>
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className='bg-light dark:bg-dark rounded-2xl shadow-lg transition duration-500 hover:scale-105 m-4 '
            style={{width: '18rem', minHeight: '24rem' }}
          >
            <img src={project.imageUrl} alt={project.title} className='rounded-t-xl object-cover w-full h-48' />
            <div className='p-4'>
              <h4 className='font-bold text-1xl mb-2 font-heading'>{project.title}</h4>
              <p className='text-sm font-body'>
                {expandedIds[project.id] ? project.description : `${project.description.substring(0, 100)}...`}
              </p>
              {project.description.length > 100 && (
                <button
                  onClick={() => toggleIsExpanded(project.id)}
                  className='text-blue-500 text-xs mt-2 font-body'
                >
                  {expandedIds[project.id] ? 'Read Less' : 'Read More'}
                </button>
              )}
              <div className='mt-4 flex justify-between items-center text-sm font-body'>
                <a href={project.previewUrl} className='flex items-center underline hover:no-underline'>
                  <IoIosLink className='mr-2' />Live Preview
                </a>
                <a href={project.codeUrl} className='flex items-center underline hover:no-underline'>
                  <IoLogoGithub className='mr-2' />View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsScreen;
