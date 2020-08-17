import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import QuickView from '../QuickView/QuickView';
import RouterURL from '../RouterURL/RouterURL';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="animsition">
          {/* Header */}
          <Header />
          {/* Cart */}
          <Cart />
          {/* Home */}
          <RouterURL />
          {/* Footer */}
          <Footer />
          {/* Back to top */}
          <BackToTop />
          {/* Quick View */}
          <QuickView />
        </div>
      </Router>
    );
  }
};

export default App;
