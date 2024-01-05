import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from '../../styles';
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";



const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        //  this will multiply the delay by the next index ie 0.5 * 0. * 1.... 0.75 is the duration
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card bg-white"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-primary hover:bg-white hover:text-black rounded-[20px] py-2 px-6 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {/* <img src={icon} alt='icon' className="w-16 h-16 object-contain" /> */}
          <h3 className="text-sm ">{title}</h3>

        </div>

      </motion.div>
      {/* {title} */}
    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <div className='bg-white px-9 py-[10%] ' id='about'>
      <motion.div>
        <p className={styles.sectionSubText}>About US</p>
        <h2 className='text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]' >Overview.</h2>

      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-black text-[17px] max-w-3xl leading-[30px] pb-20'

      >

        The Department of Food Science and Technology was established in 1983 as one of the programmes of the then Federal University of Technology, Abeokuta (FUTAB). It is one of the programmes that survived the various transitions prior to the establishment of the University of Agriculture, in 1988. Today, the department of Food Science and Technology is one of the four Departments in the College of Food Science and Human Ecology (COLFHEC).
        The department offers programmes leading to the award of Bachelors,
        Masters and Doctoral degrees in various areas of Food Science and Technology..

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 pb-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />

        ))}
      </div>
      </div>
    </>
  )
}

export default About;