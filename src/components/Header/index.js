import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { FaCaretDown,FaCaretUp } from 'react-icons/fa';
import {IoIosMenu,IoMdClose} from 'react-icons/io'
import './header.css'
import logo1 from './riees1.png'
import logo2 from './riees3.png'

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
  ${props => props.active &&`
    border-bottom: 3px solid #000066;
    text-align: center;
    color: #000066;
    transition:  all 0.15s linear;
    cursor:text;
    :hover {
    border-bottom: 3px solid #000066;
    color: #000066;
    transform: scale(1);
    transition:  all 0.15s linear;
  }
  `}
  ${props => props.active2 &&`
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
  ${props => props.li &&`
  @media (max-width: 600px) {
    display:block;
    text-align:start;
    margin-left:10px;
    margin-top:10px;
    font-size: calc(8px + 1vw);
  }
  font-size: calc(1.5px + 1vw);
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  :hover {
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    cursor:pointer;
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
  }
  `}
`;



class Header extends Component {
  constructor() {
    super();
    this.state = {
       scroll: false,
       active: 'Home',
       hover:false,
       menu:false
    }
  }
  handleScroll() { 
   if (document.documentElement.scrollTop > 0) {
      this.setState({
        scroll: true
      })
    }
    if (document.documentElement.scrollTop === 0) {
      this.setState({
        scroll: false
      })
    }
  }
  handleClick(active){
    this.setState({
      active: active,
      menu:!this.state.menu
    })
  }
  openMenu(){
    this.setState({...this.state,menu:!this.state.menu})
  }
  changeHover(){
    this.setState({...this.state,hover:!this.state.hover})
  }
  changeOut(){
    this.setState({...this.state,hover:!this.state.hover})
  }
  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }
  render() {
    return (
     <div className={this.state.scroll ? 'container2': 'container1'}>    
        <StyledLink onClick={()=> this.handleClick('Home')} active={this.state.active === 'Home' ? true : false} className={this.state.scroll ? 'scroll': ''} to={"/"} >Home</StyledLink>
        
        <StyledLink onClick={()=> this.handleClick('Institute')} active={this.state.active === 'Institute' ? true : false} className={this.state.scroll ? 'scroll': ''} to={"/Institutes"} >Our Institutes</StyledLink>
        
        <div className='div'>
          <img className={this.state.scroll ? 'logo1Scroll': 'logo1'} src={logo1} alt=''/>
          <img className={this.state.scroll ? 'logo2Scroll': 'logo2'} src={logo2} alt=''/>
        
        </div> 
        <StyledLink onMouseOver={this.changeHover.bind(this)} onMouseOut={this.changeOut.bind(this)} active2={this.state.active === 'Es' ? true : false} className={this.state.scroll ? 'dropscroll': 'dropdown'}>
        Espirito Santo
        <FaCaretUp className={this.state.hover ? '' : 'displayNone'}/>
        <FaCaretDown className={this.state.hover ? 'displayNone' : '' }/>
        
        <div class="dropdown-content">
        <StyledLink li onClick={()=> this.handleClick('Es')}  className={this.state.scroll ? 'scroll2': ''} to={"/Coming"} >Coming to Espirito Santo</StyledLink>
        <StyledLink li onClick={()=> this.handleClick('Es')}  className={this.state.scroll ? 'scroll2': ''} to={"/Living"} >Living in Espirito Santo</StyledLink>
        <StyledLink li onClick={()=> this.handleClick('Es')}  className={this.state.scroll ? 'scroll2': ''} to={"/Cities"} >Our Cities</StyledLink>
        
        </div>
        
        </StyledLink>
        
        <StyledLink onClick={()=> this.handleClick('About')} active={this.state.active === 'About' ? true : false} className={this.state.scroll ? 'scroll': ''} to={"/About"} >About Us</StyledLink>
        <IoMdClose onClick={this.openMenu.bind(this)} className={this.state.menu ? 'menu': 'displayNone'}/>
        <IoIosMenu onClick={this.openMenu.bind(this)} className={this.state.menu ? 'displayNone': 'menu'}/>
        <div className={this.state.menu ? 'menu-content': 'menuNone'}>
          <StyledLink li onClick={()=> this.handleClick('Home')} active={this.state.active === 'Home' ? true : false}  to={"/"} >Home</StyledLink>
          <StyledLink li onClick={()=> this.handleClick('Institute')} active={this.state.active === 'Institute' ? true : false}  to={"/Institutes"} >Our Institutes</StyledLink>
          <StyledLink li onClick={()=> this.handleClick('Es1')} active2={this.state.active === 'Es1' ? true : false}   to={"/Coming"} >Coming to Espirito Santo</StyledLink>
          <StyledLink li onClick={()=> this.handleClick('Es2')} active2={this.state.active === 'Es2' ? true : false}   to={"/Living"} >Living in Espirito Santo</StyledLink>
          <StyledLink li onClick={()=> this.handleClick('Es3')} active2={this.state.active === 'Es3' ? true : false}   to={"/Cities"} >Our Cities</StyledLink>
          <StyledLink li onClick={()=> this.handleClick('About')} active={this.state.active === 'About' ? true : false}  to={"/About"} >About Us</StyledLink>
        </div>

     </div>
    )
  }
}
export default Header
