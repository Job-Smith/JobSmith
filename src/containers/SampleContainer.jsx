import React, { Component } from 'react';
import SamplePresentation from '../components/SamplePresentation/SamplePresentation.jsx';

class SampleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  increment = num => this.setState({ clicks: this.state.clicks + num });
  render = () => <SamplePresentation handleClick={this.increment} counter={this.state.clicks} />;
}

export default SampleContainer;
