import React, {Suspense} from 'react';
import "./Assets/css/default.min.css";
import Intro from "./Components/IntroductionComponent/intro"
import Body from "./Components/body/body"
import Footer from "./Components/footerComp/footer"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from './Components/images/title.png';
import {useTranslation} from "react-i18next";
import i18n from './i18n'

function MyHeader()
{
  const [t, i18n] = useTranslation('common');
  return (

    <header>

    <div className="Smash">
        <br/>
        <img className="aca" src={Logo} alt="Logo"/>
        <br/>
        <br/>
        <h1>{t('home.title')}</h1>



        <p>{t('home.desc')}</p>
    </div>

     <br/>
     <div id="Navigator" className="Navigator">
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff'>{t('home.button')}</AnchorLink></button>
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff1'>{t('home.button1')}</AnchorLink></button>
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff2'>{t('home.button2')}</AnchorLink></button>
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff3'>{t('home.button3')}</AnchorLink></button>
        <button type="button" className="btn btn-light"><AnchorLink href='#stuff4'>{t('home.register')}</AnchorLink></button>
    </div>

    </header>


  );}

function HeaderComponent()
{
    const [t, i18n] = useTranslation('common');
    return <div>

        <br/>
        <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
}

function App()
{
    return (
      <Suspense fallback="loading">
      <div className="App-Root">
      <HeaderComponent/>

      <MyHeader/>
      <br/>
      <br/>
      <section id='stuff'>
      <Intro id="intro"/>
      </section>
      <br/>
      <Body/>
      <section id='stuff4'>
      <Footer/>
      </section>
      </div>
      </Suspense>
    );
}

export default App;
