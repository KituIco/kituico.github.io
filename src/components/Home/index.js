import './index.scss';
import videoBg from '../../assets/media/BG1 Full.mp4';
import kitu from '../../assets/media/Japan.jpg';
import About from '../About';
import Skills from '../Skills';
import Experience from '../Experience';
import Project from '../Project';
import Contact from '../Contact';

import { FaFacebookSquare, FaLinkedin, FaGithub, FaWhatsapp, FaYoutube } from 'react-icons/fa';


const Home = ({ navHeader }) => {
 
  return (
    <>
      <div className='cover' id='home' ref={navHeader[0].headerRef}>
        <video src={videoBg} autoPlay loop muted/>

        <div className='caption'>
          <img src={kitu} alt='Kitu in Japan' />
          <div className='text'>
            <h3>
              Welcome My name is
            </h3>
            <h1>
              Kim Bryann &nbsp; &nbsp; &nbsp;Tuico
              <span className='highlight'> Kitu<span className='hspace'> </span>Ico</span> 
            </h1>
            <h2>
              <span>a <span className='highlight'>Full Stack Developer</span> with a passion for graphic design and visual arts</span>
            </h2>

            <div className='socials'>
              <a  href='https://www.linkedin.com/in/kvtuico/' target='_blank' rel='noopener noreferrer' className='linkedin'><FaLinkedin/></a>
              <a  href='https://github.com/KituIco' target='_blank' rel='noopener noreferrer' className='github'><FaGithub/></a>
              <a  href='https://www.facebook.com/kbvt6/' target='_blank' rel='noopener noreferrer' className='facebook'><FaFacebookSquare/></a>
              <a  href='https://wa.me/qr/QHQKIDKJQLDXM1' target='_blank' rel='noopener noreferrer' className='whatsapp'><FaWhatsapp/></a>
              <a  href='https://www.youtube.com/@sanashy' target='_blank' rel='noopener noreferrer' className='youtube'><FaYoutube/></a>
            </div>
          </div>
        </div>
      </div>

      <About navHeader={navHeader}/>
      <Skills navHeader={navHeader}/>
      <Experience navHeader={navHeader}/>
      <Project navHeader={navHeader}/>
      <Contact navHeader={navHeader}/>
    </>
  )
}

export default Home;