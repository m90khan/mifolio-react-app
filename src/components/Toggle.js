import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { fade } from '../animation';

// children: can get all the child element inside the Toggle Component
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  /*
  layout : to avoid stretchy effect 
  */
  return (
    <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className='faq-line'></div>
    </motion.div>
  );
};

export default Toggle;
