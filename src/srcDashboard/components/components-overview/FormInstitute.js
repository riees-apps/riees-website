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
  FormTextarea
} from "shards-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import api from "../../../api/api";

import Checkboxes from "./CheckboxesInstitute";
import UnidadesInstitute from "./UnidadesInstitute";
import CustomFileUpload from "../components-overview/CustomFileUpload";

function arrayRemove(arr, value) {

  return arr.filter(function(ele){
      return ele !== value;
  });

}
class FormInstitute extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nome: "",
      missao: "",
      descricao: "",
      capa: null,
      logo: null,
      link: "",
      admin: "5d1a1daaaf9fc5001737e7af",
      ponto: "",
      pontosFortes: []
    };
  }
  createInstitute = async e => {
    e.preventDefault();
    const {
      nome,
      missao,
      descricao,
      capa,
      logo,
      link,
      admin,
      pontosFortes
    } = this.state;
    if (!nome || !missao || !descricao || !admin || !pontosFortes || !link) {
      this.setState({
        error: "Preencha corretamente!",
        smShow: true
      });
    } else {
      try {
        await api
          .post(
            "/instituicao",
            {
              nome: nome,
              missao: missao,
              descricao: descricao,
              admin: admin,
              pontosFortes: pontosFortes,
              capa: null,
              logo: null
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            this.setState({
              smShow: true,
              error:
                "Houve um problema com o login, verifique suas credenciais."
            });
          });
      } catch (err) {
        this.setState({
          smShow: true,
          error: "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };
  adicionaPontoForte() {
    var pf = this.state.pontosFortes;
    if (this.state.ponto !== "") {
      pf.push(this.state.ponto);
      this.setState({ ...this.state, pontosFortes: pf, ponto: "" });
    } else this.setState({ ...this.state, ponto: "" });
  }
  deletaPontoForte(ponto) {
    var pf = arrayRemove(this.state.pontosFortes, ponto)
    this.setState({ ...this.state, pontosFortes: pf});
  }
  render() {
    return (
      <form onSubmit={this.createInstitute}>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="12" className="form-group">
                      <label htmlFor="feName">Nome</label>
                      <FormInput
                        onChange={e => this.setState({ nome: e.target.value })}
                        id="feName"
                        type="name"
                        placeholder="Ex.: UFES - Universidade Federal do Espirito Santo"
                      />
                    </Col>
                    <Col className="mb-3" md="6">
                      <label htmlFor="feCompleteName">Descrição</label>
                      <FormTextarea
                        id="feDescription"
                        onChange={e =>
                          this.setState({ descricao: e.target.value })
                        }
                        rows="5"
                      />
                    </Col>
                    <Col className="mb-3" md="6">
                      <label htmlFor="feCompleteName">Missão</label>
                      <FormTextarea
                        id="feMission"
                        onChange={e =>
                          this.setState({ missao: e.target.value })
                        }
                        rows="5"
                      />
                    </Col>
                  </Row>
            
                  <FormGroup>
                    <label htmlFor="feUrl">Endereço do site</label>
                    <FormInput
                      id="feUrl"
                      type="url"
                      placeholder="Ex.: http://www.ufes.br/"
                    />
                  </FormGroup>
                  <label htmlFor="fePontosFortes">Pontos Fortes</label>
                  <ul className="pl-4">
                    {this.state.pontosFortes.map(pontoForte => (
                      <Row lg="12">
                        <Col lg="11">
                          <li className="mb-4">{pontoForte}</li>
                        </Col>
                        <Col lg="1">
                          <div
                            style={{ marginLeft: "auto"}}
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
{/* 
                  <ListGroupItem className="p-0 px-3 pt-3 mb-3">
                    <Row>
                      <Checkboxes />
                    </Row>
                  </ListGroupItem> */}

                  <UnidadesInstitute />

                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Capa do intituto
                    </strong>
                    <CustomFileUpload />
                  </FormGroup>

                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Logo do intituto
                    </strong>
                    <CustomFileUpload />
                  </FormGroup>

                  {/* <FormGroup>
                    <label htmlFor="feUrl">Resumo do instituto</label>
                    <ReactQuill className="add-new-post__editor mb-1" />
                  </FormGroup> */}
                  <Button type="submit">Criar nova intituição</Button>
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </form>
    );
  }
}

export default FormInstitute;
