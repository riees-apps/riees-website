import styled from "styled-components";

export const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x}) inset;
  position: relative;
  height: ${props => props.height};
  @media (max-width: 600px) {
    height: 82vh;
    box-shadow: 0px 150vh rgba(0, 0, 0, 0.4) inset;
    background-attachment: scroll
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
export const Title = styled.h1`
  position: fixed;
  font-family: "Poppins", serif;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: white;
  font-size: calc(50px + 2vw);
  line-height: calc(50px + 2vw);
  letter-spacing: 5px;
  margin: auto;
  margin-top: calc(30px + 2vw);
  width: 100%;
  padding: 0 2.5%;
  text-align: center;
  @media (max-width: 600px) {
    position: absolute;
  }
`;

export const DivText = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 5vh 0;
  z-index: 10;
  position: relative;
`;
export const DivImage = styled.div`
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
  width: 50%;
  @media (max-width: 600px) {
    background-attachment: scroll
  }
`;
export const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  text-align: center;
  width: max-content;
  max-width: 80%;
  margin: auto;
  color: ${props => props.color};
  font-size: calc(10px + 2vw);
  line-height: calc(10px + 2vw);
  letter-spacing: 3px;
  padding: 0 0 0.5vw 0;
  border-bottom: 8px solid ${props => props.border};
`;
export const Text = styled.h1`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: "Poppins", sans-serif;
  color: ${props => props.color};
  font-weight: lighter;
  font-size: calc(8px + 1vw);
  line-height: calc(11px + 1vw);
  width: 95%;
  text-align: start;
  margin-bottom:5%;

`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 80%;
`;
export const DivHeading = styled.div`
  padding: 5% 0;
  background-color: #fafafa;
  width: 100%;
  z-index: 100;
  position: relative;
`;
export const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 100;
  position: relative;
`;
