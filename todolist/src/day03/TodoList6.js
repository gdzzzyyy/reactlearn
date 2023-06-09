/**
 * 更多是注意使用constructor  在这里把需要用到的方法提前注册
 * 组建的理解    父调子， 自调父
 */

import React, {Component, Fragment} from 'react';
import '../style.css';

import TodoItem from './TodoItem';

class TodoList6 extends Component {

    
    //実装　初期化
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            //使用Fragment来替换最外层的标签   
            <Fragment>
                {/*
                    这只能是jsx用，不是下面的H5语法使用的注释 
                    ｊsxの複数コメント*/ 
                }

                {
                    //jsxのコメント
                }
                <div>
                    <label htmlFor='insertArea'>输入内容</label>
                    <input 
                        id='insertArea'
                        //class='input'   这种写法会造成编译器对于TodoList和Html的cless的困扰  不要这么写  class用classname代替 
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>搜索</button>
                </div>
                <ul>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }


    //ロジックまとめる
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                /*<li 
                    key={index} 
                    onClick={this.handleItemDelete.bind(this, index)}
                    //不想要语法转译  比如在输入栏中直接输入 双冒号内的 "<h1> hello </h1>"  -> 直接显示h1大小的  hello
                    dangerouslySetInnerHTML={{__html: item}}
                >
                </li>*/
                  
                    /*
                        传递属性组件 父属性TodoList6 -> 传递到TodoItem  用的是属性传递
                        key的位置很关键。key应该和getTodoItem绑定，所以要么在最外面加一个
                        <div key={index}
                            <TodoItem 
                                content={item} 
                                index={index}
                                deleteItem={this.handleItemDelete}
                            />
                        </div>   
                        要么就按照下面的写法，把div去掉
                    />
                    */
                    <TodoItem 
                        key={index}
                        content={item} 
                        index={index}
                        deleteItem={this.handleItemDelete}    
                    />
                   
                )
            
        })
    }

    //inputの入力することで’handleInputChange’関数を呼び出します。　e = event    紐づける（ひもづける）中文的绑定
    /*   老版写法
    handleInputChange(e) {
        //this.state.inputValue = e.target.value;
        //console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }*/
    handleInputChange(e){
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    /*
        prevState  前一次输入的内容  
    
    */
    handleButtonClick(e) {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue:''
        }))

        // this.setState({
        //     list:[...this.state.list, this.state.inputValue],
        //     inputValue:''
        // })
    }

    /*  古い方
    handleItemDelete(index) {
        const list2 = [...this.state.list];
        list2.splice(index, 1);

        //为什么这么做？
        //因为STATE不允许我们直接修改里面的数据！！
        this.setState({
            list : list2
        })
    }
    */

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list};
        })
    }
}

export default TodoList6;