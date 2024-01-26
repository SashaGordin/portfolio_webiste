// return (
//   <div className="h-full">
//     <div className="h-full flex items-center flex-col">
//       <h2 className="mt-[80px] text-3xl font-bold text-gray-300 py-2 border-b-4 border-pink-600">{currentProject.projectName}</h2>

//       <div className="flex flex-col md:flex-row items-center justify-center">
//         {/* Video Section */}
//         {currentProject.video.orientation === "vertical" && (
//           <div className="w-full md:w-1/2 mb-4 md:mb-0">
//             <div
//               className="px-10"
//               style={{ maxWidth: `calc((100vh - 200px) * ${aspectRatio/2})`, maxHeight: 'calc(80vh - 80px)', width: '100%' }}
//             >
//               <video className="object-cover w-full h-full" controls>
//                 <source src={videoUrl} type="video/mp4" />
//               </video>
//             </div>
//           </div>
//         )}

//         {currentProject.video.orientation === "horizontal" && (
//           <div className="w-full md:w-1/2 mb-4 md:mb-0">
//             <div className="w-full px-10 max-h-full overflow-hidden" style={{ maxHeight: '80vh', maxWidth: '100%' }}>
//               <video className="w-full h-auto object-contain" controls>
//                 <source src={videoUrl} type="video/mp4" />
//               </video>
//             </div>
//           </div>
//         )}

//         {/* Options */}
//         <div className="w-full md:w-1/2 p-8 flex flex-col">
//           <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4 text-gray-300">
//             <button
//               className={`option-btn ${selectedOption === 'summary' && 'border-b-2 border-pink-500'}`}
//               onClick={() => handleOptionSelect('summary')}
//             >
//               Summary
//             </button>
//             <button
//               className={`option-btn ${selectedOption === 'techStack' && 'border-b-2 border-pink-500'}`}
//               onClick={() => handleOptionSelect('techStack')}
//             >
//               Tech Stack
//             </button>
//             <a
//               className="option-btn text-blue-500"
//               href={currentProject.github}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View on GitHub
//             </a>
//           </div>

//           {/* Content based on selected option */}
//           <div className="text-left text-gray-300">
//             {selectedOption === 'summary' && (
//               <div>
//                 <h2 className="text-2xl font-bold">Project Summary</h2>
//                 <p>{currentProject.summary}</p>
//                 <br />
//                 <p>{currentProject.explanation}</p>
//               </div>
//             )}
//             {selectedOption === 'techStack' && (
//               <div>
//                 <h2 className="text-2xl font-bold">Tech Stack</h2>
//                 <p>{currentProject.techStack}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );