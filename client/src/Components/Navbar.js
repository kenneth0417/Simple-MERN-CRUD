import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 7.5vh;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: peachpuff;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 5rem;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <List>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/create">Create</StyledLink>
        </List>
      </Nav>
    </>
  );
};

export default Navbar;
