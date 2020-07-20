import React, {Component} from 'react';
import ReactPlayer from "react-player"


class Intro extends Component {
  render(){
  return (
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}} className="Intro">


    <br/>

    <ReactPlayer url="https://www.youtube.com/watch?v=Ok7buzgHoAs"/>


    </div>
  );
}}

export default Intro;
