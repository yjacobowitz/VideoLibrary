import React, { Component } from 'react';
import {Image} from 'react-bootstrap'

const style = {
    maxWidth: "250px",
    maxHeight: "250px",
    display: "block",
    margin: "0 auto"
};

class LoginHeader extends Component {
    render() {
        return (
            <div >
                 <Image style={style} src={require("./blockbuster-logo.jpg")} rounded />
            </div>
        );
    }
}
export default LoginHeader;
