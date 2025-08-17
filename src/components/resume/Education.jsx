import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">School Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-10 relative">
          {/* vertical line */}
          <div className="absolute left-[11px] top-0 bottom-0 border-l-[6px] border-l-black border-opacity-30"></div>

          {/* cards */}
          <div className="relative pl-8">
            <ResumeCard
              title="Senior Secondary (12)"
              subTitle="Genesis International School (2022 - 2023)"
              result="59.4%"
              des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            />
          </div>
          <div className="relative pl-8">
            <ResumeCard
              title="Secondary School Education"
              subTitle="Gensis International School (2020 - 2021)"
              result="77%"
              des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            />
          </div>
        </div>
      </div>

      {/* part Two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2027</p>
          <h2 className="text-3xl md:text-4xl font-bold">Degree</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-10 relative">
          {/* vertical line */}
          <div className="absolute left-[11px] top-0 bottom-0 border-l-[6px] border-l-black border-opacity-30"></div>

          {/* cards */}
          <div className="relative pl-8">
            <ResumeCard
              title="Bechelor of Technology in Computer Science"
              subTitle="Teerthankar Mahaveer Unversity - (2023 -  Present)"
              result="9.0+ CGPA"
              des="Pursuing a four-year undergraduate program focused on software development, algorithms, data structures, databases, web development, operating systems, and emerging technologies such as AI, ML, and cloud computing."
            />
          </div>
          <div className="relative pl-8">
            {/*
            <ResumeCard
              title="Web Developer & Trainer"
              subTitle="Apple Developer Team - (2012 - 2016)"
              result="MALAYSIA"
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
            */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
