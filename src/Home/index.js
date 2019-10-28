import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "../components/Button/index";
import Footer from "../components/Footer/index";
import "./home.css";
import styled from "styled-components";
import img from "./vix.jpg";
import img2 from "./vix-airport.jpg";
import img3 from "./pedraazul2.jpg";
import img4 from "./vixeditada.png";
import img5 from "./mestrealvaro.jpg";
import img6 from "./mapa.png";
import img7 from "./vilavelha.jpg";
import img8 from "./colatina.jpg";
import InstituteImages from "../components/Institutes/index";
import Events from "../components/Events/index";
import Testimonial from "../components/Testimonial/index";
import { FormattedMessage } from "react-intl";

import { keyframes } from "styled-components";
import { fadeInDownBig, fadeInUpBig } from "react-animations";

const bounceAnimation = keyframes`${fadeInDownBig}`;
const bounceAnimation2 = keyframes`${fadeInUpBig}`;


const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
const BouncyDiv2 = styled.div`


  animation: 1.3s ${bounceAnimation};
`;
const BouncyDiv3 = styled.div`


  animation: 1.6s ${bounceAnimation};
`;
const BouncyDiv4 = styled.div`


  animation: 1.9s ${bounceAnimation};
`;
const BouncyDiv5 = styled.div`


  animation: 2.3s ${bounceAnimation2};
`;
const BouncyDiv6 = styled.div`
  animation: 2.5s ${bounceAnimation2};
`;

const DivTitle = styled.div`
  
  width: 80%;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  margin-top: calc(40px + 4vw);

`;

const Imagee = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(10, 0, 10, ${props => props.x}) inset;
  position: relative;
  height: ${props => props.height};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  width: 100%;
  @media (max-width: 600px) {
    box-shadow: 0px 150vh rgba(0, 0, 0, calc(${props => props.x} - 0.05)) inset;
    height: calc(91.7vh);
    width: 100vw;
    background-image: url(${props => props.image});
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }
`;
const Title = styled.h1`
  font-family: "Poppins", serif;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: #fafafa;
  font-size: calc(50px + 4vw);
  line-height: calc(50px + 4vw);
  letter-spacing: 1px;
  margin: 0;
  padding:0 15px;
`;
const Subheading = styled.h4`
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 2px black;
  color: #fafafa;
  font-size: calc(20px + 1vw);
  line-height: calc(20px + 1vw);
  letter-spacing: 1px;
`;
const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  margin: 0;
  background: ${props => props.background || "#fafafa"};
  text-transform: uppercase;
  color: #0077ff;
  background-color: #f4f4f4;
  font-size: calc(15px + 4vw);
  line-height: calc(15px + 4vw);
  width: max-content;
  letter-spacing: 1px;
  padding-top: 5vh;
  padding-bottom: 1.5vh;
  margin-top: 5vh;
  border-bottom: 1vh solid pink;
`;
const Text = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: calc(11px + 1vw);
  line-height: calc(12px + 1vw);
  letter-spacing: 0.25px;
  font-weight: lighter;
  margin: 2vh 0;
  color: #404042;
  padding: calc(10px + 1vw) 0;
  width: 100%;
  text-align: center;
  @media (max-width: 600px) {
    font-size: calc(10px + 1vw);
    line-height: calc(15px + 1vw);
    letter-spacing: 0.5px;
    color: #505050;
  }
