import React, { Component, PropTypes } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com'
const API_HEADER = {
  'Content-Type': 'application/json',
  'Authorization': 'tutt'
}

class KanbanBoardContainer extends Component {
  constructor(){
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount(){
    fetch(API_URL+'/cards', {header: API_HEADER})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        cards: responseData
      })
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error)
    })
  }

  addTask(cardId, taskName) {

  }

  deleteTask(cardId, taskId, taskIndex) {

  }

  toggleTask(cardId, taskId, taskIndex) {

  }

  render(){
    return <KanbanBoard cards={this.state.cards} 
        taskCallbacks={{
          toggle: this.toggleTask.bind(this),
          delete: this.deleteTask.bind(this),
          add: this.addTask.bind(this)
        }}/>
  }
}

export default KanbanBoardContainer