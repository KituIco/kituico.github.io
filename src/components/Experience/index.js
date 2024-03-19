import './index.scss';
import s3labLogo from '../../assets/media/logos/s3lab.png';
import saperiumLogo from '../../assets/media/logos/saperium.png';
import dcslogo from '../../assets/media/logos/dcs.png';
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

const Experience = ({ navHeader }) => {
  const [exp, setExp] = useState('s3lab')
  const expys = ['s3lab', 'saperium', 'dcs', 'dostsa', 'cursor', 'masci'];
  const banner = [s3labBanner, saperiumBanner, upBanner, dostsaBanner, cursorBanner, masciBanner];
  
  const info = [
    { 
      company: 'UP Diliman S3 Lab', full: 'Service Science and Software Engineering Lab', location: 'Diliman, Quezon City', year: '2022', logo: s3labLogo,
      positions: ['Undergraduate Researcher'], subpositions: ['Mobile Developer'], date: ['Sep 2022 - Dec 2023'],
      details: ['During my tenure as an Undergraduate Researcher at UPD S3Lab, I actively contributed to one of our projects, HomeWorks Mobile App. I successfully developed mobile applications that connect home service providers and seekers. This hands-on experience not only solidified my technical foundation but also culminated in the publication of the project in the NiDS 2023 proceedings of Athens, Greece. Furthermore, I had the opportunity to present the manuscript at the WCTP 2023 conference at Hokkaido, Japan which further hones my communication and presentation skills.']
    },
    { 
      company: 'Saperium Inc.', full: 'Saperium, Inc.: Extraordinary People', location: 'Bonifacio Global City, Taguig', year: '2022', logo: saperiumLogo,
      positions: ['Software Engineer'], subpositions: ['Intern'], date: ['Jun 2022 - Aug 2022'],
      details: ['My internship at Saperium Inc. provided a dynamic environment where I contributed to noteworthy projects, namely YouPerium: a YouTube clone and NotesOn WebApp. Collaborating with fellow interns, I led the Frontend development of YouPerium. Additionally, I spearheaded the solo development of NotesOn WebApp, a Notion clone demonstrating my ability to independently manage and execute projects. Ultimately, I received recognition as one of the Top 3 Interns of Batch 2022. These experiences have not only enriched my technical expertise but have also equipped me with valuable insights into collaborative development and project leadership.']
    },
    { 
      company: 'UP Diliman DCS', full: 'UPD Department of Computer Science', location: 'Diliman, Quezon City', year: '2021' , logo: dcslogo,
      positions: ['Software Developer'], subpositions: ['Intern'], date: ['Dec 2021 - May 2022'],
      details: ['As a Software Developer Intern at UP Diliman - Department of Computer Science, I played an active role in the development of the Graduate Student Progress Tracking System. One of my primary responsibilities was implementing robust security measures to ensure the protection of sensitive data. I focused particularly on authentication protocols, designing and implementing an authentication system that enabled secure login and account creation functionalities. Through this experience, I gained valuable insights into security best practices and the importance of safeguarding data integrity in software systems.']
    },
    { 
      company: 'UP DOST SA', full: 'UP DOST Scholars\' Association', location: 'Diliman, Quezon City', year: '2021' , logo: dostsaLogo,
      positions: ['Creatives Associate'], subpositions: [''], date: ['Aug 2021 - Jun 2023'],
      details: ['Engaging in volunteer work has also been an integral part of my journey, allowing me to contribute my skills to meaningful projects while fostering personal and professional growth. Serving as a Creatives Associate at UP DOST Scholars’ Association, I played a pivotal role in shaping the visual identity of National DOST Scholars’ Summit 2022 and 2023. Through creative works, I contributed in making a cohesive and engaging platform for DOST Scholars across the nation.']
    },
    { 
      company: 'UP CURSOR', full:' UP Association of Computer Science Majors', location: 'Diliman, Quezon City', year: '2020', logo: cursorLogo,
      positions: ['Records and Media Associate', 'Branding and Creatives Associate'], subpositions: ['',''], date: ['Jan 2022 - Jun 2023', 'Sep 2020 - Jan 2022',],
      details: ['My role as a Records and Media Associate at UP CURSOR offered a unique opportunity to blend education with community service. In projects like Handog Kaalaman, I had the privilege of teaching computer-related subjects to public school students. Moreover, overseeing the team’s tracker for the Computer Science Summit, a prestigious nationwide event for aspiring computer scientists, underscored the significance of meticulous organization and collaborative teamwork.', 
      'Being a Branding and Creatives Associate at UP CURSOR, I was responsible for crafting internal publicity materials for the organization. This included designing and laying out the semestral newsletter, as well as creating congratulatory, organizational, and greeting publications. Through these responsibilities, I gained valuable insights into brand development, graphic design principles, and effective communication strategies.']
    },
    { 
      company: 'Manila Science HS', full: 'Manila Science High School', location: 'Ermita, Manila', year: '2019', logo: masciLogo,
      positions: ['Layout Artist'], subpositions: [''], date: ['Jan 2019 - Apr 2019',],
      details: ['While serving as a Layout Artist, I participated in the development of Layag, the MSHS Class of 2019 Yearbook. My role involved designing illustrations to complement articles and elevate the visual appeal of the publication. I focused on ensuring a cohesive and visually pleasing presentation across the entire yearbook. As a result of this experience, I gained invaluable hands-on experience in graphic design, honing my skills in layout composition, typography, and visual storytelling.']
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
          <div className={`role ${exp===expys[comp] ? 'highlight' : ''}`}>{info[comp].positions[pos]}&nbsp; 
            <span className={`subpos ${exp===expys[comp] ? 'highlight' : ''}`}>{info[comp].subpositions[pos]}</span>
          </div>
          <div className={`date ${exp===expys[comp] ? 'highlight' : ''}`}>{info[comp].date[pos]}</div>
        </div>
        <div className={`info ${exp===expys[comp] ? 'highlight' : ''}`}>{ info[comp].details[pos] }</div>
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
      <div className='experiences' id='experiences' ref={navHeader[3].headerRef}>
        <div className='content'>
          <h1>experiences</h1>        
          { experiences }
        </div>
        <div className='foot'/>
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