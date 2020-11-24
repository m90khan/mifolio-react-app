import React from 'react';
import home1 from '../assets/img/home1.png';
import { About, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, containerdiv, fade, photoAnim } from '../animation';
import Wave from './Wave';

import styled from 'styled-components';

/*
Framer Motion
1- import framer motion
animate: for animation with nomral properties long with transition obejct
initial : for inital state . variants is for varible imported from other file
exit="exit" : what happens to copenent when it leaves

<motion.h2 animate= {{opacity: 1, transition:{duration:2}}} variants={titleAnim}>We work to make</motion.h2>

when element should fall out of the stagger div . add initial="hidden" animate="show" to that certain element
*/
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div variants={containerdiv} initial="hidden" animate="show">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for photography, videography, web design and development work. Our
          team is equipped with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="hero mifolio agency image" />
      </Image>
      <Wave />
    </About>
  );
};
//Style Componenets

export default AboutSection;
