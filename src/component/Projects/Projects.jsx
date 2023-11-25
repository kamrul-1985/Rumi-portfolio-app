import React from 'react';
import img from '../../../src/assets/image/under-maintanence.webp';

const Projects = () => {
      return (
            <div className='h-screen py-12 text-center' id="projects">
            <h1 className='text-5xl text-red-400 font-semibold text-center'>Tis projects Page is under maintainence......</h1>
            <img className='mx-auto' src={img} alt="" />
      </div>
      );
};

export default Projects;