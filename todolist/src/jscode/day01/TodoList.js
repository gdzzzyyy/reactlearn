import React, {Component, Fragment} from 'react';

class TodoList extends Component {
    render() {
        return (
            // <div>dotolist
            //     <b>aaaaaaaaaaaa</b>
            //     <input/> <button>検索</button>
            // </div>
            
            //使用Fragment来替换最外层的标签
            <Fragment>
                <div><input /><button>搜索</button></div>
                <ul>
                    <li>日语</li>
                    <li>英语</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;