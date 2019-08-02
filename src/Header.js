import React ,{Component} from 'react';
import Photo from './photo_farung.png';


class Header extends Component {
    render(){
      
      return(
        <div className="wrap"><h1 >Farung Polsavang
        <img src={Photo} alt="myphoto" /></h1>
        <nav>
        <a href="#">NAV</a>
        <a href="#">NAV</a> 
        <a href="#">NAV</a> 
        <a href="#">NAV</a> 
       
        </nav>
        </div>

      );

      }
    }

    export default Header;