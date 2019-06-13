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

import PageTitle from "../components/common/PageTitle";
import { FaUser } from "react-icons/fa";

var users = [
  {
    name: "admin1",
    email: "example@gmail.com",
    password: "minhasenha123"
  },
  {
    name: "admin2",
    email: "example@hotmail.com",
    password: "minhasenha123"
  },
  {
    name: "admin3",
    email: "example@outlook.com",
    password: "minhasenha123"
  }
];

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class Users extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false,
      editShow: "",
      name: "",
      email: "",
      password: ""
    };
  }
  editEvent(user, number) {
    console.log(this.state.dateEvent);
    user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    users[number] = user;
    this.setState({
      ...this.state,
      email: "",
      name: "",
      password: ""
    });
  }
  handleClose() {
    this.setState({
      smShow: false
    });
  }
  handleClick(user) {
    this.setState({
      smShow: user.name,
      error: `Ao confirmar o usuario ${user.name} será deletado`
    });
  }
  handleClose2() {
    this.setState({
      editShow: false
    });
  }
  handleClick2(user) {
    this.setState({
      ...this.state,
      editShow: user.name,
      name: user.name,
      email: user.email,
      password: user.password
    });
  }
  deleteEvent(user) {
    users = arrayRemove(users, user);
    this.setState({
      ...this.state,
      smShow: false
    });
  }
  render() {
    let smClose = () => this.setState({ smShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderCity = () => {
      return users.map((user, number) => (
        <Col key={number} lg="4" md="6" sm="12" className="mb-4">
          <Card small className="card-post card-post--1">
            <div>
              <div
                pill
                className={`card-post__editor bg-primary ml-3 mt-3 iconDelete`}
                onClick={() => this.handleClick2(user)}
              >
                <i className={`fas fa-pen iconDelete`} />
              </div>
              <div
                pill
                className={`card-post__category bg-danger iconDelete`}
                onClick={() => this.handleClick(user)}
              >
                <i className={`fas fa-times iconDelete`} />
              </div>
              <div class="login-form-avatar ml-auto mr-auto">
                <FaUser />
              </div>
            </div>
            <CardBody>
              <h5 className="card-name mb-1 ml-auto mr-auto">
                <strong>Username: </strong>
                <p className="text-fiord-blue">{user.name}</p>
              </h5>

              <h5 className="card-name mb-1 ml-auto mr-auto">
                <strong>Email: </strong>
                <p className="text-fiord-blue">{user.email}</p>
              </h5>
              <h5 className="card-name mb-1 ml-auto mr-auto">
                <strong>Password: </strong>
                <p className="text-fiord-blue">{user.password}</p>
              </h5>
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === user.name}
            onHide={editClose}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-name"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-name">
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
                            <label htmlFor="feName">Nome de usuario</label>
                            <FormInput
                              value={this.state.name}
                              onChange={e =>
                                this.setState({ name: e.target.value })
                              }
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
                              onChange={e =>
                                this.setState({ email: e.target.value })
                              }
                              id="feName"
                              type="email"
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="12" className="form-group">
                            <label htmlFor="feName">Senha</label>
                            <FormInput
                              value={this.state.password}
                              onChange={e =>
                                this.setState({ password: e.target.value })
                              }
                              id="feName"
                              type="password"
                            />
                          </Col>
                        </Row>
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
                onClick={() => this.editEvent(user, number)}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.smShow === user.name}
            onHide={smClose}
            aria-labelledby="example-modal-sizes-name-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-name-sm">
                Você tem certeza?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.state.error}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                Close
              </Button>
              <Button variant="danger" onClick={() => this.deleteEvent(user)}>
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
            name="Visualizar Eventos"
            subname="Eventos"
            className="text-sm-left"
          />
        </Row>
        <Row>{renderCity()}</Row>
      </Container>
    );
  }
}

export default Users;
