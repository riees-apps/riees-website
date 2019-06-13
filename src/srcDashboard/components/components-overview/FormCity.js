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
                <label htmlFor="feName">Nome</label>
                <FormInput id="feName" type="name" placeholder="Ex.: Vitória" />
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
                  <ReactQuill size='false' className="add-new-post__editor mb-1" />
              </FormGroup>
              <FormGroup>
              <strong className="text-muted d-block mb-2">
              Living There da cidade
              </strong>
                  <ReactQuill size='medium' className="add-new-post__editor mb-1" />
              </FormGroup>
            <Button type="submit">Criar nova intituição</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default FormCity;
