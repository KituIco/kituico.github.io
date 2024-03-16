import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Hamburger from 'hamburger-react';

import './index.scss';
import logo from '../../assets/media/logo.png';

import { FaFacebookSquare, FaLinkedin, FaGithub, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const nearestIndex = ( currentPosition, sectionPositionArray, startIndex, endIndex ) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if ( Math.abs( sectionPositionArray[startIndex].headerRef.current.offsetTop - currentPosition ) 
        < Math.abs( sectionPositionArray[endIndex].headerRef.current.offsetTop - currentPosition )  )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs( sectionPositionArray[nextNearest].headerRef.current.offsetTop - currentPosition );
    var b = Math.abs( sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop - currentPosition );
    if (a < b) {
      return nearestIndex( currentPosition, sectionPositionArray, startIndex, nextNearest );
    } else {
      return nearestIndex( currentPosition, sectionPositionArray, nextNearest, endIndex );
    }
  }
};



const Sidebar = ({ navHeader }) => {
  const [showNav, setShowNav] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointer, setPointer] = useState(-1);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex( window.scrollY, navHeader, 0, navHeader.length - 1 );
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });
  

  return (
    <div className={`nav ${showNav ? 'onTop' : ''}`}>

      <div className='header'>
        <div className='adjuster'/>
        <div className='nav-bar'>
          <Link className='logo' to='#' onClick={() => {setShowNav(false); console.log(location.pathname)}}>
            <img src={logo} alt="Logo" className={showNav ? 'open': ''}/>
          </Link>
          
          <div className={showNav ? 'burger-open': 'burger-close'}>
            <div className={showNav ? 'circle-open': 'circle-close'}>
              <div className='burger-container'>
                <Hamburger toggled={showNav} toggle={setShowNav} size='28' color={showNav ? '#FFF': '#BC8F72'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className={`page ${showNav ? 'open' : 'close'}`}>
        <div className='menu'>
          <div className='header'>Menu</div>

          <div className='elements'>
            <div className='navigator'>
              {navHeader.map((header, index) => (
                <div className='container'>
                  <Link key={index + header.headerID} className="navlink" to={`#${header.headerID}`} onClick={() => setShowNav(false)} onMouseEnter={() => setPointer(index)} onMouseLeave={() => setPointer(-1)} smooth>
                    {header.headerTitle}
                    <div className={`underline ${activeIndex === index || pointer === index ? 'active': 'hidden'}`}/>
                  </Link>
                </div>
              ))}

            </div>

            <div className='details'>
              <div className='heading'>Seeking out elegant approaches and optimal solutions to problems</div>
              <div className='subheading'>Has developed several websites, mobile apps, and games. Has advocated the value of science and technology to various communities. Has designed numerous publicity resources.</div>
              <div className='signature'>Kitu<span className='hspace'> </span>Ico</div>
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
      </div>

      
    </div>
    
  )
}

export default Sidebar;