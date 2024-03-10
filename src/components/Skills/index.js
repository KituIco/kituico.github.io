import './index.scss';
import cLogo from '../../assets/media/logos/c.png';
import pythonLogo from '../../assets/media/logos/python.png';
import javaLogo from '../../assets/media/logos/java.png';
import rustLogo from '../../assets/media/logos/rust.png';
import sqlLogo from '../../assets/media/logos/sql.png'
import tsLogo from '../../assets/media/logos/ts.png';
import bashLogo from '../../assets/media/logos/bash.png';
import jsLogo from '../../assets/media/logos/js.png';
import psLogo from '../../assets/media/logos/ps.png';
import vbLogo from '../../assets/media/logos/vb.png';
import cssLogo from '../../assets/media/logos/css.png';
import sassLogo from '../../assets/media/logos/sass.png';
import htmlLogo from '../../assets/media/logos/html.png';
import texLogo from '../../assets/media/logos/tex.png';
import angularLogo from '../../assets/media/logos/angular.png';
import bootstrapLogo from '../../assets/media/logos/bootstrap.png';
import tailwindLogo from '../../assets/media/logos/tailwind.png';
import reactLogo from '../../assets/media/logos/react.png';
import expoLogo from '../../assets/media/logos/expo.png';
import nodeLogo from '../../assets/media/logos/node.png';
import socketLogo from '../../assets/media/logos/socket.png';
import dockerLogo from '../../assets/media/logos/docker.png';
import gitLogo from '../../assets/media/logos/git.png';
import vscLogo from '../../assets/media/logos/vsc.png';
import postmanLogo from '../../assets/media/logos/postman.png';
import figmaLogo from '../../assets/media/logos/figma.png';
import androidLogo from '../../assets/media/logos/android.png';
import mysqlLogo from '../../assets/media/logos/mysql.png';
import postgresqlLogo from '../../assets/media/logos/postgresql.png';
import redisLogo from '../../assets/media/logos/redis.png';
import awsLogo from '../../assets/media/logos/aws.png';
import gcloudLogo from '../../assets/media/logos/cloud.png';
import wiresharkLogo from '../../assets/media/logos/wireshark.png';
import photoshopLogo from '../../assets/media/logos/photoshop.png';
import illustratorLogo from '../../assets/media/logos/illustrator.png';
import premiereLogo from '../../assets/media/logos/premiere.png';
import photoLogo from '../../assets/media/logos/photo.png';
import publisherLogo from '../../assets/media/logos/publisher.png';
import designerLogo from '../../assets/media/logos/designer.png';
import pptLogo from '../../assets/media/logos/ppt.png';
import clipchampLogo from '../../assets/media/logos/clipchamp.png';
import publishLogo from '../../assets/media/logos/publish.png';
import { useState } from 'react';


