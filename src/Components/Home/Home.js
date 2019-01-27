import React, { Component } from 'react';
import './Home.css';
import globe from '../../Images/planet.png';


class Home extends Component {


  state = {
      option: "Hello"
    }

    handleOptionsChange = (event) => {
    this.setState({
      option: event.currentTarget.innerHTML
    });
  }


 render() {

   const {option} = this.state;

 return (
   <div className="big">


     <img id="circle" src={globe}/>

     <div className="center-top">
       <h1> Select a Language </h1>
     </div>

     <div className="left">
       <h2 className={`language ${option == "English" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>English</h2>
       <h2><br/></h2>
       <h2 className={`language ${option == "French Français" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>French Français</h2>
       <h2><br/></h2>
       <h2 className={`language ${option == "Chinese 中文" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>Chinese 中文</h2>
       <h2><br/></h2>
       <h2 className={`language ${option == "Korean 한국어" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>Korean 한국어</h2>
       <h2><br/></h2>
       <h2 className={`language ${option == "Japanese 日本語" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>Japanese 日本語</h2>
     </div>

     <div className="right">
         <h2 className={`language ${option == "Russian русский" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>Russian русский</h2>
         <h2><br/></h2>
         <h2 className={`language ${option == "Spanish Español" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>Spanish Español</h2>
         <h2><br/></h2>
         <h2 className={`language ${option == "Portuguese português" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>Portuguese português</h2>
         <h2><br/></h2>
         <h2 className={`language ${option == "Italian italiano" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>Italian italiano</h2>
         <h2><br/></h2>
         <h2 className={`language ${option == "Arabic العَرَبِيَّة" ? 'orange' : ''}`} onClick={this.handleOptionsChange.bind(this)}>Arabic العَرَبِيَّة</h2>
     </div>

     <span className="spanTalk center-bot"><div className="btnTalk">Begin talking</div></span>



   </div>
   );
 }
}

export default Home;
