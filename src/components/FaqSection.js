import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal, fade } from '../animation';

/* 
 AnimateSharedLayout : detects if layout changes. so if one question collapes, the next moves up
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
the children must be framer motion elements, with a layout attribute. layout indicates change
 */
const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <motion.div className='answer' variants={fade}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tempore odit
              veniam labore distinctio architecto.
            </p>
          </motion.div>
        </Toggle>
        <Toggle title='WHat Are The Services?'>
          <motion.div className='answer' variants={fade}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tempore odit
              veniam labore distinctio architecto.
            </p>
          </motion.div>
        </Toggle>
        <Toggle title='What Are The Payment Gateways'>
          <motion.div className='answer' variants={fade}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tempore odit
              veniam labore distinctio architecto.
            </p>
          </motion.div>
        </Toggle>
        <Toggle title='What Is The Average Cost?'>
          <motion.div className='answer' variants={fade}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tempore odit
              veniam labore distinctio architecto.
            </p>
          </motion.div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
