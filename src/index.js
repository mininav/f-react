import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import rootReducer from './reducers'
import Websocket from "./middleware/Websocket";

const store = createStore(rootReducer);

const websocket = new Websocket({
    url: "ws://f.fusion-mng.xyz/hws",
    store: store
});

ReactDOM.render(
    <Provider store={store}>
        <App websocket={websocket} />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
