import React, { Component } from "react";
import styled from "styled-components";
import "./area.css";
import api from "../../api/api";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DivAreas = styled.div`
  background: #e4e3ea;
  margin: 5vh 0;
  width: calc(100%);
  z-index: 100;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 768px) {
    margin: 2.5vh;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background: white;
  height: 25vh;
  margin-bottom: 3%;
  margin-left: 2.5%;
  margin-right: 1.5%;
  width: 29%;
  z-index: 100;
  box-shadow: 0px 0px 5px 0.3px rgba(0, 0, 0, 0.8);
  position: relative;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 30vw;
    width: 45%;
  }
`;
const DivCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0 auto;
  height: 70%;
`;
const DivHeading = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #e4e3ea;
  width: 100%;
`;
const DivSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #e4e3ea;
  color: #666;
  font-weight: bolder;
  width: 100%;
  height: 2%;
  padding-bottom: 2.5vh;
`;
const Heading = styled.span`
  font-family: "Poppins", serif;
  color: ${props => props.color};
  font-weight: bolder;
  font-size: calc(15px + 1.75vw);
  line-height: calc(15px + 1.75vw);
  letter-spacing: 1px;
  padding-top: 3vh;
  width: max-content;
  @media (max-width: 768px) {
    font-size: calc(1em +2vh);
    line-height: calc(1em +2vh);
  }
`;

function icon(area) {
  switch (area) {
    case "Ciências da Saude":
      return "user-md";
    case "Ciências Exatas e da Terra":
      return "flask";
    case "Ciências Biológicas":
      return "microscope";
    case "Ciências Sociais e Aplicadas":
      return "user-tie";
    case "Ciências Humanas":
      return "users";
    case "Ciências Agrárias":
      return "tractor";
    case "Engenharias":
      return "cog";
    case "Liguística, Letras e Artes":
      return "comments";
    default:
      return "asterisk";
  }
}
class AreaCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cursos: [],
      showCursos: "",
      area: ""
    };
  }
  handleClick(area) {
    console.log(area);
    console.log(this.props.instituicao);
    api
      .get(
        `/curso?where={"deletedAt":0,"instituicao":"${
          this.props.instituicao
        }","area":"${area}"}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ cursos: res.data, area: area, showCursos: true });
      });
  }
  handleClose() {
    this.setState({
      showCursos: false,
      area: ""
    });
  }

  render() {
    let smClose = () => this.setState({ showCursos: false, area: "" });
    const renderAreas = () => {
      return this.props.areas.map(area => (
        <Card onClick={() => this.handleClick(area)}>
          <i className={`fas fa-${icon(area)} icon`} />
          <h1 class="areaName">{area}</h1>
        </Card>
      ));
    };
    return (
      <DivAreas>
        <DivHeading>
          <Heading color="#303033">
            {this.props.name}
            <span style={{ color: "#003b81" }}>areas</span>
          </Heading>
        </DivHeading>
        <DivSubTitle>
          Clique na area para ver seus respectivos cursos
        </DivSubTitle>
        <DivCards>{renderAreas()}</DivCards>
        <Modal
          size="lg"
          show={this.state.showCursos === true}
          onHide={smClose}
          dialogClassName="modal-100w"
          aria-labelledby="example-modal-sizes-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title">
              {`Cursos da area ${this.state.area}`}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table id="customers">
              <tr>
                <th>Curso</th>
                <th>Nível</th>
              </tr>
              {this.state.cursos.map(curso => (
                <tr>
                  <td>{curso.nome}</td>
                  <td>{curso.nivel}</td>
                </tr>
              ))}
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ backgroundColor: "#003b81", borderColor: "#003b81" }}
              variant="primary"
              onClick={this.handleClose.bind(this)}
            >
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </DivAreas>
    );
  }
}
export default AreaCard;
