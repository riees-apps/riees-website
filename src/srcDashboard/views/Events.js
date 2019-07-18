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
  FormGroup,
  FormTextarea
} from "shards-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../assets/quill.css";

import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import api from "../../api/api";
import vitoria from "../../components/Events/imgs/vitoria.jpg";
import vilaVelha from "../../components/Events/imgs/vilavelha.jpg";
import img1 from "../../components/Events/imgs/img1.jpg";
import img2 from "../../components/Events/imgs/img2.jpg";

import PageTitle from "../components/common/PageTitle";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class Events extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      closeShow: false,
      smShow: false,
      editShow: false,
      eventos: [],
      nome: "",
      dataInicio: "",
      dataFim: "",
      descricao: "",
      link: "",
      capa: null,
      admin: "5d1a1daaaf9fc5001737e7af"
    };
  }

  componentWillMount() {
    api.get('/evento?where={"deletedAt":0}').then(res => {
      const events = res.data;
      this.setState({ eventos: events });
    });
  }
  editCity(event) {
    const { nome, descricao, dataInicio, dataFim, link, admin } = this.state;
    api.get(`/evento/${event.id}`).then(event => {
      if (
        !(
          nome !== "" &&
          descricao !== "" &&
          admin !== "" &&
          dataInicio !== "" &&
          dataFim !== "" &&
          link !== ""
        )
      ) {
        this.setState({
          error: "Preencha todos os campos!",
          smShow: nome
        });
      } else {
        try {
          api
            .patch(
              `/evento/${event.id}`,
              {
                nome: nome,
                descricao: descricao,
                dataInicio: dataInicio,
                dataFim: dataFim,
                link: link,
                admin: admin.id
              },
              { headers: { "Access-Control-Allow-Origin": "*" } }
            )
            .then(response => {
              this.setState({
                editShow: false
              });
            })
            .catch(error => {
              this.setState({
                smShow: event.nome,
                error: "Houve um problema com a edição, tente novamente1"
              });
            });
        } catch (err) {
          this.setState({
            smShow: event.nome,
            error: "Houve um problema com a edição, tente novamente2"
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
    this.setState({
      ...this.state,
      editShow: event.nome,
      nome: event.nome,
      descricao: event.descricao,
      admin: event.admin,
      dataInicio: event.dataInicio,
      dataFim: event.dataFim,
      link: event.link
    });
  }
  deleteUnidade(event) {
    api.delete(`/evento/${event.id}`).then(resp => console.log(resp));
    api.get('/evento?where={"deletedAt":0}').then(res => {
      const events = res.data;
      this.setState({
        ...this.state,
        eventos: events,
        closeShow: false
      });
    });
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
              <p className="card-text d-block mb-2">{event.descricao}</p>
              <h5 className="card-title d-block mb-1  ">Link</h5>
              <p className="card-text d-block mb-2">{event.link}</p>
              <h5 className="card-title d-block mb-1  ">Data de inicio:</h5>
              <p className="card-text d-block mb-2">{event.dataInicio}</p>
              <h5 className="card-title d-block mb-1  ">Data de inicio:</h5>
              <p className="card-text d-block mb-2">{event.dataFim}</p>
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
                            <label htmlFor="feName">Nome</label>
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
                            <label htmlFor="feCompleteName">Descrição</label>
                            <FormTextarea
                              value={this.state.descricao}
                              id="feDescription"
                              onChange={e =>
                                this.setState({ descricao: e.target.value })
                              }
                              rows="5"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <label htmlFor="feCompleteName">
                              Link do evento
                            </label>
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
                            <label htmlFor="feDataInicio">Data de Inicio</label>
                            <FormInput
                              value={this.state.dataInicio}
                              onChange={e =>
                                this.setState({ dataInicio: e.target.value })
                              }
                              id="feCustoMedio"
                              type="number"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <label htmlFor="feDataFim">Data de Fim</label>
                            <FormInput
                              value={this.state.dataFim}
                              onChange={e =>
                                this.setState({ dataFim: e.target.value })
                              }
                              id="feCustoMedio"
                              type="number"
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
              <Button variant="secondary" onClick={this.handleClose2.bind(this)}>
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
