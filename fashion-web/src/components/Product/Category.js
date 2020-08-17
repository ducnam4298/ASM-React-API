import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter={"." + this.props.name}>
        {this.props.name.toUpperCase()}
      </button>
    );
  }
}

export default Category;