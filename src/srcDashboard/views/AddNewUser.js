import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import FormUser from "../components/components-overview/FormUser";

const AddNewUser = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Adicionar Cidade" subtitle="Cidade" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
        <FormUser/>
      </Col>
    </Row>
  </Container>
);

export default AddNewUser;
