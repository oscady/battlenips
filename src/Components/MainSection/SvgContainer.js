import React from "react";
import Matrix from "./Matrix";
import Image from '../Image/Image';

class SvgContainer extends React.Component {
  constructor(props) {
    super(props);
    this.divContainer = React.createRef();
    this._handleWindowResize = this._handleWindowResize.bind(this);
    this.calculatePoisition = this.calculatePoisition.bind(this);

    this.state = {
      container: {
        height: 70,
        width: 70
      },
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this._handleWindowResize);
    document.addEventListener('wheel', this.onWheel, { passive: false });
    const height = this.props.scale;
    const width = this.props.scale;
    this.setState({
      container: {
        height: height,
        width: width
      }
    });

  }

  _handleWindowResize() {
    const height = this.divContainer.current.clientHeight;
    const width = this.divContainer.current.clientWidth;

    this.setState({
      container: {
        height: height,
        width: width
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleWindowResize);
  }

  calculatePoisition() {
    const {
      container: { height, width }
    } = this.state;
    let scale = this.props.scale;
    let m = new Matrix();
    const cy = height / 2;
    const cx = width / 2;
    m = m.scale(scale, scale);
    //reposition to the center with the inverse applyed
    m = m.translate(cx / scale, cy / scale);
    return m;
  }

  render() {
    const height = this.props.scale;
    const width = this.props.scale;
    const viewBox = [0, 0, width, height];
    return (
      <div
        ref={ this.divContainer }
        style={ {
          border: "1px solid black",
          height: "100%",
          width: "100%"
        } }
      >
        <svg viewBox={ viewBox } >
          <Image
            name="imageSelect"
            landscape={ this.props.landscape }
            opacity={ this.props.opacity }
            fontSize={ this.props.fontValue }
            background={ this.props.background }
            backgroundHeight={ this.props.backgroundHeight }
            backgroundWidth={ this.props.backgroundWidth }
            backgroundX={ this.props.backgroundX }
            backgroundY={ this.props.backgroundY }
            imageScale={ this.props.imageScale }
            imageHeight={ this.props.imageHeight }
            imageWidth={ this.props.imageWidth }
          />
        </svg>
      </div>
    );
  }
}

export default SvgContainer;
