import React, { useRef } from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ey1t6nl', 'template_05lz30k', form.current, 'kWBrzIlB7E5M54ewo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };


  return (
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>jerno58@gmail.com</h5>
              <a href="mailto:jerno58@gmail.com" target="_blank">Send a message</a>
            </article>

            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>josherno58</h5>
              <a href="https://m.me/josherno58" target="_blank">Send a message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+12487562327</h5>
              <a href="https://api.whatsapp.com/send?phone=12487562327" target="_blank">Send a message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea type="message" name='message' rows="7" placeholder='Your Message' required/>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
  )
}

export default Contact