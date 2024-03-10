import './index.scss';
import videoBg from '../../assets/media/BG1 Full.mp4';
import kitu from '../../assets/media/Japan.jpg';
import About from '../About';
import Skills from '../Skills';
import Experience from '../Experience';

import { FaFacebookSquare, FaLinkedin, FaGithub, FaWhatsapp, FaYoutube   } from 'react-icons/fa';
import Project from '../Project';


const Home = () => {
  
  return (
    <>
      <div className='cover'>
        <video src={videoBg} autoPlay loop muted/>

        <div className='caption'>
          <img src={kitu} alt='Kitu in Japan' />
          <div className='text'>
            <h3>
              <span>Welcome My name is</span>
            </h3>
            <h1>
              Kim Bryann &nbsp; &nbsp; &nbsp;Tuico
              <span className='highlight'> Kitu<span className='hspace'> </span>Ico</span> 
            </h1>
            <h2>
              <span>a <span className='highlight'>Full Stack Developer</span> who is keen about graphics design and visual arts</span>
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

      <About />
      <Skills />
      <Experience />
      <Project />
    </>
  )
}

export default Home;