import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoIosMenu, IoIosClose } from "react-icons/io";

import "./header.css";
import logo1 from "./riees1.png";
import logo2 from "./riees3.png";

const StyledLink = styled(Link)`
  text-transform: uppercase;
  box-sizing: 100%;
  color:#505050;
  font-size: calc(6.5px + 1vw);
  letter-spacing: 3px;
  padding-left:3px;
  text-decoration: none;
  text-align: center;
  transition:  all 0.15s linear ;
  border-bottom: 3px solid transparent;
  @media (max-width: 600px) {
    display:none;
  }
  :hover {
    text-decoration: none;
    border-bottom: 3px solid transparent;
    color: #000066;
    transform: scale(1.05);
    transition:  all 0.15s linear;
  }
  ${props =>
    props.active &&
    `
    border-bottom: 3px solid #000066;
    text-align: center;
    transition:  all 0.15s linear;
    cursor:default;
    :hover {
    border-bottom: 3px solid #000066;
    color: #000066;
    transform: scale(1);
    transition:  all 0.15s linear;
  }
  `}
  ${props =>
    props.active2 &&
    `
    border-bottom: 3px solid #000066;
    text-align: center;
    color: #000066;
    transition:  all 0.15s linear;
    :hover {
    border-bottom: 3px solid #000066;
    color: #000066;
    transform: scale(1);
    transition:  all 0.15s linear;

  }
  `}
  ${props =>
    props.li &&
    `
  @media (max-width: 600px) {
    display:block;
    letter-spacing: 2px;
    color: #303030;
    text-align:start;
    padding-left:10px;
    padding-top:10px;
    padding-bottom:10px;
    font-size: calc(9px + 1vw);
    width:100%;
  }
  transition:  all 0.05s linear;
  font-size: calc(1.5px + 1vw);
  border-bottom: 1px solid #303030;
  border-top: 1px solid transparent;
  `}
`;
class Header extends Component {
  constructor() {
    super();
    this.state = {
      scroll: false,
      active: "/Home",
      hover: false,
      menu: false
    };
  }
  handleScroll() {
    if (document.documentElement.scrollTop > 0) {
      this.setState({
        scroll: true
      });
    }
    if (document.documentElement.scrollTop === 0) {
      this.setState({
        scroll: false
      });
    }
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
    console.log(window.location.pathname)
    window.onscroll = () => this.handleScroll();
    this.setState({ ...this.state, active: (window.location.pathname)});
  }
  render() {
    return (
      <div className={this.state.scroll ? "container2" : "container1"}>
        <StyledLink
          onClick={() => this.handleClick("/")}
          active={this.state.active === "/" ? true : false}
          className={this.state.scroll ? "scroll" : ""}
          to={"/"}
        >
          Home
        </StyledLink>

        <StyledLink
          onClick={() => this.handleClick("/Institutes")}
          active={this.state.active === "/Institutes" ? true : false}
          className={this.state.scroll ? "scroll" : ""}
          to={"/Institutes"}
        >
          Our Institutes
        </StyledLink>

        <div className="div">
          <img
            className={this.state.scroll ? "logo1Scroll" : "logo1"}
            src={logo1}
            alt=""
          />
          <img
            className={this.state.scroll ? "logo2Scroll" : "logo2"}
            src={logo2}
            alt=""
          />
        </div>
        <StyledLink
          onMouseOver={this.changeHover.bind(this)}
          onMouseOut={this.changeOut.bind(this)}
          active2={(this.state.active === "/Cities") || (this.state.active === "/Coming") || (this.state.active === "/Living")  ? true : false}
          className={this.state.scroll ? "dropscroll" : "dropdown"}
        >
          Espirito Santo
          <FaCaretUp className={this.state.hover ? "" : "displayNone"} />
          <FaCaretDown className={this.state.hover ? "displayNone" : ""} />
          <div class="dropdown-content">
            <StyledLink
              li
              onClick={() => this.handleClick("/Coming")}
              className={this.state.scroll ? "scroll2" : ""}
              to={"/Coming"}
            >
              Coming to Espirito Santo
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Living")}
              className={this.state.scroll ? "scroll2" : ""}
              to={"/Living"}
            >
              Living in Espirito Santo
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Cities")}
              className={this.state.scroll ? "scroll2" : ""}
              to={"/Cities"}
            >
              Our Cities
            </StyledLink>
          </div>
        </StyledLink>

        <StyledLink
          onClick={() => this.handleClick("/About")}
          active={this.state.active === "/About" ? true : false}
          className={this.state.scroll ? "scroll" : ""}
          to={"/About"}
        >
          About Us
        </StyledLink>
        <IoIosMenu
          onClick={this.openMenu.bind(this)}
          className={this.state.menu ? "displayNone" : "menu"}
        />
        
        <div className={this.state.menu ? "menu-content" : "menuNone"}>
          <div className={this.state.menu ? "menu-links" : "menuNone"}>
            <div
            onClick={this.openMenu.bind(this)}
              className="logoMenu"
            >
              <IoIosClose
                className="closee"
              />
              CLOSE
            </div>
            <StyledLink
              li
              onClick={() => this.handleClick("/")}
              active={this.state.active === "/" ? true : false}
              className={this.state.active === "/" ? "active" : ""}
              to={"/"}
            >
              Home
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Institutes")}
              active={this.state.active === "/Institutes" ? true : false}
              className={this.state.active === "/Institutes" ? "active" : ""}
              to={"/Institutes"}
            >
              Our Institutes
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Coming")}
              active2={this.state.active === "/Coming" ? true : false}
              className={this.state.active === "/Coming" ? "active" : ""}
              to={"/Coming"}
            >
              Coming to Espirito Santo
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Living")}
              active2={this.state.active === "/Living" ? true : false}
              className={this.state.active === "/Living" ? "active" : ""}
              to={"/Living"}
            >
              Living in Espirito Santo
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Cities")}
              active2={this.state.active === "/Cities" ? true : false}
              className={this.state.active === "/Cities" ? "active" : ""}
              to={"/Cities"}
            >
              Our Cities
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/About")}
              active={this.state.active === "/About" ? true : false}
              className={this.state.active === "/About" ? "active" : ""}
              to={"/About"}
            >
              About Us
            </StyledLink>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
