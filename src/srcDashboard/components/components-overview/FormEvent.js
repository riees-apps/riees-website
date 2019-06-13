import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

import Places from "./Places";
import CustomFileUpload from "../components-overview/CustomFileUpload";

const FormCity = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="feName">Título</label>
                <FormInput id="feName" type="name" />
              </Col>
            </Row>
            <FormGroup>
              <strong className="text-muted d-block mb-2">
                Imagem
              </strong>
              <CustomFileUpload />
            </FormGroup>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="feName">Data do evento</label>
                <FormInput id="feName" type="date" />
              </Col>
            </Row>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="feName">Horario do evento</label>
                <FormInput id="feName" type="time" />
              </Col>
            </Row>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="feName">Local do Evento</label>
                <FormInput id="feName" type="name" />
              </Col>
            </Row>
              <FormGroup>
              <strong className="text-muted d-block mb-2">
                Conteudo
              </strong>
                  <ReactQuill size='false' className="add-new-post__editor mb-1" />
              </FormGroup>
            <Button type="submit">Criar novo evento</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default FormCity;
