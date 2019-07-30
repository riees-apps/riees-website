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
    url: "http://www.ufes.br/",
    unidades: [
      {
        nome: "Goiabeiras",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Fernando Ferrari",
        numero: "85",
        complemento: "Após a Ponte da Passagem",
        bairro: "Goiabeiras",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      },
      {
        nome: "Maruipe",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Mal. Campos",
        numero: "1468",
        complemento: "Após a Ponte da Passagem",
        bairro: "Maruipe",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      }
    ]
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
    url: "https://www.uvv.br/",
    unidades: [
      {
        nome: "UVV Business School",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UVV",
        logradouro: "Rua da Lama",
        numero: "Sem número",
        complemento: "Na esquina da padaria",
        bairro: "Jockey de Itaparica",
        cidade: "Vila Velha",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      },
      {
        nome: "Universidade Vila Velha",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UVV",
        logradouro: "Avenida Comissário José Dantas de Melo",
        numero: "21",
        complemento: "Na esquina da padaria",
        bairro: "Boa Vista II",
        cidade: "Vila Velha",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      }
    ]
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
    url: "http://site.fdv.br/",
    unidades: [
      {
        nome: "Goiabeiras",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Fernando Ferrari",
        numero: "85",
        complemento: "Após a Ponte da Passagem",
        bairro: "Goiabeiras",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      },
      {
        nome: "Maruipe",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Mal. Campos",
        numero: "1468",
        complemento: "Após a Ponte da Passagem",
        bairro: "Maruipe",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      }
    ]
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
    url: "http://www.emescam.br/",
    unidades: [
      {
        nome: "Goiabeiras",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Fernando Ferrari",
        numero: "85",
        complemento: "Após a Ponte da Passagem",
        bairro: "Goiabeiras",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      },
      {
        nome: "Maruipe",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Mal. Campos",
        numero: "1468",
        complemento: "Após a Ponte da Passagem",
        bairro: "Maruipe",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      }
    ]
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
    url: "https://www.ucl.br/",
    unidades: [
      {
        nome: "Goiabeiras",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Fernando Ferrari",
        numero: "85",
        complemento: "Após a Ponte da Passagem",
        bairro: "Goiabeiras",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      },
      {
        nome: "Maruipe",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Mal. Campos",
        numero: "1468",
        complemento: "Após a Ponte da Passagem",
        bairro: "Maruipe",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      }
    ]
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
    url: "https://www.unesc.br/",
    unidades: [
      {
        nome: "Goiabeiras",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Fernando Ferrari",
        numero: "85",
        complemento: "Após a Ponte da Passagem",
        bairro: "Goiabeiras",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      },
      {
        nome: "Maruipe",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Mal. Campos",
        numero: "1468",
        complemento: "Após a Ponte da Passagem",
        bairro: "Maruipe",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      }
    ]
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
    url: "https://www.ifes.edu.br/",
    unidades: [
      {
        nome: "Goiabeiras",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Fernando Ferrari",
        numero: "85",
        complemento: "Após a Ponte da Passagem",
        bairro: "Goiabeiras",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      },
      {
        nome: "Maruipe",
        telefone: "+55 (27) 98877-6655",
        descricao: "Unidade pertecente a UFES",
        logradouro: "Av. Mal. Campos",
        numero: "1468",
        complemento: "Após a Ponte da Passagem",
        bairro: "Maruipe",
        cidade: "Vitória",
        cep: "29103-800",
        cursos: [
          "Curso 1",
          "Curso 2",
          "Curso 3",
          "Curso 4",
          "Curso 5",
          "Curso 6"
        ]
      }
    ]
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
        api.get('/postagem?where={"deletedAt":0}').then(res => {
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
              date={event.data}
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
      console.log('inst')
      console.log(Institutes)

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
