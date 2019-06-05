import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import "./header.css";
import logo1 from "./riees1.png";
import logo2 from "./riees3.png";

const StyledLink = styled(Link)`
  text-transform: uppercase;
  box-sizing: 100%;
  color: #505050;
  font-size: calc(3px + 1vw);
  letter-spacing: 3px;
  padding-left: 3px;
  text-decoration: none;
  text-align: center;
  transition: all 0.15s ease-in;
  border-bottom: 3px solid transparent;
  @media (max-width: 600px) {
    display: none;
  }
  :hover {
    text-decoration: none;
    border-bottom: 3px solid transparent;
    color: #000066;
    transform: scale(1.05);
    transition: all 0.15s ease-in;
  }
  ${props =>
    props.active &&
    `
    border-bottom: 3px solid #000066;
    @media (max-width: 600px) {
      border-bottom: none;
    }
    color: #000066;
    text-align: center;
    transition:  all 0.15s linear;
    cursor:default;
    :hover {
    border-bottom: 3px solid #000066;
    @media (max-width: 600px) {
      border-bottom: none;
    }
    color: #000066;
    transform: scale(1);
    transition:  all 0.15s linear;
  }
  `}

  ${props =>
    props.li &&
    `
  transition:  all 0.15s linear;
  font-size: calc(1.5px + 1vw);
  border-bottom: 1px solid #999999;
  border-top: 1px solid transparent;
  :hover {
    box-shadow: 0px 0px 3px 0.2px rgba(0,0,0,0.6);
    transition:  all 0.15s linear;
  }
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
    :hover {
      transform: scale(1);
      color: #303030;
      text-align: start;
      transition:  all 0.15s linear;
      cursor:default;
  }
  }
  `}
`;
class Header extends Component {
  constructor() {
    super();
    this.state = {
      scroll: false,
      active: "/",
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
      menu: false
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
    window.onscroll = () => this.handleScroll();
    this.setState({ ...this.state, active: window.location.pathname });
  }
  render() {
    return (
      <div
        shadow={this.state.menu ? true : false}
        className={this.state.scroll ? "container2" : "container1"}
      >
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

        <div className="containerLinks">
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
          <StyledLink
            onMouseOver={this.changeHover.bind(this)}
            onMouseOut={this.changeOut.bind(this)}
            active={
              this.state.active === "/Cities" ||
              this.state.active === "/Coming" ||
              this.state.active === "/Living"
                ? true
                : false
            }
            className={this.state.scroll ? "dropscroll" : "dropdown"}
          >
            Espirito Santo
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
            <FaCaretUp
              className={this.state.hover ? "iconUpDown" : "displayNone"}
            />
            <FaCaretDown
              className={this.state.hover ? "displayNone" : "iconUpDown"}
            />
          </StyledLink>

          <StyledLink
            onClick={() => this.handleClick("/About")}
            active={this.state.active === "/About" ? true : false}
            className={this.state.scroll ? "scroll" : ""}
            to={"/About"}
          >
            About Us
          </StyledLink>

          <StyledLink
            onClick={() => this.handleClick("/News-Events")}
            active={this.state.active === "/News-Events" ? true : false}
            className={this.state.scroll ? "scroll" : ""}
            to={"/News-Events"}
          >
            News & Events
          </StyledLink>
        </div>

        <i
          onClick={this.openMenu.bind(this)}
          className={this.state.menu ? "fa fa-times menu" : "fa fa-bars menu"}
        />
        <div
          onClick={this.openMenu.bind(this)}
          className={this.state.menu ? "menu-content" : "menu-contentNone"}
        >
          <div className={this.state.menu ? "menu-links" : "menuNone"}>
            <StyledLink
              li
              onClick={() => this.handleClick("/")}
              active={window.location.pathname === "/" ? true : false}
              className={window.location.pathname === "/" ? "active" : ""}
              to={"/"}
            >
              Home
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Institutes")}
              active={window.location.pathname === "/Institutes" ? true : false}
              className={
                window.location.pathname === "/Institutes" ? "active" : ""
              }
              to={"/Institutes"}
            >
              Our Institutes
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Coming")}
              active={window.location.pathname === "/Coming" ? true : false}
              className={window.location.pathname === "/Coming" ? "active" : ""}
              to={"/Coming"}
            >
              Coming to Espirito Santo
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Living")}
              active={window.location.pathname === "/Living" ? true : false}
              className={window.location.pathname === "/Living" ? "active" : ""}
              to={"/Living"}
            >
              Living in Espirito Santo
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/Cities")}
              active={window.location.pathname === "/Cities" ? true : false}
              className={window.location.pathname === "/Cities" ? "active" : ""}
              to={"/Cities"}
            >
              Our Cities
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/About")}
              active={window.location.pathname === "/About" ? true : false}
              className={window.location.pathname === "/About" ? "active" : ""}
              to={"/About"}
            >
              About Us
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick("/News-Events")}
              active={window.location.pathname === "/News-Events" ? true : false}
              className={window.location.pathname === "/News-Events" ? "active" : ""}
              to={"/News-Events"}
            >
              News & Events
            </StyledLink>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
