import React, { Component } from "react";
import styled from "styled-components";
import ufes from './imgs/ufes.jpg'
import uvv from './imgs/uvv.jpg'
import fdv from './imgs/fdv.png'
import ucl from './imgs/ucl.jpg'
import emescam from './imgs/emescam.jpg'
import unesc from './imgs/unesc.jpg'
import ifes from './imgs/ifes.jpg'
import InstituteImage from '../InstituteImage/index'


const DivInstitutes = styled.div`
  background-color: #f4f4f4;
  min-height: max-content;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items: flex-start;
  justify-content: space-between;
  width:80%;
  margin-left:auto;
  margin-right:auto;
  @media (max-width: 992px) {
    justify-content: center;
    width:100%;
  }
  ${props =>
    props.cityInstitute &&
    `
    margin: 0;
    width:106%
    padding-left:3%;
    @media (max-width: 992px) {
    width:110%;
    margin: 0;
  }
  `}
`;

class InstitutesImages extends Component {
  isCity(institute) {
    if(this.props.city === '')
      return true
    else{
      for (let index = 0; index < institute.unidades.length; index++) {
        if (institute.unidades[index].cidade === this.props.city)
          return true
      }
    }
  }
  render() {
    console.log(this.props.Institutos)
    const renderInstitutes = () => {
        return this.props.Institutos.filter(this.isCity.bind(this)).map(institute => (
          <InstituteImage
            cityInstitute={this.props.cityInstitute}
            unidades={institute.unidades}
            name={institute.nome}
            descricao={institute.descricao}
            missao={institute.missao}
            pontosFortes={institute.pontosFortes}
            input={ucl}
          />
        ));
      };
    return (
        
        <DivInstitutes cityInstitute={this.props.cityInstitute}>{renderInstitutes()}</DivInstitutes>
    );
  }
}
export default InstitutesImages;
