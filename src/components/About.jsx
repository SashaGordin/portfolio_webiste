import React from 'react';

const About = () => {
  return (
    <div id="about" name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className="sm:text-right text-4xl font-bold">
            <p className="">
              Hi. I'm Sasha nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
            Software Engineer with a B.S. in C.S. from the University of Washington seeking
            growth opportunity in the software field. Experience in modern software development,
            including building projects from wireframe to deployment in agile settings. I possess an
            intellectual curiosity, a team-focused attitude, and a willingness to learn.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;