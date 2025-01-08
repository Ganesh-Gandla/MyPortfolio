import React from 'react'

function Contact() {
  return (
    <section id='Contact'>
      <p>Get In Touch</p>
      <h1>Contact Me</h1>
      <div className='ContactContainer'>
        <div className='ContactDetails'>
          <img src="../icons/email.png" alt="" width={'30px'} />
          <p>ganeshgandla19@gmail.com</p>
        </div>

        <div className='ContactDetails'>
          <img src="../icons/linkedin.svg" alt="" width={'30px'} />
          <p>ganeshgandla</p>
        </div>
      </div>


    </section>
  )
}

export default Contact