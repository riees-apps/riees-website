import React, { Component } from "react";
import { Badge, Details, Image, SubTitle, Title } from "./styles";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

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
          as={Link}
          style={{textDecoration:'none'}} 
          side={this.props.side}
          to={`/${window.location.pathname.split('/')[1]}/Post/${this.props.title}`}
          input={this.props.img}
          height={this.props.height}
          width={this.props.width}
          x="0.6"
          image={this.props.img}
        >
          <div>
            <Details secAndTrd={this.props.secAndTrd}>
              <Badge>
                {this.props.tag}
              </Badge>
              <i className={`fas fa-clock iconDate`} /> {this.props.date}
            </Details>

            <Title secAndTrd={this.props.secAndTrd}>{this.props.title}</Title>

            <SubTitle secAndTrd={this.props.secAndTrd}>
              {this.props.text}
            </SubTitle>
            
          </div>
        </Image>
    );
  }
}
export default LatestPost;
