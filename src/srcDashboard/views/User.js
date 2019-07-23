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

import PageTitle from "../components/common/PageTitle";

import { FaUser } from "react-icons/fa";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class Users extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      closeShow: false,
      smShow: false,
      editShow: false,
      usuarios: [],
      id: "",
      nome: "",
      email: "",
      senha: "",
      senha2: ""
    };
  }
  componentWillMount() {
    api.get('/admin?where={"deletedAt":0}').then(res => {
      const admins = res.data;
      this.setState({ usuarios: admins });
    });
  }
  editUser(user) {
    const { nome, email, senha, senha2, id } = this.state;
    api.get(`/admin/${user.id}`).then(user => {
      if (!(nome !== "" && email !== "" && senha !== ""))
        this.setState({
          error: "Preencha todos os campos!",
          smShow: nome
        });
      else if (!(senha === senha2))
        this.setState({
          error: "Confirme corretamente sua senha",
          smShow: nome
        });
      else {
        try {
          api
            .patch(
              `/admin/${id}`,
              {
                nome: nome,
                email: email,
                senha: senha
              },
              { headers: { "Access-Control-Allow-Origin": "*" } }
            )
            .then(res =>
              api.get('/admin?where={"deletedAt":0}').then(res => {
                const admins = res.data;
                this.setState({
                  ...this.state,
                  usuarios: admins,
                  editShow: false
                });
              })
            )
            .catch(error => {
              this.setState({
                smShow: user.nome,
                error: "Houve um problema com a edição, tente novamente1"
              });
            });
        } catch (err) {
          this.setState({
            smShow: user.nome,
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
  handleClick(user) {
    this.setState({
      closeShow: user.nome,
      error: `Ao confirmar a usero ${user.nome} será deletada`
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
      editShow: user.nome,
      id: user.id,
      nome: user.nome,
      email: user.email,
      senha: "",
      senha2: ""
    });
  }
  deleteUnidade(user) {
    api.delete(`/admin/${user.id}`).then(resp =>
      api.get('/admin?where={"deletedAt":0}').then(res => {
        const users = res.data;
        this.setState({
          ...this.state,
          usuarios: users,
          closeShow: false
        });
      })
    );
  }
  render() {
    let smClose = () => this.setState({ smShow: false });
    let deleteClose = () => this.setState({ closeShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderUser = () => {
      return this.state.usuarios.map((user, number) => (
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
              <h5 className="card-nome mb-1 ml-auto mr-auto">
                <strong>Usuario: </strong>
                <p className="text-fiord-blue">{user.nome}</p>
              </h5>

              <h5 className="card-nome mb-1 ml-auto mr-auto">
                <strong>Email: </strong>
                <p className="text-fiord-blue">{user.email}</p>
              </h5>
              <h5 className="card-nome mb-1 ml-auto mr-auto">
                <strong>Senha: </strong>
                <p className="text-fiord-blue">{user.senha}</p>
              </h5>
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === user.nome}
            onHide={editClose}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-nome"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-nome">
                Editar Usuario
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
                              value={this.state.nome}
                              onChange={e =>
                                this.setState({ nome: e.target.value })
                              }
                              id="feName"
                              type="nome"
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
                            <label htmlFor="fePassword">Senha</label>
                            <FormInput
                              value={this.state.senha}
                              onChange={e =>
                                this.setState({ senha: e.target.value })
                              }
                              id="fePassword"
                              type="password"
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="12" className="form-group">
                            <label htmlFor="fePassword">Confirme a senha</label>
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
              <Button variant="danger" onClick={() => this.editUser(user)}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.closeShow === user.nome}
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
              <Button variant="danger" onClick={() => this.deleteUnidade(user)}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            size="sm"
            show={this.state.smShow}
            onHide={smClose}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                {this.state.error === "Postagem adicionada com sucesso!"
                  ? "Sucesso!"
                  : "Erro!"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.state.error}</Modal.Body>
          </Modal>
        </Col>
      ));
    };
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            nome="Visualizar Usuarios"
            subnome="Usuarios"
            className="text-sm-left"
          />
        </Row>
        <Row>{renderUser()}</Row>
      </Container>
    );
  }
}

export default Users;
