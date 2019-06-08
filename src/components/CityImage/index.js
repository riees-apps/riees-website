import React, { Component } from "react";
import styled from "styled-components";
import "./index.css";
import { Link } from "react-router-dom";

const DivLink = styled(Link)`
  text-decoration: none;
`;
const Img = styled.div`
  background: url(${props => props.input});
  box-shadow: 0px 40vh rgba(0, 0, 0, 0.35) inset;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 130%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 500ms;
  :hover {
    transition: all 500ms;
    box-shadow: 0px 40vh rgba(0, 0, 0, 0.7) inset;
    background-size: 120%;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    background-size: cover;
  }
  @media (min-height: 1000px) {
    background-size: 200%;
  }
`;

class InstituteImage extends Component {
  state = {
    hover: false
  };
  changeHover() {
    this.setState({ ...this.state, hover: !this.state.hover });
  }
  changeOut() {
    this.setState({ ...this.state, hover: !this.state.hover });
  }
  render() {
    return (
      <DivLink
        style={{ textDecoration: "none" }}
        to={{
          pathname: `/${window.location.pathname.split('/')[1]}/City/${this.props.name}`,
          state: {
            scrollTop: 0,
          },
        }}
        onMouseOver={this.changeHover.bind(this)}
        onMouseOut={this.changeOut.bind(this)}
        className="rootCity"
      >
        <Img input={this.props.img}>
          <h1 className={this.state.hover ? "titleCity2" : "titleCity"}>
            {this.props.name}
          </h1>
        </Img>
      </DivLink>
    );
  }
}
export default InstituteImage;
