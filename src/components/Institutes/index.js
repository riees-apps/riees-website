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
    name: "Ufes",
    subheading: "Universidade Federal do Espirito Santo",
    cities: [
      "vitoria",
      "são mateus",
      "alegre"
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
    name: "Uvv",
    subheading: "Universidade Vila Velha",
    cities: [
      "vila velha",
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
    name: "Fdv",
    subheading: "Faculdade de Direito de Vitória",
    cities: [
      "vitória",
    ],
    areas: [
      "law",
      "social science",
    ],
    img: fdv
  },
  {
    url: "/Institute/Emescam",
    name: "Emescam",
    subheading: "Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória",
    cities: [
      "vitória",
    ],
    areas: [
      'medicine'
    ],
    img: emescam
  },
  {
    url: "/Institute/Ucl",
    name: "Ucl",
    subheading: "Faculdade do Centro Leste",
    cities: [
      "serra",
      "cariacica"
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
    name: "Unesc",
    subheading: "Centro Universitário do Espírito Santo",
    cities: [
      "serra",
      "colatina"
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
    name: "Ifes",
    subheading: "Instituto Federal do Espirito Santo",
    cities: [
      "vitoria",
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
  background-color: #f1f1f1;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items: flex-start;
  justify-content: space-between;
  width:90%;
  padding:4vh 0;
  margin-left:auto;
  margin-right:auto;
  @media (max-width: 767px) {
    justify-content: center;
    width:100%;
  }
`;
class InstitutesImages extends Component {
  render() {
    const renderInstitutes = () => {
        return Institutes.map(institute => (
          <InstituteImage
            cities={institute.cities}
            areas={institute.areas}
            url={institute.url}
            name={institute.name}
            sub={institute.subheading}
            input={institute.img}
          />
        ));
      };
    return (
        <DivInstitutes>{renderInstitutes()}</DivInstitutes>
    );
  }
}
export default InstitutesImages;
