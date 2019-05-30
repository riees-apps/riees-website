import React, { Component } from 'react'
import styled from 'styled-components'
import './index.css';
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-transform: uppercase;
  box-sizing: 100%;
  color: #33006F;
  font-size: calc(10px + 1vw);
  letter-spacing: 5px;
  padding:1vh 4vh;
  text-decoration: none;
  text-align: start;
  transition:  all 0.15s ease-in ;
  width:100%;
  :hover {
    text-decoration: none;
    background-color: #E4E3EA;
    color: #161050;
    letter-spacing: 7px;
    transition:  all 0.15s ease-in;
  }
  ${props =>
    props.active &&
    `
    background-color: #E4E3EA;
    color: #161050;
    letter-spacing: 7px;
    transition:  all 0.15s linear;
    cursor:default;
    :hover {
    transform: scale(1);
  }
  `}
`;

const DivMenu = styled.div`
@media (max-width: 768px) {
    display:none;
  }
  position: sticky;
  top: 10vh;
  height: ${props => props.height};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin-left:5%;
  margin-right:2.5%;
  margin-bottom:10vh;
  border:1px solid #E4E3EA;
  margin-top:2.5vh;
`;
const Heading = styled.h1`
font-family: "Avenir Next", Helvetica, Arial, sans-serif;
  color: #E4E3EA;
  background-color: #161050;
  font-size: calc(20px + 1vw);
  line-height: calc(20px + 1vw);
  letter-spacing: 3px;
  text-align:start;
  width:100%;
  padding: 2vh 0 2vh 4vh;
  border-bottom:1px solid #999999;
  margin-bottom:0;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.justify};
  justify-content: center;
  width: 100%;
`;

class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      active: "/Home",
      hover: false,
      menu: false
    };
  }
  handleClick(active) {
    this.setState({
      active: active,
      menu: !this.state.menu
    });
  }
  openMenu() {
    this.setState({ ...this.state, menu: !this.state.menu });
  }
  changeHover() {
    this.setState({ ...this.state, hover: !this.state.hover });
  }
  changeOut() {
    this.setState({ ...this.state, hover: !this.state.hover });
  }
  componentDidMount() {
    this.setState({ ...this.state, active: window.location.pathname });
  }
  render() {
    return (
      <DivMenu>
        <Div justify="flex-start">
          <Heading color='#161030'>Institutes</Heading>
          <StyledLink
            onClick={() => this.handleClick("/Institute/Ufes")}
            active={this.state.active === "/Institute/Ufes" ? true : false}
            to={{
              pathname:"/Institute/Ufes",
              state: { 
                scrollTop: 1 
              } 
            }}
          >
            UFES
          </StyledLink>
          <StyledLink
            onClick={() => this.handleClick("/Institute/Uvv")}
            active={this.state.active === "/Institute/Uvv" ? true : false}
            to={{
              pathname:"/Institute/Uvv",
              state: { 
                scrollTop: 1 
              } 
            }}
          >
            UVV
          </StyledLink>
          <StyledLink
            onClick={() => this.handleClick("/Institute/Fdv")}
            active={this.state.active === "/Institute/Fdv" ? true : false}
            to={{
              pathname:"/Institute/Fdv",
              state: { 
                scrollTop: 1 
              } 
            }}
          >
            FDV
          </StyledLink>
          <StyledLink
            onClick={() => this.handleClick("/Institute/Ucl")}
            active={this.state.active === "/Institute/Ucl" ? true : false}
            to={{
              pathname:"/Institute/Ucl",
              state: { 
                scrollTop: 1 
              } 
            }}
          >
            UCL
          </StyledLink>
          <StyledLink
            onClick={() => this.handleClick("/Institute/Ifes")}
            active={this.state.active === "/Institute/Ifes" ? true : false}
            to={{
              pathname:"/Institute/Ifes",
              state: { 
                scrollTop: 1 
              } 
            }}
          >
            IFES
          </StyledLink>
          <StyledLink
            onClick={() => this.handleClick("/Institute/Emescam")}
            active={this.state.active === "/Institute/Emescam" ? true : false}
            to={{
              pathname:"/Institute/Emescam",
              state: { 
                scrollTop: 1 
              } 
            }}
          >
            EMESCAM
          </StyledLink>
          <StyledLink
            onClick={() => this.handleClick("/Institute/Unesc")}
            active={this.state.active === "/Institute/Unesc" ? true : false}
            to={{
              pathname:"/Institute/Unesc",
              state: { 
                scrollTop: 1 
              } 
            }}
          >
            UNESC
          </StyledLink>
        </Div>
      </DivMenu>
    )
  }
}
export default SideMenu
