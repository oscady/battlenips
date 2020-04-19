import React from "react";
import { Rnd } from "react-rnd";
import Box from "../Box/Box";
import fitty from 'fitty';

const MoveyBox = props => (
  <div
    className="box"
    style={ {
      margin: 0,
      height: "100%",
      padding: "0",
      objectFit: "contain",
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
    opacity: 0.8,

  } }>
    <div
      id="capture"
      style={ {
        margin: "0",
        backgroundImage: `url(${props.background})`,
        width: `${props.backgroundWidth}px`,
        height: `${props.backgroundHeight}px`,
        maxHeight: "100%",
        maxWidth: "100vw",
        border: "1px solid black",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${props.backgroundX}%` + " " + `${props.backgroundY}%`,
        backgroundSize: `${props.imageScale}%`
      } }
    >
      <p style={ { backgroundColor: "white", width: "object-fit", float: "left", opacity: 0.7 } }>r/battlenips</p>
      <Rnd
        default={ {
          x: 0,
          y: 0,
          width: 250,
          height: 250
        } }
        minWidth={ 200 }
        minHeight={ 200 }
        lockAspectRatio={ 1 / 1 }
        bounds="parent"

      >
        <MoveyBox
          opacity={ props.opacity }
          fontSize={ props.fontSize }
          background={ props.background } />
      </Rnd>
    </div>
  </div >
);