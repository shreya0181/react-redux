import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// STORE  - Globalised State
// Action -> A function that returns an object
const increment = ()=>{
  return{
    type: 'Increment'
  }
}
const decrement = ()=>{
  return{
    type: 'Decrement'
  }
}


// Reducer 

const counter =(state=0, action)=>{
  switch(action.type){
    case'Increment':{
              return state +1;
    }
    case'Decrement':{
              return state -1 ;
    }
  }

}
// Dispatch

let store = createStore(counter);
store.subscribe(()=>console.log(store.getState()))

store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
