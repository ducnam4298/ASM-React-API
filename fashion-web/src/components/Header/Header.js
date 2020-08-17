import React, { Component } from 'react';
import NavDeskTop from './Nav/NavDeskTop';
import CountCartDeskTop from './Count/CountCartDeskTop';
import SearchDeskTop from './Search/SearchDeskTop';
import FavoriteDeskTop from './Favorite/FavoriteDeskTop';
import TopBarDesktop from './TopBar/TopBarDesktop';
import SearchMobile from './Search/SearchMobile';
import CountCartMobile from './Count/CountCartMobile';
import TopBarMobile from './TopBar/TopBarMobile';
import NavMobile from './Nav/NavMobile';
import FavoriteMobile from './Favorite/FavoriteMobile';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isHomePage :true }
  }

  sendChild = (isHomePage) => {
    this.setState({ isHomePage: isHomePage })
  }
  
  render() {
    return (
      <header className={this.state.isHomePage ? '' : 'header-v4'} >
        {/* Header desktop */}
        {console.log(this.state.isHomePage+' home')}
        <div className="container-menu-desktop">
          {/* Topbar */}
          <TopBarDesktop />
          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
              {/* Logo desktop */}
              <a href="/" className="logo">
                <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
              </a>
              {/* Menu desktop */}
              <NavDeskTop callBack={this.sendChild}/>
              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <SearchMobile />
                <CountCartDeskTop />
                <FavoriteDeskTop />
              </div>
            </nav>
          </div>
        </div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo moblie */}
          <div className="logo-mobile">
            <a href="index.html"><img src="/images/icons/logo-01.png" alt="IMG-LOGO" /></a>
          </div>
          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <SearchMobile />
            <CountCartMobile />
            <FavoriteMobile />
          </div>
          {/* Button show menu */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className="menu-mobile">
          <TopBarMobile />
          <NavMobile />
        </div>
        {/* Modal Search */}
        <SearchDeskTop />
      </header>
    );
  }
}

export default Header;