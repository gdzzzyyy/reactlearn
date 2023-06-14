import React, {Component} from "react";
import ReactDOM from 'react-dom/client';
//import Conte

class ContextTest01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    render() {
        return (
            <>
                <p>{this.state.count}回クリックされました。</p>
                <ButtonGroup color="primary" aria-label="outline button group">
                    <Button onClick={() => this.setState({count: this.state.count + 1})}>
                        ボダン
                    </Button>

                    <Button onClick={() => this.setState({count: 0})}>
                        リセット
                    </Button>
                </ButtonGroup>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EffectClass />)