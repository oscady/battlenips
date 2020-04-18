import React from "react";
import { Rnd } from "react-rnd";
import Box from "../Box/Box";

const MoveyBox = props => (
  <div
    className="box"
    style={ {
      margin: 0,
      height: "100%",
      padding: "0",
      backgroundColor: `rgba(250,250,250,${props.opacity})`,
      visibility: `${props.background === null ? 'hidden' : 'visible'}`
    } }
  >
    <Box
      background={ props.background } fontSize={ props.fontSize } />
  </div>
);

export default (props) => (
  <div style={ {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    backgroundColor: "white",
    opacity: 0.8
  } }>
    <div
      id="capture"
      style={ {
        margin: "0 auto",
        backgroundImage: `url(${props.background})`,
        width: `${props.imageWidth}px`,
        height: `${props.imageHeight}px`,
        minHeight: "1px",
        border: "1px solid black",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${props.backgroundX}%` + " " + `${props.backgroundY}%`,
        backgroundSize: `${props.imageScale}%`
      } }
    >
      <Rnd
        default={ {
          x: 0,
          y: 0,
          width: 400,
          height: 400
        } }
        minWidth={ 320 }
        minHeight={ 320 }
        lockAspectRatio={ 1 / 1 }
        bounds="parent"
      >
        <MoveyBox
          opacity={ props.opacity }
          fontSize={ props.fontSize }
          background={ props.background } />
      </Rnd>
    </div>
  </div>
);