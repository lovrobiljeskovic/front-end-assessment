import React from "react";
import lproyale from "../../src/assets/lp-royale.png";
import styled from "styled-components";
import { Button, Card, CardBody, Input } from "reactstrap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const CardContainer = styled.div`
  > :first-child {
    background-color: #8f51dd !important;
  }
  margin-top: 30px;
  margin-bottom: 30px;
  p {
    margin-left: 200px;
    color: white;
    font-weight: bold;
  }
  span {
    margin-left: 200px;
    color: white;
    font-size: 12px;
  }
  a {
    text-decoration: underline !important;
  }
  width: 1200px;
  @media only screen and (max-width: 600px) {
    width: auto;
    p {
      margin-left: 0px;
    }
  }
`;
const ContentContainer = styled.div`
  display: flex;
  margin-left: 200px;
  margin-right: 200px;
  input {
    margin-right: 20px;
  }
  select {
    margin-right: 20px;
  }
  button {
    border-radius: 20px;
    white-space: nowrap;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;
const H2 = styled.h2`
  text-align: center;
`;
const P = styled.p``;

const Bruh = () => {
  return (
    <Container>
      <img src={lproyale} alt="" />
      <H2>LP Royale entry tagline/title</H2>
      <P>
        Some content that explains what this is about, <br></br>this needs to be
        treated as a landing page
      </P>
      <Button outline color="info">
        Read the FAQ
      </Button>
      <CardContainer>
        <Card>
          <CardBody>
            <p className="mb-0">To get started, pick a username and a guild:</p>
            <ContentContainer>
              <Input
                className="form-control"
                type="text"
                placeholder="Your cool username"
              />
              <Input
                type="select"
                name="select"
                className="form-control digits"
                placeholder="Pick a guild"
              ></Input>
              <Button className="btn-pill" color="info">
                Get Started
              </Button>
            </ContentContainer>
            <span>
              Already signed up? <a>Connect to your wallet to login</a>
            </span>
          </CardBody>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Bruh;
