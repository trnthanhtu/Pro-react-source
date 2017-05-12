import React, { Component, Proptypes } from 'react';

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map((task) => (
      <li className="checklist__task" key={task.id.toString()}>
        <input type="checkbox" defaultChecked={task.done} />
         {task.name}
        <a href="#" className="checklist__task--remove" />
       </li>
    ));

    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text"
               className = "checklist--add-task"
               placeholder="Type something"/>
      </div>
    );
  }
}

CheckList.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypesb.object)
}

export default CheckList;