import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const mytable = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
)

ReactDOM.render(<p>Another div</p>, document.getElementById("anotherdiv"))

ReactDOM.render(mytable, document.getElementById("mytable"))

// Lets use some more JSX

const myhead = <h1>Hello I am with JSX </h1>

ReactDOM.render(myhead, document.getElementById("myhead"))

const headWithReact = React.createElement('h1', {}, "H1 With REACT")


ReactDOM.render(headWithReact, document.getElementById("h1withreact"))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
