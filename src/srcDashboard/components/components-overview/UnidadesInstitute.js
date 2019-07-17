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
      niveis: [],
      smShow: false
    };
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
      admin:'teste'
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
        niveis: [],
        clear: false,
        unidades: newunidades
      });
      this.props.callbackParent(newunidades);
    } else
      this.setState({
        smShow: true,
        error: "Preencha todos os campos"
      });
  }
  deleteUnidade(unidade) {
    var newUnidade = arrayRemove(this.state.unidades, unidade);
    this.setState({ ...this.state, unidades: newUnidade });
  }
  adicionaCurso() {
    var cursos = this.state.cursos;
    console.log(this.state.niveis.length);
    if (
      this.state.nomeCurso !== "" &&
      this.state.area !== "" &&
      this.state.niveis.length > 0
    ) {
      var curso = {
        nome: this.state.nomeCurso,
        area: this.state.area,
        niveis: this.state.niveis,
        admin:'teste'
      };
      cursos.push(curso);
      this.setState({
        ...this.state,
        cursos: cursos,
        nomeCurso: "",
        area: "",
        niveis: [],
        clear: true
      });
    } else
      this.setState({
        smShow: true,
        error: "Preencha todos os campos"
      });
  }
  deletaCurso(curso) {
    var cursos = arrayRemove(this.state.cursos, curso);
    this.setState({ ...this.state, cursos: cursos });
  }
  onChildChanged(New, clear) {
    this.setState({ niveis: New, clear: !clear });
  }

  render() {
    let smClose = () => this.setState({ smShow: false });
    return (
      <FormGroup lg="12">
        <h4 className="d-block mb-1">Unidades</h4>
        <p>
          Preencha os campos abaixo para adicionar uma nova unidade a
          instituição
        </p>
        <Row lg="12" form>
          <Col lg="12" className="form-group">
            <label htmlFor="feCampus">Nome</label>
            <FormInput
              value={this.state.nome}
              onChange={e => this.setState({ nome: e.target.value })}
              id="feCampus"
              type="name"
              placeholder="Ex.: Campus Goiabeiras"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fecidade">Cidade</label>
            <FormInput
              value={this.state.cidade}
              onChange={e => this.setState({ cidade: e.target.value })}
              id="fecidade"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="febairro">Bairro</label>
            <FormInput
              value={this.state.bairro}
              onChange={e => this.setState({ bairro: e.target.value })}
              id="febairro"
              type="texxt"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feRua">Logradouro</label>
            <FormInput
              value={this.state.logradouro}
              onChange={e => this.setState({ logradouro: e.target.value })}
              id="feComplefeRuateName"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fenumero">Número</label>
            <FormInput
              value={this.state.numero}
              onChange={e => this.setState({ numero: e.target.value })}
              id="fenumero"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fecomplemento">Complemento</label>
            <FormInput
              value={this.state.complemento}
              onChange={e => this.setState({ complemento: e.target.value })}
              id="fecomplemento"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fecep">Cep</label>
            <FormInput
              value={this.state.cep}
              onChange={e => this.setState({ cep: e.target.value })}
              id="fecep"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feCompleteName">Descrição</label>
            <FormTextarea
              id="feDescription"
              value={this.state.descricao}
              onChange={e => this.setState({ descricao: e.target.value })}
              rows="5"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="fecep">Telefone</label>
            <FormInput
              value={this.state.telefone}
              onChange={e => this.setState({ telefone: e.target.value })}
              id="fetelefone"
              type="text"
            />
          </Col>
          <Col lg="12" className="form-group">
            <h5 htmlFor="feCursos">Cursos da Unidade</h5>
            <p>
              Preencha os campos abaixo para adicionar um novo curso a unidade
            </p>
          </Col>
          <Col lg="12" className="form-group">
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feCursos">Nome do Curso</label>
                <FormInput
                  value={this.state.nomeCurso}
                  onChange={e => this.setState({ nomeCurso: e.target.value })}
                  id="feCursos"
                  type="name"
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feCursos">Área do Curso</label>
                <FormSelect
                  onChange={e => this.setState({ area: e.target.value })}
                  value={this.state.area}
                >
                  <option value="">Escolha...</option>
                  <option value="Medicina">Medicina</option>
                  <option value="Ciências Exatas">Ciências Exatas</option>
                  <option value="Ciências Biológicas">
                    Ciências Biológicas
                  </option>
                  <option value="Ciências Sociais">Ciências Sociais</option>
                  <option value="Administração">Administração</option>
                  <option value="Direito">Direito</option>
                  <option value="Engenharia">Engenharia</option>
                  <option value="Matemática">Matemática</option>
                  <option value="T.I.">T.I.</option>
                  <option value="Engenharia">Engenharia</option>
                </FormSelect>
              </Col>
              <Col md="10" className="form-group">
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
                <label style={{ color: "transparent" }} htmlFor="feCursos">
                  Deletarsdasdasdasdsad
                </label>
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
                    minHeight: "10vh"
                  }}
                >
                  {this.state.cursos.map(curso => (
                    <ListGroupItem>
                      <Row lg="12">
                        <Col lg="4">
                          <p className="text-fiord-blue">
                            <strong>Nome:</strong> {curso.nome}
                          </p>
                        </Col>
                        <Col lg="2">
                          <p className="text-fiord-blue">
                            <strong>Área:</strong> {curso.area}
                          </p>
                        </Col>
                        <Col lg="5">
                          <p className="text-fiord-blue">
                            <strong>Nivel:</strong>
                            {curso.niveis.map(nivel => ` ${nivel} `)}
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
                        <strong>Cidade:</strong> {unidade.cidade}
                      </p>
                    </Col>
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
                    <Col lg="2">
                      <p className="text-fiord-blue">
                        <strong>Cep:</strong> {unidade.cep}
                      </p>
                    </Col>
                    <Col lg="1">
                      <div
                        pill
                        className={`card-post__category bg-danger iconDelete`}
                        onClick={() => this.deleteUnidade(unidade)}
                      >
                        <i className={`fas fa-times iconDelete`} />
                      </div>
                    </Col>
                    <Col lg="12">
                      <p className="text-fiord-blue">
                        <strong>Cursos:</strong>{unidade.cursos.map(curso => (
                         ` ${curso.nome} `
                      ))}
                      </p>
                      
                    </Col>
                  </Row>
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
