import React, {Component} from 'react';


export default class Home extends Component {
    render (){
        return (
            <div style = {{textAlign: 'center'}}>
                <div>
                    <h1>Welcome</h1>
                    <button onClick = {this.props.onLogOut}>Log Out</button>
                </div>
            </div>
        )
    }
}
