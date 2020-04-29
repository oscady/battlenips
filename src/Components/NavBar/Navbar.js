import React, { useState, useRef } from "react";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";

const NavBar = (props) => {
  const open = props.menu;
  const node = useRef();

  return (
    <>
      <div ref={ node }>
        <Burger toggleMenu={ props.toggleMenu } open={ open } />
        <Menu
          open={ open }
          menu={ props.menu }
          takeSnapshot={ props.takeSnapshot }
          toggleInfo={ props.toggleInfo }
          toggleMenu={ props.toggleMenu }
          handleChange={ props.handleChange }
        />
      </div>
    </>
  );
};
export default NavBar;