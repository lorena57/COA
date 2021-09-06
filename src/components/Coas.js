import React, { Component } from 'react';

class Coas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coas: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => this.setState({ coas: data }));
  }
  render() {
    return <div>COA</div>;
  }
}

export default Coas;
