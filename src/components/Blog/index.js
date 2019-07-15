import React, { Component } from "react";
import { DivPosts, DivLatests, DivHeading, Form, Heading } from "./styles";

import ufes from "./imgs/img1.jpg";
import uvv from "./imgs/img2.jpg";
import ifes from "./imgs/vilavelha.jpg";
import ucl from "./imgs/vitoria.jpg";
import { FormattedMessage } from "react-intl";

import "./index.css";
import LatestPost from "./latestPosts";
import PostCard from "./PostCard";

const posts = [
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil in velit lorem ipsum valor1.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      " Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dossalore ipsum Dolore nihil in velit lorem ipsum valor2.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",

    img: uvv
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit lorem ipsum valor3.",
    date: "Dec 06, 2019",
    tag:"Tag2",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit  lorem ipsum valor4.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil velit lorem ipsum valor5.",
    date: "Dec 06, 2019",
    tag:"Tag3",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit lorem ipsum valor6.",
    date: "Dec 06, 2019",
    tag:"Tag4",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit lorem ipsum valor7.",
    date: "Dec 06, 2019",
    tag:"Tag2",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in veli lorem ipsum valort8.",
    date: "Dec 06, 2019",
    tag:"Tag5",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit9.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.18",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil in velit lorem ipsum valor1.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dossalore ipsum Dolore nihil in velit2.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit3.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit4.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihil  velit5.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit6.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit7.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit8.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit27.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.36",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autema ida placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.37",
    date: "Dec 06, 2019",
    tag:"Tag1",
    text:
      "Autema id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  }
];

class Blog extends Component {
  componentDidMount() {
    this.setState({
      ...this.state,
      final: this.props.final
    });
  }
  constructor() {
    super();
    this.state = {
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
      event.props.text.toUpperCase().indexOf(`${this.state.value.toUpperCase()}`) !== -1 ||
      event.props.title.toUpperCase().indexOf(`${this.state.value.toUpperCase()}`) !== -1
    )
      return true;
    return false;
  };
  render() {
    const renderPosts = () => {
      return posts.map(post => (
        <PostCard
          side="true"
          title={post.title}
          placeEvent={post.placeEvent}
          timeEvent={post.timeEvent}
          dateEvent={post.dateEvent}
          text={post.text}
          tag={post.tag}
          img={post.img}
          date={post.date}
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
            input={this.props.img}
            width="50%"
            height="80vh"
            larger={this.props.larger}
            title={posts[0].title}
            placeEvent={posts[0].placeEvent}
            timeEvent={posts[0].timeEvent}
            dateEvent={posts[0].dateEvent}
            text={posts[0].text}
            tag={posts[0].tag}
            img={posts[0].img}
            date={posts[0].date}
          />
          <DivLatests secAndTrd="true">
            <LatestPost
              secAndTrd="true"
              width="100%"
              height="39vh"
              side={this.props.side}
              larger={this.props.larger}
              title={posts[1].title}
              placeEvent={posts[1].placeEvent}
              timeEvent={posts[1].timeEvent}
              dateEvent={posts[1].dateEvent}
              text={posts[1].text}
              tag={posts[1].tag}
              img={posts[1].img}
              date={posts[1].date}
            />
            <LatestPost
              secAndTrd="true"
              width="100%"
              height="39vh"
              side={this.props.side}
              larger={this.props.larger}
              title={posts[2].title}
              placeEvent={posts[2].placeEvent}
              timeEvent={posts[2].timeEvent}
              dateEvent={posts[2].dateEvent}
              text={posts[2].text}
              tag={posts[2].tag}
              img={posts[2].img}
              date={posts[2].date}
            />
          </DivLatests>
          <DivLatests fourthAndFifth="true">
            <LatestPost
              secAndTrd="true"
              width="50%"
              height="39vh"
              side={this.props.side}
              larger={this.props.larger}
              title={posts[3].title}
              placeEvent={posts[3].placeEvent}
              timeEvent={posts[3].timeEvent}
              dateEvent={posts[3].dateEvent}
              text={posts[3].text}
              tag={posts[3].tag}
              img={posts[3].img}
              date={posts[3].date}
            />
            <LatestPost
              secAndTrd="true"
              width="49%"
              height="39vh"
              side={this.props.side}
              larger={this.props.larger}
              title={posts[4].title}
              placeEvent={posts[4].placeEvent}
              timeEvent={posts[4].timeEvent}
              dateEvent={posts[4].dateEvent}
              text={posts[4].text}
              tag={posts[4].tag}
              img={posts[4].img}
              date={posts[4].date}
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
        <DivPosts side>
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
