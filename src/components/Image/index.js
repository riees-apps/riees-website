import React, { Component } from 'react'
import styled from 'styled-components'

const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 100vh rgba(0, 0, 0, 0.25) inset;
  position: relative;
  height: ${props => props.height};
  @media (max-width: 600px) {
    height: calc(91.7vh);
  }
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  width: 100%;
  filter:  contrast(${props => props.contrast});
  filter: brightness(${props => props.brightness});
`;
const Title = styled.h1`
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  text-align: center;
  color: #fafafa;
  font-size: calc(50px + 4vw);
  line-height: calc(50px + 4vw);
  letter-spacing: 4px;
  margin: 0;
  margin-top: calc(30px + 2vw)
`;

class Img extends Component {
  render() {
    return (
      <Image height={this.props.height} image={this.props.image} brightness="100%" contrast="140%" align='center' justify='center'>
        <Title>{this.props.title}</Title>
      </Image>
    )
  }
}
export default Img
