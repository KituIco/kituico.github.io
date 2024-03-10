import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Hamburger from 'hamburger-react'


import './index.scss';
import logo from '../../assets/media/logo.png';


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={`nav ${showNav ? 'onTop' : ''}`}>

      <div className='header'>
        <div className='adjuster'/>
        <div className='nav-bar'>
          <Link className='logo' to='/'>
            <img src={logo} alt="Logo" />
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
      
      <CSSTransition 
        in={showNav} 
        unmountOnExit 
        timeout={500} 
        classNames="pager">
          <div className='page'>
            <div className='menu'>
              hi
            </div>
          </div>
      </CSSTransition>
      
    </div>
    
  )
}



export default Sidebar;