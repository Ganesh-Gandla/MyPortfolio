import React from 'react'
import ProjectSection from './ProjectSection'

function Projects() {

  const projects = [{
    image: "https://i.ibb.co/F64cx8W/secure-Pass.jpg",
    title: 'SecurePass',
    description: 'Developed a web-baced password manager using React.js, Express.js and MonogoDB. Implemented features for generating, storing and managing complex passwords with a focus on data privacy and security. Used Git for version controle and GitHub for project collaboration.',
    gitHubLink: "",
    demoLink: ""
  }, {
    image: "https://i.ibb.co/D8hVjFP/e-Commerce.webp",
    title: 'E-Commerce website',
    description: 'Developed a responsive front-end for e-commerce website using HTML, CSS and JavaScript for intractive elements, mimicking core functionalities of Amozon.',
    gitHubLink: "",
    demoLink: ""
  },
  {
    // image: './banners/atm.jpg',4

    


    image: "https://i.ibb.co/h2zpFCy/atm.jpg",
    title: 'ATM Simulator',
    description: 'This project simulates a basic automated teller machine (ATM) using Java core functionalities. It allows users to perform common banking transactions.',
    gitHubLink: "",
    demoLink: ""
  }];

  return (
    <section id='Projects' className='container'>
      <p className='slideX'>Browse My Recent</p>
      <h1 className='slideY'>My projects</h1>
      <div className='ProjectsArr'>
      {projects.map((item, index) => (
        <ProjectSection key={index} title = {item.title} image={item.image} description = {item.description} />
      ))}

      </div>
      

    </section>

  )
}

export default Projects