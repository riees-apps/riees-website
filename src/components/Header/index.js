import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import {FormattedMessage} from 'react-intl'

import "./header.css";
import logo1 from "./riees1.png";
import logo2 from "./riees3.png";
import br from "./brazil-flag.png";
import us from "./united-flag.png";

const StyledLink = styled(Link)`
  font-family: 'Poppins', serif;
  text-transform: uppercase;
  box-sizing: 100%;
  color: #505050;
  font-size: calc(1.1vw);
  line-height: calc(1.1vw);
  letter-spacing: 0.25vw;
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
    line-height: calc(1px + 1.5vw);
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
    padding:2vh 0;
    padding-left:2vh;
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
      menu: false,
      lang:'pt'
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
    var split = active.split('/')
    var lang = split[1] 
    this.setState({
      lang: lang,
      active: active,
      menu: false
    });
  }
  changePathname(active) {
    var split = active.split('/')
    var lang = split[1] 
    this.setState({
      lang: lang,
      active: active,
      menu: false
    });
    window.location.pathname = (active)
  }
  openMenu() {
    this.setState({ ...this.state, menu: !this.state.menu });
  }
  changeHover() {
    this.setState({ ...this.state, hover: !this.state.hover });
  }
  changeLang(lang) {
    this.setState({ ...this.state, lang: lang });
    console.log(this.state.lang)
    var split = this.state.active.split('/')
    split[1] = lang
    var split2 = split.join('/')
    this.changePathname(split2)
  }
  changeOut() {
    this.setState({ ...this.state, hover: !this.state.hover });
  }
  componentDidMount() {
    window.onscroll = () => this.handleScroll();
    var split = window.location.pathname.split('/')
    var lang = split[1] 
    this.setState({ ...this.state, active: window.location.pathname,lang: lang });
  }
  render() {
    return (
      <div shadow={this.state.menu ? true : false}
        className={window.location.pathname.split('/')[2] === 'Admin' ? 'displayNone' : this.state.scroll ? "container2"  : "container1"}
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
        
        <div className={this.state.scroll ? "containerLinksScroll" : "containerLinks"}>
            
          <div className={this.state.scroll ? "divFlagScroll" : "divFlag"}>
          <i className={`fab fa-facebook-f iconFace`} />
          <i className={`fab fa-instagram iconInsta`} />
          <StyledLink
            onClick={() => this.changeLang('pt')}
            className={this.state.scroll ? "scroll" : ""}
            >
                        <img
              
              src={br}
              className="flag"
              alt=''
            />
            
          </StyledLink>

          <StyledLink
            onClick={() => this.changeLang('en')}
            className={this.state.scroll ? "scroll" : ""}
          >
            <img
              
              src={us}
              className="flag"
              alt=''
            />
          </StyledLink>
          
          </div>
          <div className={this.state.scroll ? "divLinksScroll" : "divLinks"}>
          <StyledLink
            onClick={() => this.handleClick(`/${this.state.lang}`)}
            active={this.state.active === `/${this.state.lang}` ? true : false}
            className={this.state.scroll ? "scroll" : ""}
            to={`/${this.state.lang}`}
          >
            <FormattedMessage id="Home"/>
          </StyledLink>

          <StyledLink
            onClick={() => this.handleClick(`/${this.state.lang}/Institutes`)}
            active={this.state.active === `/${this.state.lang}/Institutes` ? true : false}
            className={this.state.scroll ? "scroll" : ""}
            to={`/${this.state.lang}/Institutes`}
          >
            <FormattedMessage id="Institutes"/>
          </StyledLink>
          <StyledLink
            onMouseOver={this.changeHover.bind(this)}
            onMouseOut={this.changeOut.bind(this)}
            active={
              this.state.active === `/${this.state.lang}/Cities` ||
              this.state.active === `/${this.state.lang}/Coming` ||
              this.state.active === `/${this.state.lang}/Living`
                ? true
                : false
            }
            className={this.state.scroll ? "dropscroll" : "dropdown"}
          >
            Espirito Santo
            <div class="dropdown-content">
              <StyledLink
                li
                onClick={() => this.handleClick(`/${this.state.lang}/Coming`)}
                className={this.state.scroll ? "scroll2" : ""}
                to={`/${this.state.lang}/Coming`}
              >
                <FormattedMessage id="Coming"/>
              </StyledLink>
              <StyledLink
                li
                onClick={() => this.handleClick(`/${this.state.lang}/Living`)}
                className={this.state.scroll ? "scroll2" : ""}
                to={`/${this.state.lang}/Living`}
              >
                <FormattedMessage id="Living"/>
              </StyledLink>
              <StyledLink
                li
                onClick={() => this.handleClick(`/${this.state.lang}/Cities`)}
                className={this.state.scroll ? "scroll2" : ""}
                to={`/${this.state.lang}/Cities`}
              >
                <FormattedMessage id="Cities"/>
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
            onClick={() => this.handleClick(`/${this.state.lang}/News-Events`)}
            active={this.state.active === `/${this.state.lang}/News-Events` ? true : false}
            className={this.state.scroll ? "scroll" : ""}
            to={`/${this.state.lang}/News-Events`}
          >
            <FormattedMessage id="News"/>
          </StyledLink>
          <StyledLink
            onClick={() => this.handleClick(`/${this.state.lang}/Blog`)}
            active={this.state.active === `/${this.state.lang}/Blog` ? true : false}
            className={this.state.scroll ? "scroll" : ""}
            to={`/${this.state.lang}/Blog`}
          >
            <FormattedMessage id="Blog"/>
          </StyledLink>
          <StyledLink
            onClick={() => this.handleClick(`/${this.state.lang}/About`)}
            active={this.state.active === `/${this.state.lang}/About` ? true : false}
            className={this.state.scroll ? "scroll" : ""}
            to={`/${this.state.lang}/About`}
          >
            <FormattedMessage id="About"/>
          </StyledLink>
          </div>

          
        </div>

        <i
          onClick={this.openMenu.bind(this)}
          className={this.state.menu ? "fa fa-times menu2" : "fa fa-bars menu"}
        />
        <div
          onClick={this.openMenu.bind(this)}
          className={this.state.menu ? "menu-content" : "menu-contentNone"}
        >
          <div className={this.state.menu ? "menu-links" : "menuNone"}>
            <StyledLink
              li
              onClick={() => this.handleClick(`/${this.state.lang}`)}
              active={window.location.pathname ===`/${this.state.lang}` ? true : false}
              className={window.location.pathname === `/${this.state.lang}` ? "active" : ""}
              to={`/${this.state.lang}`}
            >
              <FormattedMessage id="Home"/>
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick(`/${this.state.lang}/Institutes`)}
              active={window.location.pathname === `/${this.state.lang}/Institutes` ? true : false}
              className={
                window.location.pathname === `/${this.state.lang}/Institutes` ? "active" : ""
              }
              to={`/${this.state.lang}/Institutes`}
            >
              <FormattedMessage id="Institutes"/>
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick(`/${this.state.lang}/Coming`)}
              active={window.location.pathname === `/${this.state.lang}/Coming` ? true : false}
              className={window.location.pathname === `/${this.state.lang}/Coming` ? "active" : ""}
              to={`/${this.state.lang}/Coming`}
            >
              <FormattedMessage id="Coming"/>
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick(`/${this.state.lang}/Living`)}
              active={window.location.pathname === `/${this.state.lang}/Living` ? true : false}
              className={window.location.pathname === `/${this.state.lang}/Living` ? "active" : ""}
              to={`/${this.state.lang}/Living`}
            >
              <FormattedMessage id="Living"/>
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick(`/${this.state.lang}/Cities`)}
              active={window.location.pathname === `/${this.state.lang}/Cities` ? true : false}
              className={window.location.pathname === `/${this.state.lang}/Cities` ? "active" : ""}
              to={`/${this.state.lang}/Cities`}
            >
              <FormattedMessage id="Cities"/>
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick(`/${this.state.lang}/News-Events`)}
              active={window.location.pathname === `/${this.state.lang}/News-Events` ? true : false}
              className={window.location.pathname === `/${this.state.lang}/News-Events` ? "active" : ""}
              to={`/${this.state.lang}/News-Events`}
            >
              <FormattedMessage id="News"/>
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick(`/${this.state.lang}/Blog`)}
              active={window.location.pathname === `/${this.state.lang}/Blog` ? true : false}
              className={window.location.pathname === `/${this.state.lang}/Blog` ? "active" : ""}
              to={`/${this.state.lang}/Blog`}
            >
              Blog
            </StyledLink>
            <StyledLink
              li
              onClick={() => this.handleClick(`/${this.state.lang}/About`)}
              active={window.location.pathname === `/${this.state.lang}/About` ? true : false}
              className={window.location.pathname === `/${this.state.lang}/About` ? "active" : ""}
              to={`/${this.state.lang}/About`}
            >
              <FormattedMessage id="About"/>
            </StyledLink>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
