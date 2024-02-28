export default function Bio() {
  return (
    <section className="sm:pl-12 ph:grid ph:grid-cols-2 w-full my-2 ph:gap-4 overflow-auto flex flex-col-reverse">
      <div className=" flex flex-col ph:justify-end items-center ph:m-4 justify-start  m-3 ">
        <h2 className="ph:my-3 my-2 ph:text-xl text-base ">
          Hi, This is{" "}
          <span className="ph:text-2xl text-lg text-[#ff6347]">
            Sampath Kumar Parvathini{" "}
          </span>
          !
        </h2>
        <p className="text-ellipsis ph:text-base text-justify text-xs indent-20">
          I am Parvathini Praveen Sampath Kumar, a passionate individual
          pursuing a Bachelor of Technology in Computer Science and Engineering
          with a specialization in Data Science at Pragati Engineering College,
          Surampalem. My educational journey has equipped me with a strong
          foundation in programming languages such as Python, Java, C, HTML &
          CSS, JavaScript, and SQL. In my internship experiences, I have
          showcased my skills by developing a Photography Studio Setup and
          Management system using Django, Django Rest Framework, CSS, and MySQL.
          This project streamlined digital and physical asset organization,
          retrieval, and tracking, enhancing overall workflow efficiency.
          Additionally, I contributed to the development of a Learn Cooking
          Website using WordPress, HTML & CSS, JavaScript, and Azure web apps,
          providing a platform for showcasing cooking videos. My technical
          skills include proficiency in frameworks and libraries such as Django,
          MySQL, and Tailwind CSS, along with hands-on experience in Azure and
          Git/GitHub. I have completed certifications in Microsoft Azure
          Fundamentals and Microsoft Power Platform Fundamentals, showcasing my
          expertise in cloud computing principles and Power Platform
          technologies.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="ph:h-[50vh] ph:w-[50%] h-[30vh] rounded-[100%]  object-cover"
          src="/asserts/bio.png"
          alt=""
        />
      </div>
    </section>
  );
}
