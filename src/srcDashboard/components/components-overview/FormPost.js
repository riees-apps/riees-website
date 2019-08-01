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
import "../../views/index.css";

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
      dataPostagem: "",
      horarioPostagem: "",
      localPostagem: "",
      data: "",
      resumo: "",
      conteudo: "",
      tag: "",
      tags: [],
      img: null,
      admin: this.props.adminId
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
  }
  handleChangeEditor(html) {
    this.setState({ conteudo: html });
  }
  adicionaTag() {
    var pf = this.state.tags;
    if (this.state.tag !== "") {
      pf.push(this.state.tag);
      this.setState({ ...this.state, tags: pf, tag: "" });
    } else this.setState({ ...this.state, tag: "" });
  }
  deletaTag(tag) {
    var pf = arrayRemove(this.state.tags, tag);
    this.setState({ ...this.state, tags: pf });
  }
  addPostagem = async e => {
    e.preventDefault();
    const { titulo, data, resumo, conteudo, tags, admin } = this.state;
    let dataV = data.split("-");
    let newDate = new Date(dataV[0], dataV[1] - 1, dataV[2]).getTime();
    if (
      !(
        titulo !== "" &&
        conteudo !== "" &&
        data !== "" &&
        resumo !== "" &&
        tags.length !== 0 &&
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
          .post("/bucket", this.state.img, {
            headers: {
              "content-type": this.state.img.type,
              filename: this.state.img.name
            }
          })
          .then(res => {
            api.post("/publicacao", {
              titulo: titulo,
              resumo: resumo,
              data: newDate,
              conteudo: conteudo,
              tags: tags,
              admin: admin,
              capa: res.data._id
            });
          })
          .catch(error => console.log(error))
          .then(response => {
            this.setState({
              smShow: true,
              error: "Postagem adicionada com sucesso!"
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
  render() {
    let smClose = () => {
      this.setState({ smShow: false });
      if (this.state.error === "Postagem adicionada com sucesso!")
        this.props.history.push("/en/dashboard/show-posts");
      else return;
    };
    console.log(this.state.conteudo);

    return (
      <form onSubmit={this.addPostagem}>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="12" className="form-group">
                      <strong className="text-muted d-block mb-2">
                        Campos com * são obrigatórios
                      </strong>
                    </Col>
                    <Col md="12" className="form-group">
                      <strong className="text-muted d-block mb-2">
                        Titulo <strong className="text-danger">*</strong>
                      </strong>
                      <FormInput
                        value={this.state.titulo}
                        onChange={e =>
                          this.setState({ titulo: e.target.value })
                        }
                        id="feName"
                        type="name"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <strong className="text-muted d-block mb-2">
                        Resumo <strong className="text-danger">*</strong>
                      </strong>
                      <FormTextarea
                        value={this.state.resumo}
                        onChange={e =>
                          this.setState({ resumo: e.target.value })
                        }
                        id="feResumo"
                        rows="5"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <FormGroup>
                        <strong className="text-muted d-block mb-2">
                          Conteudo <strong className="text-danger">*</strong>
                        </strong>
                        <ReactQuill
                          onChange={this.handleChangeEditor}
                          value={this.state.conteudo}
                          modules={Editor.modules}
                          className="add-new-post__editor mb-1"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="mb-2" md="12">
                      <strong className="text-muted d-block mb-2">
                        Tags <strong className="text-danger">*</strong>
                      </strong>

                      <Row form>
                        <Col md="11" className="form-group">
                          <FormInput
                            value={this.state.tag}
                            onChange={e =>
                              this.setState({ tag: e.target.value })
                            }
                            id="fetags"
                            type="name"
                          />
                        </Col>
                        <Col md="1">
                          <div
                            style={{ marginLeft: "auto" }}
                            pill
                            className={`card-post__category bg-primary iconDelete`}
                            onClick={() => this.adicionaTag()}
                          >
                            <i className={`fas fa-plus`} />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <ul>
                            {this.state.tags.map(tag => (
                              <Row lg="12">
                                <Col lg="11">
                                  <li className="mb-4">{tag}</li>
                                </Col>
                                <Col lg="1">
                                  <div
                                    style={{ marginLeft: "auto" }}
                                    pill
                                    className={`card-post__category bg-danger iconDelete`}
                                    onClick={() => this.deletaTag(tag)}
                                  >
                                    <i className={`fas fa-times`} />
                                  </div>
                                </Col>
                              </Row>
                            ))}
                          </ul>
                        </Col>
                      </Row>
                    </Col>

                    <Col className="mb-3" md="12">
                      <label htmlFor="feDataInicio">
                        Data <strong className="text-danger">*</strong>
                      </label>
                      <FormInput
                        value={this.state.data}
                        onChange={e => this.setState({ data: e.target.value })}
                        id="feCustoMedio"
                        type="date"
                      />
                    </Col>
                  </Row>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Imagem da postagem{" "}
                      <strong className="text-danger">*</strong>
                    </strong>
                    <input
                      className="inputFile"
                      onChange={e => this.setState({ img: e.target.files[0] })}
                      type="file"
                    />
                  </FormGroup>

                  <Button className="ml-1" type="submit">
                    Criar nova postagem
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
