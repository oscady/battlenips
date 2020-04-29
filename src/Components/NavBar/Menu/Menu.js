import React from "react";
import { bool } from "prop-types";
import { MenuStyled } from "./Menu.styled";
import ButtonComponent from '../../Buttons/ButtonComponent';

const Menu = (props, menu) => {
  return (
    <>
      <MenuStyled open={ menu } { ...props }>
        <ButtonComponent toggleMenu={ props.toggleMenu } open={ menu } takeSnapshot={ props.takeSnapshot } toggleInfo={ props.toggleInfo } toggleLandscape={ props.toggleLandscape } handleChange={ props.handleChange } />
      </MenuStyled>
    </>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
