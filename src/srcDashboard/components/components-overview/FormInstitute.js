import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import api from "../../../api/api";

import Checkboxes from "./CheckboxesInstitute";
import UnidadesInstitute from "./UnidadesInstitute";
import CustomFileUpload from "../components-overview/CustomFileUpload";

class FormInstitute extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nome: "",
      nomeCompleto: ""
    };
  }
  createInstitute = async e => {
    e.preventDefault();
    const { nome, nomeCompleto } = this.state;
    if (!nome || !nomeCompleto) {
      this.setState({
        error: "Preencha corretamente!",
        smShow: true
      });
    } else {
      try {
        await api.post(
            "/instituicao",
            { senha: nome, email: nome }
          ).then(response => {
            
            this.props.history.push("/en/dashboard/show-institutes");
          }).catch(error => {
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

  render() {
    return (
      <form>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feName">Nome</label>
                      <FormInput
                        id="feName"
                        type="name"
                        placeholder="Ex.: UFES"
                      />
                    </Col>
                    <Col md="6">
                      <label htmlFor="feCompleteName">Nome Completo</label>
                      <FormInput
                        id="feCompleteName"
                        type="name"
                        placeholder="Ex.: Universidade Federal do Espirito Santo"
                      />
                    </Col>
                  </Row>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Imagem do intituto
                    </strong>
                    <CustomFileUpload />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="feUrl">Endereço do site</label>
                    <FormInput
                      id="feUrl"
                      type="url"
                      placeholder="Ex.: http://www.ufes.br/"
                    />
                  </FormGroup>

                  <ListGroupItem className="p-0 px-3 pt-3 mb-3">
                    <Row>
                      <Checkboxes />
                    </Row>
                  </ListGroupItem>

                  <UnidadesInstitute />

                  <FormGroup>
                    <label htmlFor="feUrl">Resumo do instituto</label>
                    <ReactQuill className="add-new-post__editor mb-1" />
                  </FormGroup>
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
