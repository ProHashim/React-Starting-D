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

// Expressions in JSX

const elem = <p> Hello I am gonna write Expressions like 5+5 will be {5 + 5} </p>

ReactDOM.render(elem, document.getElementById("expressions"))

const oneDiv = (<div>
  I am nested Large block
  <div>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  </div>
</div>
)
ReactDOM.render(oneDiv, document.getElementById("onediv"))

// So if you like to write two headers,
// you must put them inside a parent element, like a div element
const myelement = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);

ReactDOM.render(myelement, document.getElementById("ele"))

// All HTML Elements must be closed, as JSX follows XML rules
const myelementinput = <input type="text" placeholder="Elements must be closed" />;

ReactDOM.render(myelementinput, document.getElementById("mye"))

// The class attr should be used as className instead of class="class-name"
// Because class is a reserved keyword in JS

const myelementp = <p className="myclass">Hello World from className</p>;


ReactDOM.render(myelementp, document.getElementById("className"))


// We cannot write if statement inside JSX
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello less than 10";
}

const myIfElement = <h1>{text}</h1>;

ReactDOM.render(myIfElement, document.getElementById("ifele"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
