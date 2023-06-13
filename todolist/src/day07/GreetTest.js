/**
 * 条件付きレンダー
 */
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom/client';


//函数式表现begin
function UserGreeting(props) {
    return <h1>UserGreeting</h1>;
}

function GuestGreeting(props) {
    return <h1>GuestGreeting</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}


function LoginButton(props ) {
    return <button onClick={ props.onClick} >
        logout
    </button>
}

function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello MailBox!</h1>
            {unreadMessages.length > 0 && 
                <h2>
                    You have {unreadMessages.length} unread message.    
                </h2>
            }
        </div>
    )
}

//函数式表现end


//クラスコンポーネント　begin
class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false,
        }

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn : true,
        });
    }

    handleLogOutClick() {
        this.setState( {
            isLoggedIn : false,
        })
    }

    render () {

        const isLoggedIn = this.state.isLoggedIn;
        const messages = ['React', 'Re: React', 'Re, Re:React'];

        let button;
        if(isLoggedIn) {
            button = <LoginButton onClick = {this.handleLogOutClick} />
        } else {
            button = <LoginButton onClick = {this.handleLoginClick} />
        }

        let mailbox = <MailBox unreadMessages = {messages} />;

        return (
            <Fragment>
                <Greeting isLoggedIn = {isLoggedIn}></Greeting>
                {button}

                {mailbox}
            </Fragment>
        );
    }
}

//クラスコンポーネント　end

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LoginControl/>);
