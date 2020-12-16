import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #5a9de3; }
  a, .navbar-nav, .navbar-light .nav-link {
    color:#ffffff;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #ffffff;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
function p(){
  var free=document.getElementsByClassName("lo");
 
  for (var i = free.length - 1; i >= 0; i--) {
    free[i].style.display="None";
    alert("s");
  }
}
var p1=localStorage.getItem("logged");
if(p1=="yes"){
  p();

}

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="btn-success" >
      <Navbar.Brand href="/">Masaa Ya Kucheka. Ety Olisikia Wapi. ??</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
       
          <Nav.Item><Nav.Link href="/"><marquee >Welcome Cheka Ukufe</marquee> </Nav.Link></Nav.Item> 
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default  NavigationBar 
