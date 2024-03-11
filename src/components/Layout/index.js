import { Outlet } from 'react-router-dom';

import './index.scss';
import Sidebar from '../Sidebar';

const Layout = () => {


  return (
    <div className='main'>
      <Sidebar/>

      <div className='page'>

        <Outlet />
        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
        
      </div>

    </div>
  )
}

export default Layout;