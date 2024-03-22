import { useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import './index.scss';

import homeworksLogo from '../../assets/media/logos/homeworks.png';
import homeworksBanner from '../../assets/media/banner/homeworks.png';
import notesonLogo from '../../assets/media/logos/noteson.png';
import notesonBanner from '../../assets/media/banner/noteson.png';
import gsptsLogo from '../../assets/media/logos/gspts.png';
import gsptsBanner from '../../assets/media/banner/gspts.png';
import cincoLogo from '../../assets/media/logos/cinco.png';
import cincoBanner from '../../assets/media/banner/cinco.png';
import playLogo from '../../assets/media/play.png';

const Project = ({ navHeader }) => {
  const [resume, setResume] = useState(false);
  const [proj, setProj] = useState('HomeWorks');

  const [video, setVideo] = useState(false);
  const [url, setUrl] = useState('https://youtu.be/kMi8tj6d6b0');
  const projs = ['HomeWorks', 'NotesOn', 'GSPTS', 'Cinco!'];
  const info = [
    { name: 'HomeWorks: Home Services App', logo: homeworksLogo, banner: homeworksBanner,
      stack: ['Express.JS', 'Node.JS', 'React Native', 'Expo', 'Figma', 'MySQL', 'Docker', 'Socket.IO', 'Android Studio', 'Google Cloud'],
      description: 'Providing a convenient, reliable, and hassle-free way of finding and booking house related services, HomeWorks Mobile App is a general platform that connects users with various home and wellness service providers in their area.',
      url:'https://youtu.be/kMi8tj6d6b0'
    },
    { name: 'NotesOn WebApp: A Notion Clone', logo: notesonLogo, banner: notesonBanner,
      stack: ['Express.JS', 'Node.JS', 'Angular', 'Bootstrap', 'CSS', 'MySQL', 'Redis', 'Docker', 'Socket.IO', 'Typescript'],
      description: 'Seamlessly organize notes, assignments, and collaborative efforts, NotesOn WebApp is a Notion Clone which is a versatile productivity tool that combines note taking, project management, and database functionalities into one platform.',
      url:'https://youtu.be/Kfo9i51PTfI'
    },
    { name: 'Graduate Student Progress Tracking System', logo: gsptsLogo, banner: gsptsBanner,
      stack: ['Python', 'Django', 'SQLite','HTML', 'Tailwind CSS', 'Mockplus'],
      description: 'For a simpler, more user-friendly, and less error-prone tracking system, DCS GSPTS is a web application for managing proposed plan of study particularly for graduate students under the Department of Computer Science in UP Diliman.',
      url:'https://youtu.be/OD9fpvjc4as'
    },
    { name: 'Uno, Dos, Tres... Cinco!', logo: cincoLogo, banner: cincoBanner,
      stack: ['Python', 'Pyglet'],
      description: 'Recreating a typical UP student’s drive for excellence, Uno Dos Tres, CINCO! is a drop-and-catch game that places the player in the life of an Isko trying to obtain passing marks while avoiding the failing grade that comes in the way.',
      url:'https://youtu.be/QC-8aVHVsic'
    },
  ]

  const onChangeCard = ( id, url ) => {
    setProj(id);
    setUrl(url);
  }

  const format = (comp) => {
    return (
      <div className={`card ${proj===projs[comp] ? 'highlight' : ''}`} onClick={() => onChangeCard(projs[comp],info[comp].url) }>
        <img className={`banner ${proj===projs[comp] ? 'highlight' : ''}`} src={info[comp].banner} alt={info[comp].name}/>
        <div className={`player ${proj===projs[comp] ? 'highlight' : ''}`} onClick={() => setVideo(true)}>
          <img className='playcon' src={playLogo} alt="play logo"/>
        </div>
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
          <h4 className='details'>Explore the culmination of my projects! Hover over and click on each project to unveil a quick demo video.</h4>

          <div className='cardsContainer'>
            { projects }
          </div>
        </div>
      </div>

      <div className={`videos ${video ? '' : 'hide'}`}>
        <div className='area' onClick={() => setVideo(false)}/>
        <div className='player'> {
          video && <ReactPlayer  url={url} playing={true} loop={true} controls={true} width="80vw" height="45vw" top="20"/> 
        } </div>
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