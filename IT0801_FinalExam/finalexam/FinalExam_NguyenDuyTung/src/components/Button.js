
export default function Button (props){
    return (
        <button className = {props.className} type = {props.type} id = {props.id}> 
            {props.text}
        </button>
    )
}