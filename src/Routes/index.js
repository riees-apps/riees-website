import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../srcDashboard/App.js";
import About from "../About/index.js";
import NewsEvents from "../News-Events/index.js";
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
import vitoria from '../components/Cities/imgs/vitoria.jpg'
import vilaVelha from '../components/Cities/imgs/vilavelha.jpg'
import img1 from '../components/Cities/imgs/vilavelha.jpg'
import img2 from '../components/Cities/imgs/vitoria.jpg'

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
const cities = [
  {
    url:'/City/Vitoria',
    name: "Vitória",
    img: vitoria,
    places: [
      {name:"Lorem ipsum",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img1
      },
      {name:"Lorem valor",
      text:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img2
      },
  ]
  },
  {
    url:'/City/VilaVelha',
    name: "Vila Velha",
    img: vilaVelha,
    places: [
      {name:"Lorem ipsum",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img1
      },
      {name:"Lorem valor",
      text:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img2
      },
  ]
  },
  {
    url:'/City/Cariacica',
    name: "Cariacica",
    img: img1,
    places: [
      {name:"Lorem ipsum",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img1
      },
      {name:"Lorem valor",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img2
      },
  ]
  },
  {
    url:'/City/Serra',
    name: "Serra",
    img: img2,
    places: [
      {name:"Lorem ipsum",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img1
      },
      {name:"Lorem valor",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img2
      },
  ]
  },
  {
    url:'/City/Colatina',
    name: "Colatina",
    img: vilaVelha,
    places: [
      {name:"Lorem ipsum",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img1
      },
      {name:"Lorem valor",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img2
      },
  ]
  },
  {
    url:'/City/Guarapari',
    name: "Guarapari",
    img: vitoria,
    places: [
      {name:"Lorem ipsum",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img1
      },
      {name:"Lorem valor",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img2
      },
  ]
  },
  {
    url:'/City/Alegre',
    name: "Alegre",
    img: img2,
    places: [
      {name:"Lorem ipsum",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img1
      },
      {name:"Lorem valor",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img2
      },
  ]
  },
  {
    url:'/City/SaoMateus',
    name: "São Mateus",
    img: img1,
    places: [
      {name:"Lorem ipsum",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img1
      },
      {name:"Lorem valor",
      text:'Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.',
      img: img2
      },
  ]
  },
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
              institutes={institutes}
            />
          )}
        />
      ));
    };
    const renderCities = () => {
      return cities.map(city => (
        <Route
          path={`/City/${city.name.trim()}`}
          component={props => (
            <City
              {...props}
              url={city.url}
              name={city.name}
              img={city.img}
              places={city.places}
              cities={cities}
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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/News-Events" component={NewsEvents} />
          <Route path="/About" component={About} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Cities" component={Cities} />
          <Route path="/Es" component={Es} />
          <Route path="/Coming" component={Coming} />
          <Route path="/Living" component={Living} />
          <Route path="/Institutes" component={Institutes} />
          {renderInstitutes()}
          {renderCities()}
          <Route path="/Admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
