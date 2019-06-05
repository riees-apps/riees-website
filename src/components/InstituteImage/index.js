import React, { Component } from "react";
import styled from "styled-components";
import "./index.css";
import { Link } from "react-router-dom";

const DivLink = styled(Link)`

`;
const Img = styled.div`
  background: url(${props => props.input});
  box-shadow: 0px 45vh rgba(0, 0, 0, 0.35) inset;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150% 150%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  transition: all 600ms;
  @media (max-width: 600px) {
    background-size: cover;
  }
  :hover {
    transition: all 600ms;
    box-shadow: 0px 45vh rgba(0, 0, 0, 0.75) inset;
    cursor: pointer;
  }
  ${props =>
    props.cityInstitute &&
    `
    font-size: 0.75em;
    margin-top: -4vh;
    @media (min-width: 768px) {

    margin-bottom: 7%;
  }
  `}
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
    const renderCities = () => {
      return this.props.cities.map(row => <h1 className={this.props.cityInstitute ? "h1Cities2" : "h1Cities"}>{row}</h1>);
    };
    const renderAreas = () => {
      return this.props.areas.map(row => <h1 className={this.props.cityInstitute ? "h1Cities2" : "h1Cities"}>{row}</h1>);
    };
    return (
      <DivLink
        style={{ textDecoration: "none" }}
        to={{
          pathname: `/Institute/${this.props.name}`,
          state: {
            scrollTop: 0,
          },
        }}
        onMouseOver={this.changeHover.bind(this)}
        onMouseOut={this.changeOut.bind(this)}
        className='root'
      >
        <Img cityInstitute={this.props.cityInstitute} input={this.props.input}>
          <h1 className={this.state.hover ? "title2" : "title"}>
            {this.props.name}
          </h1>
          <div className={this.state.hover ? "divInfo2" : "divInfo"}>
            <h1 className={this.state.hover ? "sub2" : "sub1"}>
              {this.props.sub}
            </h1>
            <h1 className={this.state.hover ? "info2" : "info1"}>City:</h1>
            <div className={this.state.hover ? "cities2" : "cities1"}>
              {renderCities()}
            </div>
            <h1 className={this.state.hover ? "info4" : "info3"}>Areas:</h1>
            <div className={this.state.hover ? "cities2" : "cities1"}>
              {renderAreas()}
            </div>
          </div>
        </Img>
      </DivLink>
    );
  }
}
export default InstituteImage;
