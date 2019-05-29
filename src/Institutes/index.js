import React, { Component } from "react";
import InstituteImage from "../components/InstituteImage/index";
import Footer from "../components/Footer/index";
import Img from "../components/Image/index";
import InstituteImages from '../components/Institutes/index'
import styled from "styled-components";
import img3 from "./oi.jpg";


const DivText = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  padding-top: 2.5vh;
`;
const Heading = styled.h1`
  font-family: "Oswald", sans-serif;
  width: 80%;
  box-sizing: 100%;
  color: #404040;
  font-size: calc(10px + 1vw);
  margin-top: 2.5vh;
  padding: 2.5vh 0;
  border-bottom: 1px solid #000066;
  border-top: 1px solid #000066;
  font-weight: lighter;
`;
const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  margin: 0;
  background: #f1f1f1;
  text-transform: uppercase;
  color: #0033ff;
  font-size: calc(20px + 4vw);
  line-height: calc(20px + 4vw);
  letter-spacing: 2px;
  padding: 6vh 0 0 0;
`;

class Cities extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div style={{ backgroundColor: "#f1f1f1" }}>
        <Img
          height="100vh"
          image={img3}
          title="Our Institutes"
          brightness="110%"
        />
        <DivText>
          <Heading>
            In consectetur fugiat incidunt fugiat et aut. Voluptas quae nam
            ullam possimus voluptas. Corrupti officia beatae hic omnis porro
            dignissimos voluptas aliquid. Illum quis labore est. Recusandae qui
            ut at qui consequatur quia omnis eos beatae.
          </Heading>
        </DivText>
        <Title>Riees Institutes</Title>
        <InstituteImages/>
        <Footer />
      </div>
    );
  }
}
export default Cities;
