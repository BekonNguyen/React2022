import React, {Component} from 'react';
import Input from "./Input";



class  FormAdd extends Component {
    render () {
        return (
            <div className = "container mt-3">
                <div className="row">
                    
                    <div className="col-sm-12 col-md-6 col-xxl-4">
                        <form>
                            <label>Student Name</label>
                            <br></br>
                            <Input className = "form-control" type = "text" placeholder = "Student Name" required />
                            <br></br>
                            <label>Phone Number</label>
                            <br></br>
                            <Input className = "form-control" type = "number" placeholder = "Phone number" required />                   
                            <br></br>
                            <label>Email</label>
                            <br></br>
                            <Input className = "form-control" type = "email" placeholder = "Email address " required />                       
                            <br></br>
                            <br></br>
                            <button className = "btn btn-primary" type = "submit" >Submit</button>
                            <button className = "btn btn-primary" onClick={this.props.closeFormAdd}>Đóng</button>

                        </form>
                    </div>
                    
    
                </div>
                
            </div>
        )
    }
    
}
export default FormAdd;
