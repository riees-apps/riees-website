/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormInput,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  FormSelect
} from "shards-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../assets/quill.css";

import api from "../../api/api";
import Editor from "../components/components-overview/editor2";

import UnidadesInstitute from "../components/components-overview/UnidadesInstitute";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import PageTitle from "../components/common/PageTitle";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class Institutes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      closeShow: false,
      smShow: false,
      institutes: [],
      editShow: false,
      id: "",
      nome: "",
      missao: "",
      descricao: "",
      telefone: "",
      telefone2: "",
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
      nomeCurso: "",
      area: "",
      nivel: "",
      capa: null,
      logo: null,
      site: "",
      admin: "5d1a1daaaf9fc5001737e7af",
      ponto: "",
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
  filtro = item => {
    if (item.deletedAt > 0) {
      return false;
    } else return true;
  };

  componentWillMount() {
    api.get('/instituicao?where={"deletedAt":0}').then(res => {
      const inst = res.data;
      this.setState({ institutes: inst });
    });
  }
  editInstitute(institute) {
    var capaID;
    var idInstituto;
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
      cursos,
      id
    } = this.state;
    api.get(`/instituicao/${institute.id}`).then(inst => {
      if (
        !(
          nome !== "" &&
          missao !== "" &&
          descricao !== "" &&
          telefone !== "" &&
          admin !== "" &&
          unidades.length !== 0 &&
          cursos.length !== 0
        )
      ) {
        this.setState({
          error: "Preencha todos os campos!",
          smShow: nome
        });
      } else {
        try {
          api
            .post("/bucket", capa, {
              headers: {
                "content-type": capa.type,
                filename: capa.name
              }
            })
            .then(res => {
              capaID = res.data._id;
              api.post("/bucket", logo, {
                headers: {
                  "content-type": logo.type,
                  filename: logo.name
                }
              });
            })
            .then(res => {
              api
                .patch(`/instituicao/${id}`, {
                  nome: nome,
                  missao: missao,
                  descricao: descricao,
                  pontosFortes: pontosFortes,
                  site: site,
                  telefone: telefone,
                  telefone2: telefone2,
                  facebook: facebook,
                  instagram: instagram,
                  twitter: twitter,
                  linkedin: linkedin,
                  admin: admin.id,
                  capa: typeof capa.type !== "undefined" ? capaID : capa,
                  logo: typeof logo.type !== "undefined" ? res.data._ID : logo
                })
                .then(res => {
                  idInstituto = res.data.id;
                  console.log(cursos);
                  console.log(idInstituto);
                  cursos.map(curso => {
                    if (typeof curso.createdAt === "undefined") {
                      api.post("/curso", {
                        nome: curso.nome,
                        nivel: curso.nivel,
                        admin: res.data.admin.id,
                        area: curso.area,
                        instituicao: idInstituto
                      });
                    }
                  });
                })
                .then(res => {
                  this.state.unidades.map(unidade => {
                    api
                      .get(`/cidade?nome=${unidade.cidade}`)
                      .then(res => {
                        let cidade;
                        if (res.data.length > 0) cidade = res.data[0].id;
                        api
                          .get(
                            `/unidade?where={"nome":"${
                              unidade.nome
                            }","instituicao":"${idInstituto}"}`
                          )
                          .then(res => {
                            if (typeof unidade.createdAt === "undefined")
                              if (res.data.length > 0) {
                                api.patch(`/unidade/${res.data[0].id}`, {
                                  logradouro: unidade.logradouro,
                                  numero: unidade.numero,
                                  complemento: unidade.complemento,
                                  bairro: unidade.bairro,
                                  cep: unidade.cep,
                                  cidade: cidade,
                                  deletedAt: 0
                                });
                              } else
                                api.post(`/unidade`, {
                                  nome: unidade.nome,
                                  logradouro: unidade.logradouro,
                                  numero: unidade.numero,
                                  complemento: unidade.complemento,
                                  bairro: unidade.bairro,
                                  cep: unidade.cep,
                                  cidade: cidade,
                                  instituicao: idInstituto,
                                  admin: admin.id
                                });
                          });
                      })
                      .catch(error => {
                        this.setState({
                          smShow: inst.nome,
                          error: "Cidade não cadastrada no sistema"
                        });
                      });
                  });
                })
                .then(res => {
                  api.get('/instituicao?where={"deletedAt":0}').then(res => {
                    const institutos = res.data;
                    this.setState({
                      ...this.state,
                      institutes: institutos,
                      editShow: false
                    });
                  });
                })
                .catch(error => {
                  this.setState({
                    smShow: inst.nome,
                    error: "Houve um problema com a edição, tente novamente1"
                  });
                });
            });
        } catch (err) {
          this.setState({
            smShow: inst.nome,
            error: "Houve um problema com a edição, tente novamente2"
          });
        }
      }
    });
  }

  editUnidade(unidade) {
    const { pontoEdit, nomePontoEdit, descricaoPontoEdit } = this.state;
    if (!(nomePontoEdit !== "" && descricaoPontoEdit !== "")) {
      this.setState({
        error: "Preencha todos os campos!",
        smShow: pontoEdit.id
      });
    } else {
      try {
        api
          .patch(`/unidade/${pontoEdit.id}`, {
            nome: nomePontoEdit,
            descricao: descricaoPontoEdit
          })
          .then(res => {
            api
              .get(
                `/unidade?where={"deletedAt":0,"cidade":"${
                  res.data.cidade.id
                }"}`
              )
              .then(res => {
                const pontos = res.data;
                console.log(pontos);
                if (pontos.length !== 0) {
                  this.setState({
                    ...this.state,
                    pontosTuristicos: pontos,
                    editUnidadeShow: false
                  });
                }
              });
          })
          .catch(error => {
            this.setState({
              smShow: pontoEdit.nome,
              error: "Houve um problema com a edição, tente novamente"
            });
          });
      } catch (err) {
        this.setState({
          smShow: pontoEdit.nome,
          error: "Houve um problema com a edição, tente novamente"
        });
      }
    }
  }

  handleClose() {
    this.setState({
      closeShow: false,
      smShow: false
    });
  }
  handleClose2() {
    this.setState({
      editShow: false
    });
  }
  handleClose3() {
    this.setState({
      editPontoShow: false
    });
  }
  handleClick(institute) {
    this.setState({
      closeShow: institute.nome,
      error: `Ao confirmar a instituição ${institute.nome} será deletada`
    });
  }
  handleClick2(institute) {
    console.log(institute.unidades);
    this.setState({
      ...this.state,
      editShow: institute.nome,
      id: institute.id,
      nome: institute.nome,
      missao: institute.missao,
      descricao: institute.descricao,
      admin: institute.admin,
      pontosFortes: institute.pontosFortes,
      site: institute.site,
      telefone: institute.telefone,
      telefone2: institute.telefone2,
      facebook: institute.facebook,
      instagram: institute.instagram,
      twitter: institute.twitter,
      linkedin: institute.linkedin,
      capa: institute.capa,
      logo: institute.logo,
      unidades: institute.unidades,
      cursos: institute.cursos
    });
  }
  handleClick3(unidade) {
    this.setState({
      ...this.state,
      pontoEdit: unidade,
      nomePontoEdit: unidade.nome,
      descricaoPontoEdit: unidade.descricao,
      editPontoShow: unidade.nome
    });
  }
  deleteInstitute(institute) {
    api.delete(`/instituicao/${institute.id}`).then(resp =>
      api.get('/instituicao?where={"deletedAt":0}').then(res => {
        const inst = res.data;
        this.setState({
          ...this.state,
          institutes: inst,
          closeShow: false
        });
      })
    );
  }
  onChildChanged(New) {
    this.setState({ unidades: New });
  }
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
    console.log(this.state.cursos);
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
  render() {
    let smClose = () => this.setState({ smShow: false });
    let deleteClose = () => this.setState({ closeShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderInstitute = () => {
      return this.state.institutes.map((institute, number) => (
        <Col key={number} lg="3" md="6" sm="12" className="mb-4">
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image"
              style={{
                backgroundImage: `url('https://riees-api.herokuapp.com/bucket/${
                  institute.capa !== null ? institute.capa : ""
                }'`
              }}
            >
              <div
                pill
                className={`card-post__category bg-danger iconDelete`}
                onClick={() => this.handleClick(institute)}
              >
                <i className={`fas fa-times iconDelete`} />
              </div>

              <div
                pill
                className={`card-post__category bg-primary mr-5 iconDelete`}
                onClick={() => this.handleClick2(institute)}
              >
                <i className={`fas fa-pen iconDelete`} />
              </div>
            </div>
            <CardBody>
              <h4 className="card-title">
                <p className="text-fiord-blue">{institute.nome}</p>
              </h4>
              <h5 className="card-title d-block mb-1  ">Endereço web:</h5>
              <p className="card-text d-block mb-2">{institute.site}</p>
              <h5 className="card-title d-block mb-1  ">Missão: </h5>
              <p
                className="card-text d-block mb-2"
                dangerouslySetInnerHTML={{ __html: institute.missao }}
              />
              <h5 className="card-title d-block mb-1  ">Descrição: </h5>
              <p
                className="card-text d-block mb-2"
                dangerouslySetInnerHTML={{ __html: institute.descricao }}
              />
              <h5 className="card-title d-block mb-1  ">Pontos fortes:</h5>
              <ul className="px-4">
                {institute.pontosFortes.map(pontoForte => (
                  <li className="mb-1">{pontoForte}</li>
                ))}
              </ul>
              <h5 className="card-title d-block mb-1  ">Unidades:</h5>
              <ul className="px-4">
                {institute.unidades
                  .filter(this.filtro.bind(this))
                  .map(unidade => (
                    <li className="mb-1">{`Campus ${unidade.nome}`}</li>
                  ))}
              </ul>
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === institute.nome}
            onHide={editClose}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Editar Instituição
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
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
                              onChange={e =>
                                this.setState({ nome: e.target.value })
                              }
                              id="feName"
                              type="name"
                              placeholder="Ex.: UFES - Universidade Federal do Espirito Santo"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <FormGroup>
                              <strong className="text-muted d-block mb-2">
                                Descrição{" "}
                                <strong className="text-danger">*</strong>
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
                                Missão{" "}
                                <strong className="text-danger">*</strong>
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
                                Telefone{" "}
                                <strong className="text-danger">*</strong>
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
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Endereço do site
                          </strong>
                          <FormInput
                            id="feUrl"
                            type="url"
                            value={this.state.site}
                            onChange={e =>
                              this.setState({ site: e.target.value })
                            }
                          />
                        </FormGroup>
                        <strong className="text-muted d-block mb-4">
                          Mídias Sociais
                        </strong>
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
                                  onClick={() =>
                                    this.deletaPontoForte(pontoForte)
                                  }
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
                              onChange={e =>
                                this.setState({ ponto: e.target.value })
                              }
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
                          Preencha os campos abaixo para adicionar um novo curso
                          a instituição
                        </p>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feCursos">
                              Nome do Curso{" "}
                              <strong className="text-danger">*</strong>
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
                              Área do Curso{" "}
                              <strong className="text-danger">*</strong>
                            </label>
                            <FormSelect
                              onChange={e =>
                                this.setState({ area: e.target.value })
                              }
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
                              onChange={e =>
                                this.setState({ nivel: e.target.value })
                              }
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
                                          onClick={() =>
                                            this.deletaCurso(curso)
                                          }
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
                          unidades={institute.unidades}
                          adminId={institute.admin.id}
                          edit="true"
                        />
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Capa da Instituição{" "}
                            <strong className="text-danger">*</strong>
                          </strong>
                          <input
                            className="inputFile"
                            onChange={e =>
                              this.setState({ capa: e.target.files[0] })
                            }
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
                            onChange={e =>
                              this.setState({ logo: e.target.files[0] })
                            }
                            type="file"
                          />
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={this.handleClose2.bind(this)}
              >
                Close
              </Button>
              <Button
                variant="danger"
                onClick={() => this.editInstitute(institute)}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.closeShow === institute.nome}
            onHide={deleteClose}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Você tem certeza?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.state.error}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={() => this.deleteInstitute(institute)}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            size="sm"
            show={this.state.smShow === institute.nome}
            onHide={smClose}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">Erro!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.state.error}</Modal.Body>
          </Modal>
        </Col>
      ));
    };
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Visualizar Instituições"
            subtitle="Instituições"
            className="text-sm-left"
          />
        </Row>
        <Row>{renderInstitute()}</Row>
      </Container>
    );
  }
}

export default Institutes;
