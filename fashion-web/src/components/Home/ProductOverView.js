import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductOverView extends Component {

  to_slug = (str) => {
    str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
  }

  render() {
    return (
      <div className={"col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item " + this.props.gender}>
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img src={this.props.image} alt="IMG-PRODUCT" />
            <a href="/" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
              Quick View
              </a>
          </div>
          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l ">
              <Link to={"product/detail/" + this.props._id + "/" + this.to_slug(this.props.name) + ".html"} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                {this.props.name}
              </Link>
              <span className="stext-105 cl3">
                {this.props.price} VNĐ
                </span>
            </div>
            <div className="block2-txt-child2 flex-r p-t-3">
              <a href="/" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductOverView;