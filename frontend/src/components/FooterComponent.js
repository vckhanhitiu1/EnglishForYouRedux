import React, {Component} from 'react';
import "../styles/scss/FooterStyle.css";


class FooterComponent extends Component{
    render(){
        return(
            <div className="footer">
            <div className="footer-limiter">

                <div className="footer-right">

                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>

                </div>

                <div classname="footer-left">

                    <p className="footer-links">This is your sticky footer</p>

                    <p>Company Name © 2016</p>
                </div>

            </div>
            </div>
        )
    }

}
export default FooterComponent;