import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Button from "../components/Button/index";
import Footer from "../components/Footer/index";
import './home.css';
import styled from "styled-components";
import img from "./opa.jpg";
import img2 from "./ei.jpg";
import img3 from "./ee.jpg";
import img4 from "./oi.jpg";
import img5 from "./ola.jpg";
import InstituteImages from '../components/Institutes/index'
import Events from '../components/Events/index'
import Testimonial from '../components/Testimonial/index'

const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x} ) inset;
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
  @media (max-width: 600px) {
    box-shadow: 0px 150vh rgba(0, 0, 0, 0.35 ) inset;
    height: calc(91.7vh);
  }
`;
const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: #fafafa;
  font-size: calc(50px + 4vw);
  line-height: calc(50px + 4vw);
  letter-spacing: 10px;
  margin: 0;
  margin-top: calc(50px + 3vw)
  
`;
const Subheading = styled.h4`
  font-family: 'Oswald', sans-serif;
  text-shadow: 3px 3px black;
  color: #fafafa;
  font-size: calc(20px + 1vw);
  line-height: calc(20px + 1vw);
  letter-spacing: 1px;
  margin-top: calc(0.5vw);
`;
const Heading = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin:0;
  background:${props => props.background || '#fafafa'};
  text-transform: uppercase;
  color: #0077ff;
  background-color: #f4f4f4;
  font-size: calc(15px + 4vw);
  line-height: calc(15px + 4vw);
  width: max-content;
  letter-spacing: 3px;
  padding-top:5vh;
  padding-bottom:1.5vh;
  margin-top:5vh;
  border-bottom: 1vh solid pink;
`;
const Text = styled.h1`
font-family: "Avenir Next", Helvetica, Arial, sans-serif;
  margin:2vh 0;
  color: #707070;
  font-weight:lighter;
  font-size: calc(7.5px + 1vw);
  line-height: calc(7.5px + 1vw);
  padding: calc(10px + 1vw) 0;
  width: 100%;
  text-align:center;
`;
const DivText = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width:80%;
  margin:0 auto;
  padding-bottom:7.5vh;
`;

