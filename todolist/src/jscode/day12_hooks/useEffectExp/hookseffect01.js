import React, {Component} from "react";
import ReactDOM from 'react-dom/client';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class EffectClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        document.title = this.state.count + '回クリックされました。'
    }

    componentDidUpdate() {
        document.title = this.state.count + '回クリックされました。　　Update'
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