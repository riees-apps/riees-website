import React, { Component } from "react";
import styled from "styled-components";
import {FormattedMessage} from 'react-intl'
import img from "./oi.jpg";
import img2 from "./oi.jpg";
import img3 from "./palacio.jpg";
import Image from "../components/Image/index";
import Footer from "../components/Footer/index";
import fapes from "./oie_transparent2.png";
import governo from "./Brasao_Governo_horizontal_white_right_small.png";

const DivText = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5vh 0;
`;
const DivText2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 5vh 0;
`;
const Logo = styled.img`
  max-width: 100%;
  margin: 15px;
  transition: all 0.2s linear;
  :hover {
    cursor:pointer;
    transition: all 0.2s linear;
    transform:scale(1.03)
  }
  @media (max-width: 768px) {
    width: 120%;
  }
`;
const DivLogo = styled.div`
  color: #f1f1f1;
  display: block;
  height:auto;
  width:65%;
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;
`;
const DivImage = styled.div`
  padding: 5vh 0;
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x}) inset;
  position: relative;
  height: ${props => props.height};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 600px) {
    background-attachment: scroll
  }
`;
const Heading = styled.h1`
font-family: 'Poppins', sans-serif;
  margin: 0;
  text-transform: uppercase;
  color: ${props => props.color};
  font-size: calc(15px + 4vw);
  line-height: calc(15px + 4vw);
  letter-spacing: 3px;
  padding: 0 0 1.5vh 0;
  margin-bottom:2.5vh;
  border-bottom: 1vh solid ${props => props.border};
`;
const Text = styled.h1`
  color: ${props => props.color};
  font-family: "Raleway", sans-serif;
  font-size: calc(11px + 1vw);
  line-height: calc(12px + 1vw);
  letter-spacing:0.25px;
  font-weight: lighter;
  width: 100%;
  text-align:center;
  @media (max-width: 600px) {
    font-size: calc(10px + 1vw);
    line-height: calc(11px + 1vw);
    letter-spacing:0.5px;
  }
`;
const Text2 = styled.li`
  font-family: 'Raleway', sans-serif;
  font-size: calc(11px + 1vw);
  color: ${props => props.color};
  font-weight: lighter;
  margin-bottom:1.5vh;
  line-height: calc(12px + 1vw);
  letter-spacing: 0.25px;
  width: 100%;
  text-align: start;
`;
const Text3 = styled.h1`
  color: #FFF;
  font-family: "Raleway", sans-serif;
  font-size: calc(11px + 1vw);
  line-height: calc(12px + 1vw);
  letter-spacing:0.25px;
  font-weight: lighter;
  width: 100%;
  @media (max-width: 600px) {
    font-size: calc(10px + 1vw);
    line-height: calc(11px + 1vw);
    letter-spacing:0.5px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 80%;
`;

class About extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <div>
        <Image title={<FormattedMessage id="RIEES"/>} height="60vh" image={img} />
        <DivText>
          <Heading border='pink' color='#0077ff'><FormattedMessage id="Who"/></Heading>
          <Div >
            <Text color='#505050'>
              Criada em 26 de julho de 2017 a RIEES objetiva-se em se estruturar e se consolidar como organismo de cooperação internacional de educação no estado do Espírito Santo, por meio do qual as instituições de ensino e pesquisa possam desenvolver ações de internacionalização de forma conjunta.
            </Text>
          </Div>
        </DivText>
        <DivImage
          x="0.6"
          image={img2}
        >
          <Heading border='#fafafa' color='#fafafa'><FormattedMessage id="objetivos-especificos"/></Heading>
          <Div >
            <Text2 color='#fafafa'>
              <FormattedMessage id="Specific1"/>
            </Text2>
            <Text2 color='#fafafa'>
              <FormattedMessage id="Specific2"/>
            </Text2>
            <Text2 color='#fafafa'>
              <FormattedMessage id="Specific3"/>
            </Text2>
            <Text2 color='#fafafa'>
              <FormattedMessage id="Specific4"/>
            </Text2>
            <Text2 color='#fafafa'>
              <FormattedMessage id="Specific5"/>
            </Text2>
          </Div>
        </DivImage>
        <DivText>
          <Heading border='pink' color='#0077ff'><FormattedMessage id="colabora-participa"/></Heading>
          <Div>
            <Text2>
              <FormattedMessage id="Collaborating1"/>
            </Text2>
            <Text2>
              <FormattedMessage id="Collaborating2"/>
            </Text2>
            <Text2>
              <FormattedMessage id="Collaborating3"/>
            </Text2>
            <Text2>
              <FormattedMessage id="Collaborating4"/>
            </Text2>
          </Div>
        </DivText>
        <DivImage
          x="0.75"
          image={img3}
        >
          <Heading border='#fafafa' color='#fafafa'><FormattedMessage id="Support"/></Heading>
          <DivLogo>
            <a href="https://www.es.gov.br/" target="_blank"><Logo src={governo}/></a>
            <a href="https://fapes.es.gov.br/" target="_blank"><Logo src={fapes}/></a>
          </DivLogo>
          <DivText2>
            <Text color='#fafafa'>
              <FormattedMessage id="Development"/>:
            </Text>
            <Text color='#fafafa'>
              Adrian Espindula Lübe - <FormattedMessage id="ProjectManager"/>
            </Text>
            <Text color='#fafafa'>
              Ericles Pereira Brum - <FormattedMessage id="Development"/>
            </Text>
            <Text color='#fafafa'>
              Évson Custódio Oliveira - <FormattedMessage id="Development"/>
            </Text>
            <Text color='#fafafa'>
              Lucas Quintino Frinhani - <FormattedMessage id="Development"/>
            </Text>
          </DivText2>
          <DivText2>
            <Text color='#fafafa'>
              Denise Coutinho Endringer - <FormattedMessage id="Supervision"/>
            </Text>
            <Text color='#fafafa'>
              Patrícia Alcântara Cardoso - <FormattedMessage id="OverallCoordination"/>
            </Text>
          </DivText2>
        </DivImage>
        <Footer/>
      </div>
    );
  }
}
export default About;
