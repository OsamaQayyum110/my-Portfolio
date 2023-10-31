// testimonial data
const testimonialData = [
  {
    image: "/t-avt-11.png",
    name: "Talha Noshad",
    position: "Customer",
    message:
      "I recently hired Osama Qayyum, and the website he developed is nothing short of fantastic. Great job, highly recommended!",
  },
  {
    image: "/t-avt-12.png",
    name: "Hamza Rizwan",
    position: "Customer",
    message:
      "Osama Qayyum's expertise shone through in the fantastic website he developed for me. Impressed with the professionalism and seamless execution!",
  },
  // {
  //   image: "/t-avt-3.png",
  //   name: "Jhon Doe",
  //   position: "Customer",
  //   message:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  // },
];

//import swiper component react
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";


// import required modules
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

//icons
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSlider = () => {
  return (
    <Swiper
      
      navigation={true}
      pagination={{
        clickable:true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center relative mx-auto xl:mx-0' >
                <div className=' flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto' >
                    <Image src={person.image} width={100} height={100} alt=''/>
                  </div>
                  {/* name */}
                  <div className=' text-lg'>{person.name}</div>
                  {/* position */}
                  <div className=' text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* qoute & message */}
              <div className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px]  relative xl:pl-20">
                {/* qoute icon */}
                <div className="mb-4">
                  <FaQuoteLeft className=" text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0 " />
                </div>
                {/* message */}
                <div className=' xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