class Home extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <div style={{ backgroundColor: "#f4f4f4",textAlign: 'center'}}>
      <Carousel>
          <Carousel.Item>
          <Image x='0.4' height="100vh" image={img} brightness="145%" align='center' justify='center'>
          <div>
            <Title>Come to meet us</Title>
            <Subheading>Non distinctio quasi alias est.</Subheading>
          </div>
          <Button url='/Institutes' name="Learn More" />
          </Image>
          </Carousel.Item>
          <Carousel.Item>
          <Image x='0.4' height="100vh" image={img} brightness="145%" align='center' justify='center'>
          <div>
            <Title>Lorem ipsum dolor</Title>
            <Subheading>Etiam cursus elementum ante a porttitor.</Subheading>
          </div>
          <Button url='/Institutes' name="Learn More" />
          </Image>
          </Carousel.Item>
      </Carousel>

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
            sequi. Eos aspernatur hic. Nobis autem vel non. Aut molestiae velit id maxime accusantium. Dolorem qui ab
            accusantium qui et et tenetur facilis. Quia odio hic ea qui
            molestias minima. Asperiores corrupti id qui rem. Ea a consecteturPlaceat voluptatem corporis
            ea ipsam alias. Et sit consequatur in nisi voluptatum tempore est
            sequi. Eos aspernatur hic. Nobis autem vel non.
            sequi.
          </Text>
          <Button url='/About' name='Learn More'/>
        </DivText>
        

        <Carousel >
          <Carousel.Item>
            <Image x='0.65' height="85vh" brightness="100%" contrast="100%" image={img2} align='center' justify='center'>
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
                  <Button url='/Coming'  name='Learn More'/>
                </div>
            </Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image x='0.65' height="85vh" brightness="100%" contrast="100%" image={img5} align='flex-start' justify='center'>
                <h1 className='head'>Living in Espirito Santo</h1>
                <p className='paragraph'>Ea a consectetur
                sequi. Voluptatem reiciendis sed perspiciatis. Aut molestiae velit id maxime accusantium. Dolorem qui ab
                accusantium qui et et tenetur facilis. Quia odio hic ea qui
                molestias minima. Asperiores corrupti id qui rem. Consequatur a
                voluptates eos vel a harum quae. Temporibus sed ut voluptas. Est
                temporibus nisi quaerat ea et. Quaerat cumque sit eveniet cum
                consequuntur suscipit. Error maiores voluptatem totam sint. Illum ab
                laudantium culpa similique. Vero dignissimos labore quos consequatur
                explicabo.Quia reiciendis aliquid nisi. Placeat voluptatem corporis
                ea ipsam alias. Et sit consequatur in nisi voluptatum tempore est
                sequi. Eos aspernatur hic. Nobis autem vel non.</p>
                <div className='margin'>
                  <Button url='/Living' name='Learn More'/>
                </div>
            </Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image x='0.65' height="85vh" brightness="100%" contrast="100%" image={img4} align='center' justify='center'>
                <h1 className='head'>Our Cities</h1>
                <p className='paragraph'>Temporibus sed ut voluptas. Est
                temporibus nisi quaerat ea et. Quaerat cumque sit eveniet cum
                consequuntur suscipit. Error maiores voluptatem totam sint. Illum ab
                laudantium culpa similique. Vero dignissimos labore quos consequatur
                explicabo.Quia reiciendis aliquid nisi. Temporibus sed ut voluptas. Est
                temporibus nisi quaerat ea et. Quaerat cumque sit eveniet cum
                consequuntur suscipit. Error maiores voluptatem totam sint. Illum ab
                laudantium culpa similique. Vero dignissimos labore quos consequatur
                explicabo.Quia reiciendis aliquid nisi. Placeat voluptatem corporis
                ea ipsam alias. Et sit consequatur in nisi voluptatum tempore est
                sequi. Eos aspernatur hic. Nobis autem vel non.</p>
                <div className='margin'>
                  <Button url='/Cities'  name='Learn More'/>
                </div>
            </Image>
          </Carousel.Item>
        </Carousel>

        <DivText>
        <Heading>OUR INSTITUTES</Heading>
        </DivText>
        <InstituteImages city=''/>
        
        

        <Carousel fade='true'>   
          <Carousel.Item>
            <Testimonial 
            x='0.75' height="90vh" brightness="100%" contrast="100%" image={img3} align='center' justify='center'
            p='Aut molestiae velit id maxime accusantium. Dolorem qui ab
                    accusantium qui et et tenetur facilis. Quia odio hic ea qui
                    molestias minima. Asperiores corrupti id qui rem. Ea a consectetur
                    sequi. Voluptatem reiciendis sed perspiciatis. Consequatur a
                    voluptates eos vel a harum quae. Temporibus sed ut voluptas. Est
                    temporibus nisi quaerat ea et. Quaerat cumque sit eveniet cum
                    consequuntur suscipit. Error maiores voluptatem totam sint. Illum ab
                    laudantium culpa similique. Vero dignissimos labore quos consequatur
                    explicabo.Quia reiciendis aliquid nisi. Placeat voluptatem corporis
                    ea ipsam alias. Et sit consequatur in nisi voluptatum tempore est
                    sequi. Eos aspernatur hic. Nobis autem vel non.'
            author='Carmen Rodrigues'
            city=' Santiago, Chile'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Testimonial 
            x='0.75' height="90vh" brightness="100%" contrast="100%" image={img3} align='center' justify='center'
            p='Voluptatem reiciendis sed perspiciatis. Consequatur a
                    voluptates eos vel a harum quae. Temporibus sed ut voluptas. Est
                    temporibus nisi quaerat ea et. Quaerat cumque sit eveniet cum
                    consequuntur suscipit. Error maiores voluptatem totam sint. Illum ab
                    laudantium culpa similique. Vero dignissimos labore quos consequatur
                    explicabo.Quia reiciendis aliquid nisi. Placeat voluptatem corporis
                    ea ipsam alias. Et sit consequatur in nisi voluptatum tempore est
                    sequi. Eos aspernatur hic. Nobis autem vel non.'
            author='Ulices Ernser'
            city=' Santiago, Chile'
            />
          </Carousel.Item>
        </Carousel>
        <DivText>
        <Heading background='#f4f4f4'>NEWS & EVENTS</Heading>
        <Events final={3}/>
        </DivText>
       
        <Footer/>    
      </div>
    );
  }
}
export default Home;
