import React ,{Component} from 'react';
import photo from './photo_farung.png';


class Header extends Component {
    render(){
      
      return(
        <div className="wrap" ><h1 >Farung Polsavang
        <img src={photo} alt="myphoto" /></h1></div>
      );

      }
    }

    export default Header;