import React, { Component, Fragment } from 'react';
import MainSection from '../MainSection/MainSection';
import NavBar from '../NavBar/Navbar';
import html2canvas from 'html2canvas';
import ControlPanel from '../ControlPanel/ControlPanel';
import Title from '../Title/Title';

const saveAs = (uri, filename) => {

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
class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      menu: false,
      landscape: true,
      minOpacity: 0,
      maxOpacity: 1,
      opacityValue: 1,
      minFont: 10,
      maxFont: 22,
      fontValue: 36,
      background: null,
      backgroundHeight: "auto",
      backgroundWidth: "auto",
      imageHeight: 550,
      imageWidth: 400,
      backgroundX: 50,
      backgroundY: 50,
      imageScale: 100
    };
  }

  componentDidMount = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  toggleLandscape = () => {
    const ver = this.state.imageHeight;
    const lan = this.state.imageWidth;
    this.setState({
      landscape: !this.state.landscape,
      imageHeight: lan,
      imageWidth: ver
    });
  };

  toggleInfo = () => {
    this.setState({
      modal: !this.state.modal
    });
    console.log("clicked");
  };

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu
    });
    console.log(this.state.menu);
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

  takeSnapshot = () => {
    const opacit = () => {
      this.setState({ opacityValue: 1 });
    };
    html2canvas(document.querySelector("#capture"), { logging: true, letterRendering: 1, allowTaint: false, useCORS: true }).then(canvas => {
      saveAs(canvas.toDataURL('image/jpeg'), 'battlenips-question.jpeg');
    })
      .then(function () {
        opacit();
      }).then(function () {
        html2canvas(document.querySelector("#capture"), { logging: true, letterRendering: 1, allowTaint: false, useCORS: true }).then(canvas => {
          saveAs(canvas.toDataURL('image/jpeg'), 'battlenips-answer.jpeg');
        });
      });
  };

  render() {
    return (
      <Fragment>
        <NavBar
          takeSnapshot={ this.takeSnapshot }
          toggleInfo={ this.toggleInfo }
          toggleLandscap={ this.toggleLandscape }
          handleChange={ this.handleChange }
          toggleMenu={ this.toggleMenu }
        />
        <Title />
        <MainSection
          modal={ this.state.modal }
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

        <div style={ { width: "100vw", height: "20vh", float: "left", display: "inline-block" } } />
        <ControlPanel
          min={ this.state.minOpacity }
          max={ this.state.maxOpacity }
          value={ this.state.opacityValue }
          handleChange={ this.handleChange }
          landscape={ this.state.landcape }
          opacity={ this.state.opacityValue }
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
          modal={ this.state.modal }
        />
      </Fragment>
    );
  }
}

export default Body;