import React, {Component, Fragment} from 'react';

class TodoList3 extends Component {

    
    //実装　初期化
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            //使用Fragment来替换最外层的标签   
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>搜索</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    //inputの入力することで’handleInputChange’関数を呼び出します。　e = event    紐づける（ひもづける）中文的绑定
    handleInputChange(e) {
        //this.state.inputValue = e.target.value;
        //console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }

    handleButtonClick(e) {
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }
}

export default TodoList3;