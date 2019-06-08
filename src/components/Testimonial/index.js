import React, { Component } from "react";
import "./testimonial.css";
import {FormattedMessage} from 'react-intl'
import styled from "styled-components";

const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 100vh rgba(0, 0, 0, ${props => props.x}) inset;
  position: relative;
  height: ${props => props.height};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  z-index: 1;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  width: 100%;
  filter: contrast(${props => props.contrast});
  filter: brightness(${props => props.brightness});
  @media (max-height: 600px) {
    height: 100vh;
  }
`;

class Testimonial extends Component {
  render() {
    return (
      <Image
        x={this.props.x}
        height={this.props.height}
        image={this.props.image}
        brightness="100%"
        contrast="140%"
        align="center"
        justify="flex-start"
      >
        <h1 className="head2"><FormattedMessage id="Testimonial"/></h1>
        <div className='divTestimonial'>
          <p className="paragraph2">{this.props.p}</p>
          <h1 className="autor">{this.props.author}</h1>
          <h1 className="city">{this.props.city}</h1>
        </div>
      </Image>
    );
  }
}
export default Testimonial;
