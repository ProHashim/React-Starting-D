# Getting Started with Create React App

` ReactDOM.render()`

ReactDOM.render() is used to render HTML on a webpage

ReactDOM.render() takes two args the HTML code and HTML element

For example: Displaying a paragraph
ReactDOM.render(JSXVariable/HTML element here, document.getElementById('root'));

`JSX` <br>
JSX stands for Javascript XML
It allows us to write HTML in React

`React Component` <br>
Components are independent and reusable bits of code. It works in isolation, same as our header.jsx in the `src` folder

`PROPS`<p>
Props are arguments passed into React components.

Props are passed to components via HTML attributes.

</p>

`State`

<p>

React components has a built-in state object.

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.

</p>

`Lifecycle` <br>

<p>
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.

</p>
<b>Mounting </b>

<p>Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

constructor()
getDerivedStateFromProps()
render()
componentDidMount()</p>

<b>Updating </b>

<p>The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()</p>

<b>Unmounting </b>

<p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

componentWillUnmount()</p>
