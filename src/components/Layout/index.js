import { Outlet } from 'react-router-dom';

import './index.scss';
import Sidebar from '../Sidebar';

import videoBg from '../../assets/media/MainBG.mp4';

const Layout = () => {


  return (
    <div className='main'>
      <video src={videoBg} autoPlay loop muted className='mainBG'/>
      <Sidebar/>

      <div className='page'>
        <Outlet />
      </div>

      <div className='footer'>
        © 2024 Kim Tuico. All rights reserved<br/>
        <span className='light'>Powered by React.</span>
      </div>

    </div>
  )
}

export default Layout;