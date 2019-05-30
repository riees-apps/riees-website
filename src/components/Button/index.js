import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
  border:none;
  color: #fafafa;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 20px;
  background-color: ${props => props.color || '#0077ff'};
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
  font-size: calc(8px + 1vw);
  border-radius: 3px;
  text-transform: uppercase;
  transition: all 150ms;
  transition-timing-function: cubic-bezier(0.65, -0.25, 0.25, 1.95);
  width:${props => props.width};
  :hover {
    background: #0055ff;
    letter-spacing: 4.5px;
    transform: scale(1.01);
    cursor: pointer;
  }
  ${props =>
    props.return &&
    `
    margin-top:10vh;
    width:50%;
    text-align:center;
    justify-content: space-between;
    :hover {
    letter-spacing: 4.5px;
    transform: scale(1.01);
    cursor: pointer;
  }
    @media (min-width: 769px) {
      display:none;
    }
  `}
`;
const Icon = styled.i`
  display:none;
  ${props =>
    props.return &&
    `
    display:inline;
  `}
`;

class Button extends Component {
  handleClick(url) {
    window.location.href = url
  }
  render() {
    return <Btn color={this.props.color} return={this.props.return} width={this.props.width}  onClick={() => this.handleClick(this.props.url)}><Icon return={this.props.return} className={`fas fa-arrow-left`} /> {this.props.name}</Btn>;
  }
}
export default Button;
