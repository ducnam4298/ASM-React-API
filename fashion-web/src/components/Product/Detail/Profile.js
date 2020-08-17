import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-5 p-b-30">
        <div className="p-r-50 p-t-5 p-lr-0-lg">
          <h4 className="mtext-105 cl2 js-name-detail p-b-14">
            {this.props.name}
          </h4>
          <span className="mtext-106 cl2">
            {this.props.price} VNĐ
                </span>
          <p className="stext-102 cl3 p-t-23">
            {this.props.description}
          </p>
          {/*  */}
          <div className="p-t-33">
            <div className="flex-w flex-r-m p-b-10">
              <div className="size-203 flex-c-m respon6">
                Size
                    </div>
              <div className="size-204 respon6-next">
                <div className="rs1-select2 bor8 bg0">
                  <select className="js-select2" name="time">
                    <option>Choose an option</option>
                    <option>Size S</option>
                    <option>Size M</option>
                    <option>Size L</option>
                    <option>Size XL</option>
                  </select>
                  <div className="dropDownSelect2" />
                </div>
              </div>
            </div>
            <div className="flex-w flex-r-m p-b-10">
              <div className="size-203 flex-c-m respon6">
                Color
                    </div>
              <div className="size-204 respon6-next">
                <div className="rs1-select2 bor8 bg0">
                  <select className="js-select2" name="time">
                    <option>Choose an option</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>White</option>
                    <option>Grey</option>
                  </select>
                  <div className="dropDownSelect2" />
                </div>
              </div>
            </div>
            <div className="flex-w flex-r-m p-b-10">
              <div className="size-204 flex-w flex-m respon6-next">
                <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                  <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                    <i className="fs-16 zmdi zmdi-minus" />
                  </div>
                  <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue={1} />
                  <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                    <i className="fs-16 zmdi zmdi-plus" />
                  </div>
                </div>
                <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                  Add to cart
                      </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex-w flex-m p-l-100 p-t-40 respon7">
            <div className="flex-m bor9 p-r-10 m-r-11">
              <a href="/" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                <i className="zmdi zmdi-favorite" />
              </a>
            </div>
            <a href="/" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
              <i className="fa fa-facebook" />
            </a>
            <a href="/" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
              <i className="fa fa-twitter" />
            </a>
            <a href="/" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
              <i className="fa fa-google-plus" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;