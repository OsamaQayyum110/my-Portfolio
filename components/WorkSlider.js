// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "GERICHT",
          path: "/thumb11.jpg",
          URL: "https://modern-resturant-website-by-osama.netlify.app/",
        },
        {
          title: "GPT-3",
          path: "/thumb21.jpg",
          URL: "https://gpt-3-by-osama.netlify.app/",
        },
        {
          title: "REACT",
          path: "/thumb31.jpg",
          URL: "https://data-analytics-react.netlify.app/",
        },
        {
          title: "SARAWAN",
          path: "/thumb41.jpg",
          URL: "https://sarawan-eats-and-foods.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "TALHA EVENT",
          path: "/thumb51.jpg",
          URL: "https://talhaeventplanner.web.app/",
        },

        {
          title: "GPT-3",
          path: "/thumb21.jpg",
          URL: "https://gpt-3-by-osama.netlify.app/",
        },

        {
          title: "REACT",
          path: "/thumb31.jpg",
          URL: "https://data-analytics-react.netlify.app/",
        },
        {
          title: "GERICHT",
          path: "/thumb11.jpg",
          URL: "https://modern-resturant-website-by-osama.netlify.app/",
        },
      ],
    },
  ],
};

//import swiper component react
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Image from "next/image";

//icons
import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper
      
      spaceBetween={10}
      pagination={{
        clickable:true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className=" relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div
                      className=" flex items-center justify-center relative overflow-hidden group"
                      
                    >
                      {/* Image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#5ecf98] to-[#4f7563] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                        <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <a className='flex' href={image.URL} target="_blank">
                            <div className=" delay-100 mx-1">{image.title}</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 mx-1">
                            PROJECT 
                          </div>
                          {/* icon */}
                          <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }) }
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;
