import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";

const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <div ref={ node }>
        <Burger toggleMenu={ props.toggleMenu } open={ open } setOpen={ setOpen } />
        <Menu
          open={ open }
          setOpen={ setOpen }
          takeSnapshot={ props.takeSnapshot }
          toggleInfo={ props.toggleInfo }
          toggleLandscap={ props.toggleLandscape }
          handleChange={ props.handleChange }
        />
      </div>
    </>
  );
};
export default NavBar;