/**
 * Hooks学習
 * useState
 */

import React, {Component, Fragment} from 'react';


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        }

    }

    render() {
        return (
            //使用Fragment来替换最外层的标签   
            <Fragment>

                <div>
                   <p>you clicked {this.state.count} times</p>
                   <button onClick={() => this.setState({count: this.state.count + 1})}>
                        click me
                   </button>
                </div>
            </Fragment>
        )
    }

   
}

export default TodoList;