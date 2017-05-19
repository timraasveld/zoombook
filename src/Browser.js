import React, { Component } from 'react'

class Browser extends Component {
  constructor(props) {
    super(props)
    this.state = {url: props.homePage}
  }

  navigateTo(newUrl) {
    this.setState(prevState => ({
      url: newUrl
    }))
  }

  render() {
    return(
      <div className="browser">
        <UrlBar url={this.state.url} onChange={(url) => this.navigateTo(url)} />
        <Viewport url={this.state.url} />
      </div>
    )
  }
}

class UrlBar extends Component {
  onKeyPress(event) {
    if(event.key == 'Enter') {
      var url = this.prependProtocolIfMissing(event.target.value)

      this.props.onChange(url)
    }
  }

  prependProtocolIfMissing(url) {
    if(/^https?\:\/\//.test(url)) {
      return url
    }
    else {
      return `https://${url}`
    }
  }

  render() {
    return (
      <input className="url-bar"
             type="text"
             defaultValue={this.props.url}
             onFocus={(e) => e.target.select()}
             onKeyPress={(e) => this.onKeyPress(e)} />
    )
  }
}

class Viewport extends Component {
  render() {
    // attributes:
    // - is: React prop to disable custom attribute whitelisting (needed to render nwdisable and nwfaketop)
    // - nwdisable: Disable node access from inside iframe, security critical. Without this, the site in the
    //              iframe would be able to make system calls and perform cross-site attacks.
    //              More info: https://github.com/nwjs/nw.js/wiki/security
    // - nwfaketop: Make site inside iframe think it has no window.parent to avoid same origin policy
    return (
      <iframe is
              nwdisable
              nwfaketop
              src={this.props.url} />
    )
  }
}

export default Browser
