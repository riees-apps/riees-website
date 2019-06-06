import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/index";
import Events from "../components/Events/index";
import AreaCard from "../components/AreaCard/index";
import Button from "../components/Button/index";

const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x}) inset;
  position: relative;
  height: ${props => props.height};
  @media (max-width: 600px) {
    height: 82vh;
    box-shadow: 0px 150vh rgba(0, 0, 0, 0.4) inset;
  }
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`;
const Img = styled.img`
  width: 65%;
  height:50vh;
  margin-right:auto; 
  margin-bottom:5vh;
`;
const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: calc(30px + 1vw);
  line-height: calc(30px + 1vw);
  letter-spacing: 1px;
  margin: auto;
  width: 80%;
  text-align: start;
  margin-bottom: 5%;
  @media (max-width: 600px) {
    position: absolute;
  }
`;
const SubTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  color: white;
  font-weight: 500;
  font-size: calc(20px + 1vw);
  line-height: calc(20px + 1vw);
  letter-spacing: 1px;
  margin: auto;
  width: 80%;
  text-align: start;
  @media (max-width: 600px) {
    position: absolute;
  }
`;

const DivText = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10vh 10%;
  @media (max-width: 768px) {
    width: 90%;
    padding-left: 0;
  }
`;
const Subheading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin-left: 10%;
  margin-top: 1%;
  margin-bottom: 1%;
`;
const Text = styled.h1`
  font-family: "Avenir Next", Helvetica, Arial, sans-serif;
  color: #444;
  font-weight: lighter;
  font-size: calc(7px + 1vw);
  line-height: calc(8px + 1vw);
  width: 100%;
  text-align: start;
  @media (max-width: 768px) {
    font-size: calc(6px + 1vh);
    line-height: calc(7px + 1vh);
    text-align: justify;
    padding: 0 0 0.5vh 0;
  }
  padding: 0 0 2.5vh 0;
`;
const Container = styled.div`
  background: #f4f4f4;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 100;
  position: relative;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const Details = styled.h1`
  text-align: start;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(7.5px + 1vw);
  line-height: calc(7.5px + 1vw);
  font-weight: 400;
  width: max-content;
  color: #f4f4f4;
  height: max-content;
`;
const Badge = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.2em;
  line-height: 1.2em;
  width: max-content;
  height: max-content;
  padding: 1vh 0 1vh 1vh;
  margin-left: 10%;
  padding: 1vh;
  background-color: #f4f4f4;
  color: #606060;
  font-weight: bold;
  border-radius: 5%;
`;
const Heading = styled.h1`
  font-family: "Avenir Next", sans-serif;
  margin: 0;
  background: ${props => props.background || "#fafafa"};
  color: #0077ff;
  background-color: #f4f4f4;
  font-size: calc(5px + 3vw);
  line-height: calc(5px + 3vw);
  width: 100%;
  letter-spacing: 3px;
  padding-top: 5vh;
  text-align: start;
  padding-bottom: 1.5vh;
  padding-left: 15%;
  margin-top: 5vh;
  border-bottom: 1px solid #999;
`;
class Event extends Component {
  componentWillMount() {
        document.documentElement.scrollTop = 0;
  }
  render() {
    const {
      title,
      img,
      url,
      date,
      dateEvent,
      placeEvent,
      timeEvent,
      text,
      img2
    } = this.props;

    return (
      <div>
        <Image x="0.6" height="90vh" image={img}>
          <div>
            <Badge>{typeof dateEvent !== "undefined" ? "Event" : "New"}</Badge>
            <Title>{title}</Title>
            <Subheading
              className={typeof dateEvent === "undefined" ? "" : "displayNone"}
            >
              <Details>
                <i className={`fas fa-clock iconDate`} /> {date}
              </Details>
            </Subheading>

            <SubTitle
              className={typeof dateEvent !== "undefined" ? "" : "displayNone"}
            >
              Event details
            </SubTitle>
            <Subheading
              className={typeof dateEvent !== "undefined" ? "" : "displayNone"}
            >
              <Details>
                <i className={`fas fa-calendar iconDate`} /> {dateEvent}
              </Details>
              <Details>
                <i className={`fas fa-clock iconDate`} /> {timeEvent}
              </Details>
              <Details>
                <i className={`fas fa-map-marker-alt iconDate`} /> {placeEvent}
              </Details>
            </Subheading>
          </div>
        </Image>
        <Container>
          <DivText>
            <Text>
              {text}
            </Text>
            <Text>
            {text}
            </Text>
            <Text>
            {text}
            </Text>
            <Button className={typeof dateEvent !== "undefined" ? "" : "displayNone"}  url={url} name="sign up here" />
          </DivText>
          <Heading>Latest news</Heading>
          <Events side final={9} />
          <Button url="/News-Events" name="All news and events" />
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Event;
