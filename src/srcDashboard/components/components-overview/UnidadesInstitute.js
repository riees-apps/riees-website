import React from "react";
import {
  Row,
  Col,
  FormInput,
  FormGroup,
  ListGroupItem,
  Badge,
  Button
} from "shards-react";

function arrayRemove(arr, value) {

  return arr.filter(function(ele){
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
      Rua: "",
      Numero: "",
      Complemento: "",
      Cep: ""
    };
  }

  createInstitute() {
    const newUnidades = this.state.Unidades;
    const newInstitute = {
      Nome: this.state.Nome,
      Cidade: this.state.Cidade,
      Bairro: this.state.Bairro,
      Rua: this.state.Rua,
      Numero: this.state.Numero,
      Complemento: this.state.Complemento,
      Cep: this.state.Cep
    };

    newUnidades.push(newInstitute);
    this.setState({
      ...this.state,
      Nome: "",
      Cidade: "",
      Bairro: "",
      Rua: "",
      Numero: "",
      Complemento: "",
      Cep: "",
      Unidades: newUnidades
    });
  }
  deleteUnidade(unidade){
    var newUnidade = arrayRemove(this.state.Unidades, unidade)
    this.setState({...this.state,
      Unidades: newUnidade})
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
                <p className="text-fiord-blue">Rua: {unidade.Rua}</p>
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
            <label htmlFor="feRua">Rua</label>
            <FormInput
              value={this.state.Rua}
              onChange={e => this.setState({ Rua: e.target.value })}
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
              l
              id="feCep"
              type="text"
            />
          </Col>
          <Button onClick={this.createInstitute.bind(this)} theme="primary">
            Adicionar Unidade
          </Button>
        </Row>
      </FormGroup>
    );
  }
}
