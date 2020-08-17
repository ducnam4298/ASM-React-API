import React, { Component } from 'react';

class FavoriteMobile extends Component {
  render() {
    return (
      <a href="/" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify={0}>
        <i className="zmdi zmdi-favorite-outline" />
      </a>
    );
  }
}

export default FavoriteMobile;