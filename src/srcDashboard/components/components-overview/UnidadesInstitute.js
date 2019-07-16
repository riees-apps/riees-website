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

import Checkboxes from "./CheckboxesInstitute";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}

export default class UnidadesInstitute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Unidades: [],
      Nome: "",
      Cidade: "",
      Bairro: "",
      Logradouro: "",
      Numero: "",
      Complemento: "",
      Cep: "",
      Descricao: "",
      Telefone: "",
      Cursos: [],
      NomeCurso: "",
      Area: "",
      niveis:[]
    };
  }

  createUnidade() {
    const newUnidades = this.state.Unidades;
    const newUnidade = {
      Nome: this.state.Nome,
      Cidade: this.state.Cidade,
      Bairro: this.state.Bairro,
      Logradouro: this.state.Logradouro,
      Numero: this.state.Numero,
      Complemento: this.state.Complemento,
      Cep: this.state.Cep,
      Descricao: this.state.Descricao,
      Telefone: this.state.Telefone,
      Cursos: this.state.Cursos
    };

    newUnidades.push(newUnidade);
    this.setState({
      ...this.state,
      Nome: "",
      Cidade: "",
      Bairro: "",
      Logradouro: "",
      Numero: "",
      Complemento: "",
      Cep: "",
      Descricao: "",
      Telefone: "",
      Cursos: [],
      Unidades: newUnidades
    });
  }
  deleteUnidade(unidade) {
    var newUnidade = arrayRemove(this.state.Unidades, unidade);
    this.setState({ ...this.state, Unidades: newUnidade });
  }
  adicionaCurso() {
    var cursos = this.state.Cursos;
    if (this.state.NomeCurso !== "" && this.state.NomeCurso !== "") {
      var curso = { nome: this.state.NomeCurso, area: this.state.Area };
      cursos.push(curso);
      this.setState({ ...this.state, Cursos: cursos, NomeCurso: "", Area: "" });
    } else this.setState({ ...this.state, NomeCurso: "", Area: "" });
  }
  deletaCurso(curso) {
    var cursos = arrayRemove(this.state.Cursos, curso);
    this.setState({ ...this.state, Cursos: cursos });
  }

  render() {
    return (
      <FormGroup lg="12">
        <strong className="text-muted d-block mb-2">Unidades</strong>
        {this.state.Unidades.map(unidade => (
          <ListGroupItem>
            <h5 className="card-title mb-1">
              <p className="text-fiord-blue">Campus {unidade.Nome}</p>
            </h5>
            <Row lg="12">
              <Col lg="2">
                <p className="text-fiord-blue">Cidade: {unidade.Cidade}</p>
              </Col>
              <Col lg="2">
                <p className="text-fiord-blue">Bairro: {unidade.Bairro}</p>
              </Col>
              <Col lg="3">
                <p className="text-fiord-blue">
                  Logradouro: {unidade.Logradouro}
                </p>
              </Col>
              <Col lg="2">
                <p className="text-fiord-blue">Numero: {unidade.Numero}</p>
              </Col>
              <Col lg="2">
                <p className="text-fiord-blue">Cep: {unidade.Cep}</p>
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
            </Row>
          </ListGroupItem>
        ))}
        <Row lg="12" form>
          <Col lg="12" className="form-group">
            <label htmlFor="feCampus">Nome</label>
            <FormInput
              value={this.state.Nome}
              onChange={e => this.setState({ Nome: e.target.value })}
              id="feCampus"
              type="name"
              placeholder="Ex.: Campus Goiabeiras"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feCidade">Cidade</label>
            <FormInput
              value={this.state.Cidade}
              onChange={e => this.setState({ Cidade: e.target.value })}
              id="feCidade"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feBairro">Bairro</label>
            <FormInput
              value={this.state.Bairro}
              onChange={e => this.setState({ Bairro: e.target.value })}
              id="feBairro"
              type="texxt"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feRua">Logradouro</label>
            <FormInput
              value={this.state.Logradouro}
              onChange={e => this.setState({ Logradouro: e.target.value })}
              id="feComplefeRuateName"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feNumero">Número</label>
            <FormInput
              value={this.state.Numero}
              onChange={e => this.setState({ Numero: e.target.value })}
              id="feNumero"
              type="number"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feComplemento">Complemento</label>
            <FormInput
              value={this.state.Complemento}
              onChange={e => this.setState({ Complemento: e.target.value })}
              id="feComplemento"
              type="text"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feCep">CEP</label>
            <FormInput
              value={this.state.Cep}
              onChange={e => this.setState({ Cep: e.target.value })}
              id="feCep"
              type="text"
            />
          </Col>
          <Col lg="12" className="form-group">
            <label htmlFor="feCursos">Cursos</label>
            <ul className="pl-4">
              {this.state.Cursos.map(curso => (
                <Row lg="12">
                  <Col lg="5">
                    <p className="text-fiord-blue">Nome: {curso.nome}</p>
                  </Col>
                  <Col lg="5">
                  <p className="text-fiord-blue">Area: {curso.area}</p>
                  </Col>
                  <Col lg="5">
                  <p className="text-fiord-blue">Area: {curso.niveis[0]}</p>
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
              ))}
            </ul>
          </Col>
          <Col lg="12" className="form-group">
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feCursos">Nome do Curso</label>
                <FormInput
                  value={this.state.NomeCurso}
                  onChange={e => this.setState({ NomeCurso: e.target.value })}
                  id="feCursos"
                  type="name"
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feCursos">Área do Curso</label>
                <FormSelect
                  onChange={e => this.setState({ Area: e.target.value })}
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
                    <Checkboxes />
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
            </Row>
          </Col>

          <Col lg="6" className="form-group">
            <label htmlFor="feCompleteName">Descrição</label>
            <FormTextarea
              id="feDescription"
              onChange={e => this.setState({ Descricao: e.target.value })}
              rows="5"
            />
          </Col>
          <Col lg="6" className="form-group">
            <label htmlFor="feCep">Telefone</label>
            <FormInput
              value={this.state.Telefone}
              onChange={e => this.setState({ Telefone: e.target.value })}
              id="feTelefone"
              type="text"
            />
          </Col>
          <Button
            className="ml-1"
            onClick={this.createUnidade.bind(this)}
            theme="primary"
          >
            Adicionar Unidade
          </Button>
        </Row>
      </FormGroup>
    );
  }
}
