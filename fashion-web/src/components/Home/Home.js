import React, { Component } from 'react';
import ProductOverView from './ProductOverView';
import Slider from './Slider/Slider';
import Banner from './Banner/Banner';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  callApiProducts() {
    fetch("http://localhost:8080/api/home")
      .then(res => res.json())
      .then(res => this.setState({ products: res.products }));
  }
  
  componentDidMount() {
    this.callApiProducts();
  }


  formatPrice = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  showProductsOverView = () => {
    const products = this.state.products.map((product, index) =>
      <ProductOverView key={index} _id={product._id} name={product.name} gender={product.gender} price={this.formatPrice(product.price)} image={product.image} />
    );
    return products;
  }

  render() {
    return (
      <div>
        <Slider />
        <Banner />
        <section className="bg0 p-t-23 p-b-140">
          <div className="container">
            <div className="p-b-10">
              <h3 className="ltext-103 cl5">Vest Overview</h3>
            </div>
            <div className="flex-w flex-sb-m p-b-52">
            </div>
            <div className="row isotope-grid">
              {this.showProductsOverView()}
            </div>
            <div className="p-b-10">
              <h3 className="ltext-103 cl5">Trousers Overview</h3>
            </div>
            <div className="flex-w flex-sb-m p-b-52">
            </div>
            <div className="row isotope-grid">
              {this.showProductsOverView()}
            </div>
            <div className="p-b-10">
              <h3 className="ltext-103 cl5">Leather Shoes Overview</h3>
            </div>
            <div className="flex-w flex-sb-m p-b-52">
            </div>
            <div className="row isotope-grid">
              {this.showProductsOverView()}
            </div>
            {/* Load more */}
            <div className="flex-c-m flex-w w-full p-t-45">
              <a href="/" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">Load More</a>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Home;