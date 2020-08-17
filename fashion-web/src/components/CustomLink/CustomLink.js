import React from 'react';

class CustomLink extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();

    this.context.router.transitionTo("route", { search: this.state.search, type: this.state.type });
  }

  render() {
    return (<div onClick={this.handleClick}>Click</div>);
  }
}

customLink.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default CustomLink;