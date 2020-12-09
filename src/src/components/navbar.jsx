import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <header className="navbar">
        <h1 className="navbar-title">Habit Tracker</h1>
        <span className="navbar-count">{this.props.totalCount}</span>
      </header>
    );
  }
 
}

export default Navbar;
