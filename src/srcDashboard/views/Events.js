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
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
class Events extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      imgs: [],
      closeShow: false,
      smShow: false,
      editShow: false,
      eventos: [],
      nome: "",
      data: "",
      dataFim: "",
      localizacao: "",
      descricao: "",
      horarioEvento: "",
      link: "",
      img: null,
      capa: null,
      admin: "5d1a1daaaf9fc5001737e7af"
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
  }

  componentDidMount() {
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
      dataFim,
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
    let dataFimV = dataFim.split("-");
    let newDateFim = new Date(
      dataFimV[0],
      dataFimV[1] - 1,
      dataFimV[2]
    ).getTime();
    api.get(`/evento/${event.id}`).then(event => {
      if (
        !(
          nome !== "" &&
          descricao !== "" &&
          admin !== "" &&
          data !== "" &&
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
            .post("/bucket", this.state.img, {
              headers: {
                "content-type": this.state.img.type,
                filename: this.state.img.name
              }
            })
            .then(res => {
              api
                .patch(`/evento/${id}`, {
                  nome: nome,
                  descricao: descricao,
                  dataInicio: newDate,
                  dataFim: isNaN(newDateFim) ? 0 : newDateFim,
                  localizacao: localizacao,
                  link: link,
                  capa:
                    typeof this.state.img.type !== "undefined"
                      ? res.data._id
                      : this.state.img,
                  admin: admin.id
                })
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
    let newDate = `${new Date(event.dataInicio).getFullYear()}-${addZero(
      new Date(event.dataInicio).getMonth() + 1
    )}-${addZero(new Date(event.dataInicio).getDate())}`;

    let newTime = `${addZero(new Date(event.dataInicio).getHours())}:${addZero(
      new Date(event.dataInicio).getMinutes()
    )}`;
    var newDateFim;
    if (event.dataFim !== 0) {
      newDateFim = `${new Date(event.dataFim).getFullYear()}-${addZero(
        new Date(event.dataFim).getMonth() + 1
      )}-${addZero(new Date(event.dataFim).getDate())}`;
    } else newDateFim = "";
    console.log(newDateFim);
    console.log(newDate);
    this.setState({
      ...this.state,
      editShow: event.nome,
      id: event.id,
      img:event.capa,
      nome: event.nome,
      descricao: event.descricao,
      admin: event.admin,
      data: newDate,
      dataFim: newDateFim,
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
              style={{
                backgroundImage: `url('https://riees-api.herokuapp.com/bucket/${
                  event.capa !== null ? event.capa : ""
                }'`
              }}
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
                    months[new Date(event.dataInicio).getMonth()]
                  } ${new Date(event.dataInicio).getDate()}, ${new Date(
                    event.dataInicio
                  ).getFullYear()}`}</p>

                  <h5
                    className={
                      event.dataFim === 0
                        ? "displayNone"
                        : "card-title d-block mb-1"
                    }
                  >
                    Data do fim do evento:
                  </h5>
                  <p
                    className={
                      event.dataFim === 0
                        ? "displayNone"
                        : "card-text d-block mb-2 "
                    }
                  >
                    {" "}
                    {`${months[new Date(event.dataFim).getMonth()]} ${new Date(
                      event.dataFim
                    ).getDate()}, ${new Date(event.dataFim).getFullYear()}`}
                  </p>

                  <h5 className="card-title d-block mb-1  ">
                    Horário do evento:
                  </h5>
                  <p className="card-text d-block mb-2">{`${new Date(
                    event.dataInicio
                  ).getHours()}:${new Date(event.dataInicio).getMinutes()}`}</p>

                  <h5 className="card-title d-block mb-1  ">
                    Localização do evento
                  </h5>
                  <p className="card-text d-block mb-2">{event.localizacao}</p>
                </div>
              ) : (
                <div>
                  <h5 className="card-title d-block mb-1 ">
                    Data de publicação:
                  </h5>
                  <p className="card-text d-block mb-2 ">{`${
                    months[new Date(event.dataInicio).getMonth()]
                  } ${new Date(event.dataInicio).getDate()}, ${new Date(
                    event.dataInicio
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
                Editar Evento/Noticia
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
                              Nome <strong className="text-danger">*</strong>
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
                                Descrição{" "}
                                <strong className="text-danger">*</strong>
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
                              Link <strong className="text-danger">*</strong>
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
                            <strong className="text-muted d-block mb-2">
                              Data <strong className="text-danger">*</strong>
                            </strong>
                            <FormInput
                              value={this.state.data}
                              onChange={e =>
                                this.setState({ data: e.target.value })
                              }
                              id="feCustoMedio"
                              type="date"
                            />
                          </Col>
                          <Col
                            className={`${
                              this.state.localizacao === ""
                                ? "displayNone"
                                : "mb-3"
                            }`}
                            md="12"
                          >
                            <strong className="text-muted d-block mb-2">
                              Data do fim do evento
                            </strong>
                            <FormInput
                              value={this.state.dataFim}
                              onChange={e =>
                                this.setState({ dataFim: e.target.value })
                              }
                              id="feCustoMedio"
                              type="date"
                            />
                          </Col>
                          <Col
                            className={`${
                              this.state.localizacao === ""
                                ? "displayNone"
                                : "mb-3"
                            }`}
                            md="12"
                          >
                            <label htmlFor="feDataInicio">
                              Horário do evento{" "}
                              <strong className="text-danger">*</strong>
                            </label>
                            <FormInput
                              value={this.state.horarioEvento}
                              onChange={e =>
                                this.setState({
                                  horarioEvento: e.target.value
                                })
                              }
                              id="feCustoMedio"
                              type="time"
                            />
                          </Col>
                          <Col
                            className={`${
                              this.state.localizacao === ""
                                ? "displayNone"
                                : "mb-3"
                            }`}
                            md="12"
                          >
                            <strong className="text-muted d-block mb-2">
                              Local do evento{" "}
                              <strong className="text-danger">*</strong>
                            </strong>
                            <FormInput
                              value={this.state.localizacao}
                              onChange={e =>
                                this.setState({
                                  localizacao: e.target.value
                                })
                              }
                              id="feName"
                              type="name"
                            />
                          </Col>
                        </Row>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Imagem <strong className="text-danger">*</strong>
                          </strong>
                          <input
                            className="inputFile"
                            onChange={e =>
                              this.setState({ img: e.target.files[0] })
                            }
                            type="file"
                          />
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
                Fechar
              </Button>
              <Button variant="danger" onClick={() => this.editCity(event)}>
                Confirmar
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
                Fechar
              </Button>
              <Button
                variant="danger"
                onClick={() => this.deleteUnidade(event)}
              >
                Confirmar
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
            title="Visualizar Noticias & Eventos"
            subtitle="Noticias & Eventos"
            className="text-sm-left"
          />
        </Row>
        <Row>{renderEvent()}</Row>
      </Container>
    );
  }
}

export default Events;
