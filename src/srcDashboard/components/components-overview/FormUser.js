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

import Checkboxes from "./CheckboxesInstitute";
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
                <label htmlFor="feName">Nome de usuario</label>
                <FormInput id="feName" type="name"  />
              </Col>
            </Row>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="feName">Endereço de email</label>
                <FormInput id="feName" type="email" />
              </Col>
            </Row>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="feName">Senha</label>
                <FormInput id="feName" type="password"/>
              </Col>
            </Row>
            <Button type="submit">Criar novo usuario</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default FormCity;
