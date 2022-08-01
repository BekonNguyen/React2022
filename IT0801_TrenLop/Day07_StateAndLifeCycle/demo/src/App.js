import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Hello from './components/Hello';
import Home from './components/Home';

// //Demo_1
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {color: 'black'};
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({color: 'pink'});
//     }, 5000);
//   }

//   render (){
//     return(
//       <div>
//         <div style = {{backgroundColor: this.state.color, paddingTop: 20, width: 400, height: 80, margin: 'auto'}}></div>
//       </div>
//     )

//   }

// }
// export default App;

// //Demo_2
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {display: true}  
//   }
//   delete = () =>{
//     this.setState({display: false});
//   }
//   render(){
//     let comp;
//     if(this.state.display){
//       comp = <Hello />;
//     }
//     return (
//       <div style = {{textAlign: 'center'}}>
//         {comp}
//         <button onClick = {this.delete}>Delete the compponent</button>
//       </div>
//     )
//   }

// }
// export default App;

// Demo_3

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {isLoggedIn: false};
  }

  handleLogIn = () => {
    this.setState({isLoggedIn: true});
  }
  handleLogOut = () => {
    this.setState ({isLoggedIn: false});
  }

  render(){
    const {isLoggedIn} = this.state;
    if (isLoggedIn) return (<Home onLogOut = {this.handleLogOut} />);
    
    return(
      <div style = {{textAlign: 'center'}}>
        <div>
          <h1>Plese Log In</h1>
          <button onClick={this.handleLogIn}>Log In</button>
        </div>

      </div>
    )
  }

}

export default App;