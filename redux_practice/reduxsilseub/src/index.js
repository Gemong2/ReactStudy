import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from "./modules";

// 스토어 만들기
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    //provider 컴포넌트로 감싸줌. sotre를 props로 전달해주어야 한다.
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'),
    );