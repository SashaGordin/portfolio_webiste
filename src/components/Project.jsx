import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Project = ({projects}) => {
  const { projectId } = useParams();
  const [selectedOption, setSelectedOption] = useState('summary');
  const currentProject = projects.find((proj) => proj.projectId === projectId);


  const [aspectRatio, setAspectRatio] = useState(16 / 9); // Default aspect ratio (16:9)
  // Other state variables...

  useEffect(() => {
    // Calculate aspect ratio dynamically based on screen size
    const calculateAspectRatio = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const headerHeight = 80; // Adjust this value based on the actual height of the h2 element
      const paddingHeight = 16; // Adjust this value based on the actual padding or spacing
      const videoWidthRatio = 0.5; // Adjust this value for half of the screen width
      const newAspectRatio = screenWidth > 0 ? (screenWidth * videoWidthRatio) / (screenHeight - headerHeight - paddingHeight) : 16 / 9;
      setAspectRatio(newAspectRatio);
    };

    // Initial calculation
    calculateAspectRatio();

    // Recalculate on window resize
    window.addEventListener('resize', calculateAspectRatio);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateAspectRatio);
    };
  }, []);

  // Placeholder video URL
  let videoUrl = currentProject.video.link;


  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const maxWidthStyle = window.innerWidth >= 768
  ? { maxWidth: `calc((100vh - 140px) * ${aspectRatio / 2})` }
  : { maxWidth: '80%' };


  return (
    <div className="h-full" >
      <div className="h-full flex items-center flex-col">
        <h2 className="mt-[80px] text-3xl font-bold text-gray-300 py-2 border-b-4 border-pink-600 my-4">{currentProject.projectName}</h2>
        <div className="flex h-full flex-col md:flex-row items-center justify-center">
          {/* Video Section */}
          {currentProject.video.orientation === "vertical" && (
            <div className="flex justify-center items-center w-full md:w-1/2">
              <div
                className={`px-10`}
                style={{ // Default to full width
                  ...maxWidthStyle,
                  maxHeight: 'calc(80vh - 80px)', width: '100%' }}
              >
                <video className="object-cover w-full h-full" controls>
                  <source src={videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          )}
          {currentProject.video.orientation === "horizontal" && (
            <div className="w-full md:w-1/2 h-full flex justify-center items-center">
             <div className="w-full px-10 max-h-full overflow-hidden" style={{ maxHeight: '80vh', maxWidth: '100%' }}>
               <video className="w-full h-auto object-contain" controls>
                 <source src={videoUrl} type="video/mp4" />
               </video>
             </div>
           </div>
          )}
          {/* Options */}
          <div className="w-full md:w-1/2 p-8 flex flex-col ">
            <div className="flex space-x-4 mb-4 text-gray-300">
              <button
                className={`option-btn ${selectedOption === 'summary' && 'border-b-2 border-pink-500'}`}
                onClick={() => handleOptionSelect('summary')}
              >
                Summary
              </button>
              <button
                className={`option-btn ${selectedOption === 'techStack' && 'border-b-2 border-pink-500'}`}
                onClick={() => handleOptionSelect('techStack')}
              >
                Tech Stack
              </button>
              <a
                className="text-blue-500"
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>

            {/* Content based on selected option */}
            <div className='text-left text-gray-300'>
              {selectedOption === 'summary' && (
                <div>
                  <h2 className="text-2xl font-bold">Project Summary</h2>
                  <p>{currentProject.summary} </p>
                  <br />
                  <p>
                    {currentProject.explanation}
                  </p>
                </div>
              )}
              {selectedOption === 'techStack' && (
                <div>
                  <h2 className="text-2xl font-bold">Tech Stack</h2>
                  <p>{currentProject.techStack}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;