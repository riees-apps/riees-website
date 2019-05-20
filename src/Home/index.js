import React, { Component } from "react";
import Button from "../components/Button/index";
import Footer from "../components/Footer/index";
import './index.css';
import styled from "styled-components";
import img from "./opa.jpg";
import img2 from "./ei.jpg";
import ufes from './imgs/ufes.jpg'
import uvv from './imgs/uvv.jpg'
import fdv from './imgs/fdv.png'
import ucl from './imgs/ucl.jpg'
import emescam from './imgs/emescam.jpg'
import ifes from './imgs/ifes.jpg'
import InstituteImage from '../components/InstituteImage/index'


const DivInstitutes = styled.div`
  background-color: #f1f1f1;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items: flex-start;
  justify-content: space-around;
  width:100%;
  padding:2.5vh 0;
`;
const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 100vh rgba(0, 0, 0, 0.4) inset;
  position: relative;
  height: ${props => props.height};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  width: 100%;
  filter:  contrast(${props => props.contrast});
  filter: brightness(${props => props.brightness});
`;
const Title = styled.h1`
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: white;
  font-size: calc(50px + 4vw);
  line-height: calc(50px + 4vw);
  letter-spacing: 4px;
  margin: 0;
  margin-top: calc(50px + 3vw)
`;
const Subheading = styled.h4`
  color: white;
  font-size: calc(13px + 1vw);
  letter-spacing: 1px;
  font-weight: lighter;
  line-height: calc(13px + 1vw);
  margin: 0;
  margin-bottom: calc(15px + 1vw);
`;
const Heading = styled.h1`
  margin:0;
  background:#f1f1f1;
  text-transform: uppercase;
  color: #0033ff;
  font-size: calc(30px + 4vw);
  line-height: calc(30px + 4vw);
  letter-spacing: 3px;
  padding-top:2.5vh;
`;
const Text = styled.h1`
  margin:40px 0;
  color: #505050;
  font-weight:lighter;
  font-size: calc(10px + 1vw);
  line-height: calc(10px + 1vw);
  padding: calc(10px + 1vw) 0;
  border-top: 3px solid pink;
  border-bottom: 3px solid pink;
  width: 80%;
`;
const DivText = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding:40px 0;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Image height="100vh" image={img} brightness="120%" contrast="140%" align='center' justify='center'>
          <div>
            <Title>Come to meet us</Title>
            <Subheading>Non distinctio quasi alias est.</Subheading>
          </div>
          <Button name="Learn More" />
        </Image>
        <DivText>
          <Heading>ABOUT RIEES</Heading>
          <Text>
            Aut molestiae velit id maxime accusantium. Dolorem qui ab
            accusantium qui et et tenetur facilis. Quia odio hic ea qui
            molestias minima. Asperiores corrupti id qui rem. Ea a consectetur
            sequi. Voluptatem reiciendis sed perspiciatis. Consequatur a
            voluptates eos vel a harum quae. Temporibus sed ut voluptas. Est
            temporibus nisi quaerat ea et. Quaerat cumque sit eveniet cum
            consequuntur suscipit. Error maiores voluptatem totam sint. Illum ab
            laudantium culpa similique. Vero dignissimos labore quos consequatur
            explicabo.Quia reiciendis aliquid nisi. Placeat voluptatem corporis
            ea ipsam alias. Et sit consequatur in nisi voluptatum tempore est
            sequi. Eos aspernatur hic. Nobis autem vel non.
          </Text>
          <Button name='Learn More'/>
        </DivText>
        <Image  brightness="100%" contrast="100%" image={img2} align='flex-start' justify='flex-start'>
            <h1 className='head'>Coming to Espirito Santo</h1>
            <p className='paragraph'>Aut molestiae velit id maxime accusantium. Dolorem qui ab
            accusantium qui et et tenetur facilis. Quia odio hic ea qui
            molestias minima. Asperiores corrupti id qui rem. Ea a consectetur
            sequi. Voluptatem reiciendis sed perspiciatis. Consequatur a
            voluptates eos vel a harum quae. Temporibus sed ut voluptas. Est
            temporibus nisi quaerat ea et. Quaerat cumque sit eveniet cum
            consequuntur suscipit. Error maiores voluptatem totam sint. Illum ab
            laudantium culpa similique. Vero dignissimos labore quos consequatur
            explicabo.Quia reiciendis aliquid nisi. Placeat voluptatem corporis
            ea ipsam alias. Et sit consequatur in nisi voluptatum tempore est
            sequi. Eos aspernatur hic. Nobis autem vel non.</p>
            <div className='margin'>
              <Button  name='Learn More'/>
            </div>
        </Image>
        <Heading>OUR INSTITUTES</Heading>
        <DivInstitutes>
            <InstituteImage name="UFES" input={ufes} />
            <InstituteImage name="UVV" input={uvv} />
            <InstituteImage name="FDV" input={fdv} />
            <InstituteImage name="IFES" input={ifes} />
            <InstituteImage name="UCL" input={ucl} />
            <InstituteImage name="EMESCAm" input={emescam} />
        </DivInstitutes>


        <Footer/>    
      </div>
    );
  }
}
export default Home;
