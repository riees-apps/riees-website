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
  FormSelect
} from "shards-react";
import ReactLoading from "react-loading";
import { withRouter } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import "../../views/index.css";
import api from "../../../api/api";
import Editor from "./editor2";
import UnidadesInstitute from "./UnidadesInstitute";

function IsEmail(email) {
  if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    return false;
  } else return true;
}

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}

class FormInstitute extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: false,
      nome: "",
      missao: "",
      descricao: "",
      capa: null,
      logo: null,
      site: "",
      admin: this.props.adminId,
      ponto: "",
      telefone: "",
      telefone2: "",
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
      nomeCurso: "",
      area: "",
      nivel: "",
      email: "",
      pontosFortes: [],
      unidades: [],
      cursos: []
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
      site,
      admin,
      pontosFortes,
      unidades,
      telefone,
      telefone2,
      facebook,
      instagram,
      twitter,
      linkedin,
      email,
      cursos
    } = this.state;

    console.log(telefone);
    console.log(telefone2);
    console.log(facebook);
    console.log(instagram);
    console.log(twitter);
    console.log(linkedin);
    console.log(cursos);
    if (
      !(
        nome !== "" &&
        missao !== "" &&
        descricao !== "" &&
        telefone !== "" &&
        admin !== "" &&
        IsEmail(email) &&
        unidades.length !== 0 &&
        cursos.length !== 0
      )
    ) {
      this.setState({
        error: "Preencha todos os campos!",
        smShow: true
      });
    } else {
      const res = await api.get(`/instituicao?email=${email}`);
      if (res.data.length !== 0) {
        this.setState({
          error: "Este email já foi utilizado",
          smShow: true
        });
      } else
        try {
          this.setState({ isLoading: true });
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
                  api
                    .post("/instituicao", {
                      nome: nome,
                      missao: missao,
                      descricao: descricao,
                      pontosFortes: pontosFortes,
                      email: email,
                      telefone: telefone,
                      telefone2: telefone2,
                      facebook: facebook,
                      instagram: instagram,
                      twitter: twitter,
                      linkedin: linkedin,
                      site: site,
                      capa: capaID,
                      logo: res.data._id,
                      admin: admin
                    })
                    .then(response => {
                      const idInstituicao = response.data.id;
                      console.log(unidades);
                      unidades.map(unidade => {
                        console.log(unidade);
                        api.get(`/cidade?nome=${unidade.cidade}`).then(res => {
                          let cidade = "";
                          if (res.data.length > 0) cidade = res.data[0].id;

                          if (cidade === "") {
                            api
                              .post("/cidade", {
                                nome: unidade.cidade,
                                descricao: "generica",
                                capa: capaID,
                                admin: admin
                              })
                              .then(res => {
                                cidade = res.data.id;
                              });
                          }
                          api
                            .post("/unidade", {
                              nome: unidade.nome,
                              logradouro: unidade.logradouro,
                              numero: unidade.numero,
                              complemento: unidade.complemento,
                              bairro: unidade.bairro,
                              cidade: cidade,
                              cep: unidade.cep,
                              latitude: unidade.latitude,
                              longitude: unidade.longitude,
                              admin: response.data.admin.id,
                              instituicao: idInstituicao
                            })
                            .then(response => {
                              console.log(cursos);
                              cursos.map(curso => {
                                api
                                  .post("/curso", {
                                    nome: curso.nome,
                                    nivel: curso.nivel,
                                    admin: response.data.admin.id,
                                    area: curso.area,
                                    instituicao: idInstituicao
                                  })
                                  .then(response => {
                                    this.setState({ isLoading: false });
                                    this.setState({
                                      smShow: true,
                                      error: "Instituição criada com sucesso!"
                                    });
                                  });
                              });
                            });
                        });
                      });
                    })

                    .catch(error => {
                      console.log("error");
                      console.log(error);
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
  filtro = item => {
    if (item.deletedAt > 0) {
      return false;
    } else return true;
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

  adicionaCurso() {
    var cursos = this.state.cursos;
    if (
      this.state.nomeCurso !== "" &&
      this.state.area !== "" &&
      this.state.nivel !== ""
    ) {
      var curso = {
        nome: this.state.nomeCurso,
        area: this.state.area,
        nivel: this.state.nivel,
        admin: this.props.adminId
      };
      cursos.push(curso);
      this.setState({
        ...this.state,
        cursos: cursos,
        nomeCurso: "",
        area: "",
        nivel: "",
        clear: true
      });
    } else
      this.setState({
        smShow: true,
        error: "Preencha todos os campos"
      });
  }

  deletaCurso(curso) {
    if (typeof curso.id !== "undefined")
      api
        .delete(`/curso/${curso.id}`)
        .then(res => {
          var cursos = arrayRemove(this.state.cursos, curso);
          this.setState({ ...this.state, cursos: cursos });
        })
        .then(res => {
          api
            .get(
              `/curso?where={"deletedAt":0,"instituicao":"${
                curso.instituicao.id
              }"}`
            )
            .then(res => {
              const cursos = res.data;
              if (cursos.length !== 0) {
                this.setState({
                  ...this.state,
                  cursos: cursos
                });
              }
            });
        });
    else {
      var cursos = arrayRemove(this.state.cursos, curso);
      this.setState({ ...this.state, cursos: cursos });
    }
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
                      <strong className="text-muted d-block mb-2">
                        Campos com * são obrigatórios
                      </strong>
                    </Col>
                    <Col md="12" className="form-group">
                      <strong className="text-muted d-block mb-2">
                        Nome <strong className="text-danger">*</strong>
                      </strong>
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
                          Descrição <strong className="text-danger">*</strong>
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
                          Missão <strong className="text-danger">*</strong>
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
                  <FormGroup lg="12">
                    <Row form>
                      <Col md="6" className="form-group">
                        <strong className="text-muted d-block mb-2">
                          Telefone <strong className="text-danger">*</strong>
                        </strong>
                        <FormInput
                          type="text"
                          value={this.state.telefone}
                          onChange={e =>
                            this.setState({ telefone: e.target.value })
                          }
                        />
                      </Col>
                      <Col md="6" className="form-group">
                        <strong className="text-muted d-block mb-2">
                          Telefone 2
                        </strong>
                        <FormInput
                          type="text"
                          value={this.state.telefone2}
                          onChange={e =>
                            this.setState({ telefone2: e.target.value })
                          }
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <Row className="mb-4" form>
                    <Col md="6">
                      <strong className="text-muted d-block mb-2">
                        Endereço do site{" "}
                        <strong className="text-danger">*</strong>
                      </strong>
                      <FormInput
                        id="feUrl"
                        type="url"
                        value={this.state.site}
                        onChange={e => this.setState({ site: e.target.value })}
                      />
                    </Col>

                    <Col md="6">
                      <strong className="text-muted d-block mb-2">
                        Endereço de Email{" "}
                        <strong className="text-danger">*</strong>
                      </strong>
                      <FormInput
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        id="feEmail"
                        type="email"
                      />
                    </Col>
                  </Row>

                  <h4 className="d-block mb-1">Mídias Sociais</h4>
                  <p>Insira a URL completa das mídias sociais</p>
                  <FormGroup lg="12">
                    <Row form>
                      <Col md="3" className="form-group">
                        <label htmlFor="feCursos">Facebook </label>
                        <FormInput
                          type="text"
                          value={this.state.facebook}
                          onChange={e =>
                            this.setState({ facebook: e.target.value })
                          }
                          placeholder="Ex.: https://www.facebook.com/NomeDaInstituição"
                        />
                      </Col>
                      <Col md="3" className="form-group">
                        <label htmlFor="feCursos">Instagram </label>
                        <FormInput
                          type="text"
                          value={this.state.instagram}
                          onChange={e =>
                            this.setState({ instagram: e.target.value })
                          }
                          placeholder="Ex.: https://www.instagram.com/NomeDaInstituição"
                        />
                      </Col>
                      <Col md="3" className="form-group">
                        <label htmlFor="feCursos">Twitter </label>
                        <FormInput
                          type="text"
                          value={this.state.twitter}
                          onChange={e =>
                            this.setState({ twitter: e.target.value })
                          }
                          placeholder="Ex.: https://www.twitter.com/NomeDaInstituição"
                        />
                      </Col>
                      <Col md="3" className="form-group">
                        <label htmlFor="feCursos">Linkedin </label>
                        <FormInput
                          type="text"
                          value={this.state.linkedin}
                          onChange={e =>
                            this.setState({ linkedin: e.target.value })
                          }
                          placeholder="Ex.: https://www.linkedin.com/NomeDaInstituição"
                        />
                      </Col>
                    </Row>
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

                  <h4 className="d-block mb-1">Cursos</h4>
                  <p>
                    Preencha os campos abaixo para adicionar um novo curso a
                    instituição
                  </p>
                  <Row form>
                    <Col md="4" className="form-group">
                      <label htmlFor="feCursos">
                        Nome do Curso <strong className="text-danger">*</strong>
                      </label>
                      <FormInput
                        value={this.state.nomeCurso}
                        onChange={e =>
                          this.setState({ nomeCurso: e.target.value })
                        }
                        id="feCursos"
                        type="name"
                      />
                    </Col>
                    <Col md="3" className="form-group">
                      <label htmlFor="feCursos">
                        Área do Curso <strong className="text-danger">*</strong>
                      </label>
                      <FormSelect
                        onChange={e => this.setState({ area: e.target.value })}
                        value={this.state.area}
                      >
                        <option value="">Escolha...</option>
                        <option value="Ciências Exatas e da Terra">
                          Ciências Exatas e da Terra
                        </option>
                        <option value="Ciências Biológicas">
                          Ciências Biológicas
                        </option>
                        <option value="Engenharias">Engenharias</option>
                        <option value="Ciências da Saude">
                          Ciências da Saude
                        </option>
                        <option value="Ciências Agrárias">
                          Ciências Agrárias
                        </option>
                        <option value="Ciências Sociais e Aplicadas">
                          Ciências Sociais e Aplicadas
                        </option>
                        <option value="Ciências Humanas">
                          Ciências Humanas
                        </option>
                        <option value="Liguística, Letras e Artes">
                          Liguística, Letras e Artes
                        </option>
                      </FormSelect>
                    </Col>
                    <Col md="3" className="form-group">
                      <label htmlFor="feCursos">
                        Nivel do Curso{" "}
                        <strong className="text-danger">*</strong>
                      </label>
                      <FormSelect
                        onChange={e => this.setState({ nivel: e.target.value })}
                        value={this.state.nivel}
                      >
                        <option value="">Escolha...</option>
                        <option value="Graduação">Graduação</option>
                        <option value="Pós-graduação lato sensu">
                          Pós-graduação lato sensu
                        </option>
                        <option value="Pós-graduação stricto sensu">
                          Pós-graduação stricto sensu
                        </option>
                      </FormSelect>
                    </Col>
                    <Col
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        justifyContent: "center"
                      }}
                      md="2"
                    >
                      <strong
                        style={{ color: "transparent" }}
                        htmlFor="feCursos"
                      >
                        Deletarsdasdasdasdsad
                      </strong>
                      <Button
                        style={{ marginLeft: "auto" }}
                        onClick={() => this.adicionaCurso()}
                        theme="primary"
                      >
                        Adicionar Curso
                      </Button>
                    </Col>
                    <Col md="12">
                      <ListGroupItem
                        style={{
                          borderBottom: "1px solid lightgray",
                          borderTop: "1px solid lightgray",
                          minHeight: "10vh",
                          marginBottom: "2.5vh"
                        }}
                      >
                        {this.state.cursos
                          .filter(this.filtro.bind(this))
                          .map(curso => (
                            <ListGroupItem>
                              <Row lg="12">
                                <Col lg="3">
                                  <p className="text-fiord-blue">
                                    <strong>Nome:</strong> {curso.nome}
                                  </p>
                                </Col>
                                <Col lg="4">
                                  <p className="text-fiord-blue">
                                    <strong>Área:</strong> {curso.area}
                                  </p>
                                </Col>
                                <Col lg="4">
                                  <p className="text-fiord-blue">
                                    <strong>Nível:</strong> {curso.nivel}
                                  </p>
                                </Col>
                                <Col lg="1">
                                  <div
                                    style={{ marginLeft: "auto" }}
                                    pill
                                    className={`card-post__category bg-danger iconDelete`}
                                    onClick={() => this.deletaCurso(curso)}
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
                  <UnidadesInstitute
                    callbackParent={New => this.onChildChanged(New)}
                    unidades={[]}
                    adminId={this.props.adminId}
                  />

                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Capa da Instituição{" "}
                      <strong className="text-danger">*</strong>
                    </strong>
                    <input
                      className="inputFile"
                      onChange={e => this.setState({ capa: e.target.files[0] })}
                      type="file"
                    />
                  </FormGroup>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Logo da Instituição{" "}
                      <strong className="text-danger">*</strong>
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
        <Modal
          size="sm"
          show={this.state.isLoading}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body className="spinDivForm">
            <p>Enviando Formulario...</p>
            <ReactLoading className="spin" type="spin" color="#357edd" />
          </Modal.Body>
        </Modal>
      </form>
    );
  }
}

export default withRouter(FormInstitute);
