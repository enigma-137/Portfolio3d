import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { styles } from '../../styles';

const Works = () => {
  return (
<>
<motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have done?</p>
        <h2 className={styles.sectionHeadText} >Projects.</h2> 
      </motion.div>

      <div className='w-full flex'
      >
        <motion.p
        
        variants={fadeIn("", "" , 0.1, 1)}
        className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
         The following projects offers a glimpse into my diverse skill set and wealth of experience, with each one providing real-life examples of my work. From developing complex solutions to managing projects effectively, these projects have helped me hone my abilities and expertise over time.

Each project is carefully described, with links provided to showcase the different technologies used and the outcomes achieved. Through these projects, I have demonstrated my capability in solving complex problems and my proficiency in handling a variety of technologies.

        </motion.p>
      </div>
</>
  )
}

export default SectionWrapper(Works, "");