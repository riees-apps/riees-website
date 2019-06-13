/* eslint jsx-a11y/anchor-is-valid: 0 */

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
  Badge
} from "shards-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../assets/quill.css";

import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import ufes from "../../Institutes/imgs/ufes.jpg";
import uvv from "../../Institutes/imgs/uvv.jpg";
import ifes from "../../Institutes/imgs/ifes.jpg";
import ucl from "../../Institutes/imgs/ucl.jpg";

import PageTitle from "../components/common/PageTitle";

var events = [
  {
    title: "Dossalore ipsum Dolore nihil in velit lorem ipsum valor2.",
    dateEvent: "Dec 06, 2019",
    timeEvent: "4:30 PM",
    placeEvent: "Lorem ipsum",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",

    img: uvv
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit lorem ipsum valor3.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit  lorem ipsum valor4.",
    dateEvent: "Dec 06, 2019",
    timeEvent: "4:30 PM",
    placeEvent: "Lorem ipsum",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil velit lorem ipsum valor5.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit lorem ipsum valor6.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit lorem ipsum valor7.",
    dateEvent: "Dec 06, 2019",
    timeEvent: "4:30 PM",
    placeEvent: "Lorem ipsum",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in veli lorem ipsum valort8.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit9.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.18",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil in velit lorem ipsum valor1.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dossalore ipsum Dolore nihil in velit2.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit3.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit4.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihil  velit5.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit6.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit7.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit8.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit27.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.36",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.37",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  }
];

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class Events extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false,
      editShow: "",
      title: "",
      text: "",
      date: "",
      dateEvent: "",
      timeEvent: "",
      placeEvent: ""
    };
  }
  editEvent(event, number) {
    console.log(this.state.dateEvent)
    event = {
      title: this.state.title,
      text:  event.text,
      date: this.state.date || '',
      dateEvent: this.state.dateEvent || '',
      timeEvent: this.state.timeEvent || '',
      placeEvent: this.state.placeEvent || '',
      img: event.img
    };
    events[number] = event;
    this.setState({
      ...this.state,
      editShow: "",
      title: "",
      text: "",
      date: "",
      dateEvent: "",
      timeEvent: "",
      placeEvent: ""
    });
  }
  handleClose() {
    this.setState({
      smShow: false
    });
  }
  handleClick(event) {
    this.setState({
      smShow: event.title,
      error: `Ao confirmar o evento ${event.title} será deletada`
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
      editShow: event.title,
      title: event.title,
      date: event.date,
      dateEvent: event.dateEvent,
      timeEvent: event.timeEvent,
      placeEvent: event.placeEvent
    });
  }
  deleteEvent(event) {
    events = arrayRemove(events, event);
    this.setState({
      ...this.state,
      smShow: false
    });
  }
  render() {
    let smClose = () => this.setState({ smShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderCity = () => {
      return events.map((event, number) => (
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
              <Badge className="mb-2">
                {typeof event.dateEvent !== "undefined" ? event.dateEvent !== '' ? "Event" : "New" : "New"}
              </Badge>
              <h5 className="card-title mb-1">
                <p className="text-fiord-blue">{event.title}</p>
              </h5>

              <p className="text-fiord-blue">
                {" "}
                <i className={`fas fa-clock iconDate`} />{" "}
                {typeof event.dateEvent !== "undefined"
                  ? event.dateEvent !== '' ?
                  event.dateEvent : event.date : event.date}
              </p>

              <p className="text-fiord-blue">
                {" "}
                <i
                  className={
                    typeof event.timeEvent !== "undefined" ?
                      event.timeEvent !== '' ?
                      `fas fa-calendar iconDate`
                      : "displayNone" : "displayNone"
                  }
                />{" "}
                {event.timeEvent}{" "}
              </p>

              <p className="text-fiord-blue">
                {" "}
                <i
                  className={
                    typeof event.placeEvent !== "undefined" ?
                    event.placeEvent !== '' ?
                      `fas fa-map-marker-alt iconDate`
                      : "displayNone" : "displayNone"
                  }
                />{" "}
                {event.placeEvent}{" "}
              </p>
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === event.title}
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
                            <label htmlFor="feName">Título</label>
                            <FormInput
                              value={this.state.title}
                              onChange={e =>
                                this.setState({ title: e.target.value })
                              }
                              id="feName"
                              type="name"
                            />
                          </Col>
                        </Row>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Imagem
                          </strong>
                          <CustomFileUpload />
                        </FormGroup>
                        <Row form>
                          <Col md="12" className="form-group">
                            <label htmlFor="feName">Data do evento</label>
                            <FormInput
                              value={this.state.dateEvent}
                              onChange={e =>
                                this.setState({ dateEvent: e.target.value })
                              }
                              id="feName"
                              type="date"
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="12" className="form-group">
                            <label htmlFor="feName">Horario do evento</label>
                            <FormInput
                              value={this.state.timeEvent}
                              onChange={e =>
                                this.setState({ timeEvent: e.target.value })
                              }
                              id="feName"
                              type="time"
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="12" className="form-group">
                            <label htmlFor="feName">Local do Evento</label>
                            <FormInput
                              value={this.state.placeEvent}
                              onChange={e =>
                                this.setState({ placeEvent: e.target.value })
                              }
                              id="feName"
                              type="name"
                            />
                          </Col>
                        </Row>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Conteudo
                          </strong>
                          <ReactQuill
                            size="false"
                            className="add-new-post__editor mb-1"
                          />
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={() => this.editEvent(event, number)}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.smShow === event.title}
            onHide={smClose}
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
              <Button variant="danger" onClick={() => this.deleteEvent(event)}>
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
        <Row>{renderCity()}</Row>
      </Container>
    );
  }
}

export default Events;
