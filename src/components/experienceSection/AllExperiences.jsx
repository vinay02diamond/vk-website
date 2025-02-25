import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Plantpure",
    date: "2023 - 2024",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Fullstack developer",
    company: "Shivafund",
    date: "2024 - Present",
    responsibilities: [
      "User Interaction: Developed an Assistance and Contact form to collect and email user input",
      "Responsive & Secure: Ensured a mobile-friendly design with secure data handling.",
    ],
  },
  {
    job: "Freelance Web Developer",
    company: "Upwork",
    date: "2024 - Present",
    responsibilities: [
      "Building websites with JavaScript, React and TailwindCSS.",
      "Solving backend problems for clients with Node.js,django.",
      "Helping integrate Sql and mongoDB databses.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
