import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          // <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="adobephotoshop" />,
        ],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  // {
  //   title: "experience",
  //   info: [
  //     {
  //       title: "UX/UI Designer - XYZ Company",
  //       stage: "2012 - 2023",
  //     },
  //     {
  //       title: "Web Developer - ABC Agency",
  //       stage: "2010 - 2012",
  //     },
  //     {
  //       title: "Intern - DEF Corporation",
  //       stage: "2008 - 2010",
  //     },
  //   ],
  // },
  {
    title: "credentials",
    info: [
      {
        title: "Certificate of Advanced React Authorized By Meta.",
        stage: "2023",
      },
      {
        title: "Certificate of Front-End Development Authorized By Meta.",
        stage: "2022",
      },
      {
        title:
          "Bachelor’s in Computer Science from Federal Urdu University, Karachi.",
        stage: "2019-Present",
      },
      {
        title:
          "Intermediate in Pre-Engineering From Islamia Science College,Karachi",
        stage: "2017-2019",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

import { icons } from "react-icons";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className=" h-full bg-[#1f1f1f] py-32 text-center xl:text-left ">
      <Circles />

      {/* avatar image */}

      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div> */}
      <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}

        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            captivating <span className="text-[#28e98c]">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I&apos;m a computer science student pursuing Bechelor in Computer Science
            from Federal Urdu University Of Art Science And Technology, Karachi
            Pakistan. I&apos;m a learning Fullstack Development by self practice.
            Currently I&apos;m Searching for Internship.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 gap-x-6">
              {/* experience */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#28e98c] mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#28e98c] mb-2">
                  <CountUp start={0} end={6} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className=" relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#28e98c] mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards */}
              {/* <div className=" relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#28e98c] mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* info */}

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` ${
                    index === index &&
                    " text-[#28e98c] after:w-[100%] after:bg-[#28e98c] after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(index)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}

                  <div key={index} className="font-light mb-2 md:mb-0">
                    {item.title}
                  </div>
                  <div key={index} className="hidden md:flex">
                    -
                  </div>
                  <div key={index}>{item.stage}</div>
                  <div  className="flex gap-x-4">
                    {/* icons */}

                    {item.icons?.map((icon, index) => {
                      return (
                        <div key={index} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
