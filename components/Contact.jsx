import React from 'react'

function Contact() {
  return (
    <section id='Contact' className='container'>
      <p className='slideX'>Get In Touch</p>
      <h1 className='slideY'>Contact Me</h1>
      <div className='ContactContainer'>
        <a href="mailto:ganeshgandla19@gmail.com">
        <div className='ContactDetails'>
          <img src="./icons/email.png" alt="" width={'25px'} />
          <p>ganeshgandla19@gmail.com</p>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/ganeshgandla/">
        <div className='ContactDetails'>
          <img src="./icons/linkedin.svg" alt="" width={'25px'} />
          <p>ganeshgandla</p>
        </div>
        </a>
      </div>


    </section>
  )
}

export default Contact