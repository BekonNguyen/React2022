import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {Id: 1, Name: 'Nguyễn Văn A', Age: 30, Address: 'Hà Nội'},
                {Id: 2, Name: 'Nguyễn Duy B', Age: 29, Address: 'Hà Nam'},
                {Id: 3, Name: 'Nguyễn Tuấn C', Age: 28, Address: 'Hà Đông'},
                {Id: 4, Name: 'Nguyễn Hồng D', Age: 27, Address: 'Hà Tây'},
                {Id: 5, Name: 'Nguyễn Hoàng E', Age: 26, Address: 'Hà Bắc'},
            ]
        }
    }

    //Tham khảo Viblo
    renderTableData(){
        return this.state.students.map((student,index) => {
            const{Id, Name, Age, Address} = student
            return (
                <tr key = {Id}>
                    <td >{Id}</td>
                    <td >{Name}</td>
                    <td >{Age}</td>
                    <td >{Address}</td>
                </tr>
            )
        })
    }

    renderTableHeader(){
        const header = Object.keys(this.state.students[0])
        return header.map((key,index) => <th key = {index}>{key}</th>) //key.Uppercase Nếu muốn header viết hoa
    }


    render (){
        return (
            <div className="container">
                <div className = "row">
                    <div className = "col-12 col-md-6 col-xl-4"></div>
                    <div className = "col-12 col-md-6 col-xl-4">
                        <table className="table table-bordered table-striped ">
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}                           
                            </tbody>
                        </table>
                    </div>
                    <div className = "col-12 col-md-6 col-xl-4"></div>     
                </div>
                
            </div>
        )    
    }

}
export default StudentInfo;