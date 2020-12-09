import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    inputRef = React.createRef();

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    handleEdit = () => {
        this.props.onEdit(this.props.habit);
    };

    handleComplete = () => {
        const name = this.inputRef.current.value;
        this.props.onComplete(this.props.habit, name);
    }

    render() {
        const {name, count, editMode} = this.props.habit;
        const input = '<input type="text" value="">';
        return (
            <li className={`habit${editMode === 'false' ? '' : ' editMode'}`}>
                <span className="left">
                    <span className="habit-count">{count}</span>
                    {editMode === 'false'
                        ?  (<>
                                <span className="habit-name">{name}</span>
                                <button
                                    className="habit-button habit-increase" 
                                    onClick={this.handleIncrement}
                                    >
                                    <i className="fas fa-plus-square"></i>
                                </button>
                                <button 
                                    className="habit-button habit-decrease"
                                    onClick={this.handleDecrement}
                                    >
                                    <i className="fas fa-minus-square"></i>
                                </button>
                            </>
                        )
                        :  (<input ref={this.inputRef} type="text" defaultValue={name} className="edit-input"></input>)
                    }
                </span>
                <span className="right">
                    {editMode === 'false'
                        ?  (<>
                                <button
                                    className="habit-button habit-edit"
                                    onClick={this.handleEdit}
                                >
                                    <i className="far fa-edit"></i>
                                </button>
                                <button
                                    className="habit-button habit-delete"
                                    onClick={this.handleDelete}
                                >
                                    <i className="far fa-trash-alt"></i>
                                </button>
                            </>
                        )
                        :  (<button 
                                className="habit-button habit-complete"
                                onClick={this.handleComplete}
                            >
                                    <i className="fas fa-check"></i>
                            </button>
                        )
                    }
                </span>
            </li>
        );
    }
}

export default Habit;
