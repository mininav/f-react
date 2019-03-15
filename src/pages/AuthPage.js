import React from 'react';
import LoginForm from "../components/LoginForm";

function AuthPage(props) {

    return (
        <div className={"page"}>
            <h1>AuthPage</h1>
            <LoginForm websocket={props.websocket}/>
        </div>
    )

}

export default AuthPage;