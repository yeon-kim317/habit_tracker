import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    handleAdd = name => {
        this.props.onAdd(name);
    };

    render() {
        return (
            <div className="contents">
                <HabitAddForm onAdd={this.handleAdd} />
                <ul className="habits">
                    {this.props.habits.map(habit => (
                        <Habit 
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                            onEdit={this.props.onEdit}
                            onComplete={this.props.onComplete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>
                    <i className="fas fa-redo-alt"></i>Reset All
                </button>
           </div>
        );
    }
}

export default Habits;
