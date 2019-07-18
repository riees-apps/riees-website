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

import Checkboxes from "./CheckboxesInstitute";
import UnidadesInstitute from "./UnidadesInstitute";
import CustomFileUpload from "../components-overview/CustomFileUpload";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}


class FormEvent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      smShow: false,
      nome: "",
      dataEvento:'',
      horarioEvento:'',
      localEvento:'',
      dataInicio:'',
      dataFim:'',
      descricao: "",
      link: '',
      admin: "5d1a1daaaf9fc5001737e7af",
    };
  }
  addEvento = async e => {
    e.preventDefault();
    const {
      nome,
      dataInicio,
      dataFim,
      descricao,
      link,
      admin
    } = this.state;

    if (
      !(
        nome !== "" &&
        link !== "" &&
        descricao !== "" &&
        dataInicio !== "" &&
        dataFim !== "" &&
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
            "/evento",
            {
              nome: nome,
              descricao: descricao,
              dataInicio: dataInicio,
              dataFim: dataFim,
              link: link,
              admin: admin

            },
            { headers: { "Access-Control-Allow-Origin": "*" }}
          )
          .then(response => {
            this.setState({
              smShow: true,
              error: "Evento adicionado com sucesso!"
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
      if(this.state.error === "Evento adicionado com sucesso!")
      this.props.history.push("/en/dashboard/show-events");
      else return
    }
    return (
      <form onSubmit={this.addEvento}>
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
                      <label htmlFor="feCompleteName">Link do evento</label>
                      <FormInput
                        value={this.state.link}
                        onChange={e => this.setState({ link: e.target.value })}
                        id="feName"
                        type="name"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <label htmlFor="feDataInicio">Data de Inicio</label>
                      <FormInput
                        value={this.state.dataInicio}
                        onChange={e => this.setState({ dataInicio: e.target.value })}
                        id="feCustoMedio"
                        type="number"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <label htmlFor="feDataFim">Data de Fim</label>
                      <FormInput
                        value={this.state.dataFim}
                        onChange={e => this.setState({ dataFim: e.target.value })}
                        id="feCustoMedio"
                        type="number"
                      />
                    </Col>
                  </Row>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Imagem do evento
                    </strong>
                    <CustomFileUpload />
                  </FormGroup>

                  <Button className="ml-1" type="submit">Criar novo evento</Button>
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
              {this.state.error === "Evento adicionado com sucesso!"
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

export default withRouter(FormEvent);
