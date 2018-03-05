import React, {Component} from 'react';
import './Nav.css';

export default class Nav extends Component {

    render () {
        return (
         <div className="navbar">
            {this.props.userName}
        </div>
        );
    }
}

