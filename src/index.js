import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from "./reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(reducer);
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, document.getElementById('root'));