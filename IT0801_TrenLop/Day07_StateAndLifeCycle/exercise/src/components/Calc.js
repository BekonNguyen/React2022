import { Component } from "react"


class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            result: 0
        }
    }

    calPlus = ()=>{
        this.setState({ result: this.state.firstNumber + this.state.secondNumber});
    }

    calMinus = ()=>{
        this.setState({ result: this.state.firstNumber - this.state.secondNumber});
    }
    calMulti = ()=>{
        this.setState({ result: this.state.firstNumber * this.state.secondNumber});
    }
    calDivide = ()=>{
        this.setState({ result: this.state.firstNumber / this.state.secondNumber});
    }


    convertFirstNumber = (event)=>{
        this.setState({ 
            firstNumber: parseFloat(event.target.value)
        });
    }

    convertSecondNumber = (event)=>{
        this.setState({ 
            secondNumber: parseFloat(event.target.value)
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4"></div>
                    <div className="col-12 col-md-6 col-xl-4 pt-3 pb-3 mt-3" style = {{border: "1px solid", width: "300px"}}>
                        <form>
                            <div className="mb-3">
                                <input type="number" onChange={this.convertFirstNumber} placeholder = "0"></input>
                            </div>
                            <div className="mb-3">
                                <input type="number" onChange={this.convertSecondNumber} placeholder = "0"></input>
                            </div>
                        </form>
                        <p>Result: {this.state.result}</p>
                        <div className="input-group">
                            <button type="button" onClick={this.calPlus}>+</button>
                            <button type="button" onClick={this.calMinus}>-</button>
                            <button type="button" onClick={this.calMulti}>X</button>
                            <button type="button" onClick={this.calDivide}>/</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4"></div>
                </div>
            </div>
        )
    }
}

export default Calculator;