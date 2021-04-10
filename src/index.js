//import { Button } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import UseEffect from './practice/useEffect Hooks/UseEffect';
//import App from './practice/useContext Hooks State/App';
//import NpmClock from './practice/npm Project/NpmClock';
//import Form from './practice/Form/Form';
//import WebApp from './practice/WebSeries/WebApp';
//import Practical3 from './practical3/Practical3';
//import MapFunction from './practice/MapFunction';
//import TodoList from './practice/Form/TodoList';
//import NpmClock from './practice/npm Project/NpmClock';
//import ClassApp from './practice/Props and States/ClassApp';
//import ClassPropsState from './practice/Props and States/ClassPropsState';
//import Counter from './practical2/Counter'
//import FuntionProps from './practice/Props and States/FuntionProps';
//import Button from './practice/Bootstrap/Button';
//import Cards from './practice/Bootstrap/Cards';
import AppRouter from './practice/Router/AppRouter';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render( 
               <>
               <BrowserRouter>
               <AppRouter/>
               </BrowserRouter>
        
            </>
              ,document.getElementById('root')
            );


           