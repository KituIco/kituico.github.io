import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import sqlogo from './assets/media/sqlogo.png';
import spinner from './assets/media/spinner.png';
import Home from './components/Home';
import Layout from './components/Layout';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000)
  }, []);

  return (
    <>
    { loading ? (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      ) : (
        <div className='loading'>
          <div style={{display:'flex', flexDirection:'column'}}> 
            <img src={spinner} alt='spinner' className='spinner'/>
            <img src={sqlogo} alt='sqlogo' className='logo'/>
          </div>
        </div>
      )
    }
    </>
  );
}

export default App;
