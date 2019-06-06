import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/index";
import SideMenu from "../components/SideMenu/index";
import AreaCard from "../components/AreaCard/index";
import Button from "../components/Button/index";

const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x} ) inset;
  position: relative;
  height: ${props => props.height};
  @media (max-width: 600px) {
    height: 82vh;
    box-shadow: 0px 150vh rgba(0, 0, 0, 0.4 ) inset;
  }
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const Title = styled.h1`
  position:fixed;
  font-family: 'Oswald', sans-serif;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: white;
  font-size: calc(80px + 1vw);
  line-height: calc(80px + 1vw);
  letter-spacing: 5px;
  margin:auto;
  width:100%;
  text-align:center;
  @media (max-width: 600px) {
    position:absolute;
  }
`;
const DivText = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index:100;
  width: 60%;
  padding-bottom:10vh;
  padding-left:2.5vh;
  @media (max-width: 768px) {
    width:90%;
    padding-left:0;
  }
`;
const Heading = styled.h1`
  font-family: "Avenir Next", Helvetica, Arial, sans-serif;
  color: ${props => props.color};
  font-size: calc(30px + 0.6vw);
  line-height: calc(30px + 0.6vw);
  letter-spacing: 3px;
  padding: 0 5px 5vh 0;
  width:max-content;
`;
const Subheading = styled.h4`
  position:fixed;
  font-family: 'Oswald', sans-serif;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: white;
  letter-spacing: 5px;
  margin:auto;
  margin-top:calc(80px + 1vw);
  width:100%;
  text-align:center;
  font-size: calc(20px + 0.5vw);
  letter-spacing: 1px;
  font-weight: lighter;
  line-height: calc(20px + 0.5vw);
  @media (max-width: 600px) {
    position:absolute;
  }
`;
const Text = styled.h1`
    font-family: "Avenir Next", Helvetica, Arial, sans-serif;
  color: #303032;
  font-weight: lighter;
  font-size: calc(7px + 1vw);
  line-height: calc(8px + 1vw);
  width: 100%;
  text-align: start;
  @media (max-width: 768px) {
    font-size: calc(6px + 1vh);
    line-height: calc(7px + 1vh);
    text-align: justify;
    padding: 0 0 0.5vh 0;
  }
  padding: 0 0 2.5vh 0;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.justify};
  padding: 5vh 0 0 0;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Container = styled.div`
  background:white;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  z-index:100;
  position:relative;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const Img = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background:white;
  padding-bottom:10vh;
  padding-top:3vh;
  width:100%;
  z-index:100;
  position:relative;
  @media (max-width: 768px) {
    padding:0;
    padding-top:3vh;
  }
`;
const Logo = styled.img`
  width:25vw;
  height:12vh;
  z-index:100;
  position:relative;
  @media (max-width: 768px) {
    width:35vw;
    height:10vh;
  }
`;
class Institute extends Component {
  componentWillMount() {
    if(typeof(this.props.location.state) != 'undefined')
    {
      if(this.props.location.state.scrollTop === 0){
        document.documentElement.scrollTop = this.props.location.state.scrollTop
      }
    }
  }
  handleClick(url) {
    console.log(url)
  }
  render() {
    const {name,sub,img,logo,areas,url,institutes} = this.props
    return (
      <div >
        <Image x='0.5' height="80vh" image={img} >
          <div>
            <Title>{name}</Title>
            <Subheading>{sub}</Subheading>
          </div>
        </Image>
        <Img >
          <Logo src={logo} alt=''/>
        </Img>
        <Container>
          <SideMenu page='Institute' links={institutes}/>
          <DivText>
            <Div justify="flex-start">
              <Heading>{name}</Heading>
              <Heading color="rgb(0, 83, 180)">overview</Heading>
            </Div>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc fringilla massa, eget sagittis dolor risus quis purus. Curabitur vitae ligula tristique, finibus tortor id, viverra nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis purus facilisis purus volutpat, in tempus mauris consequat. Mauris tempor non magna vitae condimentum. Phasellus commodo vitae eros ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor mollis placerat imperdiet. Suspendisse in velit m</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc fringilla massa, eget sagittis dolor risus quis purus. Curabitur vitae ligula tristique, finibus tortor id, viverra nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis purus facilisis purus volutpat, in tempus mauris consequat. Mauris tempor non magna vitae condimentum. Phasellus commodo vitae eros ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor mollis placerat imperdiet. Suspendisse in velit m</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc fringilla massa, eget sagittis dolor risus quis purus. Curabitur vitae ligula tristique, finibus tortor id, viverra nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis purus facilisis purus volutpat, in tempus mauris consequat. Mauris tempor non magna vitae condimentum. Phasellus commodo vitae eros ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor mollis placerat imperdiet. Suspendisse in velit m</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc fringilla massa, eget sagittis dolor risus quis purus. Curabitur vitae ligula tristique, finibus tortor id, viverra nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis purus facilisis purus volutpat, in tempus mauris consequat. Mauris tempor non magna vitae condimentum. Phasellus commodo vitae eros ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor mollis placerat imperdiet. Suspendisse in velit m</Text>
              <AreaCard name={name} areas={areas}/>
              <Button url={url}  name='Visit the institute website'></Button>
              <Button return={true} color='#FF1493' url='/Institutes' name='All institutes'></Button>
          </DivText>
        </Container>
        <Footer/>
      </div>
    );
  }
}
export default Institute;
