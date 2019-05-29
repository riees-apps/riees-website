import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "../About/index.js";
import Cities from "../Cities/index.js";
import City from "../Cities/city.js";
import Es from "../Es/index.js";
import Coming from "../Es/coming.js";
import Living from "../Es/living.js";
import Home from "../Home/index.js";
import Institutes from "../Institutes/index.js";
import Institute from "../Institutes/institute.js";
import Admin from "../Admin/index.js";
import Header from "../components/Header/index.js";
import ufes from "../Institutes/imgs/ufes.jpg";
import uvv from "../Institutes/imgs/uvv.jpg";
import fdv from "../Institutes/imgs/fdv.png";
import emescam from "../Institutes/imgs/emescam.jpg";
import unesc from "../Institutes/imgs/unesc.jpg";
import ifes from "../Institutes/imgs/ifes.jpg";
import ucl from "../Institutes/imgs/ucl.jpg";
import ufeslogo from "../Institutes/imgs/ufeslogo.png";
import uvvlogo from "../Institutes/imgs/uvvlogo.png";
import fdvlogo from "../Institutes/imgs/fdvlogo.jpg";
import emescamlogo from "../Institutes/imgs/emescamlogo.jpg";
import unesclogo from "../Institutes/imgs/unesclogo.png";
import ifeslogo from "../Institutes/imgs/ifeslogo.png";
import ucllogo from "../Institutes/imgs/ucllogo.png";

const institutes = [
  {
    name: "UFES",
    subheading: "Universidade Federal do Espirito Santo",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: ufes,
    logo: ufeslogo,
    url: 'http://www.ufes.br/'
  },
  {
    name: "UVV",
    subheading: "Universidade Vila Velha",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: uvv,
    logo: uvvlogo,
    url: 'https://www.uvv.br/'
  },
  {
    name: "FDV",
    subheading: "Faculdade de Direito de Vitória",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: fdv,
    logo: fdvlogo,
    url: 'http://site.fdv.br/'
  },
  {
    name: "EMESCAM",
    subheading:"Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: emescam,
    logo: emescamlogo,
    url: 'http://www.emescam.br/'
  },
  {
    name: "UCL",
    subheading: "Faculdade do Centro Leste",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: ucl,
    logo: ucllogo,
    url: 'https://www.ucl.br/'
  },
  {
    name: "UNESC",
    subheading: "Centro Universitário do Espírito Santo",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: unesc,
    logo: unesclogo,
    url: 'https://www.unesc.br/'
  },
  {
    name: "IFES",
    subheading: "Instituto Federal do Espirito Santo",
    areas: [
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" },
      { name: "Engineering", icon: "cog" },
      { name: "Medicine", icon: "user-md" },
      { name: "Social Science", icon: "users" }
    ],
    img: ifes,
    logo: ifeslogo,
    url: 'https://www.ifes.edu.br/'
  }
];
class Routes extends Component {
  render() {
    const renderInstitutes = () => {
      return institutes.map(institute => (
        <Route
          path={`/Institute/${institute.name}`}
          component={props => (
            <Institute
              {...props}
              url={institute.url}
              name={institute.name}
              sub={institute.subheading}
              img={institute.img}
              areas={institute.areas}
              logo={institute.logo}
            />
          )}
        />
      ));
    };
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Cities" component={Cities} />
          <Route path="/City" component={City} />
          <Route path="/Es" component={Es} />
          <Route path="/Coming" component={Coming} />
          <Route path="/Living" component={Living} />
          <Route path="/Institutes" component={Institutes} />
          {renderInstitutes()}
          <Route path="/Admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
