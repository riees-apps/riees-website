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
  @media (max-height: 600px) {
    height: 90vh;
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
  font-size: calc(40px + 3vw);
  line-height: calc(40px + 3vw);
  letter-spacing: 5px;
  margin:auto;
  width:100%;
  text-align:center;
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
`;
const Heading = styled.h1`
  color: ${props => props.color};
  font-size: calc(25px + 1vw);
  line-height: calc(25px + 1vw);
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
  margin-top:calc(40px + 3vw);
  width:100%;
  text-align:center;
  font-size: calc(13px + 1vw);
  letter-spacing: 1px;
  font-weight: lighter;
  line-height: calc(13px + 1vw);
`;
const Text = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.color};
  font-weight: lighter;
  font-size: calc(7px + 1vw);
  line-height: calc(7px + 1vw);
  width: 100%;
  text-align: start;
  padding: 0 0 2.5vh 0;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.justify};
  padding: 5vh 0 0 0;
  width: 100%;
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
`;
const Img = styled.div`
  background:white;
  padding-bottom:10vh;
  padding-top:3vh;
  width:100%;
  z-index:100;
  position:relative;
`;
const Logo = styled.img`
  width:15vw;
  height:15vh;
  z-index:100;
  position:relative;
`;

class Institute extends Component {
  componentDidMount() {
    if(this.props.location.state.scrollTop === 0){
      document.documentElement.scrollTop = this.props.location.state.scrollTop
    }
  }
  handleClick(url) {
    console.log(url)
  }
  render() {
    const {name,sub,img,logo,areas,url} = this.props

    return (
      <div >
        <Image x='0.6' height="80vh" image={img} >
          <div>
            <Title>{name}</Title>
            <Subheading>{sub}</Subheading>
          </div>
        </Image>
        <Img >
          <Logo src={logo} alt=''/>
        </Img>
        <Container>
          <SideMenu/>
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
          </DivText>
        </Container>
        <Footer/>
      </div>
    );
  }
}
export default Institute;
