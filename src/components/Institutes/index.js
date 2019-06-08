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


const Institutes = [
  {
    url: "/Institute/Ufes",
    name: "UFES",
    subheading: "Universidade Federal do Espirito Santo",
    cities: [
      "Vitória",
      "São Mateus",
      "Alegre"
    ],
    areas: [
      "engineering",
      "social science",
      "medicine",
      "engineering",
      "social science",
      "medicine",
      "fitness and health",
    ],
    img: ufes
  },
  {
    url: "/Institute/Uvv",
    name: "UVV",
    subheading: "Universidade Vila Velha",
    cities: [
      "Vila Velha",
    ],
    areas: [
      "engineering",
      "social science",
      "medicine",
      "engineering",
      "social science",
      "medicine",
      "fitness and health",
    ],
    img: uvv
  },
  {
    url: "/Institute/Fdv",
    name: "FDV",
    subheading: "Faculdade de Direito de Vitória",
    cities: [
      "Vitória",
    ],
    areas: [
      "law",
      "social science",
    ],
    img: fdv
  },
  {
    url: "/Institute/Emescam",
    name: "EMESCAM",
    subheading: "Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória",
    cities: [
      "Vitória",
    ],
    areas: [
      'medicine'
    ],
    img: emescam
  },
  {
    url: "/Institute/Ucl",
    name: "UCL",
    subheading: "Faculdade do Centro Leste",
    cities: [
      "Serra",
      "Cariacica"
    ],
    areas: [
      "engineering",
      "social science",
      "medicine"
    ],
    img: ucl
  },
  {
    url: "/Institute/Unesc",
    name: "UNESC",
    subheading: "Centro Universitário do Espírito Santo",
    cities: [
      "Serra",
      "Colatina"
    ],
    areas: [
      "engineering",
      "social science",
      "medicine"
    ],
    img: unesc
  },
  {
    url: "/Institute/Ifes",
    name: "IFES",
    subheading: "Instituto Federal do Espirito Santo",
    cities: [
      "Vitória",
              "Alegre",
              "Aracruz",
              "Barra de São Francisco",
              "Cachoeiro de Itapemirim",
              "Cariacica",
              "Santa Maria de Jetibá",
              "Colatina",
              "Guarapari",
              "Ibatiba",
              "Itapina",
              "Linhares",
              "Montanha",
              "Nova Venécia",
              "Piúma",
              "Santa Teresa",
              "São Mateus",
              "Serra",
              "Venda Nova do Imigrante",
              "Viana",
              "Vila Velha"
    ],
    areas: [
      "engineering",
      "social science",
      "medicine"
    ],
    img: ifes
  },
];

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
      for (let index = 0; index < institute.cities.length; index++) {
        if (institute.cities[index] === this.props.city)
          return true
      }
    }
  }
  render() {
    const renderInstitutes = () => {
        return Institutes.filter(this.isCity.bind(this)).map(institute => (
          <InstituteImage
            cityInstitute={this.props.cityInstitute}
            cities={institute.cities}
            areas={institute.areas}
            name={institute.name}
            sub={institute.subheading}
            input={institute.img}
          />
        ));
      };
    return (
        
        <DivInstitutes cityInstitute={this.props.cityInstitute}>{renderInstitutes()}</DivInstitutes>
    );
  }
}
export default InstitutesImages;
