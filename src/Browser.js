import React, { Component } from 'react';

class Browser extends Component {
  render() {
    return (
      <iframe src={this.props.url}></iframe>
    );
  }
}

export default Browser;
