import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Pagination extends Component {
  render() {
    // const count = this.props.count;
    // const pageCount = this.props.pageCount;
    let No = this.props.pageNo ? this.props.pageNo : 1;

    // console.log(this.props.pageNo);
    return (
      <div>
        <Link to={"products?pageNo=" + (No - 1) + "/" + ".html"} className="number" onClick>Prev</Link>
        <Link to={"products?pageNo=" + No + "/" + ".html"} className="number">{No}</Link>
        <Link to={"products?pageNo=" + (No + 1) + "/" + ".html"} className="number">{No + 1}</Link>
        <button className="number" href="/" >...</button>
        <Link to={"products?pageNo=" + (No + 3) + "/" + ".html"} className="number">{No + 3}</Link>
        <Link to={"products?pageNo=" + (No + 4) + "/" + ".html"} className="number">{No + 4}</Link>
        <Link to={"products?pageNo=" + (No + 1) + "/" + ".html"} className="number">Next</Link>
      </div>
    );
  }
}

export default Pagination;