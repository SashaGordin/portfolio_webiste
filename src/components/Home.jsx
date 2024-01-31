import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link as ScrollLink} from 'react-scroll';

const Home = () => {
  return (
    <div id="home" name='home' className='w-full bg-[#0a192f] flex flex-col h-screen items-center'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center flex-grow'>
        <p className='text-pink-600 font-bold'>Hi, my name is</p>
        <h1 className ='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sasha Gordin</h1>
        <h2 className ='text-4xl sm:text-7xl font-bold text-[rgb(136,146,176)]'>I'm a Full Stack Developer.</h2>
        <div>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
            <button className='text-white group border-2 px-6 py-3 my-6 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className="ml-3"/>
              </span>
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

export default Home;