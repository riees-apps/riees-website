import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReactLoading from "react-loading";
import "./routes.css";

import { isAuthenticated } from "../api/auth";

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
import vitoria from "../components/Cities/imgs/vitoria.jpg";
import vilaVelha from "../components/Cities/imgs/vilavelha.jpg";
import img1 from "../components/Cities/imgs/vilavelha.jpg";
import img2 from "../components/Cities/imgs/vitoria.jpg";
// Img HomePage
import imgHome from "../Home/opa.jpg";
import imgHome2 from "../Home/ei.jpg";
import imgHome3 from "../Home/ola.jpg";
import imgHome4 from "../Home/oi.jpg";
import imgHome5 from "../Home/esMapa.png";

const eventos = [
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil in velit lorem ipsum valor1.",
    date: "Dec 06, 2019",
    text:
      " Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img1,
    img2: vitoria
  },
  {
    title: "Dossalore ipsum Dolore nihil in velit lorem ipsum valor2.",
    dateEvent: "Dec 06, 2019",
    timeEvent: "4:30 PM",
    placeEvent: "Lorem ipsum",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2,
    img2: vitoria
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit lorem ipsum valor3.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ifes,
    img2: vitoria
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit  lorem ipsum valor4.",
    dateEvent: "Dec 06, 2019",
    timeEvent: "4:30 PM",
    placeEvent: "Lorem ipsum",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl,
    img2: vitoria
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil velit lorem ipsum valor5.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img1,
    img2: vitoria
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit lorem ipsum valor6.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit lorem ipsum valor7.",
    dateEvent: "Dec 06, 2019",
    timeEvent: "4:30 PM",
    placeEvent: "Lorem ipsum",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in veli lorem ipsum valort8.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ifes,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit9.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img1,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ifes,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img1,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit.18",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2,
    img2: vitoria
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil in velit lorem ipsum valor1.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img1,
    img2: vitoria
  },
  {
    title: "Dossalore ipsum Dolore nihil in velit2.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2,
    img2: vitoria
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit3.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ifes,
    img2: vitoria
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit4.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl,
    img2: vitoria
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihil  velit5.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img1,
    img2: vitoria
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit6.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit7.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2,
    img2: vitoria
  },
  {
    title: "Dolorsdse nihil in velit8.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit27.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img1
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img1
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2
  },
  {
    title: "Dolorsdse nihil in velit.36",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2
  },
  {
    title: "Dolorsdse nihil in velit.37",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.Aquia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum ",
    img: img2
  }
];
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
    url: "http://www.ufes.br/"
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
    url: "https://www.uvv.br/"
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
    url: "http://site.fdv.br/"
  },
  {
    name: "EMESCAM",
    subheading:
      "Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória",
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
    url: "http://www.emescam.br/"
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
    url: "https://www.ucl.br/"
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
    url: "https://www.unesc.br/"
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
    url: "https://www.ifes.edu.br/"
  }
];
const cities = [
  {
    url: "/City/Vitoria",
    name: "Vitória",
    img: vitoria,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    url: "/City/VilaVelha",
    name: "Vila Velha",
    img: vilaVelha,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    url: "/City/Cariacica",
    name: "Cariacica",
    img: img1,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    url: "/City/Serra",
    name: "Serra",
    img: img2,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    url: "/City/Colatina",
    name: "Colatina",
    img: vilaVelha,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    url: "/City/Guarapari",
    name: "Guarapari",
    img: vitoria,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    url: "/City/Alegre",
    name: "Alegre",
    img: img2,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  },
  {
    url: "/City/SaoMateus",
    name: "São Mateus",
    img: img1,
    places: [
      {
        name: "Lorem ipsum",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img1
      },
      {
        name: "Lorem valor",
        text:
          "Phasellus porttitor ipsum ac eros porta faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed ornare leo, nec dapibus leo. Aliquam erat volutpat. Maecenas aliquam dui a nibh iaculis, ut mollis elit facilisis.",
        img: img2
      }
    ]
  }
];
const posts = [
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil in velit lorem ipsum valor1.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      " Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img1
  },
  {
    title: "Dossalore ipsum Dolore nihil in velit lorem ipsum valor2.",
    date: "Dec 06, 2019",
    tag: "Tag2",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",

    img: img2
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit lorem ipsum valor3.",
    date: "Dec 06, 2019",
    tag: "Tag2",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit  lorem ipsum valor4.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil velit lorem ipsum valor5.",
    date: "Dec 06, 2019",
    tag: "Tag3",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img1
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit lorem ipsum valor6.",
    date: "Dec 06, 2019",
    tag: "Tag4",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit lorem ipsum valor7.",
    date: "Dec 06, 2019",
    tag: "Tag2",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img2
  },
  {
    title: "Dolorsdse nihil in veli lorem ipsum valort8.",
    date: "Dec 06, 2019",
    tag: "Tag5",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit9.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img2
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img1
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img2
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img1
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img2
  },
  {
    title: "Dolorsdse nihil in velit.18",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img2
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil in velit lorem ipsum valor1.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img1
  },
  {
    title: "Dossalore ipsum Dolore nihil in velit2.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img2
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit3.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit4.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihil  velit5.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: img1
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit6.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit7.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit8.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit27.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.36",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autema ida placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.37",
    date: "Dec 06, 2019",
    tag: "Tag1",
    text:
      "Autema id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  }
];

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
      isLoadingImage: true
    };
  }
  handleImageLoaded() {
    this.setState({ isLoadingImage: false });
  }
  componentWillMount() {
    setTimeout(() => (this.handleImageLoaded()), 2000);
  }
  render() {
    
    const renderPosts = () => {
      return posts.map(post => (
        <MultiLanguageRoute
          path={`/:lang/Post/${post.title}`}
          component={props => (
            <Post
              {...props}
              title={post.title}
              text={post.text}
              date={post.date}
              tag={post.tag}
              img={post.img}
            />
          )}
        />
      ));
    };
    const renderEvents = () => {
      return eventos.map(event => (
        <MultiLanguageRoute
          path={`/:lang/Events/${event.title}`}
          component={props => (
            <Event
              {...props}
              title={event.title}
              text={event.text}
              date={event.date}
              dateEvent={event.dateEvent}
              placeEvent={event.placeEvent}
              timeEvent={event.timeEvent}
              img={event.img}
              img2={event.img2}
            />
          )}
        />
      ));
    };
    const renderInstitutes = () => {
      return institutes.map(institute => (
        <MultiLanguageRoute
          path={`/:lang/Institute/${institute.name}`}
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
        <MultiLanguageRoute
          path={`/:lang/City/${city.name.trim()}`}
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
        <div className={this.state.isLoadingImage ? 'spinDiv' : 'displayNone'}>
          <ReactLoading className='spin' type='spin' color='#357edd'/>
        </div>
        <Header />
        <Switch>
          <MultiLanguageRoute exact path="/" />
          <MultiLanguageRoute
            exact path="/:lang"
            component={props => (
              <Home
                {...props}
                imgHome={image.src}
                imgHome2={image2.src}
                imgHome3={image3.src}
                imgHome4={image4.src}
                imgHome5={image5.src}
              />
            )}
          />
          <MultiLanguageRoute path="/:lang/News-Events" component={NewsEvents} />
          <MultiLanguageRoute path="/:lang/Blog" component={Blog} />
          <MultiLanguageRoute path="/:lang/About" component={About} />
          <MultiLanguageRoute path="/:lang/Contact" component={Contact} />
          <MultiLanguageRoute path="/:lang/Cities" component={Cities} />
          <MultiLanguageRoute path="/:lang/Es" component={Es} />
          <MultiLanguageRoute path="/:lang/Coming" component={Coming} />
          <MultiLanguageRoute path="/:lang/Living" component={Living} />
          <MultiLanguageRoute path="/:lang/Institutes" component={Institutes} />
          {renderPosts()}
          {renderEvents()}
          {renderInstitutes()}
          {renderCities()}
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
