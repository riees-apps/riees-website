import React, { Component } from 'react'
import styled from 'styled-components'
import './index.css';
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-transform: uppercase;
  box-sizing: 100%;
  color: #33006F;
  font-size: calc(7px + 1vw);
  letter-spacing: 3px;
  padding:1vh 4vh;
  text-decoration: none;
  text-align: start;
  transition:  all 0.15s ease-in ;
  width:100%;
  :hover {
    text-decoration: none;
    background-color: #E4E3EA;
    color: #161050;
    letter-spacing: 5px;
    transition:  all 0.15s ease-in;
  }
  ${props =>
    props.active &&
    `
    background-color: #E4E3EA;
    color: #161050;
    letter-spacing: 5px;
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
      active: "/",
      hover: false,
      menu: false
    };
  }
  handleClick(active) {
    this.setState({
      ...this.state,
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
  componentWillMount() {
    this.setState({ ...this.state, active: window.location.pathname});
  }
  
  render() {
  const {links,page} = this.props
  const renderLinks = () => {
    return links.map(link => (
      <StyledLink
        onClick={() => this.handleClick(`/${page}/${link.name.trim()}`)}
        active={this.state.active === `/${page}/${link.name.trim()}` ? true : false}
        to={{
          pathname:`/${page}/${link.name.trim()}`,
          state: { 
            scrollTop: 1 
          } 
        }}
      >
      {link.name}
      </StyledLink>
    ));
  };
  
    return (
      <DivMenu>
        <Div justify="flex-start">
          <Heading color='#161030'>{page === 'City' ? 'Cities' : 'Institutes'}</Heading>
          {renderLinks()}
        </Div>
      </DivMenu>
    )
  }
}
export default SideMenu
