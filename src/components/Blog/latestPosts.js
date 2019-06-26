import React, { Component } from "react";
import { Badge, Details, Image, SubTitle, Title } from "./styles";
import { FormattedMessage } from "react-intl";

import "./index.css";
import Button from "../Button";

class LatestPost extends Component {
  componentDidMount() {
    this.setState({
      ...this.state,
      final: this.props.final
    });
  }
  constructor() {
    super();
    this.state = {
      page: 1,
      initial: 0,
      final: 3,
      active: "all"
    };
  }
  handleClick(active) {
    this.setState({
      active: active,
      page: 1,
      initial: 0,
      final: this.props.final
    });
  }

  render() {
    return (
      <Image
        height={this.props.height}
        width={this.props.width}
        x="0.55"
        image={this.props.img}
      >
        <div>
          <Details secAndTrd={this.props.secAndTrd}>
            <Badge>{typeof dateEvent !== "undefined" ? "Event" : "New"}</Badge>
            <i className={`fas fa-clock iconDate`} /> {this.props.date}
          </Details>

          <Title secAndTrd={this.props.secAndTrd}>{this.props.title}</Title>

          <SubTitle secAndTrd={this.props.secAndTrd}>
            {this.props.text}
          </SubTitle>
          <Button blog name={<FormattedMessage id="Button"/>}/>
        </div>
      </Image>
    );
  }
}
export default LatestPost;
