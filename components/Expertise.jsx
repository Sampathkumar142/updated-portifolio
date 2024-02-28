const expertiseData = [
  {
    title: "Software Development",
    imageSrc: "/asserts/softwaredev.svg",
    description:
      "Systematic process of designing, coding, testing, and maintaining computer programs to meet specific requirements.",
  },
  {
    title: "Software Engineering",
    imageSrc: "/asserts/softwareEng.svg",
    description:
      "Software engineering is the application of engineering principles to the systematic development and maintenance of software systems.",
  },
  {
    title: "Data Science",
    imageSrc: "/asserts/datascience.svg",
    description:
      "Data science involves extracting insights and knowledge from large and complex datasets using a combination of statistical, mathematical, and computational techniques.",
  },
  {
    title: "Cloud Management",
    imageSrc: "/asserts/cloud.svg",
    description:
      "Cloud computing is a technology model that enables on-demand access to a shared pool of configurable computing resources, such as servers, storage, and applications, over the internet, providing scalability, flexibility, and cost-effectiveness.",
  },
];

export default function Expertise() {
  return (
    <section className="my-8 sm:pl-12">
      <div className="flex flex-col">
        <h2 className="text-2xl my-4 font-bold text-slate-200">My Expertise</h2>
        <div className="flex sm:flex-row flex-col gap-4 justify-between my-4">
          {expertiseData.map((expertise, index) => (
            <div
              key={index}
              className="p-4 border-2 rounded-md border-orange-600 w-full sm:w-1/4"
            >
              <img
                className="h-16 w-16 my-2"
                src={expertise.imageSrc}
                alt={expertise.title}
              ></img>
              <h2 className="font-bold text-lg my-1 text-[#19A7CE]">
                {expertise.title}
              </h2>
              <p className="text-xs">{expertise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
