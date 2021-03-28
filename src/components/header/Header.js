import React from 'react';
import './header.scss';
import { BrowserRouter, Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: 'Home',
    }
  }

  render() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <nav>
          <h2>RESTy</h2>
          <Link className="navlink" to="/">Home</Link>
          <Link className="navlink" to="/history">History</Link>
          <Link className="navlink" to="/help">Help</Link>
        </nav>
      </BrowserRouter>
    </div>
  )
  }
}

export default Header;