import React, { Component } from 'react';

class TopBarMobile extends Component {
  render() {
    return (
      <ul className="topbar-mobile">
        <li>
          <div className="left-top-bar">
            Free shipping for standard order over $100
         </div>
        </li>
        <li>
          <div className="right-top-bar flex-w">
            <a href="/" className="flex-c-m p-lr-10 trans-04">
              Help &amp; FAQs
          </a>
            <a href="/" className="flex-c-m p-lr-10 trans-04">
              My Account
          </a>
            <a href="/" className="flex-c-m p-lr-10 trans-04">
              EN
          </a>
            <a href="/" className="flex-c-m p-lr-10 trans-04">
              USD
          </a>
          </div>
        </li>
      </ul>
    );
  }
}

export default TopBarMobile;