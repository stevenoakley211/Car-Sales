import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import { createStore } from "redux";
import {carsReducer as reducer} from './reducers/CarsReducer'
import 'bulma/css/bulma.css';
import './styles.scss';

const store =createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);
