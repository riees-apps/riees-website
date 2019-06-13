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

import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import vitoria from "../../components/Cities/imgs/vitoria.jpg";
import vilaVelha from "../../components/Cities/imgs/vilavelha.jpg";
import img1 from "../../components/Cities/imgs/img1.jpg";
import img2 from "../../components/Cities/imgs/img2.jpg";

import PageTitle from "../components/common/PageTitle";
import Places from "../components/components-overview/Places";

var cities = [
  {
    name: "Vitória",
    img: vitoria,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    name: "Vila Velha",
    img: vilaVelha,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    name: "Cariacica",
    img: img1,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    name: "Serra",
    img: img2,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    name: "Colatina",
    img: vilaVelha,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    name: "Guarapari",
    img: vitoria,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    name: "Alegre",
    img: img2,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    name: "São Mateus",
    img: img1,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
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
      areas: ""
    };
  }
  editCity(city, number) {
    city = {
      name: this.state.name,
      places: city.places,
      img: city.img
    };
    cities[number] = city;
    this.setState({
      ...this.state,
      editShow: "",
      name: "",
      places: ""
    });
  }
  handleClose() {
    this.setState({
      smShow: false
    });
  }
  handleClick(city) {
    this.setState({
      smShow: city.name,
      error: `Ao confirmar a cidade ${city.name} será deletada`
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
      editShow: city.name,
      name: city.name
    });
  }
  deleteUnidade(city) {
    cities = arrayRemove(cities, city);
    this.setState({
      ...this.state,
      smShow: false
    });
  }
  render() {
    let smClose = () => this.setState({ smShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderCity = () => {
      return cities.map((city, number) => (
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
                <p className="text-fiord-blue">{city.name}</p>
              </h4>
              <p className="card-text d-block mb-2">{city.subheading}</p>
              <p className="card-text d-block mb-2">{city.url}</p>
              <h5 className="card-title d-block mb-1  ">
                Locais para visitar:
              </h5>
              {city.places.map(place => (
                <p className="card-text d-block mb-1">{place.name}</p>
              ))}
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === city.name}
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
                          <Col md="12" className="form-group">
                            <label htmlFor="feName">Nome</label>
                            <FormInput
                              value={this.state.name}
                              onChange={e =>
                                this.setState({ name: e.target.value })
                              }
                              id="feName"
                              type="name"
                              placeholder="Ex.: Vitória"
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

                        <Places />

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
                        <Button type="submit">Criar nova intituição</Button>
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
                onClick={() => this.editCity(city, number)}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.smShow === city.name}
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

export default BlogPosts;
