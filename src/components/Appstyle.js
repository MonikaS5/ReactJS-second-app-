import React from 'react'
import style from './Style.module.css'
import './Mystyle.css'


const myheading ={
    color: 'blue',
    backgroundColor:'pink',
    padding:'10px',
    fontFamily: 'Arial',
    margin: "20px"
}
function Appstyle() {
  return (
    <div>

        <h2 className='error'>This is an Error message</h2>
        <h2 className={style.success}>This is Success message</h2>
        <hr/>
        <h1 style={myheading}>Internal css styling</h1>


    </div>
  )
}

export default Appstyle