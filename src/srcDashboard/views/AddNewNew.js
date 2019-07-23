import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import FormNew from "../components/components-overview/FormNew";

class AddNewEvent extends Component {
  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Criar Noticia"
            subtitle="Noticia"
            className="text-sm-left"
          />
        </Row>

        <Row>
          {/* Editor */}
          <Col lg="12" md="12">
            <FormNew adminId={this.props.adminId} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddNewEvent;
