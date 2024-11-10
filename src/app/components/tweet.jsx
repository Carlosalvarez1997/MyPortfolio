import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';

const ProjectCard = ({ title, description, hashtags, techStack, images, logoColor }) => (
  <div className="bg-white rounded-xl border border-gray-300 shadow-md p-4 w-full tablet:w-3/4 max-w-2xl my-5 hover:shadow-2xl hover:translate-y-3 hover:shadow-black">
    {/* Profile Section */}
    <div className="flex items-center space-x-4 pb-4">
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
        <span className="text-blue-500">{hashtags}</span>
      </p>

      {/* Tech Stack Section */}
      <div className="flex space-x-4 mb-4">
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center space-x-1">
            <tech.icon style={{ color: tech.color }} />
            <span className="text-sm text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Conditional Rendering for Images with Indicator */}
      {images.length > 1 ? (
        <div className="relative">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image 
                  src={src} 
                  alt={`Project screenshot ${index + 1}`} 
                  className="rounded-lg border border-gray-200 shadow-sm w-full"
                  width={500} 
                  height={300}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        
          
        </div>
      ) : (
        <Image 
          src={images[0]} 
          alt="Project screenshot" 
          className="rounded-lg border border-gray-200 shadow-sm w-full" 
          width={500} 
          height={300}
        />
      )}
    </div>
  </div>
);

export default ProjectCard;
