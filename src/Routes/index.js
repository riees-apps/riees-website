import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReactLoading from "react-loading";
import "./routes.css";
import api from "../api/api";

import { isAuthenticated } from "../api/auth";

import Members from '../Institutes/index.js'
import Dashboard from "../srcDashboard/App.js";
import About from "../About/index.js";
import Contact from "../Contact/index.js";
import NewsEvents from "../News-Events/index.js";
import Blog from "../Blog/index.js";
import Event from "../News-Events/event.js";
import Post from "../Blog/post.js";
import Cities from "../Cities/index.js";
import City from "../Cities/city.js";
import Es from "../Es/index.js";
import Coming from "../Es/coming.js";
import Living from "../Es/living.js";
import Home from "../Home/index.js";
import Institute from "../Institutes/institute.js";
import Admin from "../Admin/index.js";
import Header from "../components/Header/index.js";
import img1 from "../components/Cities/imgs/vilavelha.jpg";
import img2 from "../components/Cities/imgs/vitoria.jpg";


const LANGUAGES = {
  pt: {
    urlLang: "pt",
    code: "pt-BR"
  },
  en: {
    urlLang: "en",
    code: "en-US"
  },
  default: "en"
};

const MultiLanguageRoute = props => {
  const defaultLanguage = LANGUAGES.pt.urlLang;
  const hasLang = props.computedMatch.params.lang;
  const is404Page = props.path;
  const isBasePathWithoutLang = props.path === "/";

  if (isBasePathWithoutLang) return <Redirect to={`/${defaultLanguage}`} />;
  if (!hasLang && !is404Page) return <Redirect to={`/${defaultLanguage}`} />;

  return <Route {...props} />;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const image = new Image();
const image2 = new Image();
const image3 = new Image();
const image4 = new Image();
const image5 = new Image();
class Routes extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: [],
      Institutes: [],
      Cidades: [],
      Eventos: [],
      Posts: []
    };
  }
  loaded() {
    this.setState({ isLoading: [] });
  }
  componentDidMount() {
    api
      .get('/instituicao?where={"deletedAt":0}')
      .then(res => {
        const inst = res.data;
        
        this.setState({ Institutes: inst });
      })
      .then(res => {
        api.get('/cidade?where={"deletedAt":0}').then(res => {
          const city = res.data;

          this.setState({ Cidades: city });
        });
      })
      .then(res => {
        api.get('/evento?where={"deletedAt":0}').then(res => {
          const event = res.data;

          this.setState({ Eventos: event });
        });
      })
      .then(res => {
        api.get('/publicacao?where={"deletedAt":0}').then(res => {
          const post = res.data;
          this.setState({ Posts: post });
        });
      })
      .then(() => {
        this.setState({ isLoading: this.state.Posts });
      } );
  }

  render() {
    const { Institutes, Cidades, Eventos, Posts } = this.state;

    const renderPosts2 = () => {
      return Posts.map(post => (
        <MultiLanguageRoute
          path={`/:lang/Post/${post.id}`}
          component={props => (
            <Post
              {...props}
              capa={post.capa}
              posts={Posts}
              titulo={post.titulo}
              conteudo={post.conteudo}
              resumo={post.resumo}
              data={post.data}
              tags={post.tags}
              link={post.link}
              img={img1}
            />
          )}
        />
      ));
    };
    const renderEvents2 = () => {
      return Eventos.map(event => (
        <MultiLanguageRoute
          path={`/:lang/Events/${event.id}`}
          component={props => (
            <Event
              {...props}
              capa={event.capa}
              eventos={Eventos}
              title={event.nome}
              text={event.descricao}
              date={event.dataInicio}
              dateFim={event.dataFim}
              placeEvent={event.localizacao}
              link={event.link}
              img={img1}
              img2={img2}
            />
          )}
        />
      ));
    };
    const renderInstitutes2 = () => {
      return Institutes.map(institute => (
        <MultiLanguageRoute
          path={`/:lang/Institute/${institute.nome}`}
          component={props => (
            <Institute
              {...props}
              url={institute.link}
              name={institute.nome}
              pontosFortes={institute.pontosFortes}
              descricao={institute.descricao}
              missao={institute.missao}
              id={institute.id}
              img={img1}
              logo={institute.logo}
              unidades={institute.unidades}
              institutes={Institutes}
            />
          )}
        />
      ));
    };
    const renderCities2 = () => {
     
      return Cidades.map(city => (
        <MultiLanguageRoute
          path={`/:lang/City/${city.nome}`}
          component={props => (
            <City
              {...props}
              capa={city.capa}
              institutes={Institutes}
              Cidades={Cidades}
              name={city.nome}
              id={city.id}
              places={city.pontos}
              descricao={city.descricao}
            />
          )}
        />
      ));
    };

    while (this.state.Posts.length === 0) {

      return (
        <div className={this.state.isLoading ? "spinDiv" : "displayNone"}>
          <ReactLoading className="spin" type="spin" color="#357edd" />
        </div>
      );
    } 
      return (
        <BrowserRouter>
          <Header />
          <Switch>
            <MultiLanguageRoute exact path="/" />
            <MultiLanguageRoute
              exact
              path="/:lang"
              component={props => (
                <Home
                  {...props}
                  Institutes={this.state.Institutes}
                  Eventos={this.state.Eventos}
                  imgHome={image.src}
                  imgHome2={image2.src}
                  imgHome3={image3.src}
                  imgHome4={image4.src}
                  imgHome5={image5.src}
                />
              )}
            />
            <MultiLanguageRoute
              path="/:lang/News-Events"
              component={props => <NewsEvents {...props} Eventos={this.state.Eventos} />}
            />
            <MultiLanguageRoute
              path="/:lang/Blog"
              component={props => <Blog {...props} Posts={this.state.Posts} />}
            />
            <MultiLanguageRoute
              path="/:lang/Cities"
              component={props => <Cities {...props} Cidades={this.state.Cidades} />}
            />
             <MultiLanguageRoute
              path="/:lang/Members"
              component={props => <Members {...props} Institutes={this.state.Institutes} />}
            />
            <MultiLanguageRoute path="/:lang/About" component={About} />
            <MultiLanguageRoute path="/:lang/Contact" component={Contact} />
            <MultiLanguageRoute path="/:lang/Es" component={Es} />
            <MultiLanguageRoute path="/:lang/Coming" component={Coming} />
            <MultiLanguageRoute path="/:lang/Living" component={Living} />
            {renderPosts2()}
            {renderEvents2()}
            {renderInstitutes2()}
            {renderCities2()}
            <Route path="/:lang/Admin" component={Admin} />
            <PrivateRoute
              path="/en/dashboard/show-institutes"
              component={Dashboard}
            />
          </Switch>
        </BrowserRouter>
      );
  }
}
export default Routes;
