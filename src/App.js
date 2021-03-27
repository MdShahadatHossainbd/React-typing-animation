import React, { useState } from 'react';
import TypeWriter from './TypeWriter';

export default function App() {
  const [text, setText] = useState('Hello World!');

  return (
    <div className="App">
      <button onClick = {() => {
        setText('I love Bangladesh!');
      }}>ChangeText</button>
      {/* <h1>Hello Wolrd!</h1> */}
      <TypeWriter text={ text }/>
    </div>
  );
}

