import React from 'react';
import FEC from '../assets/FEC.jpg'
import SDC from '../assets/SDC.jpg'
import MVP from '../assets/MVP.png'
import BlueOcean from '../assets/BO.png'

const Work = () => {
  return (
    <div name='projects' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      <div className ='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div style={{backgroundImage: `url(${FEC})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Frontend Capstone
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 front-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/FEC-CLL/FEC" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 front-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${SDC})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
                System Design Capstone
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 front-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/SDC-SwellSpinach/Products" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 front-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${MVP})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Contractors Delight
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 front-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/SashaGordin/MVP" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 front-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${BlueOcean})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                One Adventure
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 front-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/One-Piece-Blue-Ocean/OneAdventure" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 front-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;