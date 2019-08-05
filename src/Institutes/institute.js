import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/index";
import SideMenu from "../components/SideMenu/index";
import AreaCard from "../components/AreaCard/index";
import Button from "../components/Button/index";
import { Link } from "react-router-dom";
import "./institute.css";

import api from "../api/api";

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
  justify-content: center;
  width: 100%;
`;
const Title = styled.h1`
  position: fixed;
  font-family: "Poppins", serif;
  font-weight: bolder;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: white;
  font-size: calc(80px + 1vw);
  line-height: calc(80px + 1vw);
  letter-spacing: 5px;
  margin: auto;
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    position: absolute;
    font-size: calc(1em + 5vh);
    line-height: 1em;
  }
`;
const DivText = styled.div`
  font-family: "Raleway", serif;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 60%;
  padding-bottom: 10vh;
  padding-left: 2.5vh;
  @media (max-width: 768px) {
    width: 90%;
    padding-left: 0;
  }
`;
const Heading = styled.h1`
  font-family: "Poppins", serif;
  color: ${props => props.color};
  font-weight: bolder;
  font-size: calc(15px + 1.75vw);
  line-height: calc(15px + 1.75vw);
  letter-spacing: 1px;
  padding: 0 0.75vw 5vh 0;
  width: max-content;
  @media (max-width: 768px) {
    font-size: calc(1em +2vh);
    line-height: calc(1em +2vh);
    padding: 0 1.5vw 5vh 0;
  }
`;
const Subheading = styled.h4`
  position: fixed;
  font-family: "Poppins", serif;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: white;
  letter-spacing: 5px;
  margin: auto;
  margin-top: calc(80px + 1vw);
  width: 100%;
  text-align: center;
  font-size: calc(20px + 0.5vw);
  letter-spacing: 1px;
  font-weight: lighter;
  line-height: calc(20px + 0.5vw);
  @media (max-width: 768px) {
    position: absolute;
    margin-top: calc(1em + 4.5vh);
    font-size: calc(1em + 1vh);
    line-height: calc(1em);
  }
`;
const Text = styled.h1`
  font-family: "Raleway", serif;
  color: #303032;
  font-weight: lighter;
  font-size: calc(7px + 1vw);
  line-height: calc(8px + 1vw);
  letter-spacing: 0.05px;
  width: 100%;
  text-align: start;
  @media (max-width: 768px) {
    font-size: calc(10px + 1vw);
    line-height: calc(11px + 1vw);
    letter-spacing: 0.5px;
    color: #505050;
    text-align: justify;
    padding: 0 0 0.5vh 0;
  }
  padding: 0 0 2.5vh 0;
`;
const Text2 = styled.li`
  font-family: "Raleway", sans-serif;
  color: #202022;
  font-weight: lighter;
  margin-bottom: 1vh;
  font-size: calc(7px + 1vw);
  line-height: calc(8px + 1vw);
  width: 100%;
  text-align: start;
  @media (max-width: 768px) {
    font-size: calc(10px + 1vw);
    line-height: calc(11px + 1vw);
    letter-spacing: 0.5px;
    color: #505050;
    padding: 0 0 0.5vh 0;
  }
  padding: 0 0 2.5vh 0;
`;
const Campus = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #003b81;
  font-weight: lighter;
  margin-bottom: 1vh;
  font-size: calc(9px + 1.6vw);
  line-height: calc(10px + 1.6vw);
  width: 100%;
  text-align: start;
  @media (max-width: 768px) {
    font-size: calc(10px + 3vw);
    line-height: calc(11px + 3vw);
    letter-spacing: 1px;
    color: #003b81;
    margin-bottom: 5vh;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.justify};
  padding: 5vh 0 0 0;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  z-index: 100;
  position: relative;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const Img = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: white;
  padding-bottom: 10vh;
  padding-top: 3vh;
  width: 100%;
  z-index: 100;
  position: relative;
  @media (max-width: 768px) {
    padding: 0;
    padding-top: 3vh;
  }
`;
const Logo = styled.img`
  width: 30vh;
  height: 10vh;
  z-index: 100;
  position: relative;
  @media (max-width: 768px) {
    width: 45vw;
    height: 10vh;
  }
`;

