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

import PageTitle from "../components/common/PageTitle";
import Places from "../components/components-overview/Places";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class Cities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      closeShow: false,
      smShow: false,
      cidades: [],
      editShow: false,
      id: "",
      nome: "",
      custoMedio: "",
      descricao: "",
      pontosTuristicos: [],
      nomePonto: "",
      descricaoPonto: "",
      capa: null,
      logo: null,
      admin: "5d1a1daaaf9fc5001737e7af"
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
    this.handleChangeEditor2 = this.handleChangeEditor2.bind(this);
  }
  handleChangeEditor(html) {
    this.setState({ descricao: html });
  }
  handleChangeEditor2(html) {
    this.setState({ descricaoPonto: html });
  }
  componentWillMount() {
    api.get('/cidade?where={"deletedAt":0}').then(res => {
      const cities = res.data;
      console.log(cities);
      this.setState({ cidades: cities });
    });
  }
  editCity(city) {
    const { nome, descricao, custoMedio, id, admin } = this.state;
    api.get(`/cidade/${city.id}`).then(city => {
      if (
        !(nome !== "" && descricao !== "" && admin !== "" && custoMedio !== "")
      ) {
        this.setState({
          error: "Preencha todos os campos!",
          smShow: id
        });
      } else {
        try {
          api
            .patch(
              `/cidade/${id}`,
              {
                nome: nome,
                descricao: descricao,
                admin: admin.id,
                custoMedio: custoMedio
              },
              { headers: { "Access-Control-Allow-Origin": "*" } }
            )
            .then(res => {
              const idCidade = res.data.id;
              console.log(res.data);
              api.patch(
                `/ponto/${id}`,
                {
                  nome: nome,
                  descricao: descricao,
                  admin: admin.id,
                  custoMedio: custoMedio
                },
                { headers: { "Access-Control-Allow-Origin": "*" } }
              );
            })
            .then(res => {
              api.get('/cidade?where={"deletedAt":0}').then(res => {
                const cities = res.data;
                this.setState({
                  ...this.state,
                  cidades: cities,
                  editShow: false
                });
              });
            })
            .catch(error => {
              this.setState({
                smShow: city.nome,
                error: "Houve um problema com a edição, tente novamente"
              });
            });
        } catch (err) {
          this.setState({
            smShow: city.nome,
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
  handleClick(city) {
    this.setState({
      closeShow: city.nome,
      error: `Ao confirmar a cidade ${city.nome} será deletada`
    });
  }
  handleClose2() {
    this.setState({
      editShow: false
    });
  }
  handleClick2(city) {
    this.setState({
      ...this.state,
      id: city.id,
      editShow: city.nome,
      nome: city.nome,
      descricao: city.descricao,
      admin: city.admin,
      pontosTuristicos: city.pontos,
      custoMedio: city.custoMedio
    });
  }
  deleteUnidade(city) {
    api.delete(`/cidade/${city.id}`).then(resp =>
      api.get('/cidade?where={"deletedAt":0}').then(res => {
        const cities = res.data;
        this.setState({
          ...this.state,
          cidades: cities,
          closeShow: false
        });
      })
    );
  }
  adicionaPonto() {
    var pontos = this.state.pontosTuristicos;
    if (this.state.nomePonto !== "" && this.state.descricaoPonto !== "") {
      var ponto = {
        nomePonto: this.state.nomePonto,
        descricaoPonto: this.state.descricaoPonto,
        admin: this.props.adminId
      };
      pontos.push(ponto);
      this.setState({
        ...this.state,
        pontos: pontos,
        nomePonto: "",
        descricaoPonto: "",
        clear: true
      });
    } else
      this.setState({
        smShow: true,
        error: "Preencha todos os campos"
      });
  }
  deletaPonto(ponto) {
    var pontos = arrayRemove(this.state.pontosTuristicos, ponto);
    this.setState({ ...this.state, pontosTuristicos: pontos });
  }

  render() {
    let smClose = () => this.setState({ smShow: false });
    let deleteClose = () => this.setState({ closeShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderCity = () => {
      return this.state.cidades.map((city, number) => (
        <Col key={number} lg="3" md="6" sm="12" className="mb-4">
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image"
              style={{ backgroundImage: `url(${city.img})` }}
            >
              <div
                pill
                className={`card-post__category bg-danger iconDelete`}
                onClick={() => this.handleClick(city)}
              >
                <i className={`fas fa-times iconDelete`} />
              </div>

              <div
                pill
                className={`card-post__category bg-primary mr-5 iconDelete`}
                onClick={() => this.handleClick2(city)}
              >
                <i className={`fas fa-pen iconDelete`} />
              </div>
            </div>
            <CardBody>
              <h4 className="card-title mb-1">
                <p className="text-fiord-blue">{city.nome}</p>
              </h4>
              <h5 className="card-title d-block mb-1  ">Descrição:</h5>
              <p
                className="card-text d-block mb-2"
                dangerouslySetInnerHTML={{ __html: city.descricao }}
              />
              <h5 className="card-title d-block mb-1  ">Pontos Turisticos:</h5>
              <ul className="pl-4">
                {city.pontos.map(ponto => (
                  <Row lg="12">
                    <Col lg="11">
                      <li className="mb-4">{ponto.nome}</li>
                    </Col>
                  </Row>
                ))}
              </ul>
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === city.nome}
            onHide={editClose}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Editar Cidade
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
                          <Col lg="12" className="form-group">
                            <h5 htmlFor="feCursos">Pontos Turisticos</h5>
                            <p>
                              Preencha os campos abaixo para adicionar um novo
                              ponto turistico a cidade
                            </p>
                          </Col>
                          <Col lg="12" className="form-group">
                            <Row form>
                              <Col md="12" className="form-group">
                                <label htmlFor="feCursos">
                                  Nome do Ponto turistico
                                </label>
                                <FormInput
                                  value={this.state.nomePonto}
                                  onChange={e =>
                                    this.setState({ nomePonto: e.target.value })
                                  }
                                  id="feCursos"
                                  type="name"
                                />
                              </Col>
                              <Col className="mb-3" md="12">
                                <FormGroup>
                                  <strong className="text-muted d-block mb-2">
                                    Descrição do Ponto turistico
                                  </strong>
                                  <FormTextarea
                                    value={this.state.descricaoPonto}
                                    onChange={e =>
                                      this.setState({
                                        descricaoPonto: e.target.value
                                      })
                                    }
                                    id="feResumo"
                                    rows="5"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="2">
                                <label
                                  style={{ color: "transparent" }}
                                  htmlFor="feCursos"
                                >
                                  Deletarsdasdasdasdsad
                                </label>
                                <Button
                                  className="mb-3"
                                  style={{ marginLeft: "auto" }}
                                  onClick={() => this.adicionaPonto()}
                                  theme="primary"
                                >
                                  Adicionar Ponto
                                </Button>
                              </Col>
                              <Col md="12">
                                <ListGroupItem
                                  style={{
                                    borderBottom: "1px solid lightgray",
                                    borderTop: "1px solid lightgray",
                                    minHeight: "10vh"
                                  }}
                                >
                                  {this.state.pontosTuristicos.map(ponto => (
                                    <ListGroupItem>
                                      <Row lg="12">
                                        <Col lg="2">
                                          <p className="text-fiord-blue">
                                            <strong>Nome:</strong>{" "}
                                            {ponto.nomePonto}
                                          </p>
                                        </Col>
                                        <Col lg="9">
                                          <p className="text-fiord-blue">
                                            <strong>Descrição:</strong>{" "}
                                            <div
                                              className="card-text d-block mb-2"
                                              dangerouslySetInnerHTML={{
                                                __html: ponto.descricaoPonto
                                              }}
                                            />
                                          </p>
                                        </Col>
                                        <Col lg="1">
                                          <div
                                            style={{ marginLeft: "auto" }}
                                            pill
                                            className={`card-post__category bg-danger iconDelete`}
                                            onClick={() =>
                                              this.deletaPonto(ponto)
                                            }
                                          >
                                            <i className={`fas fa-times`} />
                                          </div>
                                        </Col>
                                      </Row>
                                    </ListGroupItem>
                                  ))}
                                </ListGroupItem>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Imagem da cidade
                          </strong>
                          <CustomFileUpload />
                        </FormGroup>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Imagem da descrição
                          </strong>
                          <CustomFileUpload />
                        </FormGroup>
                        <Button className="ml-1" type="submit">
                          Adicionar nova cidade
                        </Button>
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
              <Button variant="danger" onClick={() => this.editCity(city)}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.closeShow === city.nome}
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
              <Button variant="danger" onClick={() => this.deleteUnidade(city)}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            size="sm"
            show={this.state.smShow === city.id}
            onHide={smClose}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                {this.state.error === "Cidade adicionada com sucesso!"
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
            title="Visualizar Cidades"
            subtitle="Cidades"
            className="text-sm-left"
          />
        </Row>
        <Row>{renderCity()}</Row>
      </Container>
    );
  }
}

export default Cities;
