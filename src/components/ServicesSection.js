import React from 'react';
//Import Icons
import clock from '../assets/img/clock.svg';
import diaphragm from '../assets/img/diaphragm.svg';
import money from '../assets/img/money.svg';
import teamwork from '../assets/img/teamwork.svg';
import home2 from '../assets/img/home2.png';
//Styles
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import { scrollReveal, fade } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services variants={fade} animate={controls} initial='hidden' ref={element}>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img alt='efficient' src={clock} />
              <h3>Efficient</h3>
            </div>
            <p> Fast and clean code stack</p>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='teamwork' src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Professional team at your dispense</p>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='diaphragm' src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Quality work at good rates</p>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='affordable' src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Affordable rates for quality work</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt='camera' src={home2} />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  // copies about styles to services
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
