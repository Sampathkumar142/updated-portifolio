import Image from "next/image";
import HeroImage from "../public/asserts/BG.jpg";

import {
  BiCodeAlt,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

const MainTheme = () => (
  <section className="ph:grid ph:grid-cols-2 ph:gap-20 flex flex-col mt-10 sm:pl-12">
    <div className="sm:w-2/3 w-full ph:mt-6 ph:items-center ph:justify-end  flex justify-center ">
      <Image className="h-full rounded-md" alt="Hero Image" src={HeroImage} />
    </div>
    <div className="flex flex-col">
      <div className="flex flex-col mx-2 ph:mt-[25%] ph:mb-5 mt-4 ">
        <p className="ph:my-2 my-1 ph:text-base text-[10px]">Hello I'm</p>
        <h2 className="my-1 ph:text-3xl text-[18px] font-bold">
          <span className="text-orange-600">Praveen Sampath Kumar</span>{" "}
          Parvathini
        </h2>
        <p className="my-1 ph:text-xs text-[10px]">Student At PEC</p>
      </div>
      <div className="flex flex-col  justify-start  ph:mx-1 mx-2">
        <a
          className="mb-2 "
          href="mailto:praveensampathkumar.parvathini@gmail.com"
        >
          <p className="ph:text-sm text-ellipsis text-[12px] text-[#19A7CE]">
            praveensampathkumar.parvathini@gmail.com
          </p>
        </a>
        <p className="mb-2 ph:text-sm text-xs">
          Rayavaram, Konaseema District, AP, India-53346
        </p>
      </div>
      <div className="flex justify-center sm:justify-start space-x-8 py-4">
        <span className="">
          <a
            href="https://www.linkedin.com/in/praveen-sampath-kumar-parvathini-8960a320a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedinSquare className="ph:w-8 ph:h-8 w-6 h-6  rounded-md" />
          </a>
        </span>
        <span className="">
          <a
            href="https://github.com/Sampathkumar142"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGithub className="ph:w-8 ph:h-8 w-6 h-6  rounded-md" />
          </a>
        </span>
        <span className="">
          <a
            href="https://instagram.com/thenameissampath27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagram className="ph:w-8 ph:h-8 w-6 h-6 rounded-md" />
          </a>
        </span>
        <span className="">
          <a
            href="https://leetcode.com/user6568gu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiCodeAlt className="ph:w-8 ph:h-8 w-6 h-6 rounded-md" />
          </a>
        </span>
      </div>
    </div>
  </section>
);

export default MainTheme;
