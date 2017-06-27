import React, { Component } from 'react';
import { render } from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class AnimatedShoppingList extends Component {
  constructor() {
    super(...arguments);

    // Create an 'items' state pre-populated with some shopping items
    this.state = {
      items: [
        {id:1 ,name: 'Name 1'},
        {id:2 ,name: 'Name 2'},
        {id:3 ,name: 'Name 3'},
        {id:4 ,name: 'Name 4'}
      ]
    }
  }
  // Called when the user changes the input field
  handleChange(evt) {
    if(evt.key === 'Enter'){
      //Create a new item and set the current time as it's id
      let newItem = {id:Date.now(), name:evt.target.value}
      // Create a new array with the previous items plus the value the user typed
      let newItems = this.state.items.concat(newItem);
      // Clear the text field
      evt.target.value ='';
      // Set the new state
      this.setState({items: newItems});
    }
  }
  // Called when the user Clicks on a shopping item
  handleRemove(i) {
    // Create a new array without the clicked item
    var newItems = this.state.items;
    newItems.splice(i, 1);
    // Set the new state
    this.setState({items: newItems});
  }

  render(){
    let shoppingItems = this.state.items.map((item, i)=> (
      <div key={item.id}
           className="item"
           onClick={this.handleRemove.bind(this, i)}>
          {item.name}
      </div>
    ))
    return (
      <div>
        <CSSTransitionGroup transitionName="example"
                                 transitionEnterTimeout={300}
                                 transitionLeaveTimeout={300}
                                 transitionAppear={true}
                                 transitionAppearTimeout={300}>
          {shoppingItems}
        </CSSTransitionGroup>
        <input type="text" value={this.state.newItem} onKeyDown={this.handleChange.bind(this)} />
      </div>    
    );
  }
}

render(<AnimatedShoppingList />, document.getElementById('root'));
