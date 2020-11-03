import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Switch2 from './Switch2';
import "./navbar.css";
const Nav = styled.nav`
  width: 100%;
  height: 55px;

  border-bottom: 2px solid #f1f1f1;
  padding: 0px 0px;
  background-color:white;
  display: flex;
  top:0px;
  position:fixed;
  z-index:4000;
  justify-content:flex-start;
  
  box-sizing: border-box;
  .logo {
    

    //padding: 15px 0;
    position:fixed;
    top:15px;
    
  }
  .menu{
    position:fixed;
    top:0px;
    left:50px;
    z-index:400;
    
    
   
    
  }
  .login{
   
    position:fixed;
    top:15px;
    right:60px;
   
  }
  .switch{
   
    position:fixed;
    top:15px;
    right:130px;
    
  }
`


const Navbar = () => {
  return (
    <div className="outermostdiv">

      <Nav>
        
        <div className="logo">
          GEMPLEX
      </div>
      <div className="switch">
      <Switch2 />
      </div>
       
        <div className="login">
          Log In
      </div>

<div className="menu">
<Burger />
</div>
        
      </Nav>

    </div>
  )
}

export default Navbar
