import React ,{Component} from 'react';
import Project from './project.png';

 


class Content extends Component {
 
    state = {
      isHovering: false,
    };
  

  handleMouseHover=()=> {
    this.setState({isHovering:!this.state.isHovering})
  }

    render(){
      
      return(
       <div className="wrap" >
         <h2  >Contact</h2>
         <p>Tel. 0803068710</p>
         <p>Email : farung.pol@gmail.com</p>
         <h2 >Personal Information</h2>
         <p>Birth Date : 08/02/2539 ( 23 years )</p>
         <p>Address : 103 Moo 1, Huai Ket, Taphan Hin, Pichit, 66110</p>
         <p>Hobbies  : Watching TV series, Surfing Internet</p>
         <h2 >Education</h2>
         <p>2014 - 2018 : B.Sc. Information Technology</p>
          <p>King Mongkut's Universityof Technology Thonburi   GPA 2.10</p>
          <div  onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          {this.state.isHovering && <div ><img className="pic" src={Project} alt="my project"/></div>}
          <h2 >Senior Project</h2>     
          <p>Driver Doze-off Alert System Via Image Processing</p>
          <p>My responsibilities
          <li>Install Raspbian OS and libraries on Raspberry Pi.</li>
          <li>Connect camera, buzzer, rgb led.</li>
          <li>Make a program run automatically at startup.</li></p></div>
          <h2 >Basic Skills</h2>
          <p>Html, MS Office</p>
         </div>
        

      );

      }
    }

    export default Content;
    