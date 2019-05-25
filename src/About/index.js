import React, { Component } from "react";
import styled from "styled-components";
import img from "./oi.jpg";
import img2 from "./opa.jpg";
import Image from "../components/Image/index";
import Footer from "../components/Footer/index";

const DivText = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5vh 0;
`;
const DivImage = styled.div`
  padding: 5vh 0;
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x}) inset;
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
`;
const Heading = styled.h1`
  margin: 0;
  text-transform: uppercase;
  color: ${props => props.color};
  font-size: calc(30px + 4vw);
  line-height: calc(30px + 4vw);
  letter-spacing: 3px;
  padding: 0 0 5vh 0;
`;
const Text = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.color};
  font-weight: lighter;
  font-size: calc(10px + 1vw);
  line-height: calc(10px + 1vw);
  width: 100%;
  text-align: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  border-top: 3px solid ${props => props.color};
  border-bottom: 3px solid ${props => props.color};
  width: 80%;
`;

class About extends Component {
  render() {
    return (
      <div>
        <Image title="ABOUT US" height="100vh" image={img} />
        <DivText>
          <Heading color='#0033ff'>Who we are</Heading>
          <Div color='pink'>
            <Text color='#505050'>
              Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto. Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt. Necessitatibus quia
              rem consequatur maxime. Dolore quis expedita vitae quam totam
              corrupti libero. Itaque qui autem eum. Delectus necessitatibus
              molestias. Ut ipsam accusamus labore molestiae ut tenetur quia
              voluptas velit.
            </Text>
            <Text color='#505050'>
              Similique magnam exercitationem vero velit quis quas incidunt
              animi et. Doloribus voluptatibus at et. Cum aut deserunt aut neque
              provident.Quasi excepturi provident. Ratione laborum nulla sint.
              Quas et perspiciatis iusto. Nostrum ea sunt. Necessitatibus quia
              rem consequatur maxime. Dolore quis expedita vitae quam totam
              corrupti libero. Itaque qui autem eum. Delectus necessitatibus
              molestias. Ut ipsam accusamus labore molestiae ut tenetur quia
              voluptas velit.
            </Text>
            <Text color='#505050'>
              Itaque qui autem eum. Delectus necessitatibus molestias. Ut ipsam
              accusamus labore molestiae ut tenetur quia voluptas
              velit.Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.Quasi excepturi provident. Ratione laborum
              nulla sint. Quas et perspiciatis iusto. Nostrum ea sunt.
              Necessitatibus quia rem consequatur maxime.
            </Text>
          </Div>
        </DivText>
        <DivImage
          x="0.6"
          image={img2}
        >
          <Heading color='#f1f1f1'>Mission</Heading>
          <Div color='#f1f1f1'>
            <Text color='#f1f1f1'>
              Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto. Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt. Necessitatibus quia
              rem consequatur maxime. Dolore quis expedita vitae quam totam
              corrupti libero. Itaque qui autem eum. Delectus necessitatibus
              molestias. Ut ipsam accusamus labore molestiae ut tenetur quia
              voluptas velit.
            </Text>
            <Text color='#f1f1f1'>
              Similique magnam exercitationem vero velit quis quas incidunt
              animi et. Doloribus voluptatibus at et. Cum aut deserunt aut neque
              provident.Quasi excepturi provident. Ratione laborum nulla sint.
              Quas et perspiciatis iusto. Nostrum ea sunt. Necessitatibus quia
              rem consequatur maxime. Dolore quis expedita vitae quam totam
              corrupti libero. Itaque qui autem eum. Delectus necessitatibus
              molestias. Ut ipsam accusamus labore molestiae ut tenetur quia
              voluptas velit.
            </Text>
            <Text color='#f1f1f1'>
              Itaque qui autem eum. Delectus necessitatibus molestias. Ut ipsam
              accusamus labore molestiae ut tenetur quia voluptas
              velit.Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.Quasi excepturi provident. Ratione laborum
              nulla sint. Quas et perspiciatis iusto. Nostrum ea sunt.
              Necessitatibus quia rem consequatur maxime.
            </Text>
          </Div>
        </DivImage>
        <DivText>
          <Heading color='#0033ff'>Lorem Ipsum</Heading>
          <Div color='pink'>
            <Text color='#505050'>
              Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto. Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt. Necessitatibus quia
              rem consequatur maxime. Dolore quis expedita vitae quam totam
              corrupti libero. Itaque qui autem eum. Delectus necessitatibus
              molestias. Ut ipsam accusamus labore molestiae ut tenetur quia
              voluptas velit.
            </Text>
            <Text color='#505050'>
              Similique magnam exercitationem vero velit quis quas incidunt
              animi et. Doloribus voluptatibus at et. Cum aut deserunt aut neque
              provident.Quasi excepturi provident. Ratione laborum nulla sint.
              Quas et perspiciatis iusto. Nostrum ea sunt. Necessitatibus quia
              rem consequatur maxime. Dolore quis expedita vitae quam totam
              corrupti libero. Itaque qui autem eum. Delectus necessitatibus
              molestias. Ut ipsam accusamus labore molestiae ut tenetur quia
              voluptas velit.
            </Text>
            <Text color='#505050'>
              Itaque qui autem eum. Delectus necessitatibus molestias. Ut ipsam
              accusamus labore molestiae ut tenetur quia voluptas
              velit.Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.Quasi excepturi provident. Ratione laborum
              nulla sint. Quas et perspiciatis iusto. Nostrum ea sunt.
              Necessitatibus quia rem consequatur maxime.
            </Text>
          </Div>
        </DivText>
        <Footer/>
      </div>
    );
  }
}
export default About;
