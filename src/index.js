import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header'
import Footer from './footer'

import Slider from './slider';



// Create a variable to pass it to websiteName

const websiteName = "Space Tech"
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
    <h1>I am a Header. 🇦🇩</h1>
    <h1>I am a Header too. 🇵🇰</h1>
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



// Rendering a class/function component
// ReactDOM.render(<ComponentName />, document.getElementById("")) 

// Using props

ReactDOM.render(<Header websiteName={websiteName} />, document.getElementById("header"))

// Using props footer
ReactDOM.render(<Footer websiteName={websiteName} />, document.getElementById("footer"))

// 

// ReactDOM.render(<Slider />, document.getElementById("slider"))


class Car extends React.Component {
  render() {
    // <h5> I am using {this.props.brand} </h5>
    return (
      // To use objects please use state objects
      <h5> I drive {this.props.color} {this.props.brand}</h5>
    )
  }
}

class Garage extends React.Component {
  render() {


    return (
      <div>
        < h4 > Your car? ~{this.props.websiteName} </h4>
        <Car brand="BMW" color="Black" />
      </div>

    );
  }
}

ReactDOM.render(<Garage websiteName={websiteName} />, document.getElementById('cars'));


// Lets use state in React

class Car2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    }
  }
  // Lets just change the status
  chnagestatus = () => {
    this.setState({ color: "black" })
  }
  render() {
    return (
      <div>
        <h4>But I prefer to drive</h4>
        <ul>
          <li>
            {this.state.brand}
          </li>
          <li>
            Model: {this.state.model}
          </li>
          <li>
            {this.state.color}
          </li>
          <li>
            {this.state.year}
          </li>
        </ul>
        <span>Dont like the color? 🤨</span>
        <button
          type="button"
          onClick={this.chnagestatus}
        >Change color</button>

      </div>
    )
  }
}
ReactDOM.render(<Car2 />, document.getElementById('car2'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
