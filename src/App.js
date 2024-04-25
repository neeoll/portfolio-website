import './App.css'

import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si"
import TypewriterComponent from 'typewriter-effect'
import Canvas from './Components/Canvas'
import data from './data.json'
import JsxParser from 'react-jsx-parser'

function App() {

  return (
    <div className="App">
      <script src='./Components/temp.js' />
      <div className="container" id="container">
        <Canvas />
        <div className="body">
          <ul className="contact-links">
            {data.links.map((link) => 
              <li className='contact-link'>
                <a href={link.href} target="_blank" rel="noreferrer">
                  <JsxParser components={{SiLinkedin, SiGithub, SiGmail}} jsx={link.jsx} />
                </a>
              </li>
            )}
          </ul>
          <div className="main-content">
            <div className='text-block'>
              <pre>
                <TypewriterComponent onInit={(typewriter) => {
                  typewriter.changeDelay(35)
                  .pauseFor(250)
                  .typeString("Hello World!")
                  .pauseFor(Math.random() * (750 - 500) + 500)
                  .typeString("\n\nMy name is Noel Arias, I'm a self taught software developer with a few years of experience working across multiple software development disciplines.")
                  .pauseFor(Math.random() * (750 - 500) + 500)
                  .typeString("\nI've built a number of personal projects and contribute to open source software on my spare time.")
                  .pauseFor(Math.random() * (750 - 500) + 500)
                  .typeString(" I’m a quick learner and am looking for a position where I can expand my skill set and learn from other developers.")
                  .pauseFor(Math.random() * (750 - 500) + 500)
                  .typeString("\nOn the right you can find a short list of projects I've worked on, and up top are my LinkedIn, Github, and email address.")
                  .pauseFor(Math.random() * (750 - 500) + 500)
                  .typeString(" I look forward to working with you!")
                  .start()
                }} />
              </pre>
            </div>
            <div className='projects'>
              <pre className="projects-header">Projects</pre>
              <ul className='project-links'>
                {data.projects.map((project) => 
                  <li className='project-link'><pre><a href={project.href} target="_blank" rel="noreferrer">{project.name}</a></pre></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App