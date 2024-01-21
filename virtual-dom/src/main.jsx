import React, { useState, render } from '../lib/index.js';

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}

const Container = ({ children }) => {
  return (
    <div class="container">
      <p>Hello world!</p>

      {children}
    </div>
  )
}

const App = () => {
  const [times, setTimes] = useState(0);
  const onClick = () => setTimes((prev) => prev + 1);

  return (
    <div id="app">
      <Container>
        <Button onClick={onClick}>Click me!</Button>

        Clicked {times}
      </Container>
    </div>
  );
}

render(<App/>, document.querySelector('#app'));