import './index.scss';
import journey from '../../assets/media/ph-project.png';
import gallery from '../../assets/media/ph-gallery.png';

// import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const About = ({ navHeader }) => {

  return (
    <div className='aboutme' id='about' ref={navHeader[1].headerRef}>
      <div className='content'>
        <h1>about me</h1>
        <h4 className='subheader'>Has developed websites, mobile apps, and games. Has designed pubmats such as animations, illustrations, and other media.</h4>

        <div className='row'>
          <div className='column'>
            <h2>Experiences</h2>
            <img src={journey} alt='Experiences'/>
            <h3>Contributing my expertise and passion within a collaborative team environment.</h3>
            <h4>Driven full stack developer with a passion for crafting elegant solutions and leveraging technology to drive innovation. Explore my diverse range of experiences. </h4>
            <Link activeclassname="active" to="/#experiences" className='button'>
              <div className='circle'></div> 
              <span className='label'>View More</span>
            </Link>
          </div>

          <div className='column'>
            <h2>Projects</h2>
            <img src={gallery} alt='Projects'/>
            <h3>Most fulfilling way to delve into my interests is through hands-on projects.</h3>
            <h4> As a passionate computer science graduate,  I’m always up for the challenge, whether it's building websites, crafting games, or developing mobile applications.</h4>
            <Link activeclassname="active" to="/#projects" className='button'>
              <div className='circle'></div> 
              <span className='label'>View More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;