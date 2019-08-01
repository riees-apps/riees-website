import React, { Component } from "react";
import styled from "styled-components";
import "./index.css";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import api from "../../api/api";

const DivLink = styled(Link)``;
const Img = styled.div`
  background: url(${props => props.input});
  box-shadow: 0px 45vh rgba(0, 0, 0, 0.35) inset;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150% 150%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  transition: all 600ms;
  @media (max-width: 600px) {
    background-size: cover;
  }
  :hover {
    transition: all 600ms;
    box-shadow: 0px 45vh rgba(0, 0, 0, 0.75) inset;
    cursor: pointer;
  }
  ${props =>
    props.cityInstitute &&
    `
    font-size: 0.75em;
    margin-top: -4vh;
    @media (min-width: 768px) {

    margin-bottom: 7%;
  }
  `}
`;

class InstituteImage extends Component {
  state = {
    hover: false,
    areas: [],
    unidades: [],
    cursos: []
  };
  changeHover() {
    if (window.screen.width >= 768)
      this.setState({ ...this.state, hover: !this.state.hover });
  }
  filtro = item => {
    if (item.deletedAt > 0) {
      return false;
    } else return true;
  };
  changeOut() {
    this.setState({ ...this.state, hover: !this.state.hover });
  }
  componentWillMount() {
    this.props.cursos.filter(this.filtro.bind(this)).map(curso => {
      const newArea = this.state.areas;

      if (newArea.indexOf(curso.area) === -1) newArea.push(curso.area);

      this.setState({ areas: newArea});
    });
  }
  render() {
    const renderUnidades = () => {
      return this.props.unidades.map(row => (
        <h1
          className={
            this.props.cityInstitute
              ? this.state.hover
                ? "h1Cities2HoverInstitute"
                : "h1Cities2Institute"
              : this.state.hover
              ? "h1CitiesHoverInstitute"
              : "h1CitiesInstitute"
          }
        >
          {row.nome}
        </h1>
      ));
    };
    const renderAreas = () => {
      return this.state.areas.map(row => (
        <h1
          className={
            this.props.cityInstitute
              ? this.state.hover
                ? "h1Cities2HoverInstitute"
                : "h1Cities2Institute"
              : this.state.hover
              ? "h1CitiesHoverInstitute"
              : "h1CitiesInstitute"
          }
        >
          {row}
        </h1>
      ));
    };
    const sigla = this.props.name.split("-")[0];
    const nomeCompleto =
      typeof this.props.name.split("-")[1] !== "undefined"
        ? this.props.name.split("-")[1]
        : "";
    return (
      <DivLink
        style={{ textDecoration: "none" }}
        to={{
          pathname: `/${window.location.pathname.split("/")[1]}/Institute/${
            this.props.name
          }`,
          state: {
            scrollTop: 0,
            areas: this.state.areas,
            unidades: this.state.unidades,
            institutos: this.props.institutos,
            cursos: this.state.cursos
          }
        }}
        onMouseOver={this.changeHover.bind(this)}
        onMouseOut={this.changeOut.bind(this)}
        className="root"
      >
        <Img
          cityInstitute={this.props.cityInstitute}
          input={`https://riees-api.herokuapp.com/bucket/${
            this.props.capa !== null ? this.props.capa : ""
          }`}
        >
          <h1
            className={this.state.hover ? "title2Institute" : "titleInstitute"}
          >
            {sigla}
          </h1>
          <div
            className={
              this.state.hover ? "divInfo2Institute" : "divInfoInstitute"
            }
          >
            <h1
              className={this.state.hover ? "sub2Institute" : "sub1Institute"}
            >
              {nomeCompleto}
            </h1>
            <h1
              className={this.state.hover ? "info2Institute" : "info1Institute"}
            >
              <FormattedMessage id="Campus" />:
            </h1>
            <div
              className={
                this.state.hover ? "cities2Institute" : "cities1Institute"
              }
            >
              {renderUnidades()}
            </div>
            <h1
              className={this.state.hover ? "info2Institute" : "info1Institute"}
            >
              Areas:
            </h1>
            <div
              className={
                this.state.hover ? "cities2Institute" : "cities1Institute"
              }
            >
              {renderAreas()}
            </div>
          </div>
        </Img>
      </DivLink>
    );
  }
}
export default InstituteImage;
