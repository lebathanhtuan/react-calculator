import React, { Component } from 'react';
import './App.css';
import './style.css';
import math from 'mathjs';
import Button from './Button';
import Display from './Display';

class App extends Component {
    constructor(){
        super();
        this.calculator = this.calculator.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            operator: [],
            status: false
        }
    }
    calculator(){
        var result = this.state.operator.join('');
        if(result){
            result = math.eval(result);
            this.setState({
                operator: [result],
                status: true
            })
        }
    }
    handleClick(e){
        const value = e.target.getAttribute('data-value');
        const valueArray = value.split();
        const valueState = this.state.operator;
        var patternNumber = /^[0-9]$/;
        if(!patternNumber.test(valueArray)){
            if(value === 'clear'){
                this.setState({
                    operator: [],
                    status: false
                });
            }else if(value === 'equal'){
                this.calculator();
            }else{
                if(valueState.indexOf('+') === -1 && valueState.indexOf('-') === -1 && valueState.indexOf('*') === -1 && valueState.indexOf('/') === -1){
                    const addOperator = valueState.concat(valueArray);
                    this.setState({
                        operator: addOperator,
                        status: false
                    });
                }else if(valueState.indexOf('+') === valueState.length - 1 || valueState.indexOf('-') === valueState.length - 1 || valueState.indexOf('*') === valueState.length - 1 || valueState.indexOf('/') === valueState.length - 1){
                    const arrayState = valueState.join('');
                    const fixArrayState = arrayState.slice(0, arrayState.length-1);
                    const addOperator = fixArrayState.split().concat(valueArray);
                    this.setState({
                        operator: addOperator,
                        status: false
                    });
                }else{
                    const addOperator = valueState;
                    this.setState({
                        operator: addOperator,
                        status: false
                    });
                }
            }
        }else{
            if(value === 'clear'){
                this.setState({
                    operator: [],
                    status: false
                });
            }else if(value === 'equal'){
                this.calculator();
            }else{
                if(!this.state.status){
                    const addOperator = valueState.concat(valueArray);
                    this.setState({
                        operator: addOperator,
                        status: false
                    });
                }else{
                    const addOperator = valueArray;
                    this.setState({
                        operator: addOperator,
                        status: false
                    });
                }
            }
        }
    }
    render() {
        return (
            <div className="container">
                <div className="calculator">
                    <Display data={this.state.operator} />
                    <div className="container-button">
                        <Button onClick={this.handleClick} label="1" value="1" />
                        <Button onClick={this.handleClick} label="2" value="2" />
                        <Button onClick={this.handleClick} label="3" value="3" />
                        <Button onClick={this.handleClick} label="+" value="+" />
                        
                        <Button onClick={this.handleClick} label="4" value="4" />
                        <Button onClick={this.handleClick} label="5" value="5" />
                        <Button onClick={this.handleClick} label="6" value="6" />
                        <Button onClick={this.handleClick} label="-" value="-" />
                        
                        <Button onClick={this.handleClick} label="7" value="7" />
                        <Button onClick={this.handleClick} label="8" value="8" />
                        <Button onClick={this.handleClick} label="9" value="9" />
                        <Button onClick={this.handleClick} label="x" value="*" />

                        <Button onClick={this.handleClick} label="C" value="clear" />
                        <Button onClick={this.handleClick} label="0" value="0" />
                        <Button onClick={this.handleClick} label="=" value="equal" />
                        <Button onClick={this.handleClick} label="÷" value="/" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
