/**
 * 函数式　和　类式　的区分
 */

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom/client';

function FormattedDate(props) {
    return <h2>it is {props.date.toLocaleTimeString()}.</h2>
}

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            posts: [],
            comments: [],
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <Fragment>
                <h1>Hello World</h1>
                <FormattedDate date={this.state.date} />
            </Fragment>
        );
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }
}

function App() {
    return (
        <div>
            <Click />
            <Click />
            <Click />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
)
