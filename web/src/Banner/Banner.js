import React, {Component} from "react";

import './banner.css';

class Banner extends Component{

    render() {
        return (<div className={"banner banner-" + this.props.bgcolor}><p className={"banner-"+this.props.fgcolor}>{this.props.children}</p></div>)
    }

}

export default Banner;

