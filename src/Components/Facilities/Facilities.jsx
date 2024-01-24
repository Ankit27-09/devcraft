import React from 'react'
import './Facilities.css'
import dark_blue_circle from '../../images/dark_blue_circle.png'

const Facilities = (props) => {
  return (
    <div className="facilities-box">
    <img className='circle' src={dark_blue_circle} alt="circle" />
    <img src={props.img} alt="box" />
    <p>{props.content}</p>
        
    </div>
  )
}

export default Facilities