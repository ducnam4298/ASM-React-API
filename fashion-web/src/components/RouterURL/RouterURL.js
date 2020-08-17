import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import ListProduct from '../Product/ListProduct';
import Detail from '../Product/Detail/Detail';

class RouterURL extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={ListProduct} />
        <Route path='/product/detail/:id/' component={Detail} />
      </Switch>
    );
  }
}

export default RouterURL;