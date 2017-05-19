class Viewport extends Component {
  render() {
    return (
      <iframe url={this.props.url}></iframe>
    );
  }
}
