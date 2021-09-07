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
    const coaItems = this.state.coas.map((coa) => (
      <div key={coa.id}>
        <h3>{coa.title}</h3>
        <p>{coa.body}</p>
      </div>
    ));
    return (
      <div>
        COA
        {coaItems}
      </div>
    );
  }
}

export default Coas;
