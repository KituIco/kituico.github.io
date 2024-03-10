import { useState } from 'react';
import './index.scss';

import homeworksLogo from '../../assets/media/logos/homeworks.png';
import homeworksBanner from '../../assets/media/banner/homeworks.png';
import notesonLogo from '../../assets/media/logos/noteson.png';
import notesonBanner from '../../assets/media/banner/noteson.png';
import genshinLogo from '../../assets/media/logos/genshindb.png';
import genshinBanner from '../../assets/media/banner/genshindb.png';
import cincoLogo from '../../assets/media/logos/cinco.png';
import cincoBanner from '../../assets/media/banner/cinco.png';

const Project = () => {
  const [proj, setProj] = useState('HomeWorks')
  const projs = ['HomeWorks', 'NotesOn', 'GenshinDB', 'Cinco!'];
  const info = [
    { name: 'HomeWorks: Home Services App', logo: homeworksLogo, banner: homeworksBanner },
    { name: 'NotesOn: A Notion Clone', logo: notesonLogo, banner: notesonBanner },
    { name: 'Genshin Impact DB', logo: genshinLogo, banner: genshinBanner },
    { name: '1, 2, 3... Cinco!', logo: cincoLogo, banner: cincoBanner },
  ]

  const format = (comp) => {
    return (
      <div className={`card ${proj===projs[comp] ? 'highlight' : ''}`} onClick={() => setProj(projs[comp])}>
        <img className={`banner ${proj===projs[comp] ? 'highlight' : ''}`} src={info[comp].banner} alt={info[comp].name}/>
        <div className={`description ${proj===projs[comp] ? 'highlight' : ''}`}>
        </div>
        <div className='icon'>
          <img src={info[comp].logo} alt={info[comp].name}/>
        </div>
      </div>
    )
  }

  const projects = []; 
  for( let i=0; i<projs.length; i++ ) {
    projects.push( format(i) );
  }
  
  return (
    <>
      <div className='projects'>
        <div className='content'>
          <h1>projects</h1>        
          <div className='cardsContainer'>
            { projects }
          </div>
        </div>
      </div>

      <div className='resume'>
        
      </div>
    </>
  )
}

export default Project;