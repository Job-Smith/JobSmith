import React from 'react';
import './SamplePresentation.css';

const SamplePresentation = props => (
  <div>
    <h1>{props.counter}</h1>
    <button onClick={() => props.handleClick(1)}>1</button>
    <button onClick={() => props.handleClick(5)}>5</button>
    <button onClick={() => props.handleClick(10)}>10</button>
  </div>
);

export default SamplePresentation;
