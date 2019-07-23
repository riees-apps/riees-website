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
import Editor from "./editor";

import Places from "./Places";
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
      editorHtml: "",
      smShow: false,
      nome: "",
      descricao: "",
      capa: null,
      custoMedio: "",
      admin: this.props.adminId,
      nomePonto: "",
      descricaoPonto: "",
      pontosTuristicos: []
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
    this.handleChangeEditor2 = this.handleChangeEditor2.bind(this);
  }
  handleChangeEditor(html) {
    this.setState({ descricao: html });
  }
  handleChangeEditor2(html) {
    this.setState({ descricaoPonto: html });
  }
  addCidade = async e => {
    e.preventDefault();
    const { nome, descricao, admin, pontosTuristicos } = this.state;
    if (!(nome !== "" && descricao !== "" && admin !== "")) {
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
              admin: admin
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then(response => {
            const idCidade = response.data.id;
            pontosTuristicos.map(ponto => {
              api
                .post(
                  "/ponto",
                  {
                    nome: ponto.nomePonto,
                    descricao: ponto.descricaoPonto,
                    cidade: idCidade,
                    admin: response.data.admin.id
                  },
                  { headers: { "Access-Control-Allow-Origin": "*" } }
                )
                .then(res => {
                  console.log(res);
                  this.setState({
                    smShow: true,
                    error: "Cidade adicionada com sucesso!"
                  });
                });
            });
          })
          .catch(error => {
            console.log(error);
            this.setState({
              smShow: true,
              error:
                "Ocorreu um problema na tentativa de adicionar, tente novamente"
            });
          });
      } catch (err) {
        this.setState({
          smShow: true,
          error:
            "Ocorreu um problema na tentativa de adicionar, tente novamente2"
        });
      }
    }
  };
  adicionaPonto() {
    var pontos = this.state.pontosTuristicos;
    if (this.state.nomePonto !== "" && this.state.descricaoPonto !== "") {
      var ponto = {
        nomePonto: this.state.nomePonto,
        descricaoPonto: this.state.descricaoPonto,
        admin: this.props.adminId
      };
      pontos.push(ponto);
      this.setState({
        ...this.state,
        pontos: pontos,
        nomePonto: "",
        descricaoPonto: "",
        clear: true
      });
    } else
      this.setState({
        smShow: true,
        error: "Preencha todos os campos"
      });
  }
  deletaPonto(ponto) {
    var pontos = arrayRemove(this.state.pontosTuristicos, ponto);
    this.setState({ ...this.state, pontosTuristicos: pontos });
  }
  render() {
    let smClose = () => {
      this.setState({ smShow: false });
      if (this.state.error === "Cidade adicionada com sucesso!")
        this.props.history.push("/en/dashboard/show-cities");
      else return;
    };
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
                      <FormGroup>
                        <strong className="text-muted d-block mb-2">
                          Descrição
                        </strong>
                        <ReactQuill
                          onChange={this.handleChangeEditor}
                          value={this.state.descricao}
                          modules={Editor.modules}
                          className="add-new-post__editor mb-1"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="12" className="form-group">
                      <h5 htmlFor="feCursos">Pontos Turisticos</h5>
                      <p>
                        Preencha os campos abaixo para adicionar um novo ponto
                        turistico a cidade
                      </p>
                    </Col>
                    <Col lg="12" className="form-group">
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="feCursos">
                            Nome do Ponto turistico
                          </label>
                          <FormInput
                            value={this.state.nomePonto}
                            onChange={e =>
                              this.setState({ nomePonto: e.target.value })
                            }
                            id="feCursos"
                            type="name"
                          />
                        </Col>
                        <Col className="mb-3" md="12">
                          <FormGroup>
                            <strong className="text-muted d-block mb-2">
                              Descrição do Ponto turistico
                            </strong>
                            <FormTextarea
                              value={this.state.descricaoPonto}
                              onChange={e =>
                                this.setState({ descricaoPonto: e.target.value })
                              }
                              id="feResumo"
                              rows="5"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="2">
                          <label
                            style={{ color: "transparent" }}
                            htmlFor="feCursos"
                          >
                            Deletarsdasdasdasdsad
                          </label>
                          <Button
                            className="mb-3"
                            style={{ marginLeft: "auto" }}
                            onClick={() => this.adicionaPonto()}
                            theme="primary"
                          >
                            Adicionar Ponto
                          </Button>
                        </Col>
                        <Col md="12">
                          <ListGroupItem
                            style={{
                              borderBottom: "1px solid lightgray",
                              borderTop: "1px solid lightgray",
                              minHeight: "10vh"
                            }}
                          >
                            {this.state.pontosTuristicos.map(ponto => (
                              <ListGroupItem>
                                <Row lg="12">
                                  <Col lg="2">
                                    <p className="text-fiord-blue">
                                      <strong>Nome:</strong> {ponto.nomePonto}
                                    </p>
                                  </Col>
                                  <Col lg="9">
                                    <p className="text-fiord-blue">
                                      <strong>Descrição:</strong>{" "}
                                      <div
                                        className="card-text d-block mb-2"
                                        dangerouslySetInnerHTML={{
                                          __html: ponto.descricaoPonto
                                        }}
                                      />
                                    </p>
                                  </Col>
                                  <Col lg="1">
                                    <div
                                      style={{ marginLeft: "auto" }}
                                      pill
                                      className={`card-post__category bg-danger iconDelete`}
                                      onClick={() => this.deletaPonto(ponto)}
                                    >
                                      <i className={`fas fa-times`} />
                                    </div>
                                  </Col>
                                </Row>
                              </ListGroupItem>
                            ))}
                          </ListGroupItem>
                        </Col>
                      </Row>
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
                      Imagem da descrição
                    </strong>
                    <CustomFileUpload />
                  </FormGroup>
                  <Button className="ml-1" type="submit">
                    Adicionar nova cidade
                  </Button>
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
