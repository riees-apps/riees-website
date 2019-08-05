import React from "react";
import {
  Row,
  Col,
  FormInput,
  FormGroup,
  ListGroupItem,
  Button
} from "shards-react";

import Modal from "react-bootstrap/Modal";

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
        cepEdit: unidade.cep
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
      admin: this.props.adminId
    };

    if (
      newUnidade.nome !== "" &&
      newUnidade.cidade !== "" &&
      newUnidade.bairro !== "" &&
      newUnidade.logradouro !== "" &&
      newUnidade.cep !== ""
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
        clear: false,
        unidades: newunidades,
        nomeEdit: "",
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
                  unidade: unidades,
                  closeShow:false
                });
                this.props.callbackParent(unidades);
              }
            });
        });
    else {
      var unidades = arrayRemove(this.state.unidades, unidade);
      this.setState({
        ...this.state,
        unidades: unidades,
        closeShow:false
      });
      this.props.callbackParent(unidades);
    }
  }

  onChildChanged(New, clear) {
    this.setState({ nivel: New, clear: !clear });
  }

  editUnidade(unidade) {
    var id;
    const {
      unidadeEdit,
      nomeEdit,
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
        cidadeEdit !== "" &&
        bairroEdit !== "" &&
        logradouroEdit !== "" &&
        cepEdit !== ""
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
            api.patch(`/unidade/${unidade.id}`, {
              nome: nomeEdit,
              logradouro: logradouroEdit,
              numero: numeroEdit,
              complemento: complementoEdit,
              bairro: bairroEdit,
              cidade: res.data.id,
              cep: cidadeEdit
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
  componentDidMount(){
    this.setState({unidades:this.props.unidades})
  }

  render() {
    let smClose = () => this.setState({ smShow: false });
    let deleteClose = () => this.setState({ closeShow: false });
    let editUnidadeClose = () => this.setState({ editUnidadeShow: false });
    return (
      <FormGroup lg="12">
        <h4 className="d-block mb-1">Unidades</h4>
        <p>
          Preencha os campos abaixo para adicionar uma nova unidade a
          instituição
        </p>
        <Row lg="12" form>
          <Col lg="12" className="form-group">
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
              Número
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
              Complemento
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
                    <Col lg="3">
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
                    <Col lg="1">
                      <div
                        pill
                        className={
                          this.props.edit === "true"
                            ? `card-post__category bg-primary iconDelete ml-auto`
                            : "displayNone"
                        }
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
                        Fechar
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => this.deleteUnidade(unidade)}
                      >
                        Confirmar
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
                      </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={this.handleClose2.bind(this)}
                      >
                        Fechar
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => this.editUnidade(unidade)}
                      >
                        Confirmar
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
