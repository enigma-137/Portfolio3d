import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from '../../styles';
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";


import { SectionWrapper } from "../../hoc";

 const ServiceCard = ({index, title, icon}) => {
  return (
   <Tilt className="xs:w-[250px] w-full">
   <motion.div
   variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
  //  this will multiply the delay by the next index ie 0.5 * 0. * 1.... 0.75 is the duration
  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
   
   >
  <div 
  options={{
    max: 45, 
    scale: 1,
    speed: 450
  }}
  className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
  >
  <img src={icon} alt='icon' className="w-16 h-16 object-contain" />
  <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
  </div>

   </motion.div>  
    {/* {title} */}
   </Tilt>
  )
}


const About = () => {
  return (
   <>
   <motion.div>
   <p className={styles.sectionSubText}>About Me</p>
   <h2 className={styles.sectionHeadText} >Overview.</h2>

   </motion.div>
   <motion.p variants={fadeIn("","", 0.1, 1)}
   className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
   
   >

I am a skilled Front-end Reactjs Developer with expertise in Html, Css, Javascript, and Reactjs. I possess a strong ability to learn quickly and effectively communicate with clients. With extensive experience in utilizing technologies such as Framer-Motion, Threejs, and TailwindCss, I have a proven track record of creating exceptional web applications.
In addition to my technical skills, I am also a talented creative writer with the ability to transform complex information into fun-filled and easily understandable content for individuals at all levels. My persuasive thinking capability allows me to use words and phrases to convey ideas effectively.
Furthermore, I have a good understanding of blockchain and cryptocurrencies, which enables me to develop innovative solutions for clients in this space.

   </motion.p>
   <div className="mt-20 flex flex-wrap gap-10">
  {services.map((service, index) =>(
<ServiceCard key={service.title} index={index} {...service} />

  ))}
   </div>
   
   </>
  )
}

export default SectionWrapper(About, "about")