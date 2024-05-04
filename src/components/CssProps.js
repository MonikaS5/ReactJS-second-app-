import React from 'react'
import './Mystyle2.css'

function CssProps(props) {

   
   
    let className2 = props.primary? "primary" : "secondary";

  return (
    <>
        <h2 className={className2}> Hello  World...! This is props</h2>

    </>
  )
}

export default CssProps