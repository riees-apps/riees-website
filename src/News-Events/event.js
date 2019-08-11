import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/index";
import Events from "../components/Events/index";
import Button from "../components/Button/index";

import "./event.css";

const Image = styled.div`
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
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 600px) {
    background-attachment: scroll;
    background-size: 100% 100%;
    height: 70vh;
    padding-bottom:10%;
    align-content: center;
    box-shadow: 0px 150vh rgba(0, 0, 0, 0.4) inset;
  }
`;
const Img = styled.img`
  width: 65%;
  height: 50vh;
  margin-right: auto;
  margin-bottom: 5vh;
`;
const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: bold;
  font-size: calc(30px + 2vw);
  line-height: calc(30px + 2vw);
  letter-spacing: 1px;
  margin: auto;
  width: 80%;
  text-align: start;
  margin-bottom: 5%;
  @media (max-width: 600px) {
    font-size: calc(15px + 3vw);
    line-height: calc(15px + 3vw);
    margin-bottom: 10%;
  }
`;
const SubTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: 500;
  font-size: calc(20px + 1vw);
  line-height: calc(20px + 1vw);
  letter-spacing: 1px;
  margin: auto;
  width: 80%;
  text-align: start;
  @media (max-width: 600px) {
    margin-bottom: 2.5%;
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
    width: 100%;
    padding: 10vh 10%;
  }
`;
const Subheading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 70%;
  margin-left: 10%;
  margin-top: 1%;
  margin-bottom: 1%;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;
const Text = styled.h1`
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  color: #444;
  font-weight: lighter;
  font-size: calc(7px + 1vw);
  line-height: calc(8px + 1vw);
  width: 100%;
  text-align: start;
  @media (max-width: 600px) {
    font-size: calc(12px + 1vw);
    line-height: calc(12px + 1vw);
  }
  padding: 0 0 2.5vh 0;
`;
const Container = styled.div`
  background: #f4f4f4;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  width: 100%;
  z-index: 100;
  position: relative;
`;
const Details = styled.h1`
  text-align: start;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(9px + 1vw);
  line-height: calc(9px + 1vw);
  letter-spacing: 0.5px;
  font-weight: 400;
  width: max-content;
  color: #f4f4f4;
  height: max-content;
  @media (max-width: 600px) {
    font-size: calc(16px + 1vw);
    line-height: calc(16px + 1vw);
  }
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
  @media (max-width: 600px) {
    margin-top: 20%;
  }
`;
const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  margin-left: 10%;
  background: ${props => props.background || "#fafafa"};
  color: #0077ff;
  background-color: #f4f4f4;
  font-size: calc(5px + 3vw);
  line-height: calc(5px + 3vw);
  width: max-content;
  letter-spacing: 3px;
  padding-top: 5vh;
  text-align: start;
  padding-bottom: 1.5vh;
  margin-top: 5vh;
  border-bottom: 1vh solid pink;
  @media (max-width: 600px) {
    margin-left:  2.5%;
    font-size: calc(10px + 3vw);
    line-height: calc(10px + 3vw);
  }
`;
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
class Event extends Component {
  componentWillMount() {
    document.documentElement.scrollTop = 0;
  }
  render() {
    const {
      title,
      capa,
      link,
      date,
      dateFim,
      dateEvent,
      placeEvent,
      text,
      eventos
    } = this.props;

    const ano = new Date(date).getFullYear();
    const mes = months[new Date(date).getMonth()];
    const dia = new Date(date).getDate();
    const hora = addZero(new Date(date).getHours());
    const minuto = addZero(new Date(date).getMinutes());

    const anoFim = new Date(dateFim).getFullYear();
    const mesFim = months[new Date(dateFim).getMonth()];
    const diaFim = new Date(dateFim).getDate();

    return (
      <div>
        <Image
          x="0.6"
          height="75vh"
          image={`https://riees-api.herokuapp.com/bucket/${
            capa !== null ? capa : ""
          }`}
        >
          <div>
            <Badge>{placeEvent !== null ? "Event" : "New"}</Badge>
            <Title>{title}</Title>
            <Subheading className={placeEvent === null ? "" : "displayNone"}>
              <Details>
                <i className={`fas fa-clock iconDate`} />{" "}
                {`${dia} ${mes}, ${ano}`}
              </Details>
            </Subheading>

            <Subheading className={placeEvent !== null ? "" : "displayNone"}>
              <Details>
                <i className={`fas fa-calendar iconDate`} />{" "}
                {`${dia} ${mes}, ${ano}`}{" "}
                {dateFim !== 0 ? `~ ${diaFim} ${mesFim}, ${anoFim}` : ""}
              </Details>
              <Details>
                <i className={`fas fa-clock iconDate`} />{" "}
                {`${hora} : ${minuto}`}
              </Details>
              <Details>
                <i className={`fas fa-map-marker-alt iconDate`} /> {placeEvent}
              </Details>
            </Subheading>
          </div>
        </Image>
        <Container>
          <DivText>
            <div
              className="innerHTMLEvent"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <Button
              institute="true"
              className={placeEvent !== null ? "" : "displayNone"}
              url={link}
              name="sign up here"
            />
          </DivText>
          <Heading>Latest news</Heading>
          <Events eventos={eventos} side final={9} />
          <div className="divButton">
            <Button
              style={{ margin: "0 auto" }}
              url="/News-Events"
              name="All news and events"
            />
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Event;
