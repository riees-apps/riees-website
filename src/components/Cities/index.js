import React, { Component } from "react";
import styled from "styled-components";
import CityImage from "../CityImage/index";
import vitoria from "./imgs/vitoria.jpg";
import vilaVelha from "./imgs/vilavelha.jpg";
import img1 from "./imgs/img1.jpg";
import img2 from "./imgs/img2.jpg";

const DivCities = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  padding: 4vh 0;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 992px) {
    justify-content: center;
    width: 100%;
  }
`;
class CitiesImages extends Component {
  filtro = item => {
    if (item.descricao === "generica") {
      return false;
    } else return true;
  };
  render() {
    const renderCities = () => {
      return this.props.Cities.filter(this.filtro.bind(this)).map(city => (
        <CityImage
          name={city.nome}
          img={img1}
          capa={city.capa}
          id={city.id}
          places={city.places}
          descricao={city.descricao}
        />
      ));
    };
    return <DivCities>{renderCities()}</DivCities>;
  }
}
export default CitiesImages;
