import './index.scss';
import journey from '../../assets/media/ph-project.png';
import gallery from '../../assets/media/ph-gallery.png';

import { NavLink } from 'react-router-dom';

const About = ({ navHeader }) => {

  return (
    <div className='aboutme' id='about' ref={navHeader[1].headerRef}>
      <div className='content'>
        <h1>about me</h1>
        <h4 className='subheader'>Has developed websites, mobile apps, and games. Has designed pubmats such as animations, illustrations, and other media.</h4>

        <div className='row'>
          <div className='column'>
            <h2>Journey</h2>
            <img src={journey} alt='journey'/>
            <h3>Dolor sit amet, consectetur adipiscing elit viverra tristique</h3>
            <h4>Faucibus sed tristique fames sed aliquet ultr eget viverra arcu. Vitae faucibus diam polo consequat maecenas. Turpis metus sit diam purus leo in varius ac quam nunc amet lorem</h4>
            <NavLink activeclassname="active" to="/journey" className='button'>
              <div className='circle'></div> 
              <span className='label'>View More</span>
            </NavLink>
          </div>

          <div className='column'>
            <h2>Gallery</h2>
            <img src={gallery} alt='gallery'/>
            <h3>Dolor sit amet, consectetur adipiscing elit viverra tristique</h3>
            <h4>Faucibus sed tristique fames sed aliquet ultr eget viverra arcu. Vitae faucibus diam polo consequat maecenas. Turpis metus sit diam purus leo in varius ac quam nunc amet lorem</h4>
            <NavLink activeclassname="active" to="/gallery" className='button'>
              <div className='circle'></div> 
              <span className='label'>View More</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;