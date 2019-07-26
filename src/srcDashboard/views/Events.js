import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormInput,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup
} from "shards-react";

import "./index.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../assets/quill.css";

import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import api from "../../api/api";
import Editor from "../components/components-overview/editor";

import PageTitle from "../components/common/PageTitle";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
class Events extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      closeShow: false,
      smShow: false,
      editShow: false,
      eventos: [],
      nome: "",
      data: "",
      localizacao: "",
      descricao: "",
      horarioEvento: "",
      link: "",
      capa: null,
      admin: "5d1a1daaaf9fc5001737e7af"
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
  }

  componentWillMount() {
    api.get('/evento?where={"deletedAt":0}').then(res => {
      const events = res.data;
      this.setState({ eventos: events });
    });
  }
  editCity(event) {
    const {
      nome,
      descricao,
      data,
      localizacao,
      horarioEvento,
      link,
      id,
      admin
    } = this.state;
    let dataV = data.split("-");
    let horarioV = horarioEvento.split(":");
    let newDate = new Date(
      dataV[0],
      dataV[1] - 1,
      dataV[2],
      horarioV[0],
      horarioV[1]
    ).getTime();

    api.get(`/evento/${event.id}`).then(event => {
      if (
        !(
          nome !== "" &&
          descricao !== "" &&
          admin !== "" &&
          data !== "" &&
          localizacao !== "" &&
          link !== ""
        )
      ) {
        this.setState({
          error: "Preencha todos os campos!",
          smShow: id
        });
      } else {
        try {
          api
            .patch(
              `/evento/${id}`,
              {
                nome: nome,
                descricao: descricao,
                data: newDate,
                localizacao: localizacao,
                link: link,
                admin: admin.id
              },
              
            )
            .then(res =>
              api.get('/evento?where={"deletedAt":0}').then(res => {
                const events = res.data;
                this.setState({
                  ...this.state,
                  eventos: events,
                  editShow: false
                });
              })
            )
            .catch(error => {
              this.setState({
                smShow: event.nome,
                error: "Houve um problema com a edição, tente novamente"
              });
            });
        } catch (err) {
          this.setState({
            smShow: event.nome,
            error: "Houve um problema com a edição, tente novamente"
          });
        }
      }
    });
  }
  handleClose() {
    this.setState({
      closeShow: false,
      smShow: false
    });
  }
  handleClick(event) {
    this.setState({
      closeShow: event.nome,
      error: `Ao confirmar a evento ${event.nome} será deletada`
    });
  }
  handleClose2() {
    this.setState({
      editShow: false
    });
  }
  handleClick2(event) {
    let newDate = `${new Date(event.data).getFullYear()}-0${new Date(
      event.data
    ).getMonth() + 1}-${new Date(event.data).getDate()}`;

    let newTime = `${new Date(event.data).getHours()}:${new Date(
      event.data
    ).getMinutes()}`;
    this.setState({
      ...this.state,
      editShow: event.nome,
      id: event.id,
      nome: event.nome,
      descricao: event.descricao,
      admin: event.admin,
      data: newDate,
      horarioEvento: newTime,
      localizacao: event.localizacao,
      link: event.link
    });
  }
  deleteUnidade(event) {
    api.delete(`/evento/${event.id}`).then(resp =>
      api.get('/evento?where={"deletedAt":0}').then(res => {
        const events = res.data;
        this.setState({
          ...this.state,
          eventos: events,
          closeShow: false
        });
      })
    );
  }
  handleChangeEditor(html) {
    this.setState({ descricao: html });
  }

  render() {
    let smClose = () => this.setState({ smShow: false });
    let deleteClose = () => this.setState({ closeShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderEvent = () => {
      return this.state.eventos.map((event, number) => (
        <Col key={number} lg="3" md="6" sm="12" className="mb-4">
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image"
              style={{ backgroundImage: `url(${event.img})` }}
            >
              <div
                pill
                className={`card-post__category bg-danger iconDelete`}
                onClick={() => this.handleClick(event)}
              >
                <i className={`fas fa-times iconDelete`} />
              </div>

              <div
                pill
                className={`card-post__category bg-primary mr-5 iconDelete`}
                onClick={() => this.handleClick2(event)}
              >
                <i className={`fas fa-pen iconDelete`} />
              </div>
            </div>
            <CardBody>
              <h4 className="card-title mb-1">
                <p className="text-fiord-blue">{event.nome}</p>
              </h4>
              <h5 className="card-title d-block mb-1  ">Descrição:</h5>
              <p
                className="card-text d-block mb-2"
                dangerouslySetInnerHTML={{ __html: event.descricao }}
              />
              <h5 className="card-title d-block mb-1  ">Link</h5>
              <p className="card-text d-block mb-2">{event.link}</p>
              {event.localizacao !== "" ? (
                <div>
                  <h5 className="card-title d-block mb-1 ">Data do evento:</h5>
                  <p className="card-text d-block mb-2 ">{`${
                    months[new Date(event.data).getMonth()]
                  } ${new Date(event.data).getDate()}, ${new Date(
                    event.data
                  ).getFullYear()}`}</p>
                  <h5 className="card-title d-block mb-1  ">
                    Horário do evento:
                  </h5>
                  <p className="card-text d-block mb-2">{`${new Date(
                    event.data
                  ).getHours()}:${new Date(event.data).getMinutes()}`}</p>
                  <h5 className="card-title d-block mb-1  ">
                    Localização do evento
                  </h5>
                  <p className="card-text d-block mb-2">{event.localizacao}</p>
                </div>
              ) : (
                <div>
                  <h5 className="card-title d-block mb-1 ">Data de publicação:</h5>
                  <p className="card-text d-block mb-2 ">{`${
                    months[new Date(event.data).getMonth()]
                  } ${new Date(event.data).getDate()}, ${new Date(
                    event.data
                  ).getFullYear()}`}</p>
                </div>
              )}
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === event.nome}
            onHide={editClose}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Editar Evento
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form>
                        <Row form>
                          <Col md="12" className="form-group">
                            <strong className="text-muted d-block mb-2">
                              Nome
                            </strong>
                            <FormInput
                              value={this.state.nome}
                              onChange={e =>
                                this.setState({ nome: e.target.value })
                              }
                              id="feName"
                              type="name"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <FormGroup>
                              <strong className="text-muted d-block mb-2">
                                Descrição
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
                              onChange={e =>
                                this.setState({ link: e.target.value })
                              }
                              id="feName"
                              type="name"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <label htmlFor="feDataInicio">Data do evento</label>
                            <FormInput
                              value={this.state.data}
                              onChange={e =>
                                this.setState({ data: e.target.value })
                              }
                              id="feCustoMedio"
                              type="date"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <label htmlFor="feDataInicio">
                              Horário do evento
                            </label>
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
                              Local do evento
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
                            Imagem do evento
                          </strong>
                          <CustomFileUpload />
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={this.handleClose2.bind(this)}
              >
                Close
              </Button>
              <Button variant="danger" onClick={() => this.editCity(event)}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.closeShow === event.nome}
            onHide={deleteClose}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Você tem certeza?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.state.error}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={() => this.deleteUnidade(event)}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      ));
    };
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Visualizar Eventos"
            subtitle="Eventos"
            className="text-sm-left"
          />
        </Row>
        <Row>{renderEvent()}</Row>
      </Container>
    );
  }
}

export default Events;
