import React from 'react'

function Contact() {
  return (
    <section id='Contact' className='container'>
      <p className='slideX'>Get In Touch</p>
      <h1 className='slideY'>Contact Me</h1>
      <div className='ContactContainer'>
        <div className='ContactDetails'>
          <img src="./icons/email.png" alt="" width={'25px'} />
          <p>ganeshgandla19@gmail.com</p>
        </div>

        <div className='ContactDetails'>
          <img src="./icons/linkedin.svg" alt="" width={'25px'} />
          <p>ganeshgandla</p>
        </div>
      </div>


    </section>
  )
}

export default Contact