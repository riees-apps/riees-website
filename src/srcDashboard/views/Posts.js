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

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class Posts extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      closeShow: false,
      smShow: false,
      editShow: false,
      postagens: [],
      titulo: "",
      data: "",
      conteudo: "",
      resumo: "",
      admin: "5d1a1daaaf9fc5001737e7af"
    };
  }

  componentWillMount() {
    api.get('/postagem?where={"deletedAt":0}').then(res => {
      const posts = res.data;
      this.setState({ postagens: posts });
    });
  }
  editPost(post) {
    const { titulo, resumo, data, conteudo, admin } = this.state;
    api.get(`/postagem/${post.id}`).then(post => {
      if (
        !(
          titulo !== "" &&
          resumo !== "" &&
          admin !== "" &&
          data !== "" &&
          conteudo !== ""
        )
      ) {
        this.setState({
          error: "Preencha todos os campos!",
          smShow: titulo
        });
      } else {
        try {
          api
            .patch(
              `/postagem/${post.id}`,
              {
                titulo: titulo,
                resumo: resumo,
                data: data,
                conteudo: conteudo,
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
                smShow: post.titulo,
                error: "Houve um problema com a edição, tente novamente1"
              });
            });
        } catch (err) {
          this.setState({
            smShow: post.titulo,
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
  handleClick(post) {
    this.setState({
      closeShow: post.titulo,
      error: `Ao confirmar a postagem ${post.titulo} será deletada`
    });
  }
  handleClose2() {
    this.setState({
      editShow: false
    });
  }
  handleClick2(post) {
    this.setState({
      ...this.state,
      editShow: post.titulo,
      titulo: post.titulo,
      resumo: post.resumo,
      admin: post.admin,
      data: post.data,
      conteudo: post.conteudo
    });
  }
  deleteUnidade(post) {
    api.delete(`/postagem/${post.id}`).then(resp => console.log(resp));
    api.get('/postagem?where={"deletedAt":0}').then(res => {
      const posts = res.data;
      this.setState({
        ...this.state,
        postagens: posts,
        closeShow: false
      });
    });
  }
  render() {
    let smClose = () => this.setState({ smShow: false });
    let deleteClose = () => this.setState({ closeShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderPost = () => {
      return this.state.postagens.map((post, number) => (
        <Col key={number} lg="3" md="6" sm="12" className="mb-4">
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image"
              style={{ backgroundImage: `url(${post.img})` }}
            >
              <div
                pill
                className={`card-post__category bg-danger iconDelete`}
                onClick={() => this.handleClick(post)}
              >
                <i className={`fas fa-times iconDelete`} />
              </div>

              <div
                pill
                className={`card-post__category bg-primary mr-5 iconDelete`}
                onClick={() => this.handleClick2(post)}
              >
                <i className={`fas fa-pen iconDelete`} />
              </div>
            </div>
            <CardBody>
              <h4 className="card-title mb-1">
                <p className="text-fiord-blue">{post.titulo}</p>
              </h4>
              <h5 className="card-title d-block mb-1  ">Resumo</h5>
              <p className="card-text d-block mb-2">{post.resumo}</p>
              <h5 className="card-title d-block mb-1  ">Conteudo</h5>
              <p className="card-text d-block mb-2">{post.conteudo}</p>
              <h5 className="card-title d-block mb-1  ">Data de postagem:</h5>
              <p className="card-text d-block mb-2">{post.data}</p>
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === post.titulo}
            onHide={editClose}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Editar Postagem
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
                            <label htmlFor="feName">Titulo</label>
                            <FormInput
                              value={this.state.titulo}
                              onChange={e =>
                                this.setState({ titulo: e.target.value })
                              }
                              id="feName"
                              type="name"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <label htmlFor="feCompleteName">Resumo</label>
                            <FormTextarea
                              value={this.state.resumo}
                              id="feDescription"
                              onChange={e =>
                                this.setState({ resumo: e.target.value })
                              }
                              rows="5"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <label htmlFor="feConteudo">
                              Conteudo
                            </label>
                            <FormTextarea
                              value={this.state.conteudo}
                              id="feConteudo"
                              onChange={e =>
                                this.setState({ conteudo: e.target.value })
                              }
                              rows="5"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <label htmlFor="feDataInicio">Data da postagem</label>
                            <FormInput
                              value={this.state.data}
                              onChange={e =>
                                this.setState({ data: e.target.value })
                              }
                              id="feCustoMedio"
                              type="number"
                            />
                          </Col>
                        </Row>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Imagem da postagem
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
              <Button variant="danger" onClick={() => this.editPost(post)}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.closeShow === post.titulo}
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
                onClick={() => this.deleteUnidade(post)}
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
            title="Visualizar Postagens"
            subtitle="Postagens"
            className="text-sm-left"
          />
        </Row>
        <Row>{renderPost()}</Row>
      </Container>
    );
  }
}

export default Posts;
