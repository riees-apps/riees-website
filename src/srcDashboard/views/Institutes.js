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

var institutes = [
  {
    name: "UFES",
    subheading: "Universidade Federal do Espirito Santo",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: ufes,
    unidades: [
      {
        Nome: "Goiabeiras",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "Alegre",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "São Mateus",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      }
    ],
    url: "http://www.ufes.br/"
  },
  {
    name: "UVV",
    subheading: "Universidade Vila Velha",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: uvv,
    unidades: [
      {
        Nome: "Boa Vista",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "Business School",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      }
    ],
    url: "https://www.uvv.br/"
  },
  {
    name: "FDV",
    subheading: "Faculdade de Direito de Vitória",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: fdv,
    unidades: [
      {
        Nome: "Goiabeiras",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "Alegre",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "São Mateus",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      }
    ],
    url: "http://site.fdv.br/"
  },
  {
    name: "EMESCAM",
    subheading:
      "Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: emescam,
    unidades: [
      {
        Nome: "Goiabeiras",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "Alegre",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "São Mateus",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      }
    ],
    url: "http://www.emescam.br/"
  },
  {
    name: "UCL",
    subheading: "Faculdade do Centro Leste",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: ucl,
    unidades: [
      {
        Nome: "Goiabeiras",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "Alegre",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "São Mateus",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      }
    ],
    url: "https://www.ucl.br/"
  },
  {
    name: "UNESC",
    subheading: "Centro Universitário do Espírito Santo",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: unesc,
    unidades: [
      {
        Nome: "Goiabeiras",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "Alegre",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "São Mateus",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      }
    ],
    url: "https://www.unesc.br/"
  },
  {
    name: "IFES",
    subheading: "Instituto Federal do Espirito Santo",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: ifes,
    unidades: [
      {
        Nome: "Goiabeiras",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "Alegre",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      },
      {
        Nome: "São Mateus",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Cep: ""
      }
    ],
    url: "https://www.ifes.edu.br/"
  }
];

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
}
class BlogPosts extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false,
      editShow: "",
      name: "",
      subheading: "",
      areas: "",
      url: "",
      overview: ""
    };
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
    institutes[number] = institute;
    this.setState({
      ...this.state,
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
    institutes = arrayRemove(institutes, institute);
    this.setState({
      ...this.state,
      smShow: false
    });
  }
  render() {
    let smClose = () => this.setState({ smShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderInstitute = () => {
      return institutes.map((institute, number) => (
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
              <h4 className="card-title mb-1">
                <p className="text-fiord-blue">{institute.name}</p>
              </h4>
              <p className="card-text d-block mb-2">{institute.subheading}</p>
              <p className="card-text d-block mb-2">{institute.url}</p>
              <h5 className="card-title d-block mb-1  ">Areas:</h5>
              {institute.areas.map(area => (
                <p className="card-text d-block mb-1">{area.name}</p>
              ))}
              <h5 className="card-title d-block mt-2 mb-1  ">Unidades:</h5>
              {institute.unidades.map(unidade => (
                <p className="card-text d-block mb-1">Campus {unidade.Nome}</p>
              ))}
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
            title="Visualizar Intituições"
            subtitle="Instituições"
            className="text-sm-left"
          />
        </Row>
        <Row>{renderInstitute()}</Row>
      </Container>
    );
  }
}

export default BlogPosts;
