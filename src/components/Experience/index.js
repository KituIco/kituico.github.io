import './index.scss';
import s3labLogo from '../../assets/media/logos/s3lab.png';
import saperiumLogo from '../../assets/media/logos/saperium.png';
import dostsaLogo from '../../assets/media/logos/dostsa.png';
import cursorLogo from '../../assets/media/logos/cursor.png';
import masciLogo from '../../assets/media/logos/masci.png';
import s3labBanner from '../../assets/media/banner/s3lab.png'
import saperiumBanner from '../../assets/media/banner/saperium.png';
import upBanner from '../../assets/media/banner/up.png';
import dostsaBanner from '../../assets/media/banner/dostsa.png';
import cursorBanner from '../../assets/media/banner/cursor.png';
import masciBanner from '../../assets/media/banner/masci.png';
import { useState } from 'react';

const Experience = () => {
  const [exp, setExp] = useState('s3lab')
  const expys = ['s3lab', 'saperium', 'dostsa', 'cursor', 'masci'];
  const banner = [s3labBanner, saperiumBanner, upBanner, dostsaBanner, cursorBanner, masciBanner];
  
  const info = [
    { 
      company: 'UP Diliman S3 Lab', full: 'Service Science and Software Engineering Lab', location: 'Diliman, Quezon City', year: '2022', logo: s3labLogo,
      positions: ['Undergraduate Researcher'], subpositions: ['Mobile Developer'], date: ['Sep 2022 - Dec 2023'],
      details: ['During my tenure as an Undergraduate Researcher at UP Diliman - Service Science and Software Engineering Lab, I actively contributed to one of our projects: HomeWorks Mobile App. I successfully developed mobile applications that connect providers and seekers in the home services sector. This hands-on experience not only solidified my technical foundation but also culminated in the publication of the project in the NiDS 2023 proceedings of Athens, Greece. Furthermore, I had the opportunity to present the manuscript at the WCTP 2023 conference at Hokkaido, Japan which further hones my communication and presentation skills.']
    },
    { 
      company: 'Saperium Inc.', full: 'Saperium, Inc.: Extraordinary People', location: 'Bonifacio Global City, Taguig', year: '2022', logo: saperiumLogo,
      positions: ['Software Engineer'], subpositions: ['Intern'], date: ['Jun 2022 - Aug 2022'],
      details: ['My internship at Saperium Inc. provided a dynamic environment where I contributed to noteworthy projects, namely YouPerium: a YouTube clone and NotesOn WebApp. Collaborating with fellow interns, I led the UI/UX development of YouPerium. Additionally, I spearheaded the solo development of a Notion clone demonstrating my ability to independently manage and execute projects. Ultimately, I received recognition as one of the Top 3 Interns of Batch 2022. These experiences have not only enriched my technical expertise but have also equipped me with valuable insights into collaborative development and project leadership.']
    },
    { 
      company: 'UP DOST SA', full: 'UP DOST Scholars\' Association', location: 'Diliman, Quezon City', year: '2021' , logo: dostsaLogo,
      positions: ['Creatives Associate'], subpositions: [''], date: ['Aug 2021 - Jun 2023'],
      details: ['Engaging in volunteer work has also been an integral part of my journey, allowing me to contribute my skills to meaningful projects while fostering personal and professional growth. Serving as a Creatives Associate at UP DOST Scholars’ Association, I played a pivotal role in shaping the visual identity of National DOST Scholars’ Summit 2022 and 2023. Through creative works, I contributed in making a cohesive and engaging platform for DOST Scholars across the nation.']
    },
    { 
      company: 'UP CURSOR', full:' UP Association of Computer Science Majors', location: 'Diliman, Quezon City', year: '2020', logo: cursorLogo,
      positions: ['Records and Media Associate', 'Branding and Creatives Associate'], subpositions: ['',''], date: ['Jan 2022 - Jun 2023', 'Sep 2020 - Jan 2022',],
      details: ['Simultaneously, my role as a Records and Media Associate at UP CURSOR offered a unique opportunity to blend education with community service. In projects like Handog Kaalaman, I had the privilege of teaching computer-related subjects to public school students. Additionally, in managing the teams’ tracker for the Computer Science Summit, a nationwide event for aspiring computer scientists. Here, I learned the importance of meticulous organization and teamwork.', 
      'Engaging in volunteer work has also been an integral part of my journey, allowing me to contribute my skills to meaningful projects while fostering personal and professional growth. Serving as a Creatives Associate at UP DOST Scholars’ Association, I played a pivotal role in shaping the visual identity of National DOST Scholars’ Summit 2022 and 2023. Through creative works, I contributed in making a cohesive and engaging platform for DOST Scholars across the nation.']
    },
    { 
      company: 'Manila Science HS', full: 'Manila Science High School', location: 'Ermita, Manila', year: '2019', logo: masciLogo,
      positions: ['Layout Artist'], subpositions: [''], date: ['Jan 2019 - Apr 2019',],
      details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam. Sed libero enim sed faucibus turpis in eu mi. Enim nec dui nunc mattis. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Maecenas pharetra convallis posuere morbi leo urna molestie. Lacus viverra vitae congue eu consequat ac. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Elementum integer enim neque volutpat ac tincidunt vitae semper.']
    },
  ]

  const experiences = [];
  const roles = [];

  const format = (comp) => {
    return (
      <div className={`experience ${exp===expys[comp] ? 'highlight' : ''}`} onMouseEnter={() => setExp(expys[comp])}>
        <div className='timeline'>
          <div className={`preline ${exp===expys[comp] ? 'highlight' : ''}`}/>
          <div className={`prelineShadow ${exp===expys[comp] ? 'highlight' : ''}`}/>
          <div className={`circle ${exp===expys[comp] ? 'highlight' : ''}`}/>
          <div className={`circleShadow ${exp===expys[comp] ? 'highlight' : ''}`}/>
          <div className={`postline ${exp===expys[comp]? 'highlight' : ''}`}/>
          <div className={`postlineShadow ${exp===expys[comp] ? 'highlight' : ''}`}/>
        </div>

        <div className='details'>
          <div className='headContainer'>
            <div className={exp===expys[comp] ? 'logoHidden' : 'logoContainer'}>
              <img src={info[comp].logo} className='logo' alt='company'/>
            </div>        
            <div className='heading'>
              <div className='company'>
                <h3>{info[comp].company} <span>/ {info[comp].location}</span></h3>
              </div>
              <h2 className={`year ${exp===expys[comp] ? 'hidden' : ''}`}>{info[comp].year}</h2>
            </div>
            <div className={exp===expys[comp] ? 'logoContainer' : 'logoHidden'}>
              <img src={info[comp].logo} className='logo' alt='company'/>
            </div>   
          </div>
          <div className={exp===expys[comp] ? 'hidden' : 'position'}>{info[comp].positions[0]} <span className='sub'>{info[comp].subpositions[0]}</span></div>
          <div className={exp===expys[comp] ? 'fullname' : 'hidden'}>{info[comp].full}</div>
          { roles[comp] }
        </div>
      </div>
    )
  }

  const roleFormat = (comp, pos) => {
    return (
      <div className={`paragraph ${exp===expys[comp] ? 'highlight' : ''}`}>
        <div className='top'>
          <div className='role'>{info[comp].positions[pos]} <span className='subpos'>{info[comp].subpositions[pos]}</span></div>
          <div className='date'>{info[comp].date[pos]}</div>
        </div>
        <div className='info'>{ info[comp].details[pos] }</div>
      </div>
    )
  }

  for( let i=0; i<info.length; i++ ) {
    roles.push([]);
    for( let j=0; j<=info[i].positions.length; j++ ){
      if( j===info[i].positions.length ) experiences.push( format(i) );
      else roles[i].push( roleFormat(i,j) )
    }
  }
  
  return (
    <>
      <div className='experiences'>
        <div className='content'>
          <h1>experiences</h1>        
          { experiences }
        </div>
        <div className='footer'/>
      </div>

      <div className='banners'>
        <div className='bannersBox'>
          {banner.map((item, index) => (
            <div className='bannerBox'>
              <img src={item} key={index} className='banner' alt={item}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Experience;