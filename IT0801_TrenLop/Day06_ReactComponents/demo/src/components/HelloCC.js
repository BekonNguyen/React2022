import { Component } from "react";

class HelloCC extends Component {
    render (){
        return (
            <h1>Hello World, {this.props.person}</h1>
        )      
    }
}
export default HelloCC;