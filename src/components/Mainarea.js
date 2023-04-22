import React from 'react';
import gitimg from './compimg/github.png' ;
import linkedin from './compimg/linkedin.png' ;
import twitter from './compimg/twitter.png' ;
const Mainarea = () => {
    return <div className='this'>
      <div className='textd'>
      <h2>NISHANT KUMAR</h2>
      <h1>WEBDEVELOPER</h1>
      </div>

      <div className='maincont'>
      <div className="para">
          <p>
            Web Developer and Btech CSE student 
            at Jaypee University  <br /> Of Engineering and Technology. 
            <br /><br /><br />
            I am quite smartworking and Passionate Towards my Domain of Webdevelopment.
            <br />
            Most of the Time I give more time in desiging the user interface so I am <br />
            more expereinced in frontend part but that doesn't mark my Expertise in Backend.
            <br />
            Right now i am looking for different opputunities to increase my skills and 
            <br />
            expereince in corporate sector.
            <br /><br /><br /><br /><br /><br /><br /><br />
            <p className='ital'>

            </p>
          </p>
      </div>
      <div className='cards'>
          <h3>Skills</h3>
          <div className="btndiv">
            <div className="btndi">
            <button className='btn'>HTML</button>
          <button className='btn'>CSS</button>
          <button className='btn'>JS</button>
          <button className='btn'>REACT</button>
          </div>
            <div className="btndi">
            <button className='btn'>C</button>          
          <button className='btn'>C++</button>          
          <button className='btn'>WORDPRESS</button>          
          <button className='btn'>NODE.JS</button> 
            </div>
      </div>
      </div>
      </div>      
      <div className='Project'>
      <div className='textd'>
      <h1>PROJECTS</h1>
      <div className="projc">
        <div className="p1">
        <h3>WCT-DAILY</h3>
        <p className='protxt'>This is a Compilation of three daily used applications which are (Weather , Converter , Translator).
        I have made this for personal use espicially for myself and also learned a lot of things while making this project.
        <br /><br /><br />
        <div className="btndi">
            <button className='btn op'>HTML</button>
          <button className='btn op'>Tailwind CSS</button>
          <button className='btn op'>JS</button>
          <button className='btn op'>REACT</button>
        </div>
        </p>
        </div>
        <div className="p1">
        <h3>JBI-NEWS-APP</h3>
        <p className='protxt'>This is a Simple News App which keeps You updated about the ongoing news of deiiferent generous and
        also with a user friendly interface . I have taken data from a rapid api which made this project mostly of the frontend .
        <br /><br /><br />
        <div className="btndi">
            <button className='btn op'>HTML</button>
          <button className='btn op'>Tailwind CSS</button>
          <button className='btn op'>JS</button>
          <button className='btn op'>REACT</button>
        </div>
        </p>
        </div>
        <div className="p1">
        <h3>NETFLIX-CLONE</h3>
        <p className='protxt'>This is a Clone of the Netflix . Where you can search your favorite shows and movies data . This website
        doesn't support any online streaming options or any there downloadable feature.
        <br /><br /><br />
        <div className="btndi">
            <button className='btn op'>HTML</button>
          <button className='btn op'>CSS</button>
          <button className='btn op'>JS</button>
        </div>
        </p>
        </div>
      </div>
      </div>
      </div>
      <div className="Contact">
        <div className="textd">
        <h1>CONTACT</h1>
        </div>
        <div class="social">
            <a href="https://www.linkedin.com/in/nishant-kumar-b198b822b/"><img src={linkedin}alt=""/></a>
            <a href="/"><img src={gitimg} alt="hi"/></a>
            <a href="https://twitter.com/Nishant85292675"><img src={twitter} alt=""/></a>
        </div>
      </div>
      <footer>
        Presented by Nishant Kumar
    </footer>
    </div>;
}
export default Mainarea;