import React, { Component } from 'react'
import styled from 'styled-components'
const H = styled.h1`
  color: black;
  padding-top:10vh
`;
class Es extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <div>
        <H>Es</H>
      </div>
    )
  }
}
export default Es
