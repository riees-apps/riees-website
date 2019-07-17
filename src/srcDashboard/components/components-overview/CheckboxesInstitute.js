import React from "react";
import { Col,Row,FormCheckbox } from "shards-react";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
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
      clear:false,
      Niveis:[]
    };
  }
  handleChange(e, nivel,nome) {
    const newState = {};
    const newNiveis = this.state.Niveis;
    newState[nivel] = !this.state[nivel];
    if(!this.state[nivel] && this.state.Niveis.indexOf(nome) === -1){
      newNiveis.push(nome)
      this.setState({...newState, Niveis:newNiveis});
      this.props.callbackParent(this.state.Niveis,true)
      console.log(this.state.Niveis)
    }
    else {
      var niveis = arrayRemove(newNiveis, nome);
      this.setState({...newState, Niveis: arrayRemove(newNiveis, nome) });
      this.props.callbackParent(niveis,true)
      console.log(this.state.Niveis)
      console.log(niveis)
    }

  }

  render() {
    if(this.props.clear){
      this.setState({Niveis:[],Graduacao: false,PosGraduacao: false,Mestrado: false,Doutorado: false,PosDoutorado: false,})
      this.props.callbackParent([],true)
    }
    return (
      <div sm="12" md="4" className="mb-3">
        <Col lg='12'>
        <Row lg='12'>
        <FormCheckbox
          checked={this.state.Graduacao}
          onChange={e => this.handleChange(e, "Graduacao","Graduação")}
          className="mr-4"
        >
          Graduação
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.PosGraduacao}
          onChange={e => this.handleChange(e, "PosGraduacao","Pós-Graduação")}
          className="mr-4"
        >
          Pós-Graduação
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Mestrado}
          onChange={e => this.handleChange(e, "Mestrado","Mestrado")}
          className="mr-4"
        >
          Mestrado
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Doutorado}
          onChange={e => this.handleChange(e, "Doutorado", "Doutorado")}
          className="mr-4"
        >
          Doutorado
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.PosDoutorado}
          onChange={e => this.handleChange(e, "PosDoutorado", "Pós-Doutorado")}
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