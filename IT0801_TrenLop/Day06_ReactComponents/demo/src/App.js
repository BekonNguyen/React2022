import logo from './logo.svg';
import './App.css';
import AddComponent from './components/Add';
import Welcome from './components/Welcome';

//// Demo_1_2
// function App() {
//   return (
//     <AddComponent firstNumber = {1} secondNumber = {2}/>
//   );
// }

// export default App;

// Demo_3
function App(){
  return (
    <div className = "App">
      < Welcome name = "Admin"/>
    </div>
  )
}
export default App;