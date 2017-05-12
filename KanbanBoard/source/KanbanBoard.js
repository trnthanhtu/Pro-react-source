import React, { Component, PropTypes } from 'react';
import List from './List';

class KanbanBoard extends Component {
  render() {
    return(
      <div className="app">
        <List id='todo' title=" To Do" cards={ this.props.cards.filter((card) => card.status === "todo")} />
        <List id='in-process' title=" In Process" cards={ this.props.cards.filter((card) => card.status === "in-process")} />
        <List id='done' title="Done" cards={ this.props.cards.filter((card) => card.status === "done")} />
      </div>
    );
  }
};

KanbanBoard.propsTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default KanbanBoard;