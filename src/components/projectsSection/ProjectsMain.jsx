import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Shiva Foundation",
    year: "Sep 2024",
    align: "right",
    image: "/vk-website/images/website-img-1.png",  // Corrected path
    link: "#",
  },
  {
    name: "Shot Mail Service",
    year: "March 2024",
    align: "left",
    image: "/vk-website/images/website-img-2.png",
    link: "#",
  },
  {
    name: "Plantpure",
    year: "Nov 2023",
    align: "right",
    image: "/vk-website/images/website-img-3.png",
    link: "#",
  },
  {
    name: "Interiority",
    year: "May 2024",
    align: "left",
    image: "/vk-website/images/website-img-4.jpg",
    link: "#",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
