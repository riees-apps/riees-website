import React from "react";
import {
  Row,
  Col,
  FormInput,
  FormGroup,
  ListGroupItem,
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
      Lugares: [],
      Nome: "",
      Texto: "",
    };
  }

  addPlace() {
    const newLugares = this.state.Lugares;
    const newLugar = {
      Nome: this.state.Nome,
      Texto: this.state.Texto,
    };

    newLugares.push(newLugar);
    this.setState({
      ...this.state,
      Nome: "",
      Texto: "",
      Lugares: newLugares
    });
  }
  deleteLugar(lugar){
    var newLugar = arrayRemove(this.state.Lugares, lugar)
    this.setState({...this.state,
      Lugares: newLugar})
  }

  render() {
    return (
      <FormGroup lg="12">
        <strong className="text-muted d-block mb-2">Locais para visitar</strong>
        {this.state.Lugares.map(lugar => (
          <ListGroupItem>
            <h5 className="card-title mb-1">
              <p className="text-fiord-blue">{lugar.Nome}</p>
            </h5>
            <Row lg="12">
              <Col lg="12">
                <p className="text-fiord-blue">{lugar.Texto}</p>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
        <Row lg="12" form>
          <Col lg="12" className="form-group">
            <label htmlFor="feNome">Nome</label>
            <FormInput
              value={this.state.Nome}
              onChange={e => this.setState({ Nome: e.target.value })}
              id="feNome"
              type="name"
            />
          </Col>
          <Col lg="12" className="form-group">
            <label htmlFor="feTexto">Texto</label>
            <FormInput
              value={this.state.Texto}
              onChange={e => this.setState({ Texto: e.target.value })}
              id="feTexto"
              type="text"
            />
          </Col>

          <Button onClick={this.addPlace.bind(this)} theme="primary">
            Adicionar local para visitar
          </Button>
        </Row>
      </FormGroup>
    );
  }
}
