import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";
const Burger = ({ open, toggleMenu }) => {
  return (
    <StyledBurger open={ open } onClick={ toggleMenu }>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
