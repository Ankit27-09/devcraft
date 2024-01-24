import React from 'react'

import Facilities from './Components/Facilities/Facilities';
import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'

import academics1 from '../images/academics1.png'
import academics2 from '../images/academics2.png'
import academics3 from '../images/academics3.png'
import about from '../images/about_image.png'
;

const Home = () => {
  return (
    <>
    
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
    </>
  )
}

export default Home