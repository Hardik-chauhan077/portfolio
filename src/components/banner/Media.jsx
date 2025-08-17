import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* Social Media Links */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/Hardik-chauhan077" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/hxrdik.chauhan/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/hardik-chauhan-b667732b9/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaReact />
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <SiNextdotjs />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <SiTailwindcss />
          </a>
          <a href="https://figma.com/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <SiFigma />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Media
