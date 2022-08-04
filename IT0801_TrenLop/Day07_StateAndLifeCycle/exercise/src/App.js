import React, { Component } from 'react';
import Expand from './components/Expand';
import Home from './components/Home';
import FormAdd from './components/FormAdd';

// //Exercise_1
// class App extends Component {
//   constructor (props){
//     super(props);
//     this.state = {isExpand : false};
//   }

//   // Display true = hiển thị đọc thêm
//   handleAppear = () => {
//     this.setState ({display : true});
//   }
//   // Display false = không hiển thị đọc thêm
//   handleDisAppear = () => {
//     this.setState ({display : false});
//   }

//   render (){
//     const {display} = this.state;

//     // Nếu display = true (hiển thị đọc thêm) thì render Expand.js 
//     // Lúc này, closeExpand được gán lại về handleDisAppear ()
//     // Khi On Click button "Đóng" (bên Expand.js) thì kích hoạt handleDisAppear (chuyển về không hiển thị đoc thêm)

//     if(display) return (<Expand closeExpand = {this.handleDisAppear} />) 

//     // Nếu display = false (không hiển thị đọc thêm) thì chạy render phía dưới.
//     // button " Xem giới thiệu " được gắn handleAppear. Nếu bị On click thì kích hoạt handleAppear và kích hoạt display = true.
//     return(
//       <div style = {{textAlign: 'center'}}>
//         <h1>Conditional rendering</h1>
//         <button onClick={this.handleAppear}>Xem giới thiệu</button>        
//       </div>
//     )
//   }
// }

// export default App;

// //Exercise_3
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       form:{email: "", password: "", isRemember: false},
//       isValid: false,
//       isLoggedIn: false
//     }
//   }
//   // hàm handleChange nhận event làm param truyền vào, 
//   // hàm này sẽ gọi hàm setState để cập nhật giá trị mới cho form và sau đó gọi hàm checkValidForm
//   handleChange  = (event) => {
//     this.setState((state) => {
//       const { form } = state
//       form[event.target.name] = event.target.value
//       return { form }
//     }, () => this.checkValidForm())
//   }
//   //handleChangeCheckbox :hàm này sẽ gọi hàm setState để cập nhật giá trị mới cho isRemember của form 
//   //và sau gọi hàm checkValidForm
//   handleChangeCheckbox = () => {
//     this.setState((state) => {
//       const { form } = state
//       form.isRemember = !form.isRemember
//       return { form }
//     }, () => this.checkValidForm())
//   }
//   //checkValidForm: hàm này sẽ kiểm tra form đã được nhập hay chưa 
//   // và sau đó gọi hàm setState để cập nhật giá trị mới cho isValid
//   checkValidForm = () => {
//     const { email, password } = this.state.form
//     const value = email && password
//     this.setState ({isValue: value})
//   }
//   //handleSubmit: kiểm tra isValid đã đúng hay chưa, 
//   // nếu đúng cập nhật lại giá trị mới cho isLoggedIn bằng true
//   handleSubmit = () => {
//     if(this.state.isValid){
//       this.setState ({isLoggedIn: true})
//     }
//   }
//   //handleLogout:  hàm này sẽ cập nhật lại giá trị mới cho isLoggedIn bằng false
//   handleLogOut = () => {
//     this.setState({isLoggedIn: false})
//   }

//   render (){
//     const {isLoggedIn, form} = this.state
//     if(isLoggedIn) return (<Home onLogOut = {this.handleLogOut} />)

//     return(
//       <div className = "container d-flex align-items-center text-center">
//         <div className = "form-signin">
//           <form>
//             <img className = "mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
//             <h1 className = "h3 mb-3 fw-normal">Please sign in</h1>
//             <div className = "form-floating">
//               <input className = "form-control email" type = "email" name = "email" placeholder="name@example.com" value = {form.email} onChange = {this.handleChange}></input>
//               <label>Email address</label>
//             </div>
//             <div className = "form-floating">
//               <input className = "form-control password" type = "password" name = "password" placeholder="Password" value={form.password} onChange = {this.handleChange}></input>
//               <label>Password</label>
//             </div>
//             <div className = "checkbox mb-3">
//               <label>
//                 <input type = "checkbox" value = {form.isRemember} onChange = {this.handleChangeCheckbox}></input>
//                 Remember me
//               </label>
//             </div>
//             <button className = "w-100 btn btn-lg btn-primary" type = "button" onClick = {this.handleSubmit}>Sign In</button>
//             <p className = "mt-5 mb-3 text-muted">© 2017–2021</p>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;

// //Exercise_5

// class ListStudents extends Component {
//   constructor(props) {
//     super (props);
//     this.state = {
//       display: false ,
//       students: [
//         {Id: "", Name: "", Phone: "", Email: "" },
//       ]
//     };
//   }

//   handleAdded = () => {
//     this.setState({ display: true})
//   }
//   handleNotAdd = () => {
//     this.setState ({ display: false})
//   }

//   renderTableData(){
//     return this.state.students.map((student,index) => {
//         const{Id, Name, Phone, Email} = student
//         return (
//             <tr key = {Id}>
//                 <td >{Id}</td>
//                 <td >{Name}</td>
//                 <td >{Phone}</td>
//                 <td >{Email}</td>
//             </tr>
//         )
//     })
//   }

//   renderTableHeader(){
//     const header = Object.keys(this.state.students[0])
//     return header.map((key,index) => <th key = {index}>{key}</th>)
//   }

//   render(){
//     const {display} = this.state;
//     if (display) return (<FormAdd closeFormAdd = {this.handleNotAdd}/>)


//     return (
//       <div className='container mt-3'>
//         <div className=''>
//           <button className="btn btn-lg btn-primary" onClick={this.handleAdded}>Add</button>
//         </div>
//         <div>
//           <table className="table table-bordered table-striped ">
//             <tbody>
//               <tr>{this.renderTableHeader()}</tr>
//               {this.renderTableData()}                           
//             </tbody>
//           </table>
//         </div>

//       </div>
//     )
//   }
// }
// export default ListStudents;

//Exercise_4

export default function TodoCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-4"></div>
        <div className="col-12 col-xl-4">
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{props.title}</h5>
              <p className='card-text'>{props.text}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4"></div>
      </div>
    </div>
  )
}