const Skills = () => {
  const [skill, setSkill] = useState('language');

  const format = (val, icon) => {
    return (
      <div className='subtext'>
        <h5>{val}</h5>
        <div className='logoContainer' >
          <img src={icon} className='sublogo' alt={val} />
        </div>
      </div>
    )
  }

  const programming = [];
  const progVal = ['C & C++', 'Python', 'Java', 'Rust', 'SQL', 'Typescript'];
  const progLogo = [cLogo, pythonLogo, javaLogo, rustLogo, sqlLogo, tsLogo];

  for (let i=0; i<progVal.length; i++) {
    programming.push( format(progVal[i], progLogo[i]) )
  }

  const scripting = [];
  const scriptVal = ['Bash', 'Javascript', 'Powershell', 'Visual Basic'];
  const scriptLogo = [bashLogo, jsLogo, psLogo, vbLogo];
  for (let i=0; i<scriptVal.length; i++) {
    scripting.push( format(scriptVal[i], scriptLogo[i]) )
  }

  const stylesheet = [];
  const styleVal = ['CSS', 'SASS', 'HTML', 'LaTeX'];
  const styleLogo = [cssLogo, sassLogo, htmlLogo, texLogo];
  for (let i=0; i<styleVal.length; i++) {
    stylesheet.push( format(styleVal[i], styleLogo[i]) )
  }

  const frontend = [];
  const frontVal = ['Angular', 'Bootstrap', 'Tailwind CSS', 'React.JS', 'React Native', 'Expo'];
  const frontLogo = [angularLogo, bootstrapLogo, tailwindLogo, reactLogo, reactLogo, expoLogo];
  for (let i=0; i<frontVal.length; i++) {
    frontend.push( format(frontVal[i], frontLogo[i]) )
  }

  const backend = [];
  const backVal = ['Express.JS', 'Socket.IO', 'Django', 'Pyglet'];
  const backLogo = [nodeLogo, socketLogo, pythonLogo, pythonLogo];
  for (let i=0; i<backVal.length; i++) {
    backend.push( format(backVal[i], backLogo[i]) )
  }

  const datasci = [];
  const dataVal = ['Pandas', 'Numpy', 'Scipy', 'Scikit-Learn'];
  const dataLogo = [pythonLogo, pythonLogo, pythonLogo, pythonLogo];
  for (let i=0; i<dataVal.length; i++) {
    datasci.push( format(dataVal[i], dataLogo[i]) )
  }

  const development = [];
  const deveVal = ['Docker', 'Git + Github', 'Node.JS', 'Visual Studio Code', 'Postman', 'Figma', 'Android Studio'];
  const deveLogo = [dockerLogo, gitLogo, nodeLogo, vscLogo, postmanLogo, figmaLogo, androidLogo];
  for (let i=0; i<deveVal.length; i++) {
    development.push( format(deveVal[i], deveLogo[i]) )
  }

  const cloud = [];
  const cloudVal = ['MySQL', 'PostgreSQL', 'Redis', 'Amazon Web Services', 'Google Cloud', 'Wireshark'];
  const cloudLogo = [mysqlLogo, postgresqlLogo, redisLogo, awsLogo, gcloudLogo, wiresharkLogo];
  for (let i=0; i<cloudVal.length; i++) {
    cloud.push( format(cloudVal[i], cloudLogo[i]) )
  }

  const adobe = [];
  const adoVal = ['Photoshop', 'Illustrator', 'Premiere Pro'];
  const adoLogo = [photoshopLogo, illustratorLogo, premiereLogo];
  for (let i=0; i<adoVal.length; i++) {
    adobe.push( format(adoVal[i], adoLogo[i]) )
  }

  const affinity = [];
  const affiVal = ['Affinity Photo', 'Affinity Publisher', 'Affinity Designer'];
  const affiLogo = [photoLogo, publisherLogo, designerLogo];
  for (let i=0; i<affiVal.length; i++) {
    affinity.push( format(affiVal[i], affiLogo[i]) )
  }

  const microsoft = [];
  const microVal = ['Microsoft Powerpoint', 'Clipchamp', 'Microsoft Publisher'];
  const microLogo = [pptLogo, clipchampLogo, publishLogo];
  for (let i=0; i<microVal.length; i++) {
    microsoft.push( format(microVal[i], microLogo[i]) )
  }


  return (
    <div className='skills'>
      <div className='content'>
        <h1>skills</h1>
        <h4 className='subheader'>Has developed websites, mobile apps, and games. Has designed pubmats such as animations, illustrations, and other media.</h4>

        <div className='categories'>
          <div className={`category ${skill==='language' ? 'highlight' : ''}`} onMouseEnter={() => setSkill('language')}>
            <h2><span>01</span> Computer Languages</h2>
          </div>
          <div className={`details ${skill==='language' ? 'language' : ''}`}>
            <div className='text'>
              <h4>Programming Languages</h4> { programming }
              <h4>Scripting Languages</h4> { scripting }
              <h4>Stylesheet and Markup</h4> { stylesheet }
            </div>
          </div>

          <div className={`category ${skill==='library' ? 'highlight' : ''}`} onMouseEnter={() => setSkill('library')}>
            <h2><span>02</span> Libraries and Frameworks</h2>
          </div>
          <div className={`details ${skill==='library' ? 'library' : ''}`}>
            <div className='text'>
              <h4>Frontend Stack</h4> { frontend }
              <h4>Backend Stack</h4> { backend }
              <h4>Data Science</h4> { datasci }
            </div>
          </div>


          <div className={`category ${skill==='platform' ? 'highlight' : ''}`} onMouseEnter={() => setSkill('platform')}>
            <h2><span>03</span> Platforms and Environment</h2>
          </div>
          <div className={`details ${skill==='platform' ? 'platform' : ''}`}>
            <div className='text'>
              <h4>Development Tools</h4> { development }
              <h4>Database and Cloud</h4> { cloud }
            </div>
          </div>

          <div className={`category ${skill==='design' ? 'highlight' : ''}`} onMouseEnter={() => setSkill('design')}>
            <h2><span>04</span> Design Tools and Apps</h2>
          </div>
          <div className={`details ${skill==='design' ? 'design' : ''}`}>
          <div className='text'>
              <h4>Adobe Cloud Creative</h4> { adobe }
              <h4>The Affinity Suite</h4> { affinity }
              <h4>Microsoft Office</h4> { microsoft }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills;