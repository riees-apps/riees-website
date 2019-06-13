import React from "react";
import { Col,Row,FormCheckbox } from "shards-react";

export default class FormCheckboxExample extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      Architecture: false,
      Art: false,
      BiomedicalSciences: false,
      Communication: false,
      Design: false,
      Engineering: false,
      InformationTechnology: false,
      Law: false,
      SocialScience: false,
      Science: false,
      HealthAndFitness: false
    };
  }

  handleChange(e, fruit) {
    const newState = {};
    newState[fruit] = !this.state[fruit];
    this.setState({ ...this.state, ...newState });
  }

  render() {
    return (
      <div sm="12" md="4" className="mb-3">
        <strong className="text-muted d-block mb-2">Areas</strong>
        <Col lg='12'>
        <Row lg='12'>
        <FormCheckbox
          checked={this.state.Architecture}
          onChange={e => this.handleChange(e, "Architecture")}
          className="mr-4"
        >
          Architecture
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Art}
          onChange={e => this.handleChange(e, "Art")}
          className="mr-4"
        >
          Art
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.BiomedicalSciences}
          onChange={e => this.handleChange(e, "BiomedicalSciences")}
          className="mr-4"
        >
          Biomedical sciences
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Communication}
          onChange={e => this.handleChange(e, "Communication")}
          className="mr-4"
        >
          Communication
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Design}
          onChange={e => this.handleChange(e, "Design")}
          className="mr-4"
        >
          Design
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Engineering}
          onChange={e => this.handleChange(e, "Engineering")}
          className="mr-4"
        >
          Engineering
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.InformationTechnology}
          onChange={e => this.handleChange(e, "InformationTechnology")}
          className="mr-4"
        >
          Information technology
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Law}
          onChange={e => this.handleChange(e, "Law")}
          className="mr-4"
        >
          Law
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.SocialScience}
          onChange={e => this.handleChange(e, "SocialScience")}
          className="mr-4"
        >
          Social science
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Science}
          onChange={e => this.handleChange(e, "Science")}
          className="mr-4"
        >
          Science
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.HealthAndFitness}
          onChange={e => this.handleChange(e, "HealthAndFitness")}
          className="mr-4"
        >
          Health & Fitness
        </FormCheckbox>
        </Row>
        </Col>
        
      </div>
    );
  }
}