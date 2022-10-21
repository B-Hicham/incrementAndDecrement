import React from "react"
import { Component } from "react"



class App extends Component{
    constructor(props){
        super(props)
        this.state={num:0}
    }

    inc = ()=>{
        this.setState({num:this.state.num+1})
        console.log(this.num)
    }

    dec = ()=>{
        this.setState({num:this.state.num-1})
        console.log(this.num)

    }

    render(){
        return(
            <div className="container">
                <p>{this.state.num}</p>
                <button onClick={this.inc}>increment</button>
                <button onClick={this.dec}>decrement</button>
            </div>
        )
    }
}

export default App