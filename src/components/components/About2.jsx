import React from "react";

import { styles } from '../../styles';

import { SectionWrapper } from "../../hoc";




const About2 = () => {
  return (
    <>
      <h2 className={styles.sectionHeadText} >Philosophy and Objectives</h2>
      <p
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px] '>

        The economic well-being of Nigerians requires that food processing sector must produce enough high quality food products, especially during the off-peak seasons and distribute them at competitive prices to a rapidly growing population. The correct choice and application of appropriate technology is vital to reduction of post-harvest losses, processing, preservation and storage. Food processing, storage and preservation therefore represent an important linkage to agriculture which must not be ignored.

        The field of Food Science and Technology is based on a spectrum of fundamental aspects of basic sciences (Mathematics, Physics, Chemistry and Biology), with a broad background in engineering applications (thermodynamics, unit operations in food processing, fluid flow behaviour, equipment design and maintenance). The study of properties of food raw materials, their composition, appropriate storage and preservation and application of engineering principles in processing and preservation are thus in the direct purview of a Food Scientist. Therefore, the general philosophy of the programme is to adopt multi-disciplinary approach in training of students to give a broad base knowledge in all aspects of Food Science and Technology such that our graduates can choose to specialize in any of the relevant disciplines.

      </p>


    </>
  )
}

export default SectionWrapper(About2, "about")