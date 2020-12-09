/* import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    };

    render() {
        return (
        <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
            <input
                ref={this.inputRef}
                type="text"
                className="add-input"
                placehoder="Habit"
            />
            <button className="add-button">Add</button>
        </form>
        );
    }
 
} */

import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <div className="inp_area">
                <div className="inp_box">
                    <input
                        ref={inputRef}
                        type="text"
                        className="add-input"
                        placehoder="Habit"
                    />
                </div>
                <div className="btn_area">
                    <button className="add-button">Add</button>
                </div>
            </div>
        </form>
    );
});


export default HabitAddForm;
