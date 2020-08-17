import React, { Component } from 'react';

class BtnSearch extends Component {
  render() {
    return (
      <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
        <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
        <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
          Search
      </div>
    );
  }
}

export default BtnSearch;