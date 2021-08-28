//rcc
import React, { Component } from 'react'

export default class SetStatePage extends Component {
    //con
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        };        
    }
    componentDidMount(){
        this.changeValue(1);
        document.getElementById('test').addEventListener('click', this.setCounter)
    }
    changeValue=(v)=>{
        //setState is async and merged
        // this.setState({
        //     counter: this.state.counter + v
        // }, ()=>{
        //     console.log('counter', this.state.counter); //sy-log
        // }
        // );
        // console.log('counter', this.state.counter); //sy-log
        this.setState(state =>{
            return {
                counter: state.counter + v
            }
        })
        
    }
    setCounter=()=>{
        //setState is sync when using in setTimeout.
        //this change will be combined.
        this.changeValue(1);
        this.changeValue(2);
    }
    setCounterWithTimeOut=()=>{
        //setState is sync when using in setTimeout.
        setTimeout(()=>{
            this.changeValue(1);
        },0)
    }
    
    render() {
        return (
            <div>
                <h3>SetStatePage</h3>
                <button onClick={this.setCounter}>{this.state.counter}</button>
                <button id="test">original event {this.state.counter}</button>
            </div>
        )
    }
}
