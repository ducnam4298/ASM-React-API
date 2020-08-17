import React, { Component } from 'react';

class CountCartDeskTop extends Component {
  render() {
    return (
      <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={2}>
        <i className="zmdi zmdi-shopping-cart" />
      </div>
    );
  }
}

export default CountCartDeskTop;