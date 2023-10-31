// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";
import { FaSadCry } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" h-full bg-[#1f1f1f]">
      <div className=" container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className=" flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            action="https://formspree.io/f/meqbnroj"
            method="POST"
          >
            {/* input group */}
            <div className=" flex gap-x-6 w-full">
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
              />
            </div>
            <input
              type="subject"
              name="subject"
              placeholder="Subject"
              className="input"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
            ></textarea>
            <button
              type="submit"
              className=" btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group:"
            >
              <span className=" group-hover:-translate-y-[120%]  group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className=" -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
