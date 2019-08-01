import React, { Component } from "react";
import {
  Image,
  ImageParagraph,
  Badge,
  Title,
  Resume,
  Subheading,
  Details,
  SubTitle,
  SubTitleParagraph,
  Container,
  DivText,
  Heading,
  Text
} from "./stylesBlog.js";
import Footer from "../components/Footer/index";
import Blog from "../components/Blog/index";
import Button from "../components/Button/index";
import "./post.css";

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
class Post extends Component {
  componentWillMount() {
    document.documentElement.scrollTop = 0;
  }
  render() {
    const { titulo, img, tags, url, capa, data, conteudo, resumo } = this.props;

    const ano = new Date(data).getFullYear();
    const mes = months[new Date(data).getMonth()];
    const dia = new Date(data).getDate();
    return (
      <div>
        <Image
          x="0.6"
          height="75vh"
          image={`https://riees-api.herokuapp.com/bucket/${
            capa !== null ? capa : ""
          }`}
        >
          <div>
            <Badge>{tags[0]}</Badge>
            <Title>{titulo}</Title>
            <Subheading
              className={typeof dateEvent === "undefined" ? "" : "displayNone"}
            >
              <Details>
                <i className={`fas fa-calendar iconDate`} />{" "}
                {`${dia} ${mes}, ${ano}`}
              </Details>
            </Subheading>

            <SubTitle
              className={typeof dateEvent !== "undefined" ? "" : "displayNone"}
            >
              Event details
            </SubTitle>
            <Subheading
              className={typeof dateEvent !== "undefined" ? "" : "displayNone"}
            >
              <Details>
                <i className={`fas fa-calendar iconDate`} />{" "}
                {`${dia} ${mes}, ${ano}`}
              </Details>
            </Subheading>
          </div>
        </Image>
        <Container>
          <DivText>
            <Resume>{resumo}</Resume>
            <ImageParagraph height="60vh" image={img} />
            <div
              className="innerHTMLPost"
              dangerouslySetInnerHTML={{ __html: conteudo }}
            />
          </DivText>
          <Heading>Latest posts</Heading>
          <Blog postagens={this.props.posts} side final={9} />
          <div className="divBtnPost">
            <Button url="/Blog" name="Return to blog" />
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Post;
