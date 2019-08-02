import React ,{Component} from 'react';
import Project from './project.png';


class Content extends Component {

  state = {
    isHovering: false
  };

  handleMouseHover=()=> {
    this.setState({isHovering:!this.state.isHovering});
  }

    render(){
      
      return(
       <div>
         <h2  >Contact</h2>
         <p>Tel. 0803068710</p>
         <p>Email : farung.pol@gmail.com</p>
         <h2 >Personal Information</h2>
         <p>Birth Date : 08/02/2539 ( 23 years )</p>
         <p>Address : 103 Moo 1, Huai Ket, Taphan Hin, Pichit, 66110</p>
         <p>Hobbies  : Watching TV series, Surfing Internet</p>
         <h2 >Education</h2>
         <p>2014 - 2018 : B.Sc. Information Technology</p>
          <p>King Mongkut's Universityof Technology Thonburi     GPA 2.10</p>
          <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          {this.state.isHovering && <div ><img className="pic" src={Project} alt="my_photo"/></div>}
          <h2 >Senior Project</h2>     
          <p>Driver Doze-off Alert System Via Image Processing</p>
          <p>My responsibilities
          <li>Install Raspbian OS and libraries on Raspberry Pi.</li>
          <li>Connect camera, buzzer, speaker, rgb led.</li>
          <li>Make a program run automatically at startup.</li></p></div>
          <h2 >Basic Skills</h2>
          <p>Html, MS Office</p>
          
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yTHTo28hwTQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jV8B24rSN5o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          <form id="myForm "class="form-style" action="javascript:alert('Thank You');" >
          <label for="name">
          <span>Your Name</span><input type="text" name="name" required="true" />
          </label>
          <label for="email">
          <span>Email Address</span><input type="email" name="email" required="true" />
          </label>
          <label for="message">
          <span>Leave Message</span><textarea name="message" ></textarea>
          </label>
          <label>
          <span> </span><input type="submit" value="Send" />
          </label>
          </form>
          
        </div>

      );

      }
    }

    export default Content;
    