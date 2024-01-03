import logo from './logo.svg';
import './App.css';

import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si"

function App() {
  return (
    <div className="App">
      <div className="container">
        <ul className="contact-links">
          <li className='contact-link'><a href="http://linkedin.com/in/noel-arias" target="_blank"><SiLinkedin /></a></li>
          <li className='contact-link'><a href="http://github.com/neeoll" target="_blank"><SiGithub /></a></li>
          <li className='contact-link'><a href="mailto: arias.noel24@gmail.com" target="_blank"><SiGmail /></a></li>
        </ul>
        <div className="body" id='body'>
          <div className='text-block'>
            <pre>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget malesuada libero, a elementum enim. Mauris aliquet est a mi sollicitudin, vel volutpat dui commodo.\n\nDonec diam dolor, sodales eget lacinia sed, convallis ut diam. Donec commodo laoreet sapien, at hendrerit leo ullamcorper eget. Maecenas porttitor mattis convallis. Phasellus posuere vestibulum ornare. Sed finibus tellus non eros dictum laoreet. Suspendisse dapibus quis ligula sit amet euismod. Integer sodales volutpat condimentum.\n\nDonec sit amet nisi quam.`}</pre>
          </div>
          <div className='projects'>
            <ul className='project-links'>
              <li className='project-link'><pre><a href="https://guardianbot.space/" target="_blank">Guardian Bot</a></pre></li>
              <li className='project-link'><pre><a href="https://social-media-roan.vercel.app/" target="_blank">Discord Clone</a></pre></li>
              <li className='project-link'><pre><a href="https://web3-todo-list-6f1zsfbty-ariasnoel.vercel.app/" target="_blank">Tudu</a></pre></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
