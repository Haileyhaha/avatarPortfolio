import React, { useState } from 'react'
import { projects} from '../constans'
import { Link } from 'react-router-dom'
import { arrow, math } from '../assets/icons'
import CTA from '../components/CTA'
import 'animate.css';

const Projects = () => {

  return (
    <section className='max-container'>
      <h1 className='head-text mt-20 animate__animated animate__jackInTheBox'>
        My <span className='mr-2 blue-gradient_text font-semibold drop-shadow'>Project</span>
        & <span className='blue-gradient_text font-semibold drop-shadow'>Study Notes</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p className='animate__animated animate__lightSpeedInLeft'>제가 진행한 프로젝트와 학습 내용을 정리한 자료입니다.</p>
      </div>

      <div className='flex flex-wrap my-20 gap-20'>
        {projects.map((project) => (
          <div className='lg:w-[500px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-500'>
                  {project.description}
                </p>
                <div className='mt-5 flex items-center gap-2 font-poppins transition-transform duration-300 hover:translate-x-4'>
                  <Link
                    to={project.link}
                    target='_blank'
                    className='font-semibold text-blue-600 ' 
                  >
                  Go to Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className='w-4 h-4 object-contain'
                  />
                </div>
                {project.div && project.div}
            </div>
          </div>
        ))}
          <Link
            to="https://mathapp-5hpz7fstwv34aoyyuqib8y.streamlit.app/"
            target="_blank"
            className="font-semibold text-blue-600 text-xl hover:scale-105 transition-all duration-300 ease-in-out flex items-center gap-4"
          >
            <img
              src={math}
              alt="Math Icon"
              className="w-10 h-10"
            />
            수학 관련 프로젝트 배포 사이트
          </Link>
      </div>

      <hr className='border-slate-200' />
      <CTA/>
    </section>
  )
}

export default Projects