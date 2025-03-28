const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10 shadow-primary">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg shadow">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
             Food Truck
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A MERN stack Foodtruck platform where users can Search Foods,
              view Shop, and connect with Shop Owner. Built using
              MongoDB, Express, React, Node.js, and styled with CSS.
            </p>
            <a
              href="https://effortless-hamster-fd2008.netlify.app/"target="_blank"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Biosta AI Project */}
          <div className=" shadoww-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              crud
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              An AI-based platform that optimizes user bio data using the Gemini
              API. Developed with React.js, this app helps users to improve
              their biological data using advanced AI algorithms.
            </p>
            <a
              href="https://bespoke-taiyaki-d40a38.netlify.app/" target="_blank" 
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
       
        </div>
      </div>
   
  );
};

export default Project;
