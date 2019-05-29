import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
  border:none;
  color: white;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 20px;
  background-color: #0077ff;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
  font-size: calc(8px + 1vw);
  border-radius: 3px;
  text-transform: uppercase;
  transition: all 150ms;
  transition-timing-function: cubic-bezier(0.65, -0.25, 0.25, 1.95);

  :hover {
    background: #0055ff;
    letter-spacing: 4.5px;
    transform: scale(1.01);
    cursor: pointer;
  }
`;

class Button extends Component {
  handleClick(url) {
    window.location.href = url
  }
  render() {
    return <Btn onClick={() => this.handleClick(this.props.url)}>{this.props.name}</Btn>;
  }
}
export default Button;
