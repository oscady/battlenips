import React, { Component, Fragment } from 'react';
import ControlPanel from '../ControlPanel/ControlPanel';
import Image from '../Image/Image';
import InfoComponent from '../InfoComponent/InfoComponent';
import html2canvas from 'html2canvas';

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      landscape: true,
      minOpacity: 0,
      maxOpacity: 1,
      opacityValue: 1,
      minFont: 10,
      maxFont: 22,
      fontValue: 10,
      background: null,
      backgroundHeight: "auto",
      backgroundWidth: "auto",
      imageHeight: 600,
      imageWidth: 900,
      backgroundX: 0,
      backgroundY: 0,
      imageScale: 100
    };
    // this.handleImage = this.handleImage.bind(this);
  }

  // handleChange = (event) => {
  //   this.setState({ opacityValue: event.target.value / 100 });
  // };

  // handleImage(event) {
  //   this.setState({
  //     background: URL.createObjectURL(event.target.files[0])
  //   });
  //   console.log(this.state.background);
  // }

  toggleLandscape = () => {
    this.setState({
      landscape: !this.state.landscape
    });
  };

  toggleInfo = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleChange = (e) => {
    console.log(this.state.backgroundHeight);
    switch (e.target.name) {
      case 'imageSelect':
        this.setState({
          background: URL.createObjectURL(e.target.files[0])
        });
        break;
      case 'imageScale': {
        this.setState({
          imageScale: e.target.value
        });
      }
        break;
      case 'opacitySlider':
        this.setState({ opacityValue: e.target.value / 100 });
      default:
        this.setState({
          [e.target.name]: e.target.value
        });
    }
  };

  saveAs = (uri, filename) => {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);

    } else {

      window.open(uri);

    }
  };

  takeSnapshot = () => {
    html2canvas(document.querySelector("#capture"), { logging: true, letterRendering: 1, allowTaint: false, useCORS: true }).then(canvas => {
      this.saveAs(canvas.toDataURL('image/jpeg'), 'file-name.jpeg');
    });
  };

  render() {
    return (
      <Fragment>
        <ControlPanel
          min={ this.state.minOpacity }
          max={ this.state.maxOpacity }
          value={ this.state.opacityValue }
          handleChange={ this.handleChange }
          landscape={ this.state.landcape }
          toggleLandscape={ this.toggleLandscape }
          backgroundHeight={ this.state.backgroundHeight }
          backgroundWidth={ this.state.backgroundWidth }
          backgroundX={ this.state.backgroundX }
          backgroundY={ this.state.backgroundY }
          imageScale={ this.state.imageScale }
          imageHeight={ this.state.imageHeight }
          imageWidth={ this.state.imageWidth }
          toggleInfo={ this.toggleInfo }
          takeSnapshot={ this.takeSnapshot }
        />
        { this.state.modal ? <InfoComponent /> :
          <Image
            name="imageSelect"
            landscape={ this.state.landscape }
            opacity={ this.state.opacityValue }
            fontSize={ this.state.fontValue }
            background={ this.state.background }
            backgroundHeight={ this.state.backgroundHeight }
            backgroundWidth={ this.state.backgroundWidth }
            backgroundX={ this.state.backgroundX }
            backgroundY={ this.state.backgroundY }
            imageScale={ this.state.imageScale }
            imageHeight={ this.state.imageHeight }
            imageWidth={ this.state.imageWidth }
          />
        }
      </Fragment>
    );
  }
}

export default MainSection;