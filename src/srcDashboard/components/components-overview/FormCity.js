import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button,
  FormTextarea
} from "shards-react";

import { withRouter } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import api from "../../../api/api";

import Places from "./Places";
import Checkboxes from "./CheckboxesInstitute";
import UnidadesInstitute from "./UnidadesInstitute";
import CustomFileUpload from "../components-overview/CustomFileUpload";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}


class FormCity extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      smShow: false,
      nome: "",
      descricao: "",
      capa: null,
      custoMedio: '',
      admin: "5d1a1daaaf9fc5001737e7af",
      ponto: "",
      pontosTuristicos: []
    };
  }
  addCidade = async e => {
    e.preventDefault();
    const {
      nome,
      custoMedio,
      descricao,
      admin
    } = this.state;
    console.log(nome)
    console.log(custoMedio)
    console.log(descricao)
    console.log(admin)
    if (
      !(
        nome !== "" &&
        descricao !== "" &&
        custoMedio !== "" &&
        admin !== ""
      )
    ) {
      this.setState({
        error: "Preencha todos os campos!",
        smShow: true
      });
    } else {
      try {
        await api
          .post(
            "/cidade",
            {
              nome: nome,
              descricao: descricao,
              admin: admin,
              custoMedio: custoMedio
            },
            { headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }
          )
          .then(response => {
            this.setState({
              smShow: true,
              error: "Cidade adicionada com sucesso!"
            });
          })
          .catch(error => {
            console.log(error)
            this.setState({
              smShow: true,
              error: "Ocorreu um problema na tentativa de adicionar, tente novamente"
            });
          });
      } catch (err) {
        this.setState({
          smShow: true,
          error: "Ocorreu um problema na tentativa de adicionar, tente novamente2"
        });
      }
    }
  };
  render() {
    let smClose = () => {
      this.setState({ smShow: false });
      if(this.state.error === "Cidade adicionada com sucesso!")
      this.props.history.push("/en/dashboard/show-cities");
      else return
    }
    return (
      <form onSubmit={this.addCidade}>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="12" className="form-group">
                      <label htmlFor="feName">Nome</label>
                      <FormInput
                        value={this.state.nome}
                        onChange={e => this.setState({ nome: e.target.value })}
                        id="feName"
                        type="name"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <label htmlFor="feCompleteName">Descrição</label>
                      <FormTextarea
                      value={this.state.descricao}
                        id="feDescription"
                        onChange={e =>
                          this.setState({ descricao: e.target.value })
                        }
                        rows="5"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <label htmlFor="feCustoMedio">Custo medio</label>
                      <FormInput
                        value={this.state.custoMedio}
                        onChange={e => this.setState({ custoMedio: e.target.value })}
                        id="feCustoMedio"
                        type="number"
                      />
                    </Col>
                  </Row>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Imagem da cidade
                    </strong>
                    <CustomFileUpload />
                  </FormGroup>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Imagem do 'overview'
                    </strong>
                    <CustomFileUpload />
                  </FormGroup>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Imagem do 'living there'
                    </strong>
                    <CustomFileUpload />
                  </FormGroup>

                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Overview da cidade
                    </strong>
                    <ReactQuill
                      size="false"
                      className="add-new-post__editor mb-1"
                    />
                  </FormGroup>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Living There da cidade
                    </strong>
                    <ReactQuill
                      size="medium"
                      className="add-new-post__editor mb-1"
                    />
                  </FormGroup>
                  <Button className="ml-1" type="submit">Adicionar nova cidade</Button>
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
        <Modal
          size="sm"
          show={this.state.smShow}
          onHide={smClose}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              {this.state.error === "Cidade adicionada com sucesso!"
                ? "Sucesso!"
                : "Erro!"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.error}</Modal.Body>
        </Modal>
      </form>
    );
  }
}

export default withRouter(FormCity);
