/**
 * 更多是注意使用constructor  在这里把需要用到的方法提前注册
 * 组建的理解    父调子， 自调父
 */

import React, {Component, Fragment} from 'react';
import '../style.css';
import axios from 'axios';

import TodoItem from './TodoItem';

class TodoList extends Component {

    
    //実装　初期化
    /**
     * stateまたはpropsが変更したとたんにrenderファンクションも一回実装する。
     *  
     */
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

    /**
     * コンポーネントがマウントされた直後に一度だけ呼び出される（１度目のrender()後）
     * DOMに関する初期化処理をしたいときに使用(直接DOM操作などはしないこと)
     * ネットワークへのリクエストなどを行うときに使用
     * setTimeout()などはここで行う
     */
    componentDidMount() {
        console.log('componentDidMount');
        axios.get('/api/todolist')
        .then(() => {alert('succ')})
        .catch(()=>{alert('error')});
    }

    /**
     * 新たなstateやpropsを受け取った場合にrender()の直前で呼び出されるメソッド
     * 第一引数にnextProps(更新後のprops)、第二引数にnextState(更新後のstate)
     * trueまたはfalseを返す
     * デフォルトはtrueを返し再レンダリングをするが、falseが返った場合は更新がスキップされる
     */
    shouldComponentUpdate() {
        //console.log('shouldComponentUpdate');
        return　true;
    }

    /**
     * コンポーネントの更新が行われたタイミングで呼び出される
     * 第一引数にprevProps(直前のprops)、第二引数にprevState(直前のstate)を受け取る
     * 第三引数にsnapshotをとる場合もある（後述のgetSnapshotBeforeUpdate()の返り値)
     */
    componentDidUpdate() {
        //console.log('componentDidUpdate');
    }


    /**
     * 現在のコンポーネントが破棄(アンマウント)される直前で呼ばれるメソッド
     * タイマーの無効化、ネットワークへのリクエストのキャンセルなどを行う
     * 必要ない設定を破棄することでメモリを開放できる
     * の後にrender()が呼ばれることはない
     */
    componentWillUnmount() {
        //console.log('parent  componentWillUnmount')
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

export default TodoList;