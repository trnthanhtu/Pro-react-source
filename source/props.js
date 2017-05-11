// import React, { Component } from 'react';

// // Parent Component
// class GroceryList extends Component {
//   render() {
//     return (
//       <ul>
//         <ListItem quanity="1" name="Bread" />
//         <ListItem quanity="6" name="Eggs" />
//         <ListItem quanity="2" name="Milk" />
//       </ul>
//     );
//   }
// }

// // Child Component

// class ListItem extends Component {
//   render(){
//     return (
//       <li>
//         {this.props.quanity} x {this.props.name}
//       </li>
//     );
//   }
// }

// React.render(<GroceryList />, document.getElementById("root"));


// Using props.children
import React, { Component } from 'react';

// Parent Component
class GroceryList extends Component {
  render() {
    return (
      <ul>
        // <ListItem quanity="1" name="Bread" />
        // <ListItem quanity="6" name="Eggs" />
        // <ListItem quanity="2" name="Milk" />
        <ListItem quantity="1">Bread</ListItem>
        <ListItem quantity="6">Eggs</ListItem>
        <ListItem quantity="2">Milk</ListItem>
      </ul>
    );
  }
}

// Child Component

class ListItem extends Component {
  render(){
    return (
      <li>
        {this.props.quanity} x {this.props.children}
      </li>
    );
  }
}

React.render(<GroceryList />, document.getElementById("root"));