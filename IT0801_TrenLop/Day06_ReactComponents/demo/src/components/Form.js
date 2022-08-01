import InputFc from './InputFC';

function FormInput(){
    return (
        <div className = "container">
            <h3> Email</h3>
            <InputFc type="email" placeholder = "Enter your email address"></InputFc>
            <h3> Password</h3>
            <InputFc type="password" placeholder = "Enter your password"></InputFc>
            <br></br>
            <InputFc type = "submit"></InputFc>
        </div>
    )

}

export default FormInput;