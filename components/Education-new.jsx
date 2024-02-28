"use client"

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons from react-icons library

const EducationNew = () => {
  const educationData = [
    {
      year: '2020-2024',
      degree: "Bachelor's Degree",
      institution: 'Pragati Engineering College',
      course: 'Computer Science and Engineering (Data Science)',
    },
    {
      year: '2018-2020',
      degree: 'Intermediate',
      institution: 'Narayana Junior College',
      course: 'Maths, Physics, Chemistry',
    },
    {
      year: '2017-2018',
      degree: 'School of Secondary Education',
      institution: 'Vignan English Medium School',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === educationData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? educationData.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    // Automatically change card every 5 seconds
    const intervalId = setInterval(handleNext, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className='w-full'>
      <div className='w-full flex flex-col'>
        <h1 className='ph:text-3xl text-xl  font-bold underline underline-offset-4 m-2 decoration-orange-600 decoration-2 items-center'>
          My Education
        </h1>
        <div className='relative w-[95%] sm:w-2.5/3 md:w-1 lg:w-1/2 mx-auto flex my-2'
        style={{
            transition: 'transform 0.3s ease-out', // Add transition for smooth animation
          }}>
            <div className='relative m-2 mr-4 flex flex-col justify-center '>
                <button className='text-white p-3 border border-solid border-white rounded-[50%]' onClick={handlePrev}>
                    <FaChevronLeft />
                </button>
            </div>
            <div className='relative p-3 text-white rounded-2xl bg-gradient-to-r from-[#1e242e] to-gray-900 border border-solid  border-l-orange-600 '>
                <p className='text-[#19A7CE] font-extrabold ph:text-2xl text-xs py-2'>{educationData[currentIndex].year}</p>
                <h2 className='text-gray-500 ph:text-xl text-sm font-semibold py-2'>{educationData[currentIndex].degree}</h2>
                <h3 className='text-[#E9F6FF] my-3 ph:text-2xl text-base font-bold'>{educationData[currentIndex].institution}</h3>
                {educationData[currentIndex].course && (
                    <h3 className=' ph:text-sm text-xs text-[#669cb1] italic '>{educationData[currentIndex].course}</h3>
                )}
            </div>
            <div className='relative m-2 ml-4 flex flex-col justify-center '>
                <button className='text-white p-3 border border-solid border-white rounded-[50%]' onClick={handlePrev}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default EducationNew;
