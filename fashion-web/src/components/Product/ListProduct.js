import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

// import Pagination from "./Pagination/Pagination";
import Category from './Category';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import BtnFilter from './Filter/BtnFilter';
import BtnSearch from './Search/BtnSearch';
import Product from './Product';

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      offset: 0,
      data: [],
      perPage: 8,
      currentPage: 0
    }
  }

  callApiProducts() {
    axios
      .get(`http://localhost:8080/api/product/`)
      .then(res => {
        const data = res.data.products;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
        const postData = slice.map((product, index) =>
          <React.Fragment key={index}>
            <Product
              _id={product._id}
              name={product.name}
              price={this.formatPrice(product.price)}
              image={product.image}
              category={product.category} />
          </React.Fragment>)
        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        })
      })
  }

  callApiCategories = () => {
    fetch("http://localhost:8080/api/category")
      .then(res => res.json())
      .then(res => this.setState({ categories: res.categories }))

  }

  componentDidMount() {
    this.callApiProducts();
    this.callApiCategories();
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.callApiProducts()
    });
  };

  formatPrice = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  showCategories = () => {
    const categories = this.state.categories.map((category, index) =>
      <Category key={index} name={category.name} />
    );
    return categories;
  }

  render() {
    return (
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              {/* <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                All Products
              </button>
              {this.showCategories()} */}
            </div>
            <div className="flex-w flex-c-m m-tb-10">
              <BtnFilter />
              <BtnSearch />
            </div>
            {/* Search product */}
            <Search />
            {/* Filter */}
            <Filter />
          </div>
          <div className="row isotope-grid">
            {this.state.postData}
          </div>
          {/* Pagination */}
          <ReactPaginate
            containerClassName={"pagination pagination-style-three m-t-20"}
            previousLinkClassName={"number"}
            previousLabel={"Prev"}
            nextLinkClassName={"number"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            activeLinkClassName={"active"}
            pageLinkClassName={"number"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={this.handlePageClick}
            disableInitialCallback={true} />
        </div>
      </div>
    );
  }
}

export default ListProduct;