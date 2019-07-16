import React from "react";
import { Col,Row,FormCheckbox } from "shards-react";

export default class FormCheckboxExample extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      Graduacao: false,
      PosGraduacao: false,
      Mestrado: false,
      Doutorado: false,
      PosDoutorado: false,
      Niveis:[]
    };
  }

  handleChange(e, nivel) {
    const newState = {};
    const newNiveis = this.state.Niveis;
    newState[nivel] = !this.state.nivel;
    newNiveis.push(nivel)
    this.setState({ ...this.state, ...newState, Niveis:newNiveis});
    console.log(this.state.Niveis)
  }

  render() {
    return (
      <div sm="12" md="4" className="mb-3">
        <Col lg='12'>
        <Row lg='12'>
        <FormCheckbox
          checked={this.state.Graduacao}
          onChange={e => this.handleChange(e, "Graduacao")}
          className="mr-4"
        >
          Graduação
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.PosGraduacao}
          onChange={e => this.handleChange(e, "PosGraduacao")}
          className="mr-4"
        >
          Pós-Graduação
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Mestrado}
          onChange={e => this.handleChange(e, "Mestrado")}
          className="mr-4"
        >
          Mestrado
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Doutorado}
          onChange={e => this.handleChange(e, "Doutorado")}
          className="mr-4"
        >
          Doutorado
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.PosDoutorado}
          onChange={e => this.handleChange(e, "PosDoutorado")}
          className="mr-4"
        >
          Pós-Doutorado
        </FormCheckbox>
        </Row>
        </Col>
        
      </div>
    );
  }
}