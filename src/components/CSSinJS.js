
import React, { Component } from 'react'

import styled from 'styled-components'


const Button= styled.button`
                color: green;
                display:inline-block;
                font-size:40px;
                padding:20px;
                margin: 20px;
                border: 5px solid green;
                border-radius:3px;
                text-decoration:none;
               background: transparent;
                `;

  const TomatoButton= styled(Button)`
                      color: tomato;
                      border-color: red;
                      `;

   
  
 class CSSinJS extends Component {
  render() {
    return (
      <div>CSSinJS


<div>
        
        <Button>Normal Button</Button>
        <Button as="a" href='#'>Link with Button Styles</Button>

        <TomatoButton>Tomato Button</TomatoButton>
        <TomatoButton as='a' href='#'>Link with Tomato Button styles</TomatoButton>
    </div>
      </div>
    )
  }
}

  

export default CSSinJS