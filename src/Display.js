import React, { Component } from 'react';
import './style.css';

class Display extends Component {
    render() {
        const result = this.props.data.join('');
        return (
            <div className="display-calculator">
                {result}
            </div>
        );
    }
}

export default Display;
