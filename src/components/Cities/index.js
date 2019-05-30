import React, { Component } from "react";
import styled from "styled-components";
import CityImage from '../CityImage/index'
import vitoria from './imgs/vitoria.jpg'
import vilaVelha from './imgs/vilavelha.jpg'
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'


const Cities = [
  {
    name: "Vitória",
    img: vitoria
  },
  {
    name: "Vila Velha",
    img: vilaVelha
  },
  {
    name: "Cariacica",
    img: img1
  },
  {
    name: "Serra",
    img: img2
  },
  {
    name: "Colatina",
    img: vilaVelha
  },
  {
    name: "Guarapari",
    img: vitoria
  },
  {
    name: "Alegre",
    img: img2
  },
  {
    name: "São Mateus",
    img: img1
  },
];

const DivCities = styled.div`
  background-color: #fafafa;
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
  @media (max-width: 992px) {
    justify-content: center;
    width:100%;
  }
`;
class CitiesImages extends Component {
  render() {
    const renderCities = () => {
        return Cities.map(city => (
          <CityImage
            name={city.name}
            img={city.img}
          />
        ));
      };
    return (
        <DivCities>{renderCities()}</DivCities>
    );
  }
}
export default CitiesImages;
