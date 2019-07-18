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
      closeShow: false,
      smShow: false,
      institutes: [],
      editShow: false,
      nome: "",
      missao: "",
      descricao: "",
      capa: null,
      logo: null,
      link: "",
      admin: "5d1a1daaaf9fc5001737e7af",
      ponto: "",
      pontosFortes: [],
      unidades: []
    };
  }
  componentWillMount() {
    api.get('/instituicao?where={"deletedAt":0}').then(res => {
      const inst = res.data;
      this.setState({ institutes: inst });
    });
  }
  editInstitute(institute) {
    const {
      nome,
      missao,
      descricao,
      capa,
      logo,
      link,
      admin,
      pontosFortes,
      unidades
    } = this.state;
    api.get(`/instituicao/${institute.id}`).then(inst => {
      if (
        !(
          nome !== "" &&
          missao !== "" &&
          descricao !== "" &&
          admin !== "" &&
          pontosFortes.length !== 0 &&
          link !== "" &&
          unidades.length !== 0
        )
      ) {
        this.setState({
          error: "Preencha todos os campos!",
          smShow: nome
        });
      } else {
        try {
          api
            .patch(
              `/instituicao/${institute.id}`,
              {
                nome: nome,
                missao: missao,
                descricao: descricao,
                admin: admin.id,
                pontosFortes: pontosFortes,
                link: link,
                capa: null,
                logo: null
              },
              { headers: { "Access-Control-Allow-Origin": "*" } }
            ).then(response => {
              const idInstituicao = response.data.id;
              inst.unidades.map(unidade =>
                api
                .patch(
                    `/unidade/${unidade.id}`,
                    {
                      nome: unidade.nome,
                      telefone: unidade.telefone,
                      descricao: unidade.descricao,
                      logradouro: unidade.logradouro,
                      numero: unidade.numero,
                      complemento: unidade.complemento,
                      bairro: unidade.bairro,
                      cidade: unidade.cidade,
                      cep: unidade.cep,
                      admin: response.data.admin.id,
                      instituicao: idInstituicao
                    },
                    { headers: { "Access-Control-Allow-Origin": "*" } }
                  )
                  .then(response => {
                    const idUnidade = response.data.id;
                    unidade.cursos.map(curso =>
                      api
                      .patch(
                        `/curso/${curso.id}`,
                          {
                            nome: curso.nome,
                            niveis: curso.niveis,
                            area: null,
                            admin: response.data.admin.id,
                            unidade: idUnidade
                          },
                          { headers: { "Access-Control-Allow-Origin": "*" } }
                        )
                        .then(response => {})
                    );
                  })
              );
            })
            .catch(error => {
              this.setState({
                smShow: institute.nome,
                error: "Houve um problema com a edição, tente novamente1"
              });
            });
        } catch (err) {
          this.setState({
            smShow: institute.nome,
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
  handleClick(institute) {
    this.setState({
      closeShow: institute.nome,
      error: `Ao confirmar a instituição ${institute.nome} será deletada`
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
      editShow: institute.nome,
      nome: institute.nome,
      missao: institute.missao,
      descricao: institute.descricao,
      admin: institute.admin,
      pontosFortes: institute.pontosFortes,
      link: institute.link,
      capa: null,
      logo: null,
      unidades: institute.unidades
    });
  }
  deleteUnidade(institute) {
    api.delete(`/instituicao/${institute.id}`).then(resp => console.log(resp));
    api.get('/instituicao?where={"deletedAt":0}').then(res => {
      const inst = res.data;
      this.setState({
        ...this.state,
        institutes: inst,
        closeShow: false
      });
    });
  }
  onChildChanged(New) {
    this.setState({ unidades: New });
  }
  render() {
    let smClose = () => this.setState({ smShow: false });
    let deleteClose = () => this.setState({ closeShow: false });
    let editClose = () => this.setState({ editShow: false });
    const renderInstitute = () => {
      return this.state.institutes.map((institute, number) => (
        <Col key={number} lg="3" md="6" sm="12" className="mb-4">
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image"
              style={{ backgroundImage: `url(${institute.capa})` }}
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
              <h5 className="card-title d-block mb-1  ">Unidades:</h5>
              <ul className="px-4">
                {institute.unidades.map(unidade => (
                  <li className="mb-1">{`Campus ${unidade.nome}`}</li>
                ))}
              </ul>
            </CardBody>
          </Card>

          <Modal
            size="lg"
            show={this.state.editShow === institute.nome}
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
                              value={this.state.nome}
                              onChange={e =>
                                this.setState({ nome: e.target.value })
                              }
                              id="feName"
                              type="name"
                              placeholder="Ex.: UFES - Universidade Federal do Espirito Santo"
                            />
                          </Col>
                          <Col className="mb-3" md="6">
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
                          <Col className="mb-3" md="6">
                            <label htmlFor="feCompleteName">Missão</label>
                            <FormTextarea
                              value={this.state.missao}
                              id="feMission"
                              onChange={e =>
                                this.setState({ missao: e.target.value })
                              }
                              rows="5"
                            />
                          </Col>
                        </Row>

                        <FormGroup>
                          <label htmlFor="feUrl">Endereço do site</label>
                          <FormInput
                            id="feUrl"
                            type="url"
                            value={this.state.link}
                            onChange={e =>
                              this.setState({ link: e.target.value })
                            }
                            placeholder="Ex.: http://www.ufes.br/"
                          />
                        </FormGroup>
                        <label htmlFor="fePontosFortes">Pontos Fortes</label>
                        <ul className="pl-4">
                          {this.state.pontosFortes.map(pontoForte => (
                            <Row lg="12">
                              <Col lg="11">
                                <li className="mb-4">{pontoForte}</li>
                              </Col>
                              <Col lg="1">
                                <div
                                  style={{ marginLeft: "auto" }}
                                  pill
                                  className={`card-post__category bg-danger iconDelete`}
                                  onClick={() =>
                                    this.deletaPontoForte(pontoForte)
                                  }
                                >
                                  <i className={`fas fa-times`} />
                                </div>
                              </Col>
                            </Row>
                          ))}
                        </ul>

                        <Row form>
                          <Col md="11" className="form-group">
                            <FormInput
                              value={this.state.ponto}
                              onChange={e =>
                                this.setState({ ponto: e.target.value })
                              }
                              id="fePontosFortes"
                              type="name"
                            />
                          </Col>
                          <Col md="1">
                            <div
                              style={{ marginLeft: "auto" }}
                              pill
                              className={`card-post__category bg-primary iconDelete`}
                              onClick={() => this.adicionaPontoForte()}
                            >
                              <i className={`fas fa-plus`} />
                            </div>
                          </Col>
                        </Row>
                        {/* 
                  <ListGroupItem className="p-0 px-3 pt-3 mb-3">
                    <Row>
                      <Checkboxes />
                    </Row>
                  </ListGroupItem> */}

                        <UnidadesInstitute
                          unidades={institute.unidades}
                          callbackParent={New => this.onChildChanged(New)}
                        />

                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Capa do instituto
                          </strong>
                          <input
                            onChange={e =>
                              this.setState({ capa: e.target.value })
                            }
                            type="file"
                            name="files"
                          />
                          <br />
                          <button type="submit" value="Upload" />
                        </FormGroup>

                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Logo do instituto
                          </strong>
                          <CustomFileUpload />
                        </FormGroup>

                        {/* <FormGroup>
                    <label htmlFor="feUrl">Resumo do instituto</label>
                    <ReactQuill className="add-new-post__editor mb-1" />
                  </FormGroup> */}
                        <Button type="submit">Criar nova intituição</Button>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
              {/* <ListGroup flush>
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
              </ListGroup> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose2.bind(this)}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={() => this.editInstitute(institute)}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.closeShow === institute.nome}
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
                onClick={() => this.deleteUnidade(institute)}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            size="sm"
            show={this.state.smShow === institute.nome}
            onHide={smClose}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">Erro!</Modal.Title>
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
