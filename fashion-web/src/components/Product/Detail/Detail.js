import React, { Component } from 'react';
// import Image from './Image';
import Profile from './Profile';


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] }
    console.log(this.props);
  }

  callApiProductById = () => {
    const id = this.props.match.params.id;
    fetch("http://localhost:8080/api/product/detail/" + id)
      .then(res => res.json())
      .then(res => this.setState({ product: res.product }));
  }

  componentDidMount() {
    this.callApiProductById();
  }

  formatPrice = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  showImage = () => {
    const images = Array(this.state.product.image);
    const arrImage = [];
    images.forEach((image, index) => arrImage.push(
      <div key={index} className="col-md-6 col-lg-7 p-b-30">
        <div className="p-l-25 p-r-30 p-lr-0-lg">
          <div className="wrap-slick3 flex-sb flex-w">
            {/* <div className="wrap-slick3-dots" /> */}
            <div className="wrap-slick3-arrows flex-sb-m flex-w" />
            <div className="slick3 gallery-lb">
              <div className="item-slick3" data-thumb={image}>
                <div className="wrap-pic-w pos-relative">
                  <img src={image} alt="IMG-PRODUCT" />
                  <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href={image}>
                    <i className="fa fa-expand" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return arrImage;
  }
  render() {
    const product = this.state.product;
    return (
      <div>
        <div className="container">
          <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
              Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
            </a>
            <a href="product.html" className="stext-109 cl8 hov-cl1 trans-04">
              {String(product.category).toUpperCase()}
              <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
            </a>
            <span className="stext-109 cl4">
              {product.name}
            </span>
          </div>
          <section className="sec-product-detail bg0 p-t-65 p-b-60">
            <div className="container">
              <div className="row">
                {this.showImage()}
                {/* <Image image={this.showImage()} /> */}
                <Profile name={product.name} price={product.price} description={product.description} />
              </div>
              <div className="bor10 m-t-50 p-t-43 p-b-40">
                {/* Tab01 */}
                <div className="tab01">
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item p-b-10">
                      <a className="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                    </li>
                    <li className="nav-item p-b-10">
                      <a className="nav-link" data-toggle="tab" href="#information" role="tab">Additional information</a>
                    </li>
                    <li className="nav-item p-b-10">
                      <a className="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews</a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content p-t-43">
                    {/* Description */}
                    <div className="tab-pane fade show active" id="description" role="tabpanel">
                      <div className="how-pos2 p-lr-15-md">
                        <p className="stext-102 cl6">
                          {product.description}
                        </p>
                      </div>
                    </div>
                    {/* Information */}
                    <div className="tab-pane fade" id="information" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                          <ul className="p-lr-28 p-lr-15-sm">
                            <li className="flex-w flex-t p-b-7">
                              <span className="stext-102 cl3 size-205">Color</span>
                              <span className="stext-102 cl6 size-206">Black, Blue, Grey, Green, Red, White</span>
                            </li>
                            <li className="flex-w flex-t p-b-7">
                              <span className="stext-102 cl3 size-205">Size</span>
                              <span className="stext-102 cl6 size-206">XL, L, M, S</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Reviews */}
                    <div className="tab-pane fade" id="reviews" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                          <div className="p-b-30 m-lr-15-sm">
                            {/* <div className="flex-w flex-t p-b-68">
                              <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                <img src="images/avatar-01.jpg" alt="AVATAR" />
                              </div>
                              <div className="size-207">
                                <div className="flex-w flex-sb-m p-b-17">
                                  <span className="mtext-107 cl2 p-r-20">
                                    Ariana Grande
                              </span>
                                  <span className="fs-18 cl11">
                                    <i className="zmdi zmdi-star" />
                                    <i className="zmdi zmdi-star" />
                                    <i className="zmdi zmdi-star" />
                                    <i className="zmdi zmdi-star" />
                                    <i className="zmdi zmdi-star-half" />
                                  </span>
                                </div>
                                <p className="stext-102 cl6">
                                  Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                            </p>
                              </div>
                            </div>
                             */}
                            {/* Add review */}
                            {/* <form className="w-full">
                              <h5 className="mtext-108 cl2 p-b-7">
                                Add a review
                          </h5>
                              <p className="stext-102 cl6">
                                Your email address will not be published. Required fields are marked *
                          </p>
                              <div className="flex-w flex-m p-t-50 p-b-23">
                                <span className="stext-102 cl3 m-r-16">
                                  Your Rating
                            </span>
                                <span className="wrap-rating fs-18 cl11 pointer">
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <input className="dis-none" type="number" name="rating" />
                                </span>
                              </div>
                              <div className="row p-b-25">
                                <div className="col-12 p-b-5">
                                  <label className="stext-102 cl3" htmlFor="review">Your review</label>
                                  <textarea className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review" defaultValue={""} />
                                </div>
                                <div className="col-sm-6 p-b-5">
                                  <label className="stext-102 cl3" htmlFor="name">Name</label>
                                  <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="name" type="text" name="name" />
                                </div>
                                <div className="col-sm-6 p-b-5">
                                  <label className="stext-102 cl3" htmlFor="email">Email</label>
                                  <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="email" type="text" name="email" />
                                </div>
                              </div>
                              <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                Submit
                          </button>
                            </form>
                           */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
              <span className="stext-107 cl6 p-lr-25">
                SKU: JAK-01
          </span>
              <span className="stext-107 cl6 p-lr-25">
                Categories: {String(product.category).toUpperCase()}
              </span>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Detail;