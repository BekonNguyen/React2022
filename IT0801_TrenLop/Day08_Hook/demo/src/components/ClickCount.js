import { useState } from "react";

export default function ClickChangeName(){
    const [name, setName] = useState('XYZW');

    // let changeName = () => {
    //     useState('ABCD');
    // }
    // let increaseByOne = () => {
    //     setCount(count + 1);
    // }

    return (
        <div className = "container">
            <span>{name}</span>
            <button onClick={() => {setName('ABCD')}}>Click to change name</button>
        </div>
    )
}