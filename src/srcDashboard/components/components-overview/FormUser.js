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

import { withRouter } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import api from "../../../api/api";

import Checkboxes from "./CheckboxesInstitute";
import UnidadesInstitute from "./UnidadesInstitute";
import CustomFileUpload from "../components-overview/CustomFileUpload";

function IsEmail(email) {
  console.log(email);
  if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    return false;
  } else return true;
}
class FormUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      smShow: false,
      nome: "",
      email: "",
      senha: "",
      senha2: ""
    };
  }
  addUsuario = async e => {
    e.preventDefault();
    const { nome, email, senha, senha2 } = this.state;

    if (!(nome !== "" && IsEmail(email) && senha !== "" && senha2 !== "")) {
      this.setState({
        error: "Preencha todos os campos corretamente!",
        smShow: true
      });
    } else if (!(senha === senha2)) {
      this.setState({
        error: "Confirme corretamente sua senha",
        smShow: nome
      });
    } else {
      try {
        await api
          .post(
            "/admin",
            {
              nome: nome,
              email: email,
              senha: senha
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then(response => {
            this.setState({
              smShow: true,
              error: "Usuario adicionado com sucesso!"
            });
          })
          .catch(error => {
            console.log(error);
            this.setState({
              smShow: true,
              error:
                "Ocorreu um problema na tentativa de adicionar, tente novamente"
            });
          });
      } catch (err) {
        this.setState({
          smShow: true,
          error:
            "Ocorreu um problema na tentativa de adicionar, tente novamente"
        });
      }
    }
  };
  render() {
    let smClose = () => {
      this.setState({ smShow: false });
      if (this.state.error === "Usuario adicionado com sucesso!")
        this.props.history.push("/en/dashboard/show-users");
      else return;
    };
    return (
      <form onSubmit={this.addUsuario}>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="12" className="form-group">
                      <label htmlFor="feName">Nome de usuario</label>
                      <FormInput
                        value={this.state.nome}
                        onChange={e => this.setState({ nome: e.target.value })}
                        id="feName"
                        type="name"
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="12" className="form-group">
                      <label htmlFor="feName">Endereço de email</label>
                      <FormInput
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        id="feEmail"
                        type="email"
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="12" className="form-group">
                      <label htmlFor="feName">Senha</label>
                      <FormInput
                        value={this.state.senha}
                        onChange={e => this.setState({ senha: e.target.value })}
                        id="fePassword"
                        type="password"
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="12" className="form-group">
                      <label htmlFor="feName">Confirme a senha</label>
                      <FormInput
                        value={this.state.senha2}
                        onChange={e =>
                          this.setState({ senha2: e.target.value })
                        }
                        id="fePassword"
                        type="password"
                      />
                    </Col>
                  </Row>
                  <Button type="submit">Criar novo usuario</Button>
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
        <Modal
          size="sm"
          show={this.state.smShow}
          onHide={smClose}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              {this.state.error === "Usuario adicionado com sucesso!"
                ? "Sucesso!"
                : "Erro!"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.error}</Modal.Body>
        </Modal>
      </form>
    );
  }
}

export default withRouter(FormUser);
