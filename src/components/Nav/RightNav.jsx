import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul`

  list-style: none;
  display: flex;
  top:0px;
  flex-flow: row nowrap;
  

  
  
  
  
  li {
    padding: 0px 10px;
  }
 
 input{
   display:none;
   wdth:10px;
  
   
 }

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 10;
    right: 0;
    font-size: 14px;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #black;
      padding: 18px 0px;
    }
    li:hover{
      color:#1D70CC
    }
    input{
    
      height: 30px;
      display:block;
      width:100%;
      
      
     
      background: transparent;
      
      border: 0.5px solid #4CBDEB;
      outline: none;
      
      
    }
  }
`;


const RightNav = ({ open }) => {
  return (
   
    <div>
    
    <Ul open={open}>
      <input type="text" placeholder="Search"></input>
      <li>Originals</li>
      <li>Movies</li>
      <li>Videos</li>
      <li>Music</li>
      <li>Hype</li>
    </Ul>
    </div>
    
  )
}

export default RightNav
