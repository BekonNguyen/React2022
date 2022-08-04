import {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';




//Exercise_1
function App() {
  const carList = ["Aston Martin", "Bentley", "Lamborghini", "Ferrari", "Porsche"];
  const colorList = ["Red", "Blue", "Yellow", "Black", "White", "Orange"];

  let [selectedCar, setSelectedCar] = useState("Aston Martin");
  
  let [selectedColor, setSelectedColor] = useState ("Red");
  

  const choiceCar = e => {
    setSelectedCar(e.target.value);
    
    
  }

  const choiceColor = e => {
    setSelectedColor(e.target.value);
    
  }

  useEffect(() => {
    setValueSelectedCar(selectedCar)
  }, [selectedCar]);

  useEffect(() => {
    setValueSelectedColor(selectedColor)
  }, [selectedColor]);

  return(
    <div className='container'>
      <div className = "car">
        <h3>Car</h3>
        <select onChange = {e => {choiceCar(e)}}>
          <option value = "0">Aston Martin</option>
          <option value = "1">Bentley</option>
          <option value = "2">Lamborghini</option>
          <option value = "3">Ferrari</option>
          <option value = "4">Porsche</option>
          <option value = "5">VinFast</option>
        </select>
      </div>
      <div className = "color">
        <h3>Color</h3>
        <select onChange = {e => {choiceColor(e)}}>
          <option value = "0">Red</option>
          <option value = "1">Blue</option>
          <option value = "2">Yellow</option>
          <option value = "3">Black</option>
          <option value = "4">White</option>
          <option value = "5">Orange</option>
        </select>
      </div>
      <h2>Your selected: Car: {setValueSelectedCar}, Color: {setValueSelectedColor}</h2>
      
    </div>
  )
}

export default App;


// //Exercise_2

// function App(){
//   const THREE_DAYS_IN_MS = 3*24*60*60*1000;
//   const NOW_IN_MS = new Date().getTime();
//   const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <CountdownTimer targerDate={dateTimeAfterThreeDays} />
//     </div>
//   );
// }
// export default App;
