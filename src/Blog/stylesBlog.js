import styled from "styled-components";

export const ImageIndex = styled.div`
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
export const TitleIndex = styled.h1`
  position:fixed;
  font-family: 'Poppins', serif;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: white;
  font-size: calc(80px + 1vw);
  line-height: calc(80px + 1vw);
  letter-spacing: 5px;
  margin:auto;
  margin-top: calc(30px + 2vw);
  width:100%;
  text-align:center;
  @media (max-width: 600px) {
    position:absolute;
  }
`;

export const Image = styled.div`
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
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 600px) {
  background-size: 100% 100%;
  height: 70vh;
  justify-content: center;
  align-content: center;
  box-shadow: 0px 150vh rgba(0, 0, 0, 0.4) inset;
  }
`;
export const Resume= styled.h1`
  font-family: "Raleway", sans-serif;
  text-align:justify;
  color: #202022;
  font-weight: bold;
  font-size: calc(14px + 1vw);
  line-height: calc(14px + 1vw);
  margin: auto;
  width: 100%;
  text-align: start;
  margin-bottom: 5%;
  @media (max-width: 600px) {
    font-size: calc(15px + 3vw);
    line-height: calc(15px + 3vw);
    margin-bottom: 10%;
  }
`;

export const ImageParagraph = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, 0.2) inset;
  height: ${props => props.height};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1%;
  @media (max-width: 600px) {
    background-size: center;
  height: 40vh;
  }
`;
export const Img = styled.img`
  width: 65%;
  height:50vh;
  margin-right:auto; 
  margin-bottom:5vh;
`;
export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: bold;
  font-size: calc(30px + 2vw);
  line-height: calc(30px + 2vw);
  letter-spacing: 1px;
  margin: auto;
  width: 80%;
  text-align: start;
  margin-bottom: 5%;
  @media (max-width: 600px) {
    font-size: calc(15px + 3vw);
    line-height: calc(15px + 3vw);
    margin-bottom: 10%;
  }
`;
export const SubTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: 500;
  font-size: calc(20px + 1vw);
  line-height: calc(20px + 1vw);
  letter-spacing: 1px;
  margin: auto;
  width: 80%;
  text-align: start;
  @media (max-width: 600px) {
    margin-bottom: 2.5%;
  }
`;
export const SubTitleParagraph= styled.h1`
  font-family: "Poppins", sans-serif;
  text-align:center;
  color: #101011;
  font-size: calc(15px + 1vw);
  line-height: calc(15px + 1vw);
  margin: auto;
  width: 100%;
  margin-top:4%;
  margin-bottom: 5%;
  @media (max-width: 600px) {
    font-size: calc(15px + 3vw);
    line-height: calc(15px + 3vw);
    margin-bottom: 10%;
  }
`;
export const DivText = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 10vh 0;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Subheading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin-left: 10%;
  margin-top: 1%;
  margin-bottom: 1%;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;
export const Text = styled.h1`
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  color: #444;
  font-weight: lighter;
  font-size: calc(7px + 1vw);
  line-height: calc(8px + 1vw);
  width: 100%;
  text-align: start;
  @media (max-width: 600px) {
    font-size: calc(12px + 1vw);
    line-height: calc(12px + 1vw);
  }
  padding: 0 0 1vh 0;
`;
export const Container = styled.div`
  background: #fafafa;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 100;
  position: relative;
`;
export const Details = styled.h1`
  text-align: start;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(7.5px + 1vw);
  line-height: calc(7.5px + 1vw);
  font-weight: 400;
  width: max-content;
  color: #f4f4f4;
  height: max-content;
  @media (max-width: 600px) {
    font-size: calc(16px + 1vw);
    line-height: calc(16px + 1vw);
  }
`;
export const Badge = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.2em;
  line-height: 1.2em;
  width: max-content;
  height: max-content;
  padding: 1vh 0 1vh 1vh;
  margin-left: 10%;
  padding: 1vh;
  background-color: #f4f4f4;
  color: #606060;
  font-weight: bold;
  border-radius: 5%;
  @media (max-width: 600px) {
    margin-top:20%;
  }
`;
export const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  margin: 0;
  background: ${props => props.background || "#fafafa"};
  color: #0077ff;
  background-color: #f4f4f4;
  font-size: calc(5px + 3vw);
  line-height: calc(5px + 3vw);
  width: 100%;
  letter-spacing: 3px;
  padding-top: 5vh;
  text-align: start;
  padding-bottom: 1.5vh;
  padding-left: 7.5%;
  margin-top: 5vh;
  border-bottom: 1px solid #999;
  @media (max-width: 600px) {
    padding-left: 2.5%;
    font-size: calc(10px + 3vw);
    line-height: calc(10px + 3vw);
  }
`;