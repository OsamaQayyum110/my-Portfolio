import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Creating sleek websites to boost your brand globally.",
  },
  {
    icon: <RxPencil2 />,
    title: "UI/UX Design",
    description: "Crafting Branding, UI, and Digital Solutions for Businesses.",
  },
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description: "Professional, affordable website design to boost your brand.",
  },
  // {
  //   icon: <RxReader />,
  //   title: "Copywriting",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  {
    icon: <RxRocket />,
    title: "Logo Designing",
    description: "Designing logos and posters for trustful brand identity.",
  },
];

// import required modules
import { FreeMode, Pagination, pagination } from 'swiper';

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween:15,
        }
      }}
      freeMode={true}
      pagination={{
        clickable:true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" bg-[#262e2a52] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#2e463a] transition-all duration-300">
              {/* icons */}
              <div className="text-4xl text-[#28e98c] mb-4">{item.icon}</div>
              {/* title & description */} 
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className=" max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>

              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className=" group-hover:rotate-45 group-hover:text-[#28e98c] transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
