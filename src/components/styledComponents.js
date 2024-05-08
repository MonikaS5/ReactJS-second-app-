//styledComponents.js

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const CustomButton = styled.button`
    padding:10px;
    margin-right:20px;
    font-size:15px;
    color:${(props) => (props.outline ? "#0070c1" : "#ffffff")};
    border-radius:4px;
    border:2px solid #0070c1;
    background-color: ${(props) => (props.outline ? "#ffffff" : "#0070c1")};
`;

export const GlobalStyle = createGlobalStyle`
    body{
      margin:0;
      color:orange;
      font-family: Arial sans-serif;
      margin:20px;
    }
    
    /* Add more global styles here if needed */
    
`;
