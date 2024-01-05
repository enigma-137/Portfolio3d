import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { link} from '../../assets';

import { projects } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { styles } from '../../styles';

//project card
const ProjectCard =({index, name, description, image})=>{
  return(
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
   <Tilt options={{
    max:45,
    scale: 1,
    speed: 450,
   }} className="bg-white rounded-2xl shadow sm:w-[360px]">
      

      <div className=' relative flex justify-center p-8 h-230px'>
        <img src={image} alt={name} className=' h-[240px] w-[240px] rounded-r-lg object-cover' />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>

        </div>
      </div>

    <div className='mt-1 bg-white p-5 shadow-lg rounded-lg'>
      <h3 className='text-black text-center font-bold text-sm '>{name}</h3>
      <p className='mt-2 text-black text-center text-xs'>{description}</p>
    </div>
   </Tilt>
  </motion.div>
  )
}

const Works = () => {
  return (
<>
<div className='bg-white px-9 py-[10%] ' id='team'>
<motion.div
        variants={textVariant()}
       className='flex items-center'>
        <p className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Current Excos</p>
        <h2 className={styles.sectionHeadText} >Meet Our Team.</h2> 
      </motion.div>

      <div className='w-full flex '
      >
        <motion.p
        
        variants={fadeIn("", "" , 0.1, 1)}
        className="mt-5 text-black text-[17px] max-w-3xl leading-[30px]"
        >
         The following students have beeen elected to represent the students 

        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7 '>
      {projects.map((project, index) => (
       
       <ProjectCard key={`project-${index}`} 
       index={index}
       {...project}

       />

      ))}
      </div>

    <div className='flex justify-center mt-12'>
    <button className='bg-primary rounded-lg lg:h-12 lg:w-[10%] p-4 text-white'> See All Excos </button>
    </div>
</div>

</>

  )
}

export default Works;