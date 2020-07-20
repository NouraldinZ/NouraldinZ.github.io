import React, {Component} from 'react';
import Logo from '../images/pay.png'
import ReactTooltip from "react-tooltip";
import {useTranslation} from "react-i18next";
import { useForm } from 'react-hook-form';
function Register()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.register'))

}

function Sign()
{
    const [t, i18n] = useTranslation('common');
    return (
    t('home.Sign'))
}

let renderCount = 0;
function Form() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = (data) => {
    console.log(data);
    renderCount++;
  };


}
class Footer extends Component {


  constructor() {
  super();
  // Initial state
  this.state = { fields: {},
  errors: {}, open: false, open1: false, open2: false, open3: false, hover: true};
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
    open2: !this.state.open2
  });}

  toggle3() {
  this.setState({
    open3: !this.state.open3
  });}

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }

       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           alert("Form submitted");
        }else{
           alert("Please enter your email address in form your@example.com, Thank you!")
        }

    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }


  render(){
  return (
    <div className="footer">
    <div class="container">
    <h2 id="gridWrapper" style={{
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
}}><img className="bb" src={Logo} alt="logo"/><Sign/></h2>
            <div id="accordion">
                <div class="card">
                    <div class="card-header">
                        <a class="collapsed card-link" onClick={this.toggle3.bind(this)} href="#collapseClientInfo"><Register/></a>
                    </div>
                    <div id="collapseClientInfo" className={"collapse" + (this.state.open3 ? ' in' : '')} data-parent="#accordion">
                        <div class="card-body">
                            <p>Please provide your information so we can get in touch with you</p>
                              <form name="contactform" className="contactform" noValidate onSubmit= {this.contactSubmit.bind(this)}>
                                  <p>Name: <input data-tip data-for="nameTip"  onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} required/></p>
                                  <ReactTooltip id="nameTip" place="top" effect="solid">Please enter you first and last name here</ReactTooltip>
                                  <ReactTooltip id="nameTip1" place="top" effect="solid">Please enter your phone number in the format XXX-XXXX-XXXX</ReactTooltip>
                                  <ReactTooltip id="nameTip2" place="top" effect="solid">Please enter your email address in the format your@example.com</ReactTooltip>
                                  <ReactTooltip id="nameTip3" place="top" effect="solid">Please enter your credit card number in the format XXXX-XXXX-XXXX-XXXX</ReactTooltip>
                                  <p>Phone Number: <input  data-tip data-for="nameTip1" name="phone" required/></p>
                                  <p>Email Address: <input id="email" data-tip data-for="nameTip2" name="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} required/></p>
                                  <p>Credit Card Number: <input name="cc" data-tip data-for="nameTip3" required/></p>
                                  <p>Render Count: {renderCount}</p>
                                  <button type="submit" class="btn btn-warning" id="bb" required>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

    </div></div>
  );
}}

export default Footer;
