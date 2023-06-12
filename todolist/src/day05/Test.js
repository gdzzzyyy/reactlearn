import React, { Component } from "react";

class Test extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log('Test render ');
        return <div>
            {
                this.props.content
            }
        </div>
    }
}

export default Test;