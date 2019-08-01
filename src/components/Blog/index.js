import React, { Component } from "react";
import { DivPosts, DivLatests, DivHeading, Form, Heading } from "./styles";

import ufes from "./imgs/img1.jpg";
import uvv from "./imgs/img2.jpg";
import ifes from "./imgs/vilavelha.jpg";
import ucl from "./imgs/vitoria.jpg";
import { FormattedMessage } from "react-intl";
import api from "../../api/api";

import "./index.css";
import LatestPost from "./latestPosts";
import PostCard from "./PostCard";


const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
class Blog extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
      page: 1,
      initial: 0,
      final: 3,
      active: "all",
      search: false,
      value: ""
    };
  }

  handleClick(active) {
    this.setState({
      active: active,
      page: 1,
      initial: 0,
      final: this.props.final
    });
  }

  filtro = event => {
    if (
      event.props.text
        .toUpperCase()
        .indexOf(`${this.state.value.toUpperCase()}`) !== -1 ||
      event.props.title
        .toUpperCase()
        .indexOf(`${this.state.value.toUpperCase()}`) !== -1
    )
      return true;
    return false;
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      final: this.props.final,
      posts: this.props.postagens
    });
  }

  render() {
    const posts = this.props.postagens;
    const renderPosts = () => {
      return posts.map(post => (
        <PostCard
          side={this.props.side} 
          larger={this.props.larger}
          id={post.id}
          capa={post.capa}
          title={post.titulo}
          text={post.resumo}
          tag={post.tags[0]}
          img={ufes}
          ano={new Date(post.data).getFullYear()}
          mes={months[new Date(post.data).getMonth()]}
          dia={new Date(post.data).getDate()}
        />
      ));
    };
    var events = renderPosts();
    events = events.filter(this.filtro.bind(this));
    const renderItems = (initial, final) => {
      return events.slice(initial, final);
    };
    const openSearch = () => {
      this.setState({
        ...this.state,
        search: !this.state.search,
        value: "",
        page:
          this.state.search === true && this.state.value !== ""
            ? 1
            : this.state.page,
        initial:
          this.state.search === true && this.state.value !== ""
            ? 0
            : this.state.initial,
        final:
          this.state.search === true && this.state.value !== ""
            ? this.props.final
            : this.state.final
      });
    };
    const prevItems = event => {
      if (this.props.larger && this.state.page !== 1) {
        document.documentElement.scrollTop = window.innerHeight * 2;
      }
      return event.slice(
        this.setState({
          ...this.state,
          page: this.state.page === 1 ? 1 : this.state.page - 1,
          initial:
            this.props.final === 3
              ? this.state.initial === 0
                ? this.state.initial
                : this.state.initial - 1
              : this.state.initial === 0
              ? 0
              : this.state.initial - this.props.final,
          final:
            this.props.final === 3
              ? this.state.final === 3
                ? this.state.final
                : this.state.final - 1
              : this.state.final === this.props.final
              ? this.props.final
              : this.state.final - this.props.final
        })
      );
    };
    const nextItems = event => {
      if (
        this.props.larger &&
        this.state.page !==
          Math.ceil(events.length !== 0 ? events.length / this.props.final : 1)
      ) {
        document.documentElement.scrollTop = window.innerHeight * 2;
      }
      return event.slice(
        this.setState({
          ...this.state,
          page:
            this.state.page ===
            Math.ceil(
              events.length !== 0 ? events.length / this.props.final : 1
            )
              ? Math.ceil(
                  events.length !== 0 ? events.length / this.props.final : 1
                )
              : this.state.page + 1,
          initial:
            this.props.final === 3
              ? this.state.initial === events.length - this.props.final
                ? this.state.initial
                : this.state.initial + 1
              : this.state.page ===
                Math.ceil(
                  events.length !== 0 ? events.length / this.props.final : 1
                )
              ? this.state.initial
              : this.state.initial + this.props.final,
          final:
            this.props.final === 3
              ? this.state.final === events.length
                ? this.state.final
                : this.state.final + 1
              : this.state.page ===
                Math.ceil(
                  events.length !== 0 ? events.length / this.props.final : 1
                )
              ? this.state.final
              : this.state.final + this.props.final
        })
      );
    };
    return (
      <div style={{ zIndex: "100", position: "relative" }}>
        <DivLatests className={this.props.larger ? "" : "displayNone"}>
          <LatestPost
            style={{ textDecoration: "none" }}
            side={this.props.side}
            to={`/${window.location.pathname.split("/")[1]}/Post/${
              this.props.title
            }`}
            id={posts[0].id}
            input={ufes}
            width="50%"
            height="80vh"
            larger={this.props.larger}
            capa={posts[0].capa}
            title={posts[0].titulo}
            text={posts[0].resumo}
            tag={posts[0].tags[0]}
            img={ufes}
            ano={new Date(posts[0].data).getFullYear()}
            mes={months[new Date(posts[0].data).getMonth()]}
            dia={new Date(posts[0].data).getDate()}
          />
          <DivLatests secAndTrd="true">
            <LatestPost
              secAndTrd="true"
              width="100%"
              height="39vh"
              side={this.props.side}
              larger={this.props.larger}
              id={posts[1].id}
              capa={posts[1].capa}
              title={posts[1].titulo}
              text={posts[1].resumo}
              tag={posts[1].tags[0]}
              img={ufes}
              ano={new Date(posts[1].data).getFullYear()}
              mes={months[new Date(posts[1].data).getMonth()]}
              dia={new Date(posts[1].data).getDate()}
            />
            <LatestPost
              secAndTrd="true"
              width="100%"
              height="39vh"
              side={this.props.side}
              larger={this.props.larger}
              id={posts[2].id}
              capa={posts[2].capa}
              title={posts[2].titulo}
              text={posts[2].resumo}
              tag={posts[2].tags[0]}
              img={ufes}
              ano={new Date(posts[2].data).getFullYear()}
              mes={months[new Date(posts[2].data).getMonth()]}
              dia={new Date(posts[2].data).getDate()}
            />
          </DivLatests>
          <DivLatests fourthAndFifth="true">
            <LatestPost
              secAndTrd="true"
              width="50%"
              height="39vh"
              side={this.props.side}
              larger={this.props.larger}
              id={posts[3].id}
              capa={posts[3].capa}
              title={posts[3].titulo}
              text={posts[3].resumo}
              tag={posts[3].tags[0]}
              img={ufes}
              ano={new Date(posts[3].data).getFullYear()}
              mes={months[new Date(posts[3].data).getMonth()]}
              dia={new Date(posts[3].data).getDate()}
            />
            <LatestPost
              secAndTrd="true"
              width="49%"
              height="39vh"
              side={this.props.side}
              larger={this.props.larger}
              id={posts[4].id}
              capa={posts[4].capa}
              title={posts[4].titulo}
              text={posts[4].resumo}
              tag={posts[4].tags[0]}
              img={ufes}
              ano={new Date(posts[4].data).getFullYear()}
              mes={months[new Date(posts[4].data).getMonth()]}
              dia={new Date(posts[4].data).getDate()}
            />
          </DivLatests>
        </DivLatests>

        <DivHeading className={this.props.larger ? "" : "displayNone"}>
          <Heading background="#f4f4f4">
            <FormattedMessage id="Posts" />
          </Heading>
          <Form>
            <input
              onChange={e =>
                this.setState({
                  value: e.target.value,
                  page: 1,
                  initial: 0,
                  final: this.props.final
                })
              }
              value={this.state.value}
              type="text"
              name="search"
              className={this.state.search ? "openSearch" : "closeSearch"}
              placeholder="Search by name..."
            />
            <div
              onClick={() => openSearch()}
              className={this.state.search ? "divIconSearch2" : "divIconSearch"}
            >
              <i
                className={
                  this.state.search
                    ? "fas fa-times iconSearch"
                    : "fas fa-search iconSearch2"
                }
              />
            </div>
          </Form>
        </DivHeading>
        <DivPosts side={this.props.side} larger={this.props.larger}>
          <h3 className={` ${events.length === 0 ? "" : "displayNone"}`}>
            <FormattedMessage id="Result" />
          </h3>
          <span className={` ${events.length === 0 ? "" : "displayNone"}`}>
            <FormattedMessage id="Result2" /> "{this.state.value}"{" "}
            <FormattedMessage id="Result3" />
          </span>
          <span className={` ${events.length === 0 ? "" : "displayNone"}`}>
            <FormattedMessage id="Result4" />
          </span>
          {renderItems(this.state.initial, this.state.final)}

          <div className={` ${this.props.larger ? "pages" : "displayNone"}`}>
            <i
              onClick={() => {
                prevItems(renderItems(this.state.initial, this.state.final));
              }}
              className={`fas fa-chevron-left ${
                this.props.larger ? "iconEvent2" : "displayNone"
              }`}
            />
            <h1 className={` ${this.props.larger ? "h1Pages" : "displayNone"}`}>
              <FormattedMessage id="Page" /> {this.state.page}{" "}
              <FormattedMessage id="Of" />{" "}
              {Math.ceil(
                events.length !== 0 ? events.length / this.props.final : 1
              )}
            </h1>
            <i
              onClick={() => {
                nextItems(renderItems(this.state.initial, this.state.final));
              }}
              className={`fas fa-chevron-right ${
                this.props.larger ? "iconEvent2" : "displayNone"
              }`}
            />
          </div>
        </DivPosts>
      </div>
    );
  }
}

export default Blog;
