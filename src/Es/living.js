import React, { Component } from 'react';
import styled from 'styled-components';
import Button from "../components/Button/index";
import img from "./ei.jpg";
import img2 from "./ola.jpg";
import {FormattedMessage} from 'react-intl';
import Footer from '../components/Footer/index';


const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x} ) inset;
  position: relative;
  height: ${props => props.height};
  @media (max-width: 600px) {
    height: 82vh;
    box-shadow: 0px 150vh rgba(0, 0, 0, 0.4 ) inset;
    background-attachment: scroll
  }
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
`;
const Title = styled.h1`
  position:fixed;
  font-family: 'Poppins', sans-serif;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: white;
  font-size: calc(40px + 3vw);
  line-height: calc(40px + 3vw);
  letter-spacing: 5px;
  margin:auto;
  margin-top: calc(30px + 2vw);
  width:100%;
  padding:0 2.5%;
  text-align:center;
  @media (max-width: 600px) {
    position:absolute;
  }
`;

const DivText = styled.div`
z-index:100;
  position:relative;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10vh 0;
`;
const DivImage = styled.div`
z-index:100;
  position:relative;
  padding: 10vh 0;
  background-image: url(${props => props.image});
  box-shadow: 0px 300vh rgba(0, 0, 0, ${props => props.x}) inset;
  position: relative;
  height: ${props => props.height};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 600px) {
    background-attachment: scroll
  }
`;
const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  text-align:center;
  max-width:80%;
  margin: 0;
  text-transform: uppercase;
  color: ${props => props.color};
  font-size: calc(15px + 3vw);
  line-height: calc(15px + 3vw);
  letter-spacing: 3px;
  padding: 0 0 1.5vh 0;
  border-bottom: 1.5vh solid ${props => props.border};
`;
const SubHeading = styled.h1`
font-family: 'Poppins', sans-serif;
  text-align:center;
  font-weight:lighter;
  width:100%;
  margin: 0;
  text-transform: ${props => props.uppercase};
  color: ${props => props.color};
  font-size: calc(15px + 1vw);
  line-height: calc(15px + 1vw);
  letter-spacing: 1px;
  padding: 2.5vh 0 4vh 0;
`;
const Text = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color};
  font-weight: lighter;
  font-size: calc(12px + 0.5vw);
  line-height: calc(13px + 0.5vw);
  letter-spacing: 0.25px;
  width: 100%;
`;
const Text2 = styled.li`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color};
  font-weight: lighter;
  margin-bottom:1.5vh;
  font-size: calc(12px + 0.5vw);
  line-height: calc(13px + 0.5vw);
  letter-spacing: 0.25px;
  width: 100%;
  text-align: start;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 80%;
`;
class Living extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <div>
        <Image x='0.5' height="60vh" image={img} >
            <Title><FormattedMessage id="Living"/></Title>
        </Image>
        <DivText>
          <Heading border='pink' color='#0077ff'><FormattedMessage id="TheState"/></Heading>
          <Div >
            <Text color='#505050'>
              <FormattedMessage id="living-es-1"/>
            </Text>
            <Text color='#505050'>
              <FormattedMessage id="living-es-2"/>
            </Text>
            <Text color='#505050'>
              <FormattedMessage id="living-es-3"/>
            </Text>
            <Text color='#505050'>
              <FormattedMessage id="living-es-4"/>
            </Text>
            <Text color='#505050'>
              <FormattedMessage id="living-es-5"/>
            </Text>
            <Text color='#505050'>
              <FormattedMessage id="living-es-6"/>
            </Text>
          </Div>
          <Heading border='pink' color='#0077ff'><FormattedMessage id="Cities"/></Heading>
          <Div >
            <Text2 color='#505050'>
              <FormattedMessage id="our-cities-home3"/>
            </Text2>
            <Text2 color='#505050'>
              <FormattedMessage id="our-cities-home4"/>
            </Text2>
            <Text color='#505050'>
              <FormattedMessage id="our-cities-home1"/>
            </Text>
            <Text color='#505050'>
              <FormattedMessage id="our-cities-home2"/>
            </Text>
          </Div>
          <div className="margin">
            <Button url="/Cities" name={<FormattedMessage id="CitiesTitle" />} />
          </div>
        </DivText>
        <Footer/>
      </div>
    )
  }
}
export default Living
