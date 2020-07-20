import React, {Component} from 'react';
import Logo from '../images/hard.jpg';
import Logo1 from '../images/carpet.jpg';
import Logo2 from '../images/grass.jpg';
import Logo3 from '../images/indoor.jpg';
import Logo4 from '../images/clay.jpg';
import Logo6 from '../images/tennis.png';
import Logo7 from '../images/tennis-court.png'
import Logo8 from '../images/c1.jpeg'
import Logo13 from '../images/c2.jpeg'
import Logo14 from '../images/c3.jpeg'
import Logo15 from '../images/c4.jpg'
import Logo10 from '../images/mesh.png'
import Logo11 from '../images/tennis-balls.png'
import Logo12 from '../images/ref.png'
import {useTranslation} from "react-i18next";

function Title()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.title1'))
}

function Team()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.button3'))
}

function Team1()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.title4'))
}

function Team2()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.title5'))
}

function Team3()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.title6'))
}

function Title2()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.title2'))
}

function Note()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.Note'))
}

function Note1()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.title3'))
}

function About()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.address'))
}
function Abou()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.about'))
}
function About1()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.address1'))
}
function About2()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.address2'))
}

function Hours()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.hours'))
}

function Hours1()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.hours1'))
}

function Hours2()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.hours2'))
}

function Hours3()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.hours3'))
}

function Hours4()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.hours4'))
}

function Hours5()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.hours5'))
}

function Hours6()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.hours6'))
}

function Hours7()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.hours7'))
}

function Hours8()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.hours8'))
}

class Body extends Component {
  constructor() {
  super();

  // Initial state
  this.state = { open: false, open1: false, team: false };
  }

  toggle() {
  this.setState({
    open: !this.state.open
  });}

  toggle1() {
  this.setState({
    open1: !this.state.open1
  });}

  toggle2() {
  this.setState({
    team: !this.state.team
  });}

  render(){
  return (
    <div className="Body">
    <div className="about">
    <br/>
    <h5><Abou/></h5>
    </div>
    <section id='stuff1'>
    <div class="card-body">
    <div class="container">

        <h2 className="gridWrapper" style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
    }}><img className="bb" src={Logo7} alt="logo"/><Title/></h2>
        <a href="#hrr" onClick={this.toggle.bind(this)} class="btn btn-primary btn-block"><Team1/></a>

