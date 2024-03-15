import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Hamburger from 'hamburger-react';

import './index.scss';
import logo from '../../assets/media/logo.png';

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
          {navHeader.map((header, index) => (
            <div className='container' onMouseEnter={() => setPointer(index)} onMouseLeave={() => setPointer(-1)}>
              <Link key={index + header.headerID} className="navlink" to={`#${header.headerID}`} onClick={() => setShowNav(false)} smooth>
                {header.headerTitle}
                <div className={`underline ${activeIndex === index || pointer === index ? 'active': 'hidden'}`}/>
              </Link>
            </div>
          ))}
          
        </div>
      </div>

      
    </div>
    
  )
}

export default Sidebar;