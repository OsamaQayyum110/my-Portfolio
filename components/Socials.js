//next link
import Link from "next/link";

//icons
import {
  RiGithubFill,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { SiFiverr } from 'react-icons/si'
import{MdOutlineMail} from 'react-icons/md'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/OsamaQayyum110"}
        className=" hover:text-[#28e98c] transition-all duration-300"
        target="_blank"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.facebook.com/osama.qayyum.589/"}
        className=" hover:text-[#28e98c] transition-all duration-300"
        target="_blank"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.instagram.com/osama_qayyum_/"}
        className=" hover:text-[#28e98c] transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/osama-qayyum-789a15232/"}
        className=" hover:text-[#28e98c] transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"mailto:osamaqayyum110@gmail.com.com"}
        className=" hover:text-[#28e98c] transition-all duration-300"
        target="_blank"
      >
        <MdOutlineMail />
      </Link>
      <Link
        href={"https://www.fiverr.com/osamaqayyum110?up_rollout=true"}
        className=" hover:text-[#28e98c] transition-all text-4xl duration-300"
        target="_blank"
      >
        <SiFiverr />
      </Link>
    </div>
  );
};

export default Socials;
