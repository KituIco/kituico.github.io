import { useState } from 'react';
import './index.scss';

import homeworksLogo from '../../assets/media/logos/homeworks.png';
import homeworksBanner from '../../assets/media/banner/homeworks.png';
import notesonLogo from '../../assets/media/logos/noteson.png';
import notesonBanner from '../../assets/media/banner/noteson.png';
import gsptsLogo from '../../assets/media/logos/gspts.png';
import gsptsBanner from '../../assets/media/banner/gspts.png';
import cincoLogo from '../../assets/media/logos/cinco.png';
import cincoBanner from '../../assets/media/banner/cinco.png';

const Project = ({ navHeader }) => {
  const [resume, setResume] = useState(false);
  const [proj, setProj] = useState('HomeWorks');
  const projs = ['HomeWorks', 'NotesOn', 'GSPTS', 'Cinco!'];
  const info = [
    { name: 'HomeWorks: Home Services App', logo: homeworksLogo, banner: homeworksBanner,
      stack: ['Express.JS', 'Node.JS', 'React Native', 'Expo', 'Figma', 'MySQL', 'Docker', 'Socket.IO', 'Android Studio', 'Google Cloud'],
      description: 'Providing a convenient, reliable, and hassle-free way of finding and booking house related services, HomeWorks Mobile App is a general platform that connects users with various home and wellness service providers in their area.'
    },
    { name: 'NotesOn WebApp: A Notion Clone', logo: notesonLogo, banner: notesonBanner,
      stack: ['Express.JS', 'Node.JS', 'Angular', 'Bootstrap', 'CSS', 'MySQL', 'Redis', 'Docker', 'Socket.IO', 'Typescript'],
      description: 'Seamlessly organize notes, assignments, and collaborative efforts, NotesOn WebApp is a Notion Clone which is a versatile productivity tool that combines note taking, project management, and database functionalities into one platform.'
    },
    { name: 'Graduate Student Progress Tracking System', logo: gsptsLogo, banner: gsptsBanner,
      stack: ['Python', 'Django', 'SQLite','HTML', 'Tailwind CSS', 'Mockplus'],
      description: 'For a simpler, more user-friendly, and less error-prone tracking system, DCS GSPTS is a web application for managing proposed plan of study particularly for graduate students under the Department of Computer Science in UP Diliman.'
    },
    { name: 'Uno, Dos, Tres... Cinco!', logo: cincoLogo, banner: cincoBanner,
      stack: ['Python', 'Pyglet'],
      description: 'Recreating a typical UP student’s drive for excellence, Uno Dos Tres, CINCO! is a drop-and-catch game that places the player in the life of an Isko trying to obtain passing marks while avoiding the failing grade that comes in the way.'
    },
  ]

  const format = (comp) => {
    return (
      <div className={`card ${proj===projs[comp] ? 'highlight' : ''}`} onClick={() => setProj(projs[comp])}>
        <img className={`banner ${proj===projs[comp] ? 'highlight' : ''}`} src={info[comp].banner} alt={info[comp].name}/>
        <div className={`title ${proj===projs[comp] ? 'highlight' : ''}`}>
          {info[comp].name}
        </div>
        <div className={`text ${proj===projs[comp] ? 'highlight' : ''}`}>
          <div className={`description ${proj===projs[comp] ? 'highlight' : ''}`}>{info[comp].description}</div>
          <div className={`stack ${proj===projs[comp] ? 'highlight' : ''}`}>{info[comp].stack.join(', ')}</div>
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
      <div className='projects' id='projects' ref={navHeader[4].headerRef}>
        <div className='content'>
          <h1>projects</h1>   
          <div className='cardsContainer'>
            { projects }
          </div>
        </div>
      </div>

      <div className='resume'>
        <a href='https://drive.google.com/file/d/1ARnJ6zuaEfjdlQr2gJXcLho62s0BI2Or/view' target='_blank' rel='noopener noreferrer' className='title' onMouseEnter={() => setResume(true)}  onMouseLeave={() => setResume(false)}>
          Download CV
          <div className={`underline ${resume ? 'highlight' : ''}`}/>
        </a>
        <div className='subtitle'>
          Embark on a journey through my professional landscape by viewing a snapshot of my career path.
        </div>
      </div>
    </>
  )
}

export default Project;