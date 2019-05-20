import React, { Component } from 'react'
import styled from 'styled-components'
import './index.css';

const Img = styled.div`
  background: url(${props => props.input});
  box-shadow: 0px 45vh rgba(0, 0, 0, 0.35) inset;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 200ms;
  :hover {
    transition: all 100ms;
    box-shadow: 0px 45vh rgba(0, 0, 0, 0.7) inset;
    background-size: 125%;
    cursor:pointer
  }
`;

class InstituteImage extends Component {
  state={
    hover:false
  }
  changeHover(){
    this.setState({...this.state,hover:!this.state.hover})
  }
  changeOut(){
    this.setState({...this.state,hover:!this.state.hover})
  }
  render() {
    return (
     <div onMouseOver={this.changeHover.bind(this)} onMouseOut={this.changeOut.bind(this)} className='root'>
        <Img input={this.props.input}>
          <h1 className={this.state.hover ? 'title2' : 'title'}>{this.props.name}</h1>
        </Img>
     </div>
    )
  }
}
export default InstituteImage
