import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        { id: 1, name: 'Reading', count: 0, editMode: 'false'},
        { id: 2, name: 'Running', count: 0, editMode: 'false'},
        { id: 3, name: 'Coding', count: 0, editMode: 'false'}
    ],
  };
  
  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count: habit.count + 1 };
      }
      return item;
    })
    this.setState({habits});
  };

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count };
      }
      return item;
    })
      this.setState({habits});
  };

  handleDelete = habit => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0, editMode:'false'}];
    this.setState({habits});
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0 || habit.editMode !== 'false') {
        return {...habit, count:0, editMode:'false'}
      }
      return habit;
    });
    this.setState({habits});
  };

  handleEdit = habit => {
    const habits = this.state.habits.map(item => {
      if((item.id === habit.id) && habit.editMode === 'false') {
        return {...habit, editMode:'true'}
      }
      return item;
    });
    this.setState({habits});
  }

  handleComplete = (habit, name) => {
    const habits = this.state.habits.map(item => {
      if((item.id === habit.id) && habit.editMode === 'true') {
        return {...habit, name, editMode:'false'}
      }
      return item;
    });
    this.setState({habits});
  }

  render() {
    return (
      <div className="wrap">
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
          onEdit={this.handleEdit}
          onComplete={this.handleComplete}
        />
      </div>
    );
  }
 
}

export default App;
