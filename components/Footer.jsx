import React from 'react';
import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoInstagram, BiCodeAlt ,BiCurrentLocation,BiPhone,BiLogoGmail} from 'react-icons/bi';
import LastFooter from './LastFooter';

export default function Footer() {
  return (
    <>
        <section  className='ph:grid ph:grid-cols-2 ph:gap-4 w-full ph:h-[50vh] h-[20vh] my-10  '>
            <div className='ph:flex ph:flex-col ph:justify-center ph:items-center hidden'>
                <div className='w-full flex justify-center'>
                    <img className="h-[10vh] w-[13rem]" src="black-icon.jpeg" alt="Sampath" />
                </div>                
                <div className="flex flex-row justify-center mx-4 w-full h-16 my-6 ">
                    <span className="mr-10">
                    <a href="https://www.linkedin.com/in/praveen-sampath-kumar-parvathini-8960a320a/" target="_blank" rel="noopener noreferrer">
                        <BiLogoLinkedinSquare className="w-8 h-8 border-2 rounded-md  border-orange-600" />
                    </a>
                    </span>
                    <span className="mr-10">
                    <a href="https://github.com/Sampathkumar142" target="_blank" rel="noopener noreferrer">
                        <BiLogoGithub className="w-8 h-8 border-2 rounded-md  border-orange-600" />
                    </a>
                    </span>
                    <span className="mr-10">
                    <a href="https://instagram.com/thenameissampath27" target="_blank" rel="noopener noreferrer">
                        <BiLogoInstagram className="w-8 h-8 border-2 rounded-md  border-orange-600" />
                    </a>
                    </span>
                    <span className="mr-10">
                    <a href="https://leetcode.com/user6568gu/" target="_blank" rel="noopener noreferrer">
                        <BiCodeAlt className="w-8 h-8 border-2 rounded-md  border-orange-600" />
                    </a>
                    </span>
                </div>
            </div>

            <div className='flex ph:items-center ph:justify-center items-start ph:m-10 m-4 '>
                <div className='items-center'>
                    <h3 className='mb-4 ph:text-sm text-[10px]'> <BiCurrentLocation className='inline   ph:mr-4  h-[30px] w-[30px] mr-2 border-2 rounded-md  border-orange-600'/> DNo:1-42, munsif Street, Rayavarm, EastGodavari, Ap, India-53346</h3>
                    <h3 className='mb-4 ph:text-sm text-[10px]'> <BiPhone className='inline  ph:mr-4  h-[30px] w-[30px] mr-2 border-2 rounded-md  border-orange-600'/><a href="tel:+917995736123">+91 7995736123</a></h3>
                    <h3 className='ph:text-sm text-[10px]' > <BiLogoGmail className='inline   ph:mr-4  h-[30px] w-[30px] mr-2 border-2 rounded-md  border-orange-600 p-1'/><a href="mailto:praveensampathkumar.parvathini@gmail.com">praveensampathkumar.parvathini@gmail.com</a></h3>
                </div>
            </div>
        </section>
        <LastFooter></LastFooter>
    </>
  )
}
