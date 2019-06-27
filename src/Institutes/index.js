import React, { Component } from "react";
import Footer from "../components/Footer/index";
import Img from "../components/Image/index";
import InstituteImages from '../components/Institutes/index'
import styled from "styled-components";
import {FormattedMessage} from 'react-intl'
import img3 from "./oi.jpg";

const Div = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  margin:auto;
  padding-top: 6vh;
`;

const DivText = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  padding-top: 2.5vh;
`;
const Heading = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: calc(11px + 1vw);
  line-height: calc(11px + 1vw);
  letter-spacing:0.25px;
  font-weight: lighter;
  color: #404042;
  width: 80%;
  text-align:center;
  @media (max-width: 600px) {
    font-size: calc(10px + 1vw);
    line-height: calc(11px + 1vw);
    letter-spacing:0.5px;
    color: #505050;
  }
`;
const Title = styled.h1`
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  text-transform:uppercase;
  background: #f4f4f4;
  color: ${props => props.color};
  font-size: calc(30px + 3vw);
  line-height: calc(30px + 3vw);
  letter-spacing: 3px;
  padding: 6vh calc(0.5vw);
  padding-bottom: 1vh;
  border-bottom:1vh solid pink;
`;

class Institutes extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <Img
          height="100vh"
          image={img3}
          title={<FormattedMessage id="Institutes"/>}
          brightness="110%"
        />
        <Div>
          <Title color='#4247FE'><FormattedMessage id="InstitutesTitle"/></Title>
        </Div>
        <DivText>
          <Heading>
            In consectetur fugiat incidunt fugiat et aut. Voluptas quae nam
            ullam possimus voluptas. Corrupti officia beatae hic omnis porro
            dignissimos voluptas aliquid. Illum quis labore est. Recusandae qui
            ut at qui consequatur quia omnis eos beatae. In consectetur fugiat incidunt fugiat et aut. Voluptas quae nam
            ullam possimus voluptas. Corrupti officia beatae hic omnis porro
            dignissimos.
          </Heading>
        </DivText>
        <InstituteImages city=''/>
        <Footer />
      </div>
    );
  }
}
export default Institutes;
