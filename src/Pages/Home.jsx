import React from 'react'

import Facilities from '../Components/Facilities/Facilities';
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'

import academics1 from '../images/academics1.png'
import academics2 from '../images/academics2.png'
import academics3 from '../images/academics3.png'
import about from '../images/about_image.png'


import girl1 from '../images/girl1.png'
import girl2 from '../images/girl2.png'
import boy from '../images/boy.png'
import imagelast from '../images/last_guy.png'

const Home = () => {
  return (
    <>
    <div className="main-page">

    <div id="showcase">
            <div class="container">
                <div class="showcase-content">
                    <p class="text1">Hey</p>
                    <p class="text2">BMSITians</p>
                    
                </div>
                <div class="showcase-images">
                    <img src={girl1} alt="Girl1"/>
                    <img src={boy} alt="Boy"/>
                    <img src={girl2} alt="Girl2"/>
                </div>
            </div>
        </div>


    </div>
 <div className="know">
  <div className="know-img">

  <img src={about} alt="about" />
  </div>
  <div className="about-info">
    <h1>Know Your College..</h1>
    <p>BMS Institutions takes pride in ​educating students since 1946 in ​various fields of Engineering and ​continues to provide world class ​education in the coming years with ​more emphasis on research and ​development.</p>
  </div>
 </div>


   <div  className="acaedmic">

    <h1 className='heading'>Academics</h1>
    <div className="acad-main">

  
    <div className="acad-box">
      <img  src={academics1} alt="academic" />
      <p>Under Graduate</p>
    </div>
    <div className="acad-box">
      <img  src={academics2} alt="academic" />
      <p>Post ​Graduate</p>
    </div>
    <div className="acad-box">
      <img  src={academics3} alt="academic" />
      <p>Ph.d</p>
    </div>
    </div>
   </div>

    <div className="facilities">
    <h1 className='heading'>Facilities</h1>
    <div className="fac-box">
    <Facilities img ={one} content={"Network ​Infrastru​cture"} />
    <Facilities img ={two} content={"BICEP - ​Incubation ​Centre"} />
    <Facilities img ={three} content={"Entrepreneur ​-ship cell​"} />
    <Facilities img ={four} content={"Higher ​Education ​Centre​"} />
    </div>
</div>


<div className= "background-1"> 

<div class="full-container">
<div class= "image-1">  <img src={imagelast} alt="lastguy"/>
</div>
</div>

<div class= "text-container">
<p> Every year, many, <br/> many stupid people <br/> graduate from <br/>college. And if they <br/> can do it, so can you. </p> 
</div>

</div>
<footer class="site-footer">

        <div class="left-content">
            <p>Team and Support</p>

        </div>
        
        <div class="right-content">
            <p> Designed by Canva </p>
        </div>
    </footer>
</>
  )}

export default Home