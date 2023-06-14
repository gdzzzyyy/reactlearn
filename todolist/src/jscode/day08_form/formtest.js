//ReactのFormコンポーネント練習
import React, {Component} from "react";
import ReactDOM from 'react-dom/client';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'helowokajdkajdakldakljd',
            selectValue: 'count',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleSelectChange(event) {
        this.setState({
            selectValue: event.target.value,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/**
                 * input タグ
                 */}

                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>

                <br></br>

                {/**
                 * textarea タグ
                 */}
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                

                <br></br>
                <br></br>
                {/**
                 * select タグ
                 */}

                 <label>
                    Pick you favorite flavor:
                    <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                        <option value="AAAAAAAAA" >AAAAAAAAA</option>
                        <option value="BBBBBBBBB" >BBBBBBBBB</option>
                        <option value="CCCCCCCCC" >CCCCCCCCC</option>
                        <option value="DDDDDDDDD" >DDDDDDDDD</option>
                    </select>
                 </label>

                 {/**
                 * fileinput タグ 
                 * <input type="file"/>
                 */}
                
            

                 <input type="submit" value="Submit"/>
            </form>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm />);