/**
 * hook練習
 * フック（hook）　
 * stateなどのReactの機能を、クラスを書かずに使えるようになります
 * useState, useEffect など全てReactのコンポーネント
 * 
 * ０１使わない！！
 */

import React, {Component, Fragment, useState, useEffect, useContext, useRef} from "react";
import ReactDOM from 'react-dom/client';
import './styles.css'

const initialState = Math.floor(Math.random() * 10) + 1;

class HooksTest01 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: initialState,
            open: true,
        };
    }

    toggle = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.toggle}>
                    {this.state.open ? 'close' : 'open'}
                </button>

                <div className={this.state.open ? 'isOpen' : 'isClose'}>
                    <p>現在の数字{this.state.count}</p>

                    <button
                        onClick={() => this.setState({ count: this.state.count + 1})}>
                            +1
                    </button>

                    <button
                        onClick={() => this.setState({ count: this.state.count - 1})}>
                         - 1
                    </button>

                    <button onClick={() => this.setState({ count: 0})}>0</button>
                    <button onClick={() => this.setState({ count: initialState})}>最初の数値に戻す</button>
                </div>
            </Fragment>
        );
    };

}


function HooksExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'You Click ${count} tims'; 
    });

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HooksTest01 />)