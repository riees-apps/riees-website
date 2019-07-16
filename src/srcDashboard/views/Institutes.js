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
  FormGroup
} from "shards-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../assets/quill.css";

import api from "../../api/api";

import Checkboxes from "../components/components-overview/CheckboxesInstitute";
import UnidadesInstitute from "../components/components-overview/UnidadesInstitute";
import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import ufes from "../../Institutes/imgs/ufes.jpg";
import uvv from "../../Institutes/imgs/uvv.jpg";
import fdv from "../../Institutes/imgs/fdv.png";
import emescam from "../../Institutes/imgs/emescam.jpg";
import unesc from "../../Institutes/imgs/unesc.jpg";
import ifes from "../../Institutes/imgs/ifes.jpg";
import ucl from "../../Institutes/imgs/ucl.jpg";
import PageTitle from "../components/common/PageTitle";

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class Institutes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false,
      institutes: [],
      editShow: "",
      name: "",
      subheading: "",
      areas: "",
      url: "",
      overview: ""
    };
  }
  componentWillMount(){
    api.get("/instituicao")
    .then(res => {
      const inst = res.data;
      this.setState({ institutes: inst });
    })
    
  }
  editInstitute(institute, number) {
    institute = {
      name: this.state.name,
      subheading: this.state.subheading,
      areas: institute.areas,
      unidades: institute.unidades,
      img: institute.img,
      url: this.state.url
    };
    const inst = this.state.institutes
    inst[number] = institute;
    this.setState({
      ...this.state,
      institutes:inst,
      editShow: "",
      name: "",
      subheading: "",
      unidades:'',
      areas: "",
      url: "",
      overview: ""
    });
  }
  handleClose() {
    this.setState({
      smShow: false
    });
  }
  handleClick(institute) {
    this.setState({
      smShow: institute.name,
      error: `Ao confirmar a instituição ${institute.name} será deletada`
    });
  }
  handleClose2() {
    this.setState({
      editShow: false
    });
  }
  handleClick2(institute) {
    this.setState({
      ...this.state,
      editShow: institute.name,
      name: institute.name,
      subheading: institute.subheading,
      url: institute.url
    });
  }
  deleteUnidade(institute) {
    var inst = this.state.institutes
    inst = arrayRemove(inst, institute);
    this.setState({
      ...this.state,
      institutes: inst,
      smShow: false
    });
  }
  render() {
    let smClose = () => this.setState({ smShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderInstitute = () => {
      return this.state.institutes.map((institute, number) => (
        <Col key={number} lg="3" md="6" sm="12" className="mb-4">
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image"
              style={{ backgroundImage: `url(${institute.img})` }}
            >
              <div
                pill
                className={`card-post__category bg-danger iconDelete`}
                onClick={() => this.handleClick(institute)}
              >
                <i className={`fas fa-times iconDelete`} />
              </div>

              <div
                pill
                className={`card-post__category bg-primary mr-5 iconDelete`}
                onClick={() => this.handleClick2(institute)}
              >
                <i className={`fas fa-pen iconDelete`} />
              </div>
            </div>
            <CardBody>
              <h4 className="card-title">
                <p className="text-fiord-blue">{institute.nome}</p>
              </h4>
              <h5 className="card-title d-block mb-1  ">Endereço web:</h5>
              <p className="card-text d-block mb-2">{institute.link}</p>
              <h5 className="card-title d-block mb-1  ">Missão: </h5>
              <p className="card-text d-block mb-2">{institute.missao}</p>
              <h5 className="card-title d-block mb-1  ">Descrição: </h5>
              <p className="card-text d-block mb-2">{institute.descricao}</p>
              <h5 className="card-title d-block mb-1  ">Pontos fortes:</h5>
              <ul className="px-4">
              {institute.pontosFortes.map(pontoForte => (
                <li className="mb-1">{pontoForte}</li>
              ))}
              </ul>
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === institute.name}
            onHide={editClose}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Editar Instituição
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form>
                        <Row form>
                        <FormGroup>
                        <Col md="6" className="form-group">
                            <label htmlFor="feName">Nome</label>
                            <FormInput
                              value={this.state.name}
                              onChange={e =>
                                this.setState({ name: e.target.value })
                              }
                              id="feName"
                              type="name"
                            />
                          </Col>
                          <Col md="6">
                            <label htmlFor="feCompleteName">
                              Nome Completo
                            </label>
                            <FormInput
                              id="feCompleteName"
                              type="name"
                              value={this.state.subheading}
                              onChange={e =>
                                this.setState({ subheading: e.target.value })
                              }
                            />
                          </Col>
                        </FormGroup>
                          
                        </Row>
                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Imagem do intituto
                          </strong>
                          <CustomFileUpload />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="feUrl">Endereço do site</label>
                          <FormInput
                            id="feUrl"
                            type="url"
                            value={this.state.url}
                            onChange={e =>
                              this.setState({ url: e.target.value })
                            }
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="fePontosFortes">Pontos Fortes</label>
                          <FormInput
                            id="fePontosFortes"
                            type="name"
                            value={this.state.url}
                            onChange={e =>
                              this.setState({ url: e.target.value })
                            }
                          />
                        </FormGroup>

                        <ListGroupItem className="p-0 px-3 pt-3 mb-3">
                          <Row>
                            <Checkboxes />
                          </Row>
                        </ListGroupItem>

                        <UnidadesInstitute />

                        <FormGroup>
                          <label htmlFor="feUrl">Resumo do instituto</label>
                          <ReactQuill className="add-new-post__editor mb-1" />
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
                onClick={() => this.editInstitute(institute, number)}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
          
          
          <Modal
            show={this.state.smShow === institute.name}
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
              <Button
                variant="danger"
                onClick={() => this.deleteUnidade(institute)}
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
            title="Visualizar Instituições"
            subtitle="Instituições"
            className="text-sm-left"
          />
        </Row>
        <Row>{renderInstitute()}</Row>
      </Container>
    );
  }
}

export default Institutes;
