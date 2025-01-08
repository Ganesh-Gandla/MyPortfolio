import AboutMe from '../components/AboutMe'
import Home from '../components/home'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import './App.css'

function App() {

  return (
      <>
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Projects/>
        {/* <Experience/> */}
        <Contact/>

      </>
  )
}

export default App
