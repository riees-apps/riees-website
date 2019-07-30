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

import Checkboxes from "./CheckboxesInstitute";
import UnidadesInstitute from "./UnidadesInstitute";
import CustomFileUpload from "../components-overview/CustomFileUpload";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class FormInstitute extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nome: "",
      missao: "",
      descricao: "",
      capa: null,
      logo: null,
      link: "",
      admin: this.props.adminId,
      ponto: "",
      pontosFortes: [],
      unidades: []
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
    this.handleChangeEditor2 = this.handleChangeEditor2.bind(this);
  }
  handleChangeEditor(html) {
    this.setState({ descricao: html });
  }
  handleChangeEditor2(html) {
    this.setState({ missao: html });
  }
  createInstitute = async e => {
    var capaID;
    e.preventDefault();
    const {
      nome,
      missao,
      descricao,
      capa,
      logo,
      link,
      admin,
      pontosFortes,
      unidades
    } = this.state;

    if (
      !(
        nome !== "" &&
        missao !== "" &&
        descricao !== "" &&
        admin !== "" &&
        pontosFortes.length !== 0 &&
        link !== "" &&
        unidades.length !== 0
      )
    ) {
      this.setState({
        error: "Preencha todos os campos!",
        smShow: true
      });
    } else {
      try {
        await api
          .post("/bucket", capa, {
            headers: {
              "content-type": capa.type,
              filename: capa.name
            }
          })
          .then(res => {
            capaID = res.data._id;
            api
              .post("/bucket", logo, {
                headers: {
                  "content-type": logo.type,
                  filename: logo.name
                }
              })
              .then(res => {
                console.log(capaID);
                console.log(res.data._id);
                api
                  .post("/instituicao", {
                    nome: nome,
                    missao: missao,
                    descricao: descricao,
                    admin: admin,
                    pontosFortes: pontosFortes,
                    link: link,
                    capa: capaID,
                    logo: res.data._id
                  })
                  .then(response => {
                    const idInstituicao = response.data.id;
                    unidades.map(unidade =>
                      api.get(`/cidade?nome=${unidade.cidade}`).then(res => {
                        let cidade = '';
                        if (res.data.length > 0) cidade = res.data[0].id;

                        console.log(cidade)
                        api
                          .post("/unidade", {
                            nome: unidade.nome,
                            telefone: unidade.telefone,
                            descricao: unidade.descricao,
                            logradouro: unidade.logradouro,
                            numero: unidade.numero,
                            complemento: unidade.complemento,
                            bairro: unidade.bairro,
                            cidade: cidade,
                            cep: unidade.cep,
                            admin: response.data.admin.id,
                            instituicao: idInstituicao
                          })
                          .then(response => {
                            const idUnidade = response.data.id;
                            unidade.cursos.map(curso => {
                              console.log(curso.area);
                              api.get(`/area?nome=${curso.area}`).then(res => {
                                let area;
                                if (res.data.length > 0) area = res.data[0].id;
                                api
                                  .post("/curso", {
                                    nome: curso.nome,
                                    niveis: curso.niveis,
                                    admin: response.data.admin.id,
                                    area: area,
                                    unidade: idUnidade
                                  })
                                  .then(response => {
                                    this.setState({
                                      smShow: true,
                                      error: "Instituição criada com sucesso!"
                                    });
                                  });
                              });
                            });
                          });
                      })
                    );
                  });
              })
              .catch(error => {
                this.setState({
                  smShow: true,
                  error: "Houve um problema com a criação, tente novamente"
                });
              });
          });
      } catch (err) {
        this.setState({
          smShow: true,
          error: "Houve um problema com a criação, tente novamente"
        });
      }
    }
  };
  adicionaPontoForte() {
    var pf = this.state.pontosFortes;
    if (this.state.ponto !== "") {
      pf.push(this.state.ponto);
      this.setState({ ...this.state, pontosFortes: pf, ponto: "" });
    } else this.setState({ ...this.state, ponto: "" });
  }
  deletaPontoForte(ponto) {
    var pf = arrayRemove(this.state.pontosFortes, ponto);
    this.setState({ ...this.state, pontosFortes: pf });
  }
  onChildChanged(New) {
    this.setState({ unidades: New });
  }
  render() {
    let smClose = () => {
      this.setState({ smShow: false });
      if (this.state.error === "Instituição criada com sucesso!")
        this.props.history.push("/en/dashboard/show-institutes");
      else return;
    };

    return (
      <form
        onSubmit={this.createInstitute}
        action="http://riees-api.herokuapps.com/uploadedfile"
        enctype="multipart/form-data"
        method="post"
      >
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="12" className="form-group">
                      <strong className="text-muted d-block mb-2">Nome</strong>
                      <FormInput
                        value={this.state.nome}
                        onChange={e => this.setState({ nome: e.target.value })}
                        id="feName"
                        type="name"
                        placeholder="Ex.: UFES - Universidade Federal do Espirito Santo"
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
                    <Col className="mb-3" md="12">
                      <FormGroup>
                        <strong className="text-muted d-block mb-2">
                          Missão
                        </strong>
                        <ReactQuill
                          onChange={this.handleChangeEditor2}
                          value={this.state.missao}
                          modules={Editor.modules}
                          className="add-new-post__editor mb-1"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Endereço do site
                    </strong>
                    <FormInput
                      id="feUrl"
                      type="url"
                      value={this.state.link}
                      onChange={e => this.setState({ link: e.target.value })}
                      placeholder="Ex.: http://www.ufes.br/"
                    />
                  </FormGroup>
                  <strong className="text-muted d-block mb-2">
                    Pontos Fortes
                  </strong>
                  <ul className="pl-4">
                    {this.state.pontosFortes.map(pontoForte => (
                      <Row lg="12">
                        <Col lg="11">
                          <li className="mb-4">{pontoForte}</li>
                        </Col>
                        <Col lg="1">
                          <div
                            style={{ marginLeft: "auto" }}
                            pill
                            className={`card-post__category bg-danger iconDelete`}
                            onClick={() => this.deletaPontoForte(pontoForte)}
                          >
                            <i className={`fas fa-times`} />
                          </div>
                        </Col>
                      </Row>
                    ))}
                  </ul>

                  <Row form>
                    <Col md="11" className="form-group">
                      <FormInput
                        value={this.state.ponto}
                        onChange={e => this.setState({ ponto: e.target.value })}
                        id="fePontosFortes"
                        type="name"
                      />
                    </Col>
                    <Col md="1">
                      <div
                        style={{ marginLeft: "auto" }}
                        pill
                        className={`card-post__category bg-primary iconDelete`}
                        onClick={() => this.adicionaPontoForte()}
                      >
                        <i className={`fas fa-plus`} />
                      </div>
                    </Col>
                  </Row>

                  <UnidadesInstitute
                    callbackParent={New => this.onChildChanged(New)}
                    unidades={[]}
                    adminId={this.props.adminId}
                  />

                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Capa da Instituição
                    </strong>
                    <input
                      className="inputFile"
                      onChange={e => this.setState({ capa: e.target.files[0] })}
                      type="file"
                    />
                  </FormGroup>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Logo da Instituição
                    </strong>
                    <input
                      className="inputFile"
                      onChange={e => this.setState({ logo: e.target.files[0] })}
                      type="file"
                    />
                  </FormGroup>

                  <Button type="submit">Criar nova intituição</Button>
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
              {this.state.error === "Instituição criada com sucesso!"
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

export default withRouter(FormInstitute);
