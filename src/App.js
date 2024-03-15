import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import sqlogo from './assets/media/sqlogo.png';
import spinner from './assets/media/spinner.png';
import Home from './components/Home';
import Layout from './components/Layout';


function App() {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const experiencesRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const navHeader = [
    {
      headerTitle: "Home",
      headerRef: homeRef,
      headerID: "home"
    },
    {
      headerTitle: "About",
      headerRef: aboutRef,
      headerID: "about"
    },
    {
      headerTitle: "Skills",
      headerRef: skillsRef,
      headerID: "skills"
    },
    {
      headerTitle: "Experiences",
      headerRef: experiencesRef,
      headerID: "experiences"
    },
    {
      headerTitle: "Projects",
      headerRef: projectsRef,
      headerID: "projects"
    },
    {
      headerTitle: "Contact",
      headerRef: contactRef,
      headerID: "contact"
    }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return (
    <>
    { !loading ? (
      <Routes>
        <Route path="/" element={<Layout navHeader={navHeader}/>}>
          <Route index element={<Home navHeader={navHeader}/>} />
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
