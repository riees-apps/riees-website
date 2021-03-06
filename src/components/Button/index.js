import React, { Component } from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Btn = styled.div`
  border:none;
  color: ${props => props.font || '#fafafa'};
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 20px;
  background-color: ${props => props.color || '#0077ff'};
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
  font-size: ${props => props.size || 'calc(8px + 1vw)'};
  border-radius: 3px;
  text-transform: uppercase;
  transition: all 150ms;
  width:max-content;
  transition-timing-function: cubic-bezier(0.65, -0.25, 0.25, 1.95);
  width:${props => props.width};
  :hover {
    color: ${props => props.font || '#fafafa'};
    background: #0055ff;
    letter-spacing: 4.5px;
    transform: scale(1.01);
    cursor: pointer;
  }
  ${props =>
    props.return &&
    `
    margin-top:10vh;
    width:100%;
    text-align:center;
    justify-content: space-around;
    :hover {
    letter-spacing: 4.5px;
    transform: scale(1.01);
    cursor: pointer;
  }
    @media (min-width: 769px) {
      display:none;
    }
  `}
  ${props =>
    props.places &&
    `
    border-radius: 0px;
    padding: 4px 10px;
    font-size: calc(5px + 1vw);
    text-align:center;
    justify-content: space-between;
    background-color: #fefefe;
    box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.75);
    color:#202020;
    width:max-content;
    :hover {
    letter-spacing: 4.5px;
    transform: scale(1.01);
    cursor: pointer;
    color:#202020;
    background-color: #eee;
  }
    
  `}
  ${props =>
    props.blog &&
    `
    margin:2.5% 10%;
    border-radius: 0px;
    padding: 5px 10px;
    font-size: calc(2.5px + 1vw);
    text-align:center;
    justify-content: space-between;
    background-color: #fefefe;
    color:#202020;
    width:max-content;
    :hover {
    letter-spacing: 4.5px;
    transform: scale(1.01);
    cursor: pointer;
    color:#202020;
    background-color: #eee;
  }
    
  `}
  ${props =>
    props.card &&
    `
    box-shadow: none;
    margin: 2vh 1vh;
    border-radius: 0px;
    padding: 5px 12px;
    font-size: calc(3px + 0.9vw);
    text-align:center;
    justify-content: space-between;
    margin-top:auto;
    margin-bottom:0;
    @media (max-width: 600px) {
      font-size: calc(6px + 0.9vw);
    }
    :hover {
    letter-spacing: 4.5px;
    transform: scale(1.01);
    cursor: pointer; 
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
    return <Btn as={this.props.url !== '' ? this.props.institute ? 'a' : Link : ''} href={this.props.url} target={this.props.institute ? '_blank' : '' }  className={this.props.className} style={{textDecoration: 'none'}} color={this.props.color} card={this.props.card} blog={this.props.blog} font={this.props.font} places={this.props.places} return={this.props.return} width={this.props.width}  to={`/${window.location.pathname.split('/')[1]}${this.props.url}`}><Icon return={this.props.return} className={`fas fa-arrow-left`} /> {this.props.name}</Btn>;
  }
}
export default Button;
