import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I'm Vinay Krishna, a Full-Stack Developer specializing in web development. I have a strong passion for building scalable, efficient, and user-friendly web applications. With expertise in React.js for front-end development, Node.js for backend JavaScript applications, and the Django framework for Python-based backend solutions, I strive to create seamless digital experiences.

I am continuously expanding my knowledge to master modern web technologies and stay ahead in the ever-evolving tech landscape. Beyond coding, I enjoy continuous learning and sharing knowledge to inspire others on their journey to success.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
