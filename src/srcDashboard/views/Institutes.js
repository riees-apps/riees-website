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
import Editor from "../components/components-overview/editor";

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
      id: "",
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
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
    this.handleChangeEditor2 = this.handleChangeEditor2.bind(this);
  }
  handleChangeEditor(html) {
    this.setState({ descricao: html });
  }
  handleChangeEditor2(html) {
    this.setState({ missao: html });
  }
  filtro = item => {
    if (item.deletedAt > 0) {
      return false;
    } else return true;
  };

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
      unidades,
      id
    } = this.state;
    api.get(`/instituicao/${institute.id}`).then(inst => {
      if (
        !(
          nome !== "" &&
          missao !== "" &&
          descricao !== "" &&
          admin !== "" &&
          pontosFortes.length !== 0 &&
          link !== ""
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
              `/instituicao/${id}`,
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
            )
            .then(res => {
              const idInstituto = res.data.id;
              this.state.unidades.map(unidade => {
                api.get(`/cidade?nome=${unidade.cidade}`).then(res => {
                  let cidade;
                  if (res.data.length > 0) cidade = res.data[0].id;
                  api
                    .get(
                      `/unidade?where={"nome":"${
                        unidade.nome
                      }","instituicao":"${idInstituto}"}`
                    )
                    .then(res => {
                      if (typeof unidade.createdAt === "undefined")
                        if (res.data.length > 0) {
                          api
                            .patch(
                              `/unidade/${res.data[0].id}`,
                              {
                                descricao: unidade.descricao,
                                telefone: unidade.telefone,
                                logradouro: unidade.logradouro,
                                numero: unidade.numero,
                                complemento: unidade.complemento,
                                bairro: unidade.bairro,
                                cep: unidade.cep,
                                cidade: cidade,
                                deletedAt: 0
                              },
                              {
                                headers: { "Access-Control-Allow-Origin": "*" }
                              }
                            )
                            .then(response => {
                              const idUnidade = response.data.id;
                              unidade.cursos.map(curso => {
                                api
                                  .get(`/area?nome=${curso.area}`)
                                  .then(res => {
                                    let area;
                                    if (res.data.length > 0)
                                      area = res.data[0].id;
                                    api.post(
                                      "/curso",
                                      {
                                        nome: curso.nome,
                                        niveis: curso.niveis,
                                        admin: response.data.admin.id,
                                        area: area,
                                        unidade: idUnidade
                                      },
                                      {
                                        headers: {
                                          "Access-Control-Allow-Origin": "*"
                                        }
                                      }
                                    );
                                  });
                              });
                            })
                        } else
                          api
                            .post(
                              `/unidade`,
                              {
                                nome: unidade.nome,
                                descricao: unidade.descricao,
                                telefone: unidade.telefone,
                                logradouro: unidade.logradouro,
                                numero: unidade.numero,
                                complemento: unidade.complemento,
                                bairro: unidade.bairro,
                                cep: unidade.cep,
                                cidade: cidade,
                                instituicao: idInstituto,
                                admin: admin.id
                              },
                              {
                                headers: {
                                  "Access-Control-Allow-Origin": "*"
                                }
                              }
                            )
                            .then(response => {
                              const idUnidade = response.data.id;
                              unidade.cursos.map(curso => {
                                console.log(curso.area);
                                api
                                  .get(`/area?nome=${curso.area}`)
                                  .then(res => {
                                    let area;
                                    if (res.data.length > 0)
                                      area = res.data[0].id;
                                    api.post(
                                      "/curso",
                                      {
                                        nome: curso.nome,
                                        niveis: curso.niveis,
                                        admin: response.data.admin.id,
                                        area: area,
                                        unidade: idUnidade
                                      },
                                      {
                                        headers: {
                                          "Access-Control-Allow-Origin": "*"
                                        }
                                      }
                                    );
                                  });
                              });
                            })
                    })
                    .then(res => {
                      api
                        .get('/instituicao?where={"deletedAt":0}')
                        .then(res => {
                          const institutos = res.data;
                          this.setState({
                            ...this.state,
                            institutes: institutos,
                            editShow: false
                          });
                        });
                    })
                    .catch(error => {
                      this.setState({
                        smShow: inst.nome,
                        error: "Cidade não cadastrada no sistema"
                      });
                    });
                });
              });
            })
            .catch(error => {
              this.setState({
                smShow: inst.nome,
                error: "Houve um problema com a edição, tente novamente1"
              });
            });
        } catch (err) {
          this.setState({
            smShow: inst.nome,
            error: "Houve um problema com a edição, tente novamente2"
          });
        }
      }
    });
  }

  editUnidade(unidade) {
    const { pontoEdit, nomePontoEdit, descricaoPontoEdit } = this.state;
    if (!(nomePontoEdit !== "" && descricaoPontoEdit !== "")) {
      this.setState({
        error: "Preencha todos os campos!",
        smShow: pontoEdit.id
      });
    } else {
      try {
        api
          .patch(
            `/unidade/${pontoEdit.id}`,
            {
              nome: nomePontoEdit,
              descricao: descricaoPontoEdit
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then(res => {
            api
              .get(
                `/unidade?where={"deletedAt":0,"cidade":"${
                  res.data.cidade.id
                }"}`
              )
              .then(res => {
                const pontos = res.data;
                console.log(pontos);
                if (pontos.length !== 0) {
                  this.setState({
                    ...this.state,
                    pontosTuristicos: pontos,
                    editUnidadeShow: false
                  });
                }
              });
          })
          .catch(error => {
            this.setState({
              smShow: pontoEdit.nome,
              error: "Houve um problema com a edição, tente novamente"
            });
          });
      } catch (err) {
        this.setState({
          smShow: pontoEdit.nome,
          error: "Houve um problema com a edição, tente novamente"
        });
      }
    }
  }

  handleClose() {
    this.setState({
      closeShow: false,
      smShow: false
    });
  }
  handleClose2() {
    this.setState({
      editShow: false
    });
  }
  handleClose3() {
    this.setState({
      editPontoShow: false
    });
  }
  handleClick(institute) {
    this.setState({
      closeShow: institute.nome,
      error: `Ao confirmar a instituição ${institute.nome} será deletada`
    });
  }
  handleClick2(institute) {
    this.setState({
      ...this.state,
      editShow: institute.nome,
      id: institute.id,
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
  handleClick3(unidade) {
    console.log(unidade);
    this.setState({
      ...this.state,
      pontoEdit: unidade,
      nomePontoEdit: unidade.nome,
      descricaoPontoEdit: unidade.descricao,
      editPontoShow: unidade.nome
    });
  }
  deleteInstitute(institute) {
    api.delete(`/instituicao/${institute.id}`).then(resp =>
      api.get('/instituicao?where={"deletedAt":0}').then(res => {
        const inst = res.data;
        this.setState({
          ...this.state,
          institutes: inst,
          closeShow: false
        });
      })
    );
  }
  onChildChanged(New) {
    this.setState({ unidades: New });
  }
  adicionaPontoForte() {
    var pf = this.state.pontosFortes;
    if (this.state.ponto !== "") {
      pf.push(this.state.ponto);
      this.setState({ ...this.state, pontosFortes: pf, ponto: "" });
    } else this.setState({ ...this.state, ponto: "" });
  }
  deletaPontoForte(ponto) {
    var pf = arrayRemove(this.state.pontosFortes, ponto);
    this.setState({ ...this.state, pontosFortes: pf });
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
              <p
                className="card-text d-block mb-2"
                dangerouslySetInnerHTML={{ __html: institute.missao }}
              />
              <h5 className="card-title d-block mb-1  ">Descrição: </h5>
              <p
                className="card-text d-block mb-2"
                dangerouslySetInnerHTML={{ __html: institute.descricao }}
              />
              <h5 className="card-title d-block mb-1  ">Pontos fortes:</h5>
              <ul className="px-4">
                {institute.pontosFortes.map(pontoForte => (
                  <li className="mb-1">{pontoForte}</li>
                ))}
              </ul>
              <h5 className="card-title d-block mb-1  ">Unidades:</h5>
              <ul className="px-4">
                {institute.unidades
                  .filter(this.filtro.bind(this))
                  .map(unidade => (
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
                            <strong className="text-muted d-block mb-2">
                              Nome
                            </strong>
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
                          <Col className="mb-3" md="12">
                            <FormGroup>
                              <strong className="text-muted d-block mb-2">
                                Missão
                              </strong>
                              <ReactQuill
                                onChange={this.handleChangeEditor2}
                                value={this.state.missao}
                                modules={Editor.modules}
                                className="add-new-post__editor mb-1"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <FormGroup>
                          <strong className="text-muted d-block mb-2">
                            Endereço do site
                          </strong>
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
                        <strong className="text-muted d-block mb-2">
                          Pontos Fortes
                        </strong>
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

                        <UnidadesInstitute
                          callbackParent={New => this.onChildChanged(New)}
                          unidades={institute.unidades}
                          adminId={institute.admin.id}
                          edit="true"
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
                onClick={() => this.deleteInstitute(institute)}
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
