import React, { Component } from "react";
import {Image,ImageParagraph,Badge,Title,Resume,Subheading,Details,SubTitle,SubTitleParagraph,Container,DivText,Heading,Text} from './stylesBlog.js'
import Footer from "../components/Footer/index";
import Blog from "../components/Blog/index";
import Button from "../components/Button/index";


class Post extends Component {
  componentWillMount() {
        document.documentElement.scrollTop = 0;
  }
  render() {
    const {
      title,
      img,
      tag,
      url,
      date,
      dateEvent,
      placeEvent,
      timeEvent,
      text,
    } = this.props;

    return (
      <div>
        <Image x="0.6" height="90vh" image={img}>
          <div>
            <Badge>{tag}</Badge>
            <Title>{title}</Title>
            <Subheading
              className={typeof dateEvent === "undefined" ? "" : "displayNone"}
            >
              <Details>
                <i className={`fas fa-clock iconDate`} /> {date}
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
                <i className={`fas fa-calendar iconDate`} /> {dateEvent}
              </Details>
              <Details>
                <i className={`fas fa-clock iconDate`} /> {timeEvent}
              </Details>
              <Details>
                <i className={`fas fa-map-marker-alt iconDate`} /> {placeEvent}
              </Details>
            </Subheading>
          </div>
        </Image>
        <Container>
          <DivText>
          <Resume>{text}</Resume>
            <ImageParagraph  height="60vh" image={img}/>
            <SubTitleParagraph>Lorem ipsum dolor valor</SubTitleParagraph>
            <Text>
            {text}{text}
            </Text>
            <Text>
            {text}
            </Text>
            <Text>
            Lorem ipsum dolor valor. {text}{text}
            </Text>
            <SubTitleParagraph>Lorem ipsum dolor valor</SubTitleParagraph>
            <Text>
            {text}{text}
            </Text>
            <Text>
            {text}
            </Text>
            <Text>
            Lorem ipsum dolor valor. {text}{text}
            </Text>
            <SubTitleParagraph>Lorem ipsum dolor valor</SubTitleParagraph>
            <Text>
            {text}{text}
            </Text>
            <Text>
            {text}
            </Text>
            <Text>
            Lorem ipsum dolor valor. {text}{text}
            </Text>           
          </DivText>
          <Heading>Latest posts</Heading>
          <Blog side final={9} />
          <Button url="/Blog" name="Return to blog" />
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Post;
