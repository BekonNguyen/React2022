import { useState } from "react";

function Counter (){
    let [count, setCount] = useState(5);  // Khởi tạo biến (count và setCount) bằng useState
   
    const handleClick  = () => {
        const newValue = count + 1;
        setCount(newValue);
    };
    return (
        <div>
            Giá trị {count}
            <div>
                <button onClick={handleClick}>Tăng</button>
            </div>       
        </div>       
    )
}
export default Counter;

