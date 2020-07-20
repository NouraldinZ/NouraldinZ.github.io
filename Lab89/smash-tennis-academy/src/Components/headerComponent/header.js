import React, {Component} from 'react';
import Logo from '../images/title.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Myheader extends Component {
  render(){
  return (

    <header>

    <div className="Smash">
        <br/>
        <img className="aca" src={Logo} alt="Logo"/>
        <br/>
        <br/>
        <h1>Welcome to Smash! Tennis Academy</h1>

        <p>Become a part of the historic West Side Tennis Club!</p>
    </div>

     <br/>
     <div id="Navigator" className="Navigator">
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff'>About Us</AnchorLink></button>
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff1'>Courts</AnchorLink></button>
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff2'>Programs</AnchorLink></button>
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff3'>Our Team</AnchorLink></button>
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff4'>Register</AnchorLink></button>
    </div>




    </header>


  );
}}

export default Myheader;
