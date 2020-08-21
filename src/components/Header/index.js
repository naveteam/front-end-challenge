import React from "react";
import Logo from "../../img/logo.png";
import { Wrapper } from "../../styles/styles.js";

function Header(props) {
  return (
    <>
      <Wrapper>
        <img src={Logo} alt="website logo" />
      </Wrapper>
    </>
  );
}

export default Header;
