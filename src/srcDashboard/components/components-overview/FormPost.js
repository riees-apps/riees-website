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


class FormPost extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      smShow: false,
      titulo: "",
      dataPostagem:'',
      horarioPostagem:'',
      localPostagem:'',
      data:'',
      resumo:'',
      conteudo: "",
      admin: "5d1a1daaaf9fc5001737e7af",
    };
  }
  addPostagem = async e => {
    e.preventDefault();
    const {
      titulo,
      data,
      resumo,
      conteudo,
      admin
    } = this.state;

    if (
      !(
        titulo !== "" &&
        conteudo !== "" &&
        data !== "" &&
        resumo !== "" &&
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
            "/postagem",
            {
              titulo: titulo,
              conteudo: conteudo,
              data: data,
              resumo: resumo,
              admin: admin
            },
            { headers: { "Access-Control-Allow-Origin": "*"}}
          )
          .then(response => {
            this.setState({
              smShow: true,
              error: "Postagem adicionada com sucesso!"
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
      if(this.state.error === "Postagem adicionado com sucesso!")
      this.props.history.push("/en/dashboard/show-events");
      else return
    }
    return (
      <form onSubmit={this.addPostagem}>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="12" className="form-group">
                      <label htmlFor="feName">Titulo</label>
                      <FormInput
                        value={this.state.titulo}
                        onChange={e => this.setState({ titulo: e.target.value })}
                        id="feName"
                        type="name"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <label htmlFor="feCompleteName">Conteudo</label>
                      <FormTextarea
                      value={this.state.conteudo}
                        id="feDescription"
                        onChange={e =>
                          this.setState({ conteudo: e.target.value })
                        }
                        rows="5"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <label htmlFor="feResumo">Resumo</label>
                      <FormTextarea
                        value={this.state.resumo}
                        onChange={e => this.setState({ resumo: e.target.value })}
                        id="feResumo"
                        rows='5'
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <label htmlFor="feDataInicio">Data</label>
                      <FormInput
                        value={this.state.data}
                        onChange={e => this.setState({ data: e.target.value })}
                        id="feCustoMedio"
                        type="number"
                      />
                    </Col>
                  </Row>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Imagem do postagem
                    </strong>
                    <CustomFileUpload />
                  </FormGroup>

                  <Button className="ml-1" type="submit">Criar nova postagem</Button>
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
              {this.state.error === "Postagem adicionada com sucesso!"
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

export default withRouter(FormPost);
