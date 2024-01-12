import './App.css';

import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si"
import * as TypewriterEffect from "typewriter-effect"

function App() {
  return (
    <div className="App">
      <div className="container">
        <ul className="contact-links">
          <li className='contact-link'><a href="http://linkedin.com/in/noel-arias" target="_blank" rel="noreferrer"><SiLinkedin /></a></li>
          <li className='contact-link'><a href="http://github.com/neeoll" target="_blank" rel="noreferrer"><SiGithub /></a></li>
          <li className='contact-link'><a href="mailto: arias.noel24@gmail.com" target="_blank" rel="noreferrer"><SiGmail /></a></li>
        </ul>
        <div className="body">
          <div className='text-block'>
            <pre>
              <TypewriterEffect.default onInit={(typewriter) => {
                typewriter.changeDelay(35)
                .typeString("Hello World!")
                .pauseFor(Math.random() * (750 - 500) + 500)
                .typeString("\n\nMy name is Noel Arias, I'm a self taught software engineer from North Carolina with a few years of experience working across multiple software development disciplines.")
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
              <li className='project-link'><pre><a href="https://guardianbot.space/" target="_blank" rel="noreferrer">Guardian</a></pre></li>
              <li className='project-link'><pre><a href="https://social-media-roan.vercel.app/" target="_blank" rel="noreferrer">Chat App</a></pre></li>
              <li className='project-link'><pre><a href="https://web3-todo-list-6f1zsfbty-ariasnoel.vercel.app/" target="_blank" rel="noreferrer">Tudu</a></pre></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;