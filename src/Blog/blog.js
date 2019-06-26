import React, { Component } from "react";
import {Image,Badge,Title,Subheading,Details,SubTitle,Container,DivText,Heading,Text} from './stylesBlog.js'
import Footer from "../components/Footer/index";
import Events from "../components/Events/index";
import Button from "../components/Button/index";


class Blog extends Component {
  componentWillMount() {
        document.documentElement.scrollTop = 0;
  }
  render() {
    const {
      title,
      img,
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
            <Badge>{typeof dateEvent !== "undefined" ? "Event" : "New"}</Badge>
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
            <Text>
              {text}
            </Text>
            <Text>
            {text}
            </Text>
            <Text>
            {text}
            </Text>
            <Button className={typeof dateEvent !== "undefined" ? "" : "displayNone"}  url={url} name="sign up here" />
          </DivText>
          <Heading>Latest news</Heading>
          <Events side final={9} />
          <Button url="/News-Events" name="All news and events" />
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Blog;
