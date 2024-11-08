import Image from 'next/image';

const ProjectCard = ({ title, description, hashtags, techStack, imageSrc, logoColor }) => (
  <div className="bg-white rounded-xl border border-gray-300 shadow-md p-4 w-full tablet:w-3/4 max-w-2xl">
    {/* Profile Section */}
    <div className="flex items-center space-x-4 pb-4">
      {/* Optional Profile Image */}
      {/* <Image src={profileImg} alt="Profile" className="rounded-full" width={48} height={48} /> */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Carlos Alvarez</h2>
        <p className="text-sm text-gray-500">@CarlosAlvarez</p>
      </div>
    </div>

    {/* Project Content */}
    <div className="text-gray-700">
      <p className="text-lg mb-2 font-semibold" style={{ color: logoColor }}>{title}</p>
      <p className="text-sm tablet:text-base mb-4 leading-relaxed">
        {description}
        <br />
        <br />
        <span className="text-gray-500">{hashtags}</span>
      </p>

      {/* Tech Stack Section */}
      <div className="flex space-x-4 mb-4">
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center space-x-1">
            <tech.icon style={{ color: tech.color }} /> {/* Apply the color prop here */}
            <span className="text-sm text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Project Image */}
      <Image 
        src={imageSrc} 
        alt="Project screenshot" 
        className="rounded-lg border border-gray-200 shadow-sm w-full" 
      />
    </div>
  </div>
);

export default ProjectCard;
