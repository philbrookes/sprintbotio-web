import React, {Component} from 'react';
import './Header.css';
import Logo from './logo.png';

class Header extends Component {
    render() {
        return (<div className="header">
            <img className="logo" src={Logo} />
            <span className="company-name"><span className="purple">Sprint</span><span className="grey">Bot</span></span>
            <span className="tag-line">Putting speed back into your sprint</span>
        </div>);
    }
}

export default Header;