import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    render() {
        return (
            <a 
                className="btn btn-outline-dark button-calculator"
                onClick={this.props.onClick}
                data-value={this.props.value}
            >
                {this.props.label}
            </a>
        );
    }
}

export default Button;