        <br/>
        <div className={"collapse" + (this.state.open ? ' in' : '')} id="hrr">
        <p style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
    }}>Here is a list of our facilities</p>
        <table class="table table-primary table-hover">
            <thead>
            <tr>
                <th>Facility</th>
                <th>Availability</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Hard Court</td>
                <td>3 Courts Avaliable</td>
                <th><img src={Logo} alt="logo"/></th>
            </tr>
            <tr>
                <td>​​​​​​​​Carpet Court</td>
                <td>2 Courts Avaliable</td>
                <th><img src={Logo1} alt="logo"/></th>
            </tr>
            <tr>
                <td>Clay Court</td>
                <td>2 Courts Avaliable</td>
                <th><img src={Logo4} alt="logo"/></th>
            </tr>
            <tr>
                <td>Grass Court</td>
                <td>3 Courts Avaliable</td>
                <th><img src={Logo2} alt="logo"/></th>
            </tr>
            <tr>
                <td>Indoor Courts</td>
                <td>6 Courts Avaliable</td>
                <th><img src={Logo3} alt="logo"/></th>
            </tr>

            </tbody>
        </table>
    </div>
    </div>
    </div>
    </section>
    <section id='stuff2'>
    <div class="card-body">
    <div class="container">

        <h2 className="gridWrapper" style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
    }}><img className="bb" src={Logo11} alt="logo"/><Title2/></h2>
        <a href="#hr" onClick={this.toggle1.bind(this)} class="btn btn-primary btn-block"><Team2/></a>

        <br/>
        <div className={"collapse" + (this.state.open1 ? ' in' : '')} id="hr">
        <p style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
    }}>Here is a list of lessons we offer</p>
        <table class="table table-primary table-hover">
            <thead>
            <tr>
                <th>Program</th>
                <th>Price</th>
                <th>Description/Reccomended For</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Youth Summer Camp</td>
                <td>$250 Per Person</td>
                <th>Kids' camps are modeled from the Progressive Tennis Guide, using a systematic progression of court sizes, racquets, and balls to foster success at an early age</th>
            </tr>
            <tr>
                <td>​​​​​​​​Private Lessons</td>
                <td>$80/hour</td>
                <th>Private lessons with one of our professional coaches</th>
            </tr>
            <tr>
                <td>Semi-private Lessons</td>
                <td>$60/hour pp </td>
                <th>Semi-private lessons with one of our professional coaches</th>
            </tr>
            <tr>
                <td>Group of 3 Session</td>
                <td>$45/hour pp</td>
                <th>Group Session with one of our professional coaches</th>
            </tr>
            <tr>
                <td>Group of 4 Session</td>
                <td>$40/hour pp</td>
                <th>Group Session with one of our professional coaches</th>
            </tr>
            <tr>
                <td>Adult Group Clincs</td>
                <td>$500 pp</td>
                <th>Three different types of Adult lessons : Instructional Lessons (coaching, drills, etc); Doubles Clinics (skills and tactics); Cardio Tennis (a work-out on the tennis court!)</th>
            </tr>

            </tbody>
        </table>
    </div>
    </div>
    </div>
    </section>
    <br/>
    <section id='stuff3'>
    <div class="container">
    <h2 className="gridWrapper" style={{
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
}}><img src={Logo12} alt="logo" className="bb"/><Team/></h2>
    <a href="#hr" class="btn btn-primary btn-block" onClick={this.toggle2.bind(this)} style={{
    color: 'white',
}}><Team3/></a>
    <br/>
    <div id="hr" className={"collapse" + (this.state.team ? ' in' : '')}>
    <div className = "team">
    <div class="card bg-danger">
        <img class="card-img-top" src={Logo8} alt="logo"/>
        <div class="card-body">
            <h4 class="card-title">Mike</h4>
            <p class="card-text">Coaching Career Highlights</p>
            <div id="profile">
                <p className="desc">Played on the ATP Tour from 1996 to 2007, reaching a career-high ranking of World No. 134 in singles and No. 74 in doubles<br/>Has spent time working at Roland Garros and at the ATP Masters 1000 event in Paris<br/></p>
            </div>
        </div>
    </div>
    <div class="card bg-danger">
        <img class="card-img-top" src={Logo13} alt="logo"/>
        <div class="card-body">
            <h4 class="card-title">Jamal</h4>
            <p class="card-text">Coaching Career Highlights</p>
            <div id="profile1">
                <p className="desc">Helped Mirza and Soares win the 2014 US Open mixed doubles title<br/>Has coached the doubles team of Farah/Cabal to several ATP Tour titles<br/></p>
            </div>
        </div>
    </div>
    <div class="card bg-danger">
        <img class="card-img-top" src={Logo14} alt="logo"/>
        <div class="card-body">
            <h4 class="card-title">John</h4>
            <p class="card-text">Coaching Career Highlights</p>
            <div id="profile2">
                <p className="desc">His players have won Futures in both singles and doubles<br/>Helped Sania Mirza and Cara Black make the 2014 US Open doubles semifinals<br/></p>
            </div>
        </div>
    </div>
    <div class="card bg-danger">
        <img class="card-img-top" src={Logo15} alt="logo"/>
        <div class="card-body">
            <h4 class="card-title">Sarah</h4>
            <p class="card-text">Coaching Career Highlights</p>
            <div id="profile3">
                <p className="desc">Coached Riccardo Ghedin, Matteo Marrai and Andreas Beck<br/>Coached on the WTA Tour, including Alberta Brianti and Valentina Sulpizio.<br/></p>
            </div>
        </div>
    </div></div></div></div>
    </section>
    <br/><br/>
    <div id="info"  class="info">
    <div className="info1">
        <h3><img className="info2"  src={Logo10} alt="logo"/><About/></h3>
        <p> 44 NolanHill Point NW, Calgary, AB</p>
        <p> <About1/> <br/> 403-518-9999</p>
        <p> <About2/> <br/> inquity@theGentsClub.ca</p>
    </div>
    <br/>
    <div className="info3">
        <h3 ><img className="info2" src={Logo6} alt="logo"/><Hours/></h3>
        <p> <Hours1/> <br/> 8:00 AM - 7:00 PM </p>
        <p> <Hours2/> <br/> 8:00 AM - 7:00 PM</p>
        <p> <Hours3/> <br/> 8:00 AM - 7:00 PM</p>
        <p> <Hours4/> <br/> 8:00 AM - 7:00 PM</p>
        <p> <Hours5/> <br/> 8:00 AM - 7:00 PM</p>
        <p> <Hours6/> <br/> 9:00 AM - 5:00 PM</p>
        <p> <Hours7/> <br/> <Hours8/> </p>
    </div>
    <br/>
    <div class="container">
    <div class="alert alert-danger alert-dismissible">
             <button type="button" class="close" data-dismiss="alert">&times;</button>
             <strong><Note/>  </strong><Note1/>
    </div>
    </div></div>
    <br/>
    <br/>

</div>

  );
}}

export default Body;
