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
import vitoria from "../../components/Cities/imgs/vitoria.jpg";
import vilaVelha from "../../components/Cities/imgs/vilavelha.jpg";
import img1 from "../../components/Cities/imgs/img1.jpg";
import img2 from "../../components/Cities/imgs/img2.jpg";

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
      nome: "",
      custoMedio: "",
      descricao: "",
      capa: null,
      logo: null,
      admin: "5d1a1daaaf9fc5001737e7af"
    };
  }

  componentWillMount() {
    api.get('/cidade?where={"deletedAt":0}').then(res => {
      const cities = res.data;
      this.setState({ cidades: cities });
    });
  }
  editCity(city) {
    const { nome, descricao, custoMedio, admin } = this.state;
    api.get(`/cidade/${city.id}`).then(city => {
      if (
        !(nome !== "" && descricao !== "" && admin !== "" && custoMedio !== "")
      ) {
        this.setState({
          error: "Preencha todos os campos!",
          smShow: nome
        });
      } else {
        try {
          api
            .patch(
              `/cidade/${city.id}`,
              {
                nome: nome,
                descricao: descricao,
                admin: admin.id,
                custoMedio: custoMedio
              },
              { headers: { "Access-Control-Allow-Origin": "*" } }
            )
            .then(response => {
                this.setState({
                editShow: false,
              });
            })
            .catch(error => {
              this.setState({
                smShow: city.nome,
                error: "Houve um problema com a edição, tente novamente1"
              });
            });
        } catch (err) {
          this.setState({
            smShow: city.nome,
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
      editShow: city.nome,
      nome: city.nome,
      descricao: city.descricao,
      admin: city.admin,
      custoMedio: city.custoMedio
    });
  }
  deleteUnidade(city) {
    api.delete(`/cidade/${city.id}`).then(resp => console.log(resp));
    api.get('/cidade?where={"deletedAt":0}').then(res => {
      const cities = res.data;
      this.setState({
        ...this.state,
        cidades: cities,
        closeShow: false
      });
    });
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
              <p className="card-text d-block mb-2">{city.descricao}</p>
              <h5 className="card-title d-block mb-1  ">Custo Medio:</h5>
              <p className="card-text d-block mb-2">{city.custoMedio}</p>
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
                            <label htmlFor="feCustoMedio">Custo medio</label>
                            <FormInput
                              value={this.state.custoMedio}
                              onChange={e =>
                                this.setState({ custoMedio: e.target.value })
                              }
                              id="feCustoMedio"
                              type="number"
                            />
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
                            Imagem do 'overview'
                          </strong>
                          <CustomFileUpload />
                        </FormGroup>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Imagem do 'living there'
                          </strong>
                          <CustomFileUpload />
                        </FormGroup>

                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Overview da cidade
                          </strong>
                          <ReactQuill
                            size="false"
                            className="add-new-post__editor mb-1"
                          />
                        </FormGroup>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Living There da cidade
                          </strong>
                          <ReactQuill
                            size="medium"
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
                onClick={() => this.editCity(city)}
              >
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