`;
const DivText = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 7.5vh;
`;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false //Set render state to false
    };
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {

    return (
      <div style={{ backgroundColor: "#f4f4f4", textAlign: "center" }}>
        <Carousel slide pauseOnHover>
          <Carousel.Item>
            <Imagee
              x="0.35"
              height="100vh"
              image={img}
              brightness="120%"
              align="center"
              justify="center"
            >
              <DivTitle>
                <BouncyDiv>
                  <Title><FormattedMessage id="Come" /></Title>
                </BouncyDiv>
                <BouncyDiv2 className={window.location.pathname.split("/")[1] === 'pt' ? 'displayNone' : ''}>
                  <Title><FormattedMessage id="to" /></Title>
                </BouncyDiv2>
                <BouncyDiv3>
                  <Title><FormattedMessage id="meet" /></Title>
                </BouncyDiv3>
              </DivTitle>

              <BouncyDiv5>
                <Subheading>
                  VITÓRIA
                </Subheading>
              </BouncyDiv5>
            </Imagee>
          </Carousel.Item>
          <Carousel.Item>
            <Imagee
              x="0.35"
              height="100vh"
              image={img7}
              brightness="120%"
              align="center"
              justify="center"
            >
              <DivTitle>
                <BouncyDiv>
                  <Title><FormattedMessage id="Come" /></Title>
                </BouncyDiv>
                <BouncyDiv2 className={window.location.pathname.split("/")[1] === 'pt' ? 'displayNone' : ''}>
                  <Title><FormattedMessage id="to" /></Title>
                </BouncyDiv2>
                <BouncyDiv3>
                  <Title><FormattedMessage id="meet" /></Title>
                </BouncyDiv3>
              </DivTitle>

              <BouncyDiv5>
                <Subheading>
                  VILA VELHA
                </Subheading>
              </BouncyDiv5>
            </Imagee>
          </Carousel.Item>
          <Carousel.Item>
            <Imagee
              x="0.35"
              height="100vh"
              image={img3}
              brightness="145%"
              align="center"
              justify="center"
            >
              <DivTitle>
                <BouncyDiv>
                  <Title><FormattedMessage id="Come" /></Title>
                </BouncyDiv>
                <BouncyDiv2 className={window.location.pathname.split("/")[1] === 'pt' ? 'displayNone' : ''}>
                  <Title><FormattedMessage id="to" /></Title>
                </BouncyDiv2>
                <BouncyDiv3>
                  <Title><FormattedMessage id="meet" /></Title>
                </BouncyDiv3>
              </DivTitle>
              <BouncyDiv5>
                <Subheading>
                  PEDRA AZUL
                </Subheading>
              </BouncyDiv5>
            </Imagee>
          </Carousel.Item>
          <Carousel.Item>
            <Imagee
              x="0.35"
              height="100vh"
              image={img5}
              brightness="145%"
              align="center"
              justify="center"
            >
              <DivTitle>
                <BouncyDiv>
                  <Title><FormattedMessage id="Come" /></Title>
                </BouncyDiv>
                <BouncyDiv2 className={window.location.pathname.split("/")[1] === 'pt' ? 'displayNone' : ''}>
                  <Title><FormattedMessage id="to" /></Title>
                </BouncyDiv2>
                <BouncyDiv3>
                  <Title><FormattedMessage id="meet" /></Title>
                </BouncyDiv3>
              </DivTitle>
              <BouncyDiv5>
                <Subheading>
                  SERRA
                </Subheading>
              </BouncyDiv5>
            </Imagee>
          </Carousel.Item>
          <Carousel.Item>
            <Imagee
              x="0.35"
              height="100vh"
              image={img8}
              brightness="145%"
              align="center"
              justify="center"
            >
              <DivTitle>
                <BouncyDiv>
                  <Title><FormattedMessage id="Come" /></Title>
                </BouncyDiv>
                <BouncyDiv2 className={window.location.pathname.split("/")[1] === 'pt' ? 'displayNone' : ''}>
                  <Title><FormattedMessage id="to" /></Title>
                </BouncyDiv2>
                <BouncyDiv3>
                  <Title><FormattedMessage id="meet" /></Title>
                </BouncyDiv3>
              </DivTitle>
              <BouncyDiv5>
                <Subheading>
                  COLATINA
                </Subheading>
              </BouncyDiv5>
            </Imagee>
          </Carousel.Item>
        </Carousel>

        <DivText>
          <Heading>
            <FormattedMessage id="About" />
          </Heading>
          <Text>
            <FormattedMessage id="AboutResume" />
          </Text>
          <Button url="/About" name={<FormattedMessage id="Button" />} />
        </DivText>

        <Carousel fade>
          <Carousel.Item>
            <Imagee
              x="0.65"
              height="85vh"
              brightness="100%"
              contrast="100%"
              image={img}
              align="flex-start"
              justify={window.screen.width > 600 ? "flex-start" : "flex-start"}
            >
              <div className="head">
                <FormattedMessage id="Living" />
              </div>
              <div className="living">
                <img className="imgLiving" alt="" src={img6} />
                <div className="paragraphLiving">
                  <FormattedMessage id="living-es-1" />
                  <FormattedMessage id="living-es-2" />
                </div>
              </div>

              <div className="margin">
                <Button url="/Living" name={<FormattedMessage id="Button" />} />
              </div>
            </Imagee>
          </Carousel.Item>
          <Carousel.Item>
            <Imagee
              x="0.5"
              height="85vh"
              brightness="100%"
              contrast="100%"
              image={img4}
              align="flex-start"
              justify="flex-start"
            >
              <div className="head">
                <FormattedMessage id="Cities" />
              </div>
              <div className="paragraph">
                <FormattedMessage id="our-cities-home1" />
                <FormattedMessage id="our-cities-home2" />
              </div>
              <div className="margin">
                <Button url="/Cities" name={<FormattedMessage id="Button" />} />
              </div>
            </Imagee>
          </Carousel.Item>
        </Carousel>

        <DivText>
          <Heading>
            <FormattedMessage id="InstitutesTitle" />
          </Heading>
        </DivText>
        <InstituteImages Institutos={this.props.Institutes} city="" />

        <DivText>
          <Heading background="#f4f4f4">
            <FormattedMessage id="News" />
          </Heading>
          <Events
            eventos={this.props.Eventos}
            final={window.screen.width >= 768 ? 3 : 1}
          />
          <Button
            url="/News-Events"
            name={<FormattedMessage id="ButtonEvents" />}
          />
        </DivText>

        <Footer />
      </div>
    );
  }
}
export default Home;
