import React from 'react';
import Button from './Button';

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 1
        }
        this.handleCount = this.handleCount.bind(this);
    }

    handleCount(value) {
        this.setState((prevState) => ({ count: prevState.count + value }));
    }
    
    render() {
        return (
          <div className="Card">
            <p>Current count: {this.state.count} </p>
            <div>
            <Button sign="+" count={this.state.count} updateCount={this.handleCount}/>
            <Button sign="-" count={this.state.count} updateCount={this.handleCount}/>
            </div>
          </div>
        );
    }

}