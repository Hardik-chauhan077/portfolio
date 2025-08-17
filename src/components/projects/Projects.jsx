import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree,projectFourth, sample } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Air Nib"
          des="Airbnb’s website is a clean, visually engaging platform with a prominent search bar, stunning imagery, easy navigation, and powerful filters, designed to help users quickly find and book unique stays or experiences"
          src={projectOne}
          githubLink="https://github.com/Hardik-chauhan077/Wanderlust-Major-Project.git"
          liveLink="https://wanderlust-major-project-44yy.onrender.com/listings"
        />
        <ProjectsCard
          title="Simon Game"
          des="A fun memory-based Simon Game built with JavaScript featuring interactive sound and color patterns"
          src={projectTwo}
          githubLink="https://github.com/Hardik-chauhan077/Simon.git"
          liveLink="https://hardik-chauhan077.github.io/Simon/"
        />
        <ProjectsCard
          title="Meme Maker"
          des="A fun web app to create and customize memes instantly with an easy-to-use interface, built using React and Vite."
          src={projectThree}
          githubLink="https://github.com/Hardik-chauhan077/Meme_maker.git"
          liveLink="https://meme-maker-tau-blond.vercel.app/"
        />
        <ProjectsCard
          title="Portfolio Website"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFourth}
          githubLink="https://github.com/yourusername/portfolio"
          liveLink="https://yourportfolio.vercel.app"
        />
        <ProjectsCard
          title="Blog Platform"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={sample}
          githubLink="https://github.com/yourusername/blog-platform"
          liveLink="https://blog-platform.vercel.app"
        />
        <ProjectsCard
          title="Weather App"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={sample}
          githubLink="https://github.com/yourusername/weather-app"
          liveLink="https://weather-app.vercel.app"
        />
      </div>
    </section>
  );
};

export default Projects;
