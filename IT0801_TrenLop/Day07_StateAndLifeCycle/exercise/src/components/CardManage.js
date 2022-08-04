import TodoCard from "../App";
import { useState } from "react";

export default function CardManage() {
    let [todo, setTodo] = useState([
        { title: "Lorem Ipsum 1" }
        
    ]
    );

    const addTodo = () => {
        let currentValue = document.getElementById('todoList').value;
        setTodo([...todo, { title: currentValue }]);
    }

    

    return (
        <div clasName="container row">
            <div className=" text-center py-4">
                <h2>Todo List</h2>
                <input type="text" className="" required placeholder="Todo List" id="todoList"></input>
                <button className="btn btn-primary ms-2" onClick={addTodo}>Add</button>
            </div>

            <div>Form add

            </div>

            <div className="row">
                {
                    todo.map((currentValue, index) => (
                        <TodoCard key={index} title={currentValue.title}></TodoCard>
                    ))
                }
            </div>


        </div>
    )
}