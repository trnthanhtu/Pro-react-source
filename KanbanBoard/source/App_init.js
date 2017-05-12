import React , { Component }from 'react';

// Pareant Component
class Hello extends Component {
  render() {
    var place = "World"
    return (
      <h1>Hello {place}</h1>
    );
  }
}
React.render(<Hello />, document.getElementById('root'));