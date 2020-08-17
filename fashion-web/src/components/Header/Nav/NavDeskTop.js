import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  componentWillMount() {
    this.sendParent();
  }
  componentDidMount() {
    this.sendParent();
  }
  sendParent = () => {
    let path = window.location.pathname;
    if (path === '/' || path === '') return this.props.callBack(true);
    else return this.props.callBack(false);
  }

  render() {
    return (
      <div className="menu-desktop">
        <ul className="main-menu">
          <li className="">
            <NavLink activeClassName='active' to='/' onClick={this.sendParent}>Home</NavLink>
            {/* <ul className="sub-menu">
              <li><a href="index.html">Homepage 1</a></li>
              <li><a href="home-02.html">Homepage 2</a></li>
              <li><a href="home-03.html">Homepage 3</a></li>
            </ul> */}
          </li>
          <li>
            <NavLink to='/products' onClick={this.sendParent}>Products</NavLink>
          </li>
          <li className="label1" data-label1="hot">
            <a href="shoping-cart.html">Features</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;