const Icon = styled.i`
  color: #003b81;
  margin-right: 5vw;
  font-size: 4.25vh;
  width: 6.5vh;
  height: 6.5vh;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 100ms;
  :hover {
    transition: all 300ms;
    color: #fff;
    background-color: #3a589e;
    transform: scale(1.05);
    background-color: ${props => props.color};
    cursor: pointer;
  }
`;

class Institute extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      unidade: 0,
      cidade: "",
      areas: []
    };
  }
  onChildChanged(New) {
    this.setState({ unidade: New });
  }
  filtro = item => {
    if (item.deletedAt > 0) {
      return false;
    } else return true;
  };
  componentDidMount() {
    this.props.cursos.filter(this.filtro.bind(this)).map(curso => {
      const newArea = this.state.areas;

      if (newArea.indexOf(curso.area) === -1) newArea.push(curso.area);

      this.setState({ areas: newArea });
    });
  }
  componentDidUpdate() {
    api
      .get(
        `/unidade?where={"nome":"${
          this.props.unidades.filter(this.filtro.bind(this))[this.state.unidade]
            .nome
        }","deletedAt":0,"instituicao":"${this.props.id}"}`
      )
      .then(res => {
        this.setState({ cidade: res.data[0].cidade.nome });
      });
  }

  render() {
    const {
      capa,
      logo,
      url,
      institutes,
      pontosFortes,
      descricao,
      missao
    } = this.props;
    const unidades = this.props.unidades.filter(this.filtro.bind(this));
    const areas = this.state.areas;
    const cursos = this.props.cursos.filter(this.filtro.bind(this));
    const name = this.props.name.split("-")[0];
    const sub = this.props.name.split("-")[1];
    var cidade;

    return (
      <div>
        <Image
          x="0.5"
          height="80vh"
          image={`https://riees-api.herokuapp.com/bucket/${
            capa !== null ? capa : ""
          }`}
        >
          <div>
            <Title>{name}</Title>
            <Subheading>{sub}</Subheading>
          </div>
        </Image>
        <Img>
          <Logo
            src={`https://riees-api.herokuapp.com/bucket/${
              logo !== null ? logo : ""
            }`}
            alt=""
          />
        </Img>
        <Container>
          <SideMenu
            callbackParent={New => this.onChildChanged(New)}
            page="Institute"
            links={institutes}
            unidades={unidades}
            areas={areas}
            cursos={cursos}
          />
          <DivText>
            <Div justify="flex-start">
              <Heading color="#303033">{name}</Heading>
              <Heading color="#003b81">description</Heading>
            </Div>
            <div
              className="innerHTMLInstitute"
              dangerouslySetInnerHTML={{ __html: descricao }}
            />
            <Div justify="flex-start">
              <Heading color="#303033">{name}</Heading>
              <Heading color="#003b81">mission</Heading>
            </Div>
            <div
              className="innerHTMLInstitute"
              dangerouslySetInnerHTML={{ __html: missao }}
            />
            <Div justify="flex-start">
              <Heading color="#303033">{name}</Heading>
              <Heading color="#003b81">contact</Heading>
            </Div>
            <Text>
              <i
                style={{ transform: "rotate(90deg)" }}
                className={`fas fa-phone iconInstitute`}
              />{" "}
              {this.props.telefone}
            </Text>
            <Text>
              <i
                className={
                  this.props.telefone2 !== ""
                    ? `fas fa-envelope iconInstitute`
                    : "displayNone"
                }
              />{" "}
              {this.props.telefone2}
            </Text>
            <Text>
              <i className={`fas fa-envelope iconInstitute`} />{" "}
              {this.props.email}
            </Text>

            <Div justify="flex-start">
              <Heading color="#303033">{name}</Heading>
              <Heading color="#003b81">social media</Heading>
            </Div>
            <div className="divIcons">
              <a
                href={this.props.facebook}
                target="_blank"
              >
                <Icon
                  color="#3a589e"
                  className={
                    this.props.facebook !== ""
                      ? `fab fa-facebook-f`
                      : "displayNone"
                  }
                />{" "}
              </a>
              <a
                href={this.props.instagram}
                target="_blank"
              >
                <Icon
                  color="#e4405f"
                  className={
                    this.props.instagram !== ""
                      ? `fab fa-instagram`
                      : "displayNone"
                  }
                />{" "}
              </a>
              <a
                href={this.props.twitter}
                target="_blank"
              >
                <Icon
                  color="#00acee"
                  className={
                    this.props.twitter !== "" ? `fab fa-twitter` : "displayNone"
                  }
                />{" "}
              </a>

              <a
                href={this.props.linkedin}
                target="_blank"
              >
                <Icon
                  color="#0e76a8"
                  className={
                    this.props.linkedin !== ""
                      ? `fab fa-linkedin-in`
                      : "displayNone"
                  }
                />{" "}
              </a>
            </div>

            <Div justify="flex-start">
              <Heading color="#303033">{name}</Heading>
              <Heading color="#003b81">strengths</Heading>
            </Div>
            {pontosFortes.map(ponto => (
              <Text2>{ponto}</Text2>
            ))}

            <Div justify="flex-start">
              <Heading color="#303033">{name}</Heading>
              <Heading color="#003b81">courses</Heading>
            </Div>
            {cursos.map(curso => (
              <Text2>{`${curso.nome} (${curso.nivel})`}</Text2>
            ))}

            <AreaCard name={name} areas={areas} />
            <Div justify="flex-start">
              <Heading color="#303033">Campus</Heading>
              <Heading color="#003b81">
                {unidades[this.state.unidade].nome}
              </Heading>
            </Div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a ante ante consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, curabitur a ante ante. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sit amet ipsum dolor , consectetur
              adipiscing elit. Curabitur a ante ante consectetur adipiscing
              elit. Curabitur a ante ante consectetur adipiscing elit.
            </Text>

            <Div justify="flex-start">
              <Heading color="#303033">
                {unidades[this.state.unidade].nome}
              </Heading>
              <Heading color="#003b81">Location</Heading>
            </Div>
            <Text>
              <i className={`fas fa-map-marker-alt iconInstitute`} />{" "}
              {unidades[this.state.unidade].logradouro},{" "}
              {unidades[this.state.unidade].numero}
            </Text>
            <Text2 style={{ listStyle: "none" }}>
              <i className={`fas fa-map-marker-alt iconInstitute`} />{" "}
              {unidades[this.state.unidade].bairro}, {this.state.cidade} -
              Espirito Santo - {unidades[this.state.unidade].cep}
            </Text2>
            <Text>
              <i className={`fas fa-map-marker-alt iconInstitute`} />{" "}
              {unidades[this.state.unidade].complemento}
            </Text>
            <Div className="DivMobile" justify="flex-start">
              <Heading color="#303033">All</Heading>
              <Heading color="#003b81">Campus</Heading>
            </Div>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="DivMobile"
            >
              {unidades.filter(this.filtro.bind(this)).map((unidade, index) => (
                <Campus
                  className="DivMobile"
                  onClick={() => this.setState({ unidade: index })}
                >{`Campus ${unidade.nome}`}</Campus>
              ))}
            </div>
            <br />
            <br />
            <Button
              url={url}
              institute="true"
              name="Visit the institute website"
            />
            <Button
              return={true}
              color="#FF1493"
              url="/Members"
              name="All institutes"
            />
          </DivText>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Institute;
