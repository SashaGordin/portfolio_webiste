import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFilePdf} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import Logo from '../assets/AGF.png';
import { useLocation, useNavigate} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const location = useLocation();
  const navigate = useNavigate();
  const hideIcons = location.pathname.includes('/projects/');

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <button onClick={() => navigate('/')} className="focus:outline-none">
          <img src={Logo} alt="Logo" style={{ width: '50px' }} />
        </button>
      </div>

      {/* menu */}
      {hideIcons ? (
          <button className="hover:border-b-2 hover:border-pink-600" onClick={() => navigate('/')}>Back to Homepage</button>
      ) : (
        <ul className="hidden md:flex">
          <li>
            <ScrollLink className="hover:border-b-2 hover:border-pink-600"
            to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="hover:border-b-2 hover:border-pink-600"
            to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="hover:border-b-2 hover:border-pink-600"
            to="skills" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className=" hover:border-b-2 hover:border-pink-600"
            to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="hover:border-b-2 hover:border-pink-600"
            to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      )}

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className='py-6 text-4xl'>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          <ScrollLink to="skills" smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      {/* social icons */}
      {hideIcons ? null : (
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full' href="https://www.Linkedin.com/in/sashagordin/" target="_blank" rel="noreferrer">
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full' href="https://github.com/SashaGordin" target="_blank" rel="noreferrer">
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full' href="mailto:sashagordin22@gmail.com">
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full' href="/Aleksandr_Gordin_Resume.pdf" download>
                Resume <FaFilePdf size={30}/>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;