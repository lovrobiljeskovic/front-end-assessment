import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { Twitter, Twitch, Mail } from "react-feather";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import apyvision from "../../src/assets/apyvision.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const ImageContainer = styled.div`
  img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }
`;

const Div = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  svg {
    color: #007bff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  button {
    margin-right: 15px;
  }
  > :last-child {
    margin-left: 30px;
    border-radius: 20px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const H2 = styled.h2`
  color: #8f51dd;
  margin-right: 20px;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const P = styled.p`
  color: #007bff;
`;

const Header = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={apyvision} alt="" />
      </ImageContainer>
      <H2>APY.vision</H2>
      <Div>
        <P>Subscribe To Updates!</P>
        <IconsContainer>
          <Twitter /> <Twitch /> <Mail />
        </IconsContainer>
      </Div>
      <div className="nav-right col pull-right right-menu">
        <ButtonContainer>
          <Button outline color="info">
            ETH
          </Button>
          <Button outline color="info">
            ⛽
          </Button>
          <Button className="btn-pill btn-air-info" color="info">
            PRO Login in
          </Button>
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default Header;
