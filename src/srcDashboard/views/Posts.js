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
import Editor from "../components/components-overview/editor";
import "./index.css"

import PageTitle from "../components/common/PageTitle";

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
      id: "",
      postagens: [],
      titulo: "",
      data: "",
      conteudo: "",
      resumo: "",
      tag: "",
      tags: [],
      admin: "5d1a1daaaf9fc5001737e7af"
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
  }
  adicionaTag() {
    var pf = this.state.tags;
    if (this.state.tag !== "") {
      pf.push(this.state.tag);
      this.setState({ ...this.state, tags: pf, tag: "" });
    } else this.setState({ ...this.state, tag: "" });
  }
  deletaTag(tag) {
    var pf = arrayRemove(this.state.tags, tag);
    this.setState({ ...this.state, tags: pf });
  }

  componentWillMount() {
    api.get('/postagem?where={"deletedAt":0}').then(res => {
      const posts = res.data;
      this.setState({ postagens: posts });
      console.log(this.state.postagens)
    });
  }
  editPost(post) {
    const { titulo, resumo, data, conteudo, admin, tags, id } = this.state;
    let dataV = data.split("-");
    let newDate = new Date(dataV[0], dataV[1] - 1, dataV[2]).getTime();
    api.get(`/postagem/${post.id}`).then(post => {
      if (
        !(
          titulo !== "" &&
          resumo !== "" &&
          admin !== "" &&
          data !== "" &&
          tags.length !== 0 &&
          conteudo !== ""
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
              `/postagem/${id}`,
              {
                titulo: titulo,
                resumo: resumo,
                data: newDate,
                conteudo: conteudo,
                tags: tags,
                admin: admin.id
              },
              
            )
            .then(res =>
              api.get('/postagem?where={"deletedAt":0}').then(res => {
                const posts = res.data;
                this.setState({
                  ...this.state,
                  postagens: posts,
                  editShow: false
                });
              })
            )
            .catch(error => {
              this.setState({
                smShow: post.id,
                error: "Houve um problema com a edição, tente novamente"
              });
            });
        } catch (err) {
          this.setState({
            smShow: post.titulo,
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
    let newDate = `${new Date(post.data).getFullYear()}-0${new Date(
      post.data
    ).getMonth() + 1}-${new Date(post.data).getDate()}`;

    this.setState({
      ...this.state,
      editShow: post.titulo,
      id: post.id,
      titulo: post.titulo,
      resumo: post.resumo,
      admin: post.admin,
      data: newDate,
      tags: post.tags,
      conteudo: post.conteudo
    });
  }
  deleteUnidade(post) {
    api.delete(`/postagem/${post.id}`).then(resp =>
      api.get('/postagem?where={"deletedAt":0}').then(res => {
        const posts = res.data;
        this.setState({
          ...this.state,
          postagens: posts,
          closeShow: false
        });
      })
    );
  }
  handleChangeEditor(html) {
    this.setState({ conteudo: html });
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
              <div className="InnerHTML" dangerouslySetInnerHTML={{ __html: post.conteudo }}/>
              <h5 className="card-title d-block mb-1  ">Tags:</h5>
              <ul className="px-4">
                {post.tags.map(tag => (
                  <li className="mb-1">{tag}</li>
                ))}
              </ul>
              <h5 className="card-title d-block mb-1  ">Data de postagem:</h5>
              <p className="card-text d-block mb-2">{`${
                months[new Date(post.data).getMonth()]
              } ${new Date(post.data).getDate()}, ${new Date(
                post.data
              ).getFullYear()}`}</p>
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
                            <label htmlFor="feResumo">Resumo</label>
                            <FormTextarea
                              value={this.state.resumo}
                              onChange={e =>
                                this.setState({ resumo: e.target.value })
                              }
                              id="feResumo"
                              rows="5"
                            />
                          </Col>
                          <Col className="mb-3" md="12">
                            <FormGroup>
                              <strong className="text-muted d-block mb-2">
                                Conteudo
                              </strong>
                              <ReactQuill
                                onChange={this.handleChangeEditor}
                                value={this.state.conteudo}
                                modules={Editor.modules}
                                className="add-new-post__editor mb-1"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="mb-2" md="12">
                            <strong className="text-muted d-block mb-2">
                              Tags
                            </strong>

                            <Row form>
                              <Col md="11" className="form-group">
                                <FormInput
                                  value={this.state.tag}
                                  onChange={e =>
                                    this.setState({ tag: e.target.value })
                                  }
                                  id="fetags"
                                  type="name"
                                />
                              </Col>
                              <Col md="1">
                                <div
                                  style={{ marginLeft: "auto" }}
                                  pill
                                  className={`card-post__category bg-primary iconDelete`}
                                  onClick={() => this.adicionaTag()}
                                >
                                  <i className={`fas fa-plus`} />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="12">
                                <ul>
                                  {this.state.tags.map(tag => (
                                    <Row lg="12">
                                      <Col lg="11">
                                        <li className="mb-4">{tag}</li>
                                      </Col>
                                      <Col lg="1">
                                        <div
                                          style={{ marginLeft: "auto" }}
                                          pill
                                          className={`card-post__category bg-danger iconDelete`}
                                          onClick={() => this.deletaTag(tag)}
                                        >
                                          <i className={`fas fa-times`} />
                                        </div>
                                      </Col>
                                    </Row>
                                  ))}
                                </ul>
                              </Col>
                            </Row>
                          </Col>

                          <Col className="mb-3" md="12">
                            <label htmlFor="feDataInicio">Data</label>
                            <FormInput
                              value={this.state.data}
                              onChange={e =>
                                this.setState({ data: e.target.value })
                              }
                              id="feCustoMedio"
                              type="date"
                            />
                          </Col>
                        </Row>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Imagem do postagem
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
              <Button variant="danger" onClick={() => this.deleteUnidade(post)}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            size="sm"
            show={this.state.smShow === post.id}
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
