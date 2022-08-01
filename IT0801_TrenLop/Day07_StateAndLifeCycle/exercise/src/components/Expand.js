import React, {Component} from 'react';

class Expand extends Component {    //Khai báo class Component
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Conditional rendering</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque convallis ex sit amet leo laoreet condimentum vel sed quam. 
                    Proin ac arcu dictum, varius purus.
                </span>
                <button onClick={this.props.closeExpand}>Đóng giới thiệu</button>   {/* Gán sự kiện onClick là đóng Expand  */}
          
            </div>
        )
    }
}
export default Expand;