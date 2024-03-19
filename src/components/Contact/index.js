import './index.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ navHeader }) => {
  const form = useRef();
  const initialValues = { name: '', email: '', subject: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (Object.keys(validate(formValues)).length === 0) { 
      emailjs
      .sendForm('service_d2gm58u', 'template_6348vwf', form.current, { publicKey: 'bcjwJO5JgTyyWLALI', })
      .then( () => { console.log('SUCCESS!'); }, (error) => { console.log('FAILED...', error.text); }, );
    } 

    setIsSubmit(true);
    setTimeout(() => setIsSubmit(false), 4000);
  };

  const validate = (v) => {
    const errors = {};
    console.log(v.email)
    if (!v.name) errors.name = "This field can't be empty";
    if (!v.email) errors.email = "This field can't be empty";
    if (!v.subject) errors.subject = "This field can't be empty";
    if (!v.message) errors.message = "This field can't be empty";

    if(Object.keys(errors).length === 0) setResult('Message Sent');
    else setResult('Failed to Send');

    setFormErrors(errors)
    return errors;
  };
  
  return (
    <div className='contact' id={'contact'} ref={navHeader[5].headerRef}>
      <h1>contact me</h1>
      <div className='content'>
        <div className='info'>
          <div className='details'>Let’s connect! Feel free to reach out through the channels below. I’m always eager to collaborate and discuss exciting opportunities.</div>
          <div className='subject'>Seeking out elegant approaches and optimal solutions to problems</div>
          <div className='details'><span className='bold'>Name: </span>Kim Bryann Tuico</div>
          <div className='details'><span className='bold'>Address: </span>Mandaluyong, PH</div>
          <div className='details'><span className='bold'>Phone: </span>+63 966 982 4892</div>
          <div className='details'><span className='bold'>Email: </span>kvtuico@gmail.com</div>
        </div>
        <div className='message'>
          
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <div className={formErrors.name ? 'errors' : 'hidden'}>{formErrors.name}.</div>
            <input type='text' name='name' value={formValues.name} onChange={handleChange} spellcheck="false"/>

            <label>Email</label>
            <div className={formErrors.email ? 'errors' : 'hidden'}>{formErrors.email}.</div>
            <input type='email' name='email' value={formValues.email} onChange={handleChange} spellcheck="false"/>

            <label>Subject</label>
            <div className={formErrors.subject ? 'errors' : 'hidden'}>{formErrors.subject}.</div>
            <input type='text' name='subject' value={formValues.subject} onChange={handleChange} spellcheck="false"/>

            <label>Message</label>
            <div className={formErrors.message ? 'errors' : 'hidden'}>{formErrors.message}.</div>
            <textarea name='message' value={formValues.message} onChange={handleChange} spellcheck="false"/>
            
            <div className='button'>
              <div className='circle'/>
              <input type='submit' value='Send Message' />
            </div>
          </form>
          
          <div className={`result ${isSubmit ? 'show' : 'hide'} ${result==='Message Sent' ? ' success' : ''}`}>{result}</div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact;