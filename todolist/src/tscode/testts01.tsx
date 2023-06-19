import React from "react";

interface Props {
    endDate: string,
    timeout: any,
}

interface State {
    now: any
}

let timer: any = null
class CountDown extends React.Component<Props, State> {
   // readonly state: Readonley<State> = { 
        //now : SVGAnimate
   // }

    componentDidMount(): void {
        timer = setInterval(() : void => {
            this.setState({
                //now :
            })
        })
    }
}