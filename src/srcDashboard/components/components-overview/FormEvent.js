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
import ReactLoading from "react-loading";
import { withRouter } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import api from "../../../api/api";
import Editor from "./editor";

import CustomFileUpload from "../components-overview/CustomFileUpload";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}

class FormEvent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false,
      smShow: false,
      nome: "",
      data: "",
      dataFim: "",
      horarioEvento: "",
      localizacao: "",
      descricao: "",
      link: "",
      img: null,
      admin: this.props.adminId
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
  }
  handleChangeEditor(html) {
    this.setState({ descricao: html });
  }
  addEvento = async e => {
    e.preventDefault();
    const {
      nome,
      data,
      dataFim,
      localizacao,
      descricao,
      link,
      horarioEvento,
      admin
    } = this.state;
    let dataV = data.split("-");
    let dataFimV = dataFim.split("-");
    let horarioV = horarioEvento.split(":");
    let newDate = new Date(
      dataV[0],
      dataV[1] - 1,
      dataV[2],
      horarioV[0],
      horarioV[1]
    ).getTime();
    let newDateFim = new Date(
      dataFimV[0],
      dataFimV[1] - 1,
      dataFimV[2]
    ).getTime();


    if (
      !(
        nome !== "" &&
        descricao !== "" &&
        data !== "" &&
        localizacao !== "" &&
        admin !== ""
      )
    ) {
      this.setState({
        error: "Preencha todos os campos!",
        smShow: true
      });
    } else {
      try {
        this.setState({ isLoading: true });
        await api
          .post("/bucket", this.state.img, {
            headers: {
              "content-type": this.state.img.type,
              filename: this.state.img.name
            }
          })
          .then(res => {
            api.post("/evento", {
              nome: nome,
              descricao: descricao,
              dataInicio: newDate,
              dataFim: isNaN(newDateFim) ? 0 : newDateFim,
              localizacao: localizacao,
              link: link,
              capa: res.data._id,
              admin: admin
            });
          })

          .then(response => {
            this.setState({ isLoading: false });
            this.setState({
              smShow: true,
              error: "Evento adicionado com sucesso!"
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
            "Ocorreu um problema na tentativa de adicionar, tente novamente2"
        });
      }
    }
  };
  render() {
    let smClose = () => {
      this.setState({ smShow: false });
      if (this.state.error === "Evento adicionado com sucesso!")
        this.props.history.push("/en/dashboard/show-events");
      else return;
    };
    return (
      <form onSubmit={this.addEvento}>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="12" className="form-group">
                      <strong className="text-muted d-block mb-2">
                        Campos com * são obrigatórios
                      </strong>
                    </Col>
                    <Col md="12" className="form-group">
                      <strong className="text-muted d-block mb-2">
                        Nome <strong className="text-danger">*</strong>
                      </strong>
                      <FormInput
                        value={this.state.nome}
                        onChange={e => this.setState({ nome: e.target.value })}
                        id="feName"
                        type="name"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <FormGroup>
                        <strong className="text-muted d-block mb-2">
                          Descrição <strong className="text-danger">*</strong>
                        </strong>
                        <ReactQuill
                          onChange={this.handleChangeEditor}
                          value={this.state.descricao}
                          modules={Editor.modules}
                          className="add-new-post__editor mb-1"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="mb-3" md="12">
                      <strong className="text-muted d-block mb-2">
                        Link do evento
                      </strong>
                      <FormInput
                        value={this.state.link}
                        onChange={e => this.setState({ link: e.target.value })}
                        id="feName"
                        type="name"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <strong className="text-muted d-block mb-2">
                        Data do evento{" "}
                        <strong className="text-danger">*</strong>
                      </strong>
                      <FormInput
                        value={this.state.data}
                        onChange={e => this.setState({ data: e.target.value })}
                        id="feCustoMedio"
                        type="date"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <strong className="text-muted d-block mb-2">
                        Data do fim do evento{" "}                       
                      </strong>
                      <FormInput
                        value={this.state.dataFim}
                        onChange={e => this.setState({ dataFim: e.target.value })}
                        id="feCustoMedio"
                        type="date"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <strong className="text-muted d-block mb-2">
                        Horário do evento{" "}
                        <strong className="text-danger">*</strong>
                      </strong>
                      <FormInput
                        value={this.state.horarioEvento}
                        onChange={e =>
                          this.setState({ horarioEvento: e.target.value })
                        }
                        id="feCustoMedio"
                        type="time"
                      />
                    </Col>
                    <Col className="mb-3" md="12">
                      <strong className="text-muted d-block mb-2">
                        Local do evento{" "}
                        <strong className="text-danger">*</strong>
                      </strong>
                      <FormInput
                        value={this.state.localizacao}
                        onChange={e =>
                          this.setState({ localizacao: e.target.value })
                        }
                        id="feName"
                        type="name"
                      />
                    </Col>
                  </Row>
                  <FormGroup>
                    <strong className="text-muted d-block mb-2">
                      Imagem do Evento{" "}
                      <strong className="text-danger">*</strong>
                    </strong>
                    <input
                      className="inputFile"
                      onChange={e => this.setState({ img: e.target.files[0] })}
                      type="file"
                    />
                  </FormGroup>

                  <Button className="ml-1" type="submit">
                    Criar novo evento
                  </Button>
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
              {this.state.error === "Evento adicionado com sucesso!"
                ? "Sucesso!"
                : "Erro!"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.error}</Modal.Body>
        </Modal>
        <Modal
          size="sm"
          show={this.state.isLoading}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body className="spinDivForm">
            <p>Enviando Formulario...</p>
            <ReactLoading className="spin" type="spin" color="#357edd" />
          </Modal.Body>
        </Modal>
      </form>
    );
  }
}

export default withRouter(FormEvent);
