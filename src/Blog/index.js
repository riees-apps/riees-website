import React, { Component } from "react";
import Footer from "../components/Footer/index";
import Blog from "../components/Blog/index";
import {FormattedMessage} from 'react-intl'
import {TitleIndex,ImageIndex} from './stylesBlog.js'
import img3 from "./agenda.jpg";
import api from '../api/api'

class NewsEvents extends Component {
  componentWillMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    console.log('posts')
      console.log(this.props.Posts)
    return (
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <ImageIndex x='0.5' height="80vh" image={img3} >
            <TitleIndex><FormattedMessage id="Blog"/></TitleIndex>
        </ImageIndex>
        <Blog postagens={this.props.Posts} larger final={9} />
        <Footer />
      </div>
    );
  }
}
export default NewsEvents;
