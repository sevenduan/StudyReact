//rcch
import React, { Component } from 'react'

export default class ClassComponent extends Component {
    //cst 
    constructor(props) {
        super(props);
        //save state
        this.state = {
            date: new Date()
        };
    }
    //after mount
    componentDidMount(){
        this.timer = setInterval(()=>{
            //update state value, cannot use this.state
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    //unmout
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render() {
        const {date} = this.state;

        return (
            <div>
                <h3>ClassComponent</h3>
                <p>Time: {date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
