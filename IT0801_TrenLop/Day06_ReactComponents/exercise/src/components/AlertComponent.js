
function AlertComp (props) {
    return(
        <alert className = {props.className} role = {props.role}>{props.text}</alert>
    )
}
export default AlertComp;    