import React from "react";
import {
  Row,
  Col,
  FormInput,
  FormSelect,
  FormGroup,
  ListGroupItem,
  Button,
  FormTextarea
} from "shards-react";

import Modal from "react-bootstrap/Modal";
import Checkboxes from "./CheckboxesInstitute";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import api from "../../../api/api";
import Editor from "./editor";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}

export default class unidadesInstitute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unidades: [],
      nome: "",
      cidade: "",
      bairro: "",
      logradouro: "",
      numero: "",
      complemento: "",
      cep: "",
      descricao: "",
      telefone: "",
      cursos: [],
      nomeCurso: "",
      area: "",
      nivel: '',
      smShow: false,
      closeShow: false,
      editUnidadeShow: false,
      nomeEdit: "",
      cidadeEdit: "",
      bairroEdit: "",
      logradouroEdit: "",
      numeroEdit: "",
      complementoEdit: "",
      cepEdit: "",
      descricaoEdit: "",
      telefoneEdit: "",
      cursosEdit: []
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
  }
  handleChangeEditor(html) {
    this.setState({ descricao: html });
  }
  handleClick(unidade) {
    this.setState({
      closeShow: unidade.id,
      error: `Ao confirmar a unidade ${unidade.nome} será deletada`
    });
  }
  handleClose() {
    this.setState({
      closeShow: false,
      smShow: false
    });
  }

  handleClose2() {
    this.setState({
      editUnidadeShow: false
    });
  }
  handleClick2(unidade) {
    console.log(unidade.cursos);

    const cidade =
      typeof unidade.cidade.id === "undefined"
        ? unidade.cidade
        : unidade.cidade.id;

    api.get(`/cidade/${cidade}`).then(res => {
      this.setState({
        ...this.state,
        unidadeEdit: unidade,
        id: unidade.id,
        editUnidadeShow: unidade.nome,
        admin: unidade.admin,
        nomeEdit: unidade.nome,
        cidadeEdit: res.data.nome,
        bairroEdit: unidade.bairro,
        logradouroEdit: unidade.logradouro,
        numeroEdit: unidade.numero,
        complementoEdit: unidade.complemento,
        cepEdit: unidade.cep,
        descricaoEdit: unidade.descricao,
        telefoneEdit: unidade.telefone,
        cursosEdit: unidade.cursos
      });
    });
  }

  createUnidade() {
    const newunidades = this.state.unidades;
    const newUnidade = {
      nome: this.state.nome,
      cidade: this.state.cidade,
      bairro: this.state.bairro,
      logradouro: this.state.logradouro,
      numero: this.state.numero,
      complemento: this.state.complemento,
      cep: this.state.cep,
      descricao: this.state.descricao,
      telefone: this.state.telefone,
      cursos: this.state.cursos,
      admin: this.props.adminId
    };

    if (
      newUnidade.nome !== "" &&
      newUnidade.cidade !== "" &&
      newUnidade.bairro !== "" &&
      newUnidade.logradouro !== "" &&
      newUnidade.numero !== "" &&
      newUnidade.complemento !== "" &&
      newUnidade.cep !== "" &&
      newUnidade.descricao !== "" &&
      newUnidade.telefone !== "" &&
      newUnidade.cursos.length > 0
    ) {
      newunidades.push(newUnidade);
      this.setState({
        ...this.state,
        nome: "",
        cidade: "",
        bairro: "",
        logradouro: "",
        numero: "",
        complemento: "",
        cep: "",
        descricao: "",
        telefone: "",
        cursos: [],
        nomeCurso: "",
        area: "",
        nivel: '',
        clear: false,
        unidades: newunidades,
        nomeEdit: "",
        telefoneEdit: "",
        descricaoEdit: "",
        logradouroEdit: "",
        numeroEdit: "",
        complementoEdit: "",
        bairroEdit: "",
        cepEdit: "",
        unidadeEdit: "",
        editUnidadeShow: ""
      });
      this.props.callbackParent(newunidades);
    } else
      this.setState({
        smShow: true,
        error: "Preencha todos os campos"
      });
  }
  deleteUnidade(unidade) {
    if (typeof unidade.id !== "undefined")
      api
        .delete(`/unidade/${unidade.id}`)
        .then(res => {
          const cursos = unidade.cursos;
          console.log(cursos);
          cursos.map(curso => {
            api.delete(`/curso/${curso.id}`);
          });
        })
        .then(resp => {
          var unidades = arrayRemove(this.state.unidades, unidade);
          this.setState({
            ...this.state,
            unidades: unidades
          });
        })
        .then(res => {
          api
            .get(
              `/unidade?where={"deletedAt":0,"instituicao":"${
                unidade.instituicao.id
              }"}`
            )
            .then(res => {
              const unidades = res.data;
              if (unidades.length !== 0) {
                this.setState({
                  ...this.state,
                  unidade: unidades
                });
                this.props.callbackParent(unidades);
              }
            });
        });
    else {
      var unidades = arrayRemove(this.state.unidades, unidade);
      this.setState({
        ...this.state,
        unidades: unidades
      });
      this.props.callbackParent(unidades);
    }
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
        nivel: '',
        clear: true
      });
    } else
      this.setState({
        smShow: true,
        error: "Preencha todos os campos"
      });
  }
  adicionaCursoEdit() {
    var cursos = this.state.cursosEdit;
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
        cursosEdit: cursos,
        nomeCurso: "",
        area: "",
        nivel: '',
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
            .get(`/curso?where={"deletedAt":0,"unidade":"${curso.unidade.id}"}`)
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
  deletaCursoEdit(curso) {
    console.log(curso);
    if (typeof curso.id !== "undefined")
      api.delete(`/curso/${curso.id}`).then(res => {
        var Cursos = arrayRemove(this.state.cursosEdit, curso);
        this.setState({ ...this.state, cursosEdit: Cursos });
      });
    else {
      var Cursos = arrayRemove(this.state.cursosEdit, curso);
      this.setState({ ...this.state, cursosEdit: Cursos });
    }
  }

  filtro = item => {
    if (item.deletedAt > 0) {
      return false;
    } else return true;
  };
  onChildChanged(New, clear) {
    this.setState({ nivel: New, clear: !clear });
  }

  editUnidade(unidade) {
    const {
      unidadeEdit,
      nomeEdit,
      descricaoEdit,
      telefoneEdit,
      cidadeEdit,
      bairroEdit,
      logradouroEdit,
      complementoEdit,
      cepEdit,
      numeroEdit,
      cursosEdit
    } = this.state;
    if (
      !(
        nomeEdit !== "" &&
        descricaoEdit !== "" &&
        telefoneEdit !== "" &&
        cidadeEdit !== "" &&
        bairroEdit !== "" &&
        logradouroEdit !== "" &&
        cepEdit !== "" &&
        numeroEdit !== ""
      )
    ) {
      this.setState({
        error: "Preencha todos os campos!",
        smShow: unidade.id
      });
    } else {
      try {
        api
          .get(`/cidade?nome=${unidade.cidade}`)
          .then(res => {
            api
              .patch(
                `/unidade/${unidade.id}`,
                {
                  nome: nomeEdit,
                  telefone: telefoneEdit,
                  descricao: descricaoEdit,
                  logradouro: logradouroEdit,
                  numero: numeroEdit,
                  complemento: complementoEdit,
                  bairro: bairroEdit,
                  cidade: res.data.id,
                  cep: cidadeEdit
                },
                { headers: { "Access-Control-Allow-Origin": "*" } }
              )
              .then(response => {
                const idUnidade = response.data.id;
                cursosEdit.map(curso => {
                  if (typeof curso.createdAt === "undefined")
                    api.get(`/area?nome=${curso.area}`).then(res => {
                      let area;
                      if (res.data.length > 0) area = res.data[0].id;
                      api
                        .get(
                          `/curso?where={"nome":"${
                            curso.nome
                          }","unidade":"${idUnidade}"}`
                        )
                        .then(res => {
                          if (res.data.length > 0) {
                            api.patch(
                              `/curso/${res.data[0].id}`,
                              {
                                nome: curso.nome,
                                nivel: curso.nivel,
                                admin: response.data.admin.id,
                                area: area,
                                deletedAt: 0
                              },
                              {
                                headers: {
                                  "Access-Control-Allow-Origin": "*"
                                }
                              }
                            );
                          } else
                            api.post(
                              "/curso",
                              {
                                nome: curso.nome,
                                nivel: curso.nivel,
                                admin: response.data.admin.id,
                                area: area,
                                unidade: idUnidade
                              },
                              {
                                headers: {
                                  "Access-Control-Allow-Origin": "*"
                                }
                              }
                            );
                        });
                    });
                });
              });
          })
          .then(res => {
            api
              .get(
                `/unidade?where={"deletedAt":0,"instituicao":"${
                  unidade.instituicao
                }"}`
              )
              .then(res => {
                const unidades = res.data;
                if (unidades.length !== 0)
                  this.setState({
                    ...this.state,
                    unidades: unidades
                  });
                this.setState({
                  ...this.state,
                  editUnidadeShow: false
                });
              });
          })
          .catch(error => {
            this.setState({
              smShow: unidade.nome,
              error: "Houve um problema com a edição, tente novamente"
            });
          });
      } catch (err) {
        this.setState({
          smShow: unidade.nome,
          error: "Houve um problema com a edição, tente novamente"
        });
      }
    }
  }

  componentDidMount() {
    const unidades = [];

    this.props.unidades.map(unidade => {
      api
        .get(`/curso?where={"deletedAt":0,"unidade":"${unidade.id}"}`)
        .then(cursos => {
          if (unidade.deletedAt === 0)
            unidades.push({
              createdAt: unidade.createdAt,
              updatedAt: unidade.updatedAt,
              deletedAt: unidade.deletedAt,
              id: unidade.id,
              nome: unidade.nome,
              telefone: unidade.telefone,
              descricao: unidade.descricao,
              logradouro: unidade.logradouro,
              numero: unidade.numero,
              complemento: unidade.complemento,
              bairro: unidade.bairro,
              cidade: unidade.cidade,
              cep: unidade.cep,
              instituicao: unidade.instituicao,
              admin: unidade.admin,
              cursos: cursos.data
            });
          if (unidades.length !== 0) {
            this.setState({ unidades: unidades });
          }
        });
    });
  }

  render() {
    let smClose = () => this.setState({ smShow: false });
    let deleteClose = () => this.setState({ closeShow: false });
    let editUnidadeClose = () => this.setState({ editUnidadeShow: false });
    return (
      <FormGroup lg="12">
        <h4 className="d-block mb-1">Cursos</h4>
        <p>Preencha os campos abaixo para adicionar um novo curso a instituição</p>
        <Row form>
          <Col md="4" className="form-group">
            <label htmlFor="feCursos">
              Nome do Curso <strong className="text-danger">*</strong>
            </label>
            <FormInput
              value={this.state.nomeCurso}
              onChange={e => this.setState({ nomeCurso: e.target.value })}
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
              <option value="Ciências Biológicas">Ciências Biológicas</option>
              <option value="Engenharias">Engenharias</option>
              <option value="Ciências da Saude">Ciências da Saude</option>
              <option value="Ciências Agrárias">Ciências Agrárias</option>
              <option value="Ciências Sociais e Aplicadas">
                Ciências Sociais e Aplicadas
              </option>
              <option value="Ciências Humanas">Ciências Humanas</option>
              <option value="Liguística, Letras e Artes">
                Liguística, Letras e Artes
              </option>
            </FormSelect>
          </Col>
          <Col md="3" className="form-group">
            <label htmlFor="feCursos">
              Nivel do Curso <strong className="text-danger">*</strong>
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
          <Col style={{ display: "flex",flexDirection:'column',alignContent:'center',justifyContent:'center' }} md="2">
            <strong style={{ color: "transparent" }} htmlFor="feCursos">
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
                marginBottom:'2.5vh'
              }}
            >
              {this.state.cursos.filter(this.filtro.bind(this)).map(curso => (
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
        <h4 className="d-block mb-1">Unidades</h4>
        <p>
          Preencha os campos abaixo para adicionar uma nova unidade a
          instituição
        </p>
        <Row lg="12" form>
          <Col lg="6" className="form-group">
            <label htmlFor="feCampus">
              Nome <strong className="text-danger">*</strong>
            </label>
            <FormInput
              value={this.state.nome}
              onChange={e => this.setState({ nome: e.target.value })}
              id="feCampus"
              type="name"
              placeholder="Ex.: Campus Goiabeiras"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fecidade">
              Cidade <strong className="text-danger">*</strong>
            </label>
            <FormInput
              value={this.state.cidade}
              onChange={e => this.setState({ cidade: e.target.value })}
              id="fecidade"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="febairro">
              Bairro <strong className="text-danger">*</strong>
            </label>
            <FormInput
              value={this.state.bairro}
              onChange={e => this.setState({ bairro: e.target.value })}
              id="febairro"
              type="texxt"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feRua">
              Logradouro <strong className="text-danger">*</strong>
            </label>
            <FormInput
              value={this.state.logradouro}
              onChange={e => this.setState({ logradouro: e.target.value })}
              id="feComplefeRuateName"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fenumero">
              Número <strong className="text-danger">*</strong>
            </label>
            <FormInput
              value={this.state.numero}
              onChange={e => this.setState({ numero: e.target.value })}
              id="fenumero"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fecomplemento">
              Complemento <strong className="text-danger">*</strong>
            </label>
            <FormInput
              value={this.state.complemento}
              onChange={e => this.setState({ complemento: e.target.value })}
              id="fecomplemento"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fecep">
              Cep <strong className="text-danger">*</strong>
            </label>
            <FormInput
              value={this.state.cep}
              onChange={e => this.setState({ cep: e.target.value })}
              id="fecep"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fecep">
              Telefone <strong className="text-danger">*</strong>
            </label>
            <FormInput
              value={this.state.telefone}
              onChange={e => this.setState({ telefone: e.target.value })}
              id="fetelefone"
              type="text"
            />
          </Col>
          <Col className="mb-3" md="12">
            <FormGroup>
              <strong className="text-muted d-block mb-2">
                Descrição da unidade <strong className="text-danger">*</strong>
              </strong>
              <ReactQuill
                onChange={this.handleChangeEditor}
                value={this.state.descricao}
                modules={Editor.modules}
                className="add-new-post__editor mb-1"
              />
            </FormGroup>
          </Col>

          <Button
            className="ml-1 mb-3"
            onClick={this.createUnidade.bind(this)}
            theme="primary"
          >
            Adicionar Unidade
          </Button>
          <Col md="12">
            <ListGroupItem
              style={{
                borderBottom: "1px solid lightgray",
                borderTop: "1px solid lightgray",
                minHeight: "15vh"
              }}
            >
              {this.state.unidades.map(unidade => (
                <ListGroupItem>
                  <h5 className="card-title mb-1">
                    <p className="text-fiord-blue">Campus {unidade.nome}</p>
                  </h5>
                  <Row lg="12">
                    <Col lg="2">
                      <p className="text-fiord-blue">
                        <strong>Bairro:</strong> {unidade.bairro}
                      </p>
                    </Col>
                    <Col lg="4">
                      <p className="text-fiord-blue">
                        <strong>Logradouro:</strong> {unidade.logradouro}
                      </p>
                    </Col>
                    <Col lg="2">
                      <p className="text-fiord-blue">
                        <strong>Numero:</strong> {unidade.numero}
                      </p>
                    </Col>
                    <Col lg="3">
                      <p className="text-fiord-blue">
                        <strong>Cep:</strong> {unidade.cep}
                      </p>
                    </Col>
                    <Col lg="1">
                      <div
                        pill
                        className={`card-post__category bg-danger iconDelete ml-auto`}
                        onClick={() => this.handleClick(unidade)}
                      >
                        <i className={`fas fa-times iconDelete`} />
                      </div>
                    </Col>
                    <Col lg="11">
                      <p className="text-fiord-blue">
                        <strong>Cursos:</strong>{" "}
                        {unidade.cursos.map(curso => ` ${curso.nome}  `)}
                      </p>
                    </Col>
                    <Col lg="1">
                      <div
                        pill
                        className={`card-post__category bg-primary iconDelete ml-auto`}
                        onClick={() => this.handleClick2(unidade)}
                      >
                        <i className={`fas fa-pen iconDelete`} />
                      </div>
                    </Col>
                  </Row>
                  <Modal
                    show={this.state.closeShow === unidade.id}
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
                      <Button
                        variant="secondary"
                        onClick={this.handleClose.bind(this)}
                      >
                        Close
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => this.deleteUnidade(unidade)}
                      >
                        Confirm
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal
                    size="md"
                    show={this.state.editUnidadeShow === unidade.nome}
                    onHide={editUnidadeClose}
                    dialogClassName="modal-100w"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        Editar unidade
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <FormGroup>
                        <Col md="12" className="form-group">
                          <label htmlFor="feCampus">Nome</label>
                          <FormInput
                            value={this.state.nomeEdit}
                            onChange={e =>
                              this.setState({ nomeEdit: e.target.value })
                            }
                            id="feCampus"
                            type="name"
                          />
                        </Col>
                        <Col md="12" className="form-group">
                          <label htmlFor="fecidade">Cidade</label>
                          <FormInput
                            value={this.state.cidadeEdit}
                            onChange={e =>
                              this.setState({ cidadeEdit: e.target.value })
                            }
                            id="fecidade"
                            type="text"
                          />
                        </Col>
                        <Col md="12" className="form-group">
                          <label htmlFor="febairro">Bairro</label>
                          <FormInput
                            value={this.state.bairroEdit}
                            onChange={e =>
                              this.setState({ bairroEdit: e.target.value })
                            }
                            id="febairro"
                            type="texxt"
                          />
                        </Col>
                        <Col md="12" className="form-group">
                          <label htmlFor="feRua">Logradouro</label>
                          <FormInput
                            value={this.state.logradouroEdit}
                            onChange={e =>
                              this.setState({ logradouroEdit: e.target.value })
                            }
                            id="feComplefeRuateName"
                            type="text"
                          />
                        </Col>
                        <Col md="12" className="form-group">
                          <label htmlFor="fenumero">Número</label>
                          <FormInput
                            value={this.state.numeroEdit}
                            onChange={e =>
                              this.setState({ numeroEdit: e.target.value })
                            }
                            id="fenumero"
                            type="text"
                          />
                        </Col>
                        <Col md="12" className="form-group">
                          <label htmlFor="fecomplemento">Complemento</label>
                          <FormInput
                            value={this.state.complementoEdit}
                            onChange={e =>
                              this.setState({ complementoEdit: e.target.value })
                            }
                            id="fecomplemento"
                            type="text"
                          />
                        </Col>
                        <Col md="12" className="form-group">
                          <label htmlFor="fecep">Cep</label>
                          <FormInput
                            value={this.state.cepEdit}
                            onChange={e =>
                              this.setState({ cepEdit: e.target.value })
                            }
                            id="fecep"
                            type="text"
                          />
                        </Col>
                        <Col md="12" className="form-group">
                          <label htmlFor="fecep">Telefone</label>
                          <FormInput
                            value={this.state.telefoneEdit}
                            onChange={e =>
                              this.setState({ telefone: e.target.value })
                            }
                            id="fetelefone"
                            type="text"
                          />
                        </Col>
                        <Col className="mb-3" md="12">
                          <FormGroup>
                            <strong className="text-muted d-block mb-2">
                              Descrição da unidade
                            </strong>
                            <ReactQuill
                              onChange={this.handleChangeEditor}
                              value={this.state.descricaoEdit}
                              modules={Editor.modules}
                              className="add-new-post__editor mb-1"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12" className="form-group">
                          <h5 htmlFor="feCursos">Cursos da Unidade</h5>
                          <p>
                            Preencha os campos abaixo para adicionar um novo
                            curso a unidade
                          </p>
                        </Col>
                        <Col lg="12" className="form-group">
                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="feCursos">Nome do Curso</label>
                              <FormInput
                                value={this.state.nomeCurso}
                                onChange={e =>
                                  this.setState({ nomeCurso: e.target.value })
                                }
                                id="feCursos"
                                type="name"
                              />
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="feCursos">Área do Curso</label>
                              <FormSelect
                                onChange={e =>
                                  this.setState({ area: e.target.value })
                                }
                                value={this.state.area}
                              >
                                <option value="">Escolha...</option>
                                <option value="Medicina">Medicina</option>
                                <option value="Ciências Exatas">
                                  Ciências Exatas
                                </option>
                                <option value="Ciências Biologicas">
                                  Ciências Biológicas
                                </option>
                                <option value="Ciências Sociais">
                                  Ciências Sociais
                                </option>
                                <option value="Administração">
                                  Administração
                                </option>
                                <option value="Direito">Direito</option>
                                <option value="Engenharia">Engenharia</option>
                                <option value="Matemática">Matemática</option>
                                <option value="T.I.">T.I.</option>
                              </FormSelect>
                            </Col>
                            <Col md="12" className="form-group">
                              <label htmlFor="feCursos">Níveis</label>
                              <FormGroup className="p-0 px-3">
                                <Row>
                                  <Checkboxes
                                    callbackParent={(New, clear) =>
                                      this.onChildChanged(New, clear)
                                    }
                                    clear={this.state.clear}
                                  />
                                </Row>
                              </FormGroup>
                            </Col>
                            <Col md="2">
                              <Button
                                className="mb-5"
                                style={{ marginLeft: "auto" }}
                                onClick={() => this.adicionaCursoEdit()}
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
                                  minHeight: "10vh"
                                }}
                              >
                                {this.state.cursosEdit.map(curso => (
                                  <ListGroupItem>
                                    <Row lg="12">
                                      <Col lg="10">
                                        <p className="text-fiord-blue">
                                          <strong>Nome:</strong> {curso.nome}
                                        </p>
                                      </Col>
                                      <Col lg="1">
                                        <div
                                          style={{ marginLeft: "auto" }}
                                          pill
                                          className={`card-post__category bg-danger iconDelete`}
                                          onClick={() =>
                                            this.deletaCursoEdit(curso)
                                          }
                                        >
                                          <i className={`fas fa-times`} />
                                        </div>
                                      </Col>
                                      <Col lg="12">
                                        <p className="text-fiord-blue">
                                          <strong>Área:</strong>{" "}
                                          curso.area
                                        </p>
                                      </Col>
                                      <Col lg="12">
                                      <p className="text-fiord-blue">
                                          <strong>Nível:</strong>{" "}
                                          curso.nivel
                                        </p>
                                      </Col>
                                    </Row>
                                  </ListGroupItem>
                                ))}
                              </ListGroupItem>
                            </Col>
                          </Row>
                        </Col>
                      </FormGroup>
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
                        onClick={() => this.editUnidade(unidade)}
                      >
                        Confirm
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </ListGroupItem>
              ))}
            </ListGroupItem>
          </Col>
        </Row>
        <Modal
          size="sm"
          show={this.state.smShow}
          onHide={smClose}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">Erro!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.error}</Modal.Body>
        </Modal>
      </FormGroup>
    );
  }
}
