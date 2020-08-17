import React, { Component } from 'react';

class NavModlie extends Component {
  render() {
    return (
      <ul className="main-menu-m">
        <li>
          <a href="index.html">Home</a>
          <ul className="sub-menu-m">
            <li><a href="index.html">Homepage 1</a></li>
            <li><a href="home-02.html">Homepage 2</a></li>
            <li><a href="home-03.html">Homepage 3</a></li>
          </ul>
          <span className="arrow-main-menu-m">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </span>
        </li>
        <li>
          <a href="product.html">Shop</a>
        </li>
        <li>
          <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
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
    );
  }
}

export default NavModlie;