import React, { Component } from 'react'
import styled from 'styled-components'
import img from "./oi.jpg";
import img2 from "./ola.jpg";
import Image from '../components/Image/index'
import Footer from '../components/Footer/index'

const DivText = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10vh 0;
`;
const DivImage = styled.div`
  padding: 10vh 0;
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
  font-size: calc(20px + 4vw);
  line-height: calc(20px + 4vw);
  letter-spacing: 3px;
  padding: 0 0 1.5vh 0;
  border-bottom: 8px solid ${props => props.border};
`;
const SubHeading = styled.h1`
  margin: 0;
  text-transform: ${props => props.uppercase};
  color: ${props => props.color};
  font-size: calc(10px + 2vw);
  line-height: calc(10px + 2vw);
  letter-spacing: 1px;
  padding: 2.5vh 0 4vh 0;
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
const Text2 = styled.li`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.color};
  font-weight: lighter;
  margin-bottom:1.5vh;
  font-size: calc(10px + 1vw);
  line-height: calc(10px + 1vw);
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
class Coming extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <div>
        <Image title='COMING TO ESPIRITO SANTO' height="100vh" image={img}/>
        <DivText>
            <Heading border='pink' color='#0033ff'>Documents you Need</Heading>
            <Div >
            <SubHeading uppercase='uppercase' color='#303030'>Passport</SubHeading>
            <Text2 color='#505050'>
              Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto. Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt.
            </Text2>
            <Text2 color='#505050'>
              Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto.
            </Text2>
            <SubHeading uppercase='uppercase' color='#303030'>Loremipsum</SubHeading>
            <Text2 color='#505050'>
              Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto.
            </Text2>
            <Text2 color='#505050'>
              Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto. Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt.
            </Text2>
            <Text2 color='#505050'>
              Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto.
            </Text2>
          </Div>
        </DivText>
        <DivImage
          x="0.8"
          image={img2}
        >
          <Heading border='#fafafa' color='#fafafa'>Before you leave</Heading>
          <Div >
            <SubHeading color='#fafafa'>
              Similique magnam exercitationem vero velit quis quas incidunt
              animi et.
            </SubHeading>
            <Text2 color='#fafafa'>
              Itaque qui autem eum. Delectus necessitatibus molestias. Ut ipsam
              accusamus labore molestiae ut tenetur quia voluptas
              velit.Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.
            </Text2>
            <Text2 color='#fafafa'>
              Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.
            </Text2>
            <Text2 color='#fafafa'>
              Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.
            </Text2>
            <SubHeading color='#fafafa'>
              Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.
            </SubHeading>
            <Text2 color='#fafafa'>
              Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.
            </Text2>
            <Text2 color='#fafafa'>
              Itaque qui autem eum. Delectus necessitatibus molestias. Ut ipsam
              accusamus labore molestiae ut tenetur quia voluptas
              velit.Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.
            </Text2>
            <Text2 color='#fafafa'>
              Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.
            </Text2>
            <Text2 color='#fafafa'>
              Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.Similique magnam exercitationem vero velit quis quas
              incidunt animi et. Doloribus voluptatibus at et. Cum aut deserunt
              aut neque provident.
            </Text2>
          </Div>
        </DivImage>
        <DivText>
            <Heading border='pink' color='#0033ff'>Lorem Ipsum</Heading>
            <Div >
            <SubHeading color='#303030'>
              Similique magnam exercitationem vero velit quis quas incidunt
              animi et.
            </SubHeading>
            <Text color='#505050'>
              Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto. Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt.
            </Text>
            <Text color='#505050'>
              Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Ratione laborum nulla sint. Quas et
              perspiciatis iusto.  Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt.
            </Text>
            <Text color='#505050'>
              Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt.Quasi excepturi provident. Ratione laborum nulla sint. Quas et
              perspiciatis iusto. Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt.
            </Text>
            <Text color='#505050'>
              Ratione laborum nulla sint. Quas et
              perspiciatis iusto.Quasi excepturi provident.  Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt.
            </Text>
            <Text color='#505050'>
              Ratione laborum nulla sint. Quas et
              perspiciatis iusto. Similique magnam exercitationem vero velit
              quis quas incidunt animi et. Doloribus voluptatibus at et. Cum aut
              deserunt aut neque provident. Nostrum ea sunt.
            </Text>
          </Div>
        </DivText>
        <Footer/>
      </div>
    )
  }
}
export default Coming
