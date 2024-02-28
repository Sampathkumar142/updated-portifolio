// components/Skills.js
import React from 'react';

function Skills() {
  const skillsData = [
    {
      title: 'Programming Languages',
      items: ['Python', 'Java', 'JavaScript'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['React JS', 'Django', 'Tailwind CSS', 'MySql', 'Mongodb'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Azure', 'Git&Github', 'Visual Studio', 'Jupyter'],
    },
    {
      title: 'Others',
      items: ['Html5 & CSS', 'SQl', 'Data Science', 'Machine Learning'],
    },
    {
      title: 'Extra Circular Activities',
      items: ['Teaching', 'Public Speaking', 'Research'],
    },
  ];

  return (
    <div className="ph:m-8 ph:p-2 m-3 p-1">
      <h2 className='ph:text-2xl text-lg underline underline-offset-4 decoration-orange-600 decoration-solid decoration-2 font-bold'> Skills</h2>
      <div className='flex flex-col '>
        {skillsData.map((category, index) => (
          <div key={index} className='m-2'>
            <h1 className='ph:text-base text-xs text-[#19A7CE] font-semibold underline underline-offset-8 decoration-2  decoration-slate-100 my-4'>{category.title}</h1>
            <ul className='flex flex-row  my-2 ph:text-sm text-[11px] overflow-x-auto'>
              {category.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={`mr-4 bg-[#374b73] text-bold p-2 rounded-lg text-white `}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
