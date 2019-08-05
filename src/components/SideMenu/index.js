import React, { Component } from "react";
import styled from "styled-components";
import "./index.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Collapse from "@material-ui/core/Collapse";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import api from '../../api/api'

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins";
  font-weight: bolder;
  text-transform: uppercase;
  box-sizing: 100%;
  color: #003b81;
  font-size: calc(7px + 1vw);
  letter-spacing: 3px;
  padding: 1vh 4vh;
  text-decoration: none;
  text-align: start;
  transition: all 0.15s ease-in;
  width: 100%;
  background-color: #f2f2f5;
  :hover {
    text-decoration: none;
    background-color: #d6d4df;
    color: #003b81;
    letter-spacing: 5px;
    transition: all 0.15s ease-in;
  }
  ${props =>
    props.active &&
    `
    background-color: #d6d4df;
    color: #003b81;
    letter-spacing: 5px;
    transition:  all 0.15s linear;
    border: 0.018px solid #c8c6d4;
    :hover {
      transform: scale(1);
      background-color: #d6d4df ;
  }
  `}
`;

const StyledLink2 = styled(Link)`
  font-family: "Poppins";
  font-weight: bolder;
  text-transform: uppercase;
  box-sizing: 100%;
  color: #003b81;
  font-size: calc(5px + 1vw);
  letter-spacing: 0.25px;
  padding: 1vh 0;
  padding-left: 8vh;
  text-decoration: none;
  text-align: start;
  transition: all 0.15s ease-in;
  width: 100%;
  background-color: white;
  border-bottom: 0.05px solid #c8c6d4;
  :hover {
    text-decoration: none;
    color: #fff;
    background-color: #003b81;
    letter-spacing: 0.5px;
    transition: all 0.15s ease-in;
  }
  ${props =>
    props.active &&
    `
    color: #fff;
    background-color: #003b81;
    letter-spacing: 0.5px;
    transition:  all 0.15s linear;
    border-bottom: 0.05px solid white;
    cursor:default;
    :hover {
    transform: scale(1);
  }
  `}
`;

const DivMenu = styled.div`
  background-color: #d6d4df;
  position: sticky;
  top: 12vh;
  height: ${props => props.height};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin-left: 5%;
  margin-right: 2.5%;
  margin-bottom: 10vh;
  border: 1px solid #e4e3ea;
  margin-top: 2.5vh;
  @media (max-width: 768px) {
    display: none;
    background-attachment: scroll
  }
  `;
const Heading = styled.h1`
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  color: #fff;
  background-color: #003b81;
  font-size: calc(20px + 1vw);
  line-height: calc(20px + 1vw);
  letter-spacing: 3px;
  text-align: start;
  width: 100%;
  padding: 2vh 0 2vh 4vh;
  margin-bottom: 0;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.justify};
  justify-content: center;
  width: 100%;
`;
const DivLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const DivLink2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  background-color: #ff1;
  transition: all 0.5s linear;
`;
const DivLink3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: auto;
  width: 100%;
`;
class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      unidades: [],
      areas: [],
      cursos: [],
      active: "",
      hover: false,
      menu: false,
      active2: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  onChildChanged(New, clear) {
    this.setState({ niveis: New, clear: !clear });
  }
  handleClick() {
    const active = this.especialCharMask(window.location.pathname.split("/")[3])
      .split("%20")
      .join(" ");
    console.log(active);
    this.setState({
      ...this.state,
      active: active,
      menu: !this.state.menu
    });
  }
  handleClick2(i) {
    this.setState({
      ...this.state,
      active2: i
    });
    this.props.callbackParent(i);
  }
  openMenu() {
    this.setState({ ...this.state, menu: !this.state.menu });
  }
  changeHover() {
    this.setState({ ...this.state, hover: !this.state.hover });
  }
  changeOut() {
    this.setState({ ...this.state, hover: !this.state.hover });
  }
  especialCharMask(text) {
    text = text.replace(/={1}/g, "%");
    text = decodeURI(text);
    return text;
  }
  filtro = item => {
    if (item.deletedAt > 0) {
      return false;
    } else return true;
  };
  componentWillMount() {
    var path = this.especialCharMask(window.location.pathname.split("/")[3]);
    this.setState({
      ...this.state,
      active: path.split("%20").join(" "),
      active2: 0
    });
  }

  render() {
    const { links, page } = this.props;
    const renderCities = () => {
      return links.map(link => (
        <StyledLink
          onClick={this.handleClick}
          active={
            this.state.active === `${link.nome.split("%20").join(" ")}`
              ? true
              : false
          }
          to={{
            pathname: `/${window.location.pathname.split("/")[1]}/${page}/${
              link.nome
            }`,
            state: { scrollTop: 1 }
          }}
        >
          {link.nome}
        </StyledLink>
      ));
    };
    const renderUnidade = link => {
      return link.unidades.filter(this.filtro.bind(this)).map((unidade, i) => (
        <StyledLink2
          onClick={() => this.handleClick2(i)}
          active={this.state.active2 === i}
        >
          {unidade.nome}
        </StyledLink2>
      ));
    };

    const renderInstitutes = () => {
      return links.map((link, i) => (
        <DivLink>
          <DivLink3>
            <StyledLink
              onClick={() => this.handleClick}
              active={
                this.state.active === `${link.nome.split("%20").join(" ")}`
              }
              to={{
                pathname: `/${window.location.pathname.split("/")[1]}/${page}/${
                  link.nome
                }`,
                state: { scrollTop: 1}
              }}
            >
              {link.nome.split("-")[0]}
              <FaCaretUp
                className={
                  this.state.active === `${link.nome.split("%20").join(" ")}`
                    ? "iconUp2"
                    : "displayNone"
                }
              />
              <FaCaretDown
                className={
                  this.state.active === `${link.nome.split("%20").join(" ")}`
                    ? "displayNone"
                    : "iconDown2"
                }
              />
            </StyledLink>
          </DivLink3>

          <Collapse
            in={this.state.active === `${link.nome.split("%20").join(" ")}`}
            timeout="auto"
            unmountOnExit
          >
            <DivLink2>{renderUnidade(link)}</DivLink2>
          </Collapse>
        </DivLink>
      ));
    };

    return (
      <DivMenu>
        <Div justify="flex-start">
          <Heading color="#161030">
            {page === "City" ? (
              <FormattedMessage id="CityP" />
            ) : (
              <FormattedMessage id="Institutes" />
            )}
          </Heading>
          {page === "City" ? renderCities() : renderInstitutes()}
        </Div>
      </DivMenu>
    );
  }
}
export default SideMenu;
