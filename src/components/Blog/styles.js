import styled from "styled-components";
import { Link } from "react-router-dom";
export const Card = styled.div`
  transition: all 300ms;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 30%;
  height: 65vh;
  transition: all 600ms;
  background-color: #fafafa;
  margin-bottom: 5%;
  box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.51);
  border-radius: 5px;
  @media (max-width: 600px) {
    width: 70%;
    height: 48vh;
    margin-bottom: 10%;
  }
  ${props =>
    props.side &&
    `
    box-shadow: none;
    border-radius:0;
    padding-bottom:10vh;
    border-bottom: 1px solid #999;
    background-color: #f4f4f4;
    width:80%;
    height: 30vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      padding-bottom:5vh;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 95%;
      height: 50vh;
  }
  `
  }
`;
export const CardImg = styled(Link)`
  transition: all 150ms ease-in;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background: url(${props => props.input});
  box-shadow: 0px 45vh rgba(0, 0, 0, 0.1) inset;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 32.5vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media (max-width: 600px) {
    background-size: 100% 100%;
    height: 24vh;
  }
  :hover {
    background-size: 105% 105%;
    transition: all 100ms ease-in;
    box-shadow: 0px 45vh rgba(20, 20, 20, 0.5) inset;
    cursor: pointer;
  }
  ${props =>
    props.side &&
    `
    border-top-left-radius:0;
    border-top-right-radius:0;
    width:40%;
    height: 30vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: space-between;
    @media (max-width: 600px) {
      width: 100%;
      height: 50vh;
    }
  `}
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 31vh;
  padding-left: 1vh;
  padding-top: 1vh;
  @media (max-width: 600px) {
    background-size: cover;
    height: 22.5vh;
  }
  ${props =>
    props.larger &&
    `
    margin-left:2vh;
  `}
  ${props =>
    props.side &&
    `
    width:60%
    height: 30vh;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 600px) {
      padding-left:0;
    width: 100%;
    height: 25vh;
  }
  `}
`;

export const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x}) inset;
  position: relative;
  height: ${props => props.height};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 250ms;
  width: ${props => props.width};
  @media (max-width: 600px) {
  background-size: 100% 100%;
  height: ${props => props.height};
  justify-content: center;
  align-content: center;
  }
  :hover {
    transition: all 250ms;
    background-size: 102% 102%;
    box-shadow: 0px 150vh rgba(0, 0, 0, 0.7) inset;
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: bolder;
  font-size: calc(10px + 1.75vw);
  line-height: calc(10px + 1.75vw);
  letter-spacing: 1px;
  margin: auto;
  width: 90%;
  text-align: start;
  margin-bottom: 2.5%;
  @media (max-width: 600px) {
    font-size: calc(15px + 3vw);
    line-height: calc(15px + 3vw);
    margin-bottom: 10%;
  }
  ${props =>
    props.secAndTrd &&
    `
    font-size: calc(10px + 1vw);
    line-height: calc(9px + 1vw);
  `}
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

export const Details = styled.div`
  text-align: start;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center ;
  justify-content: flex-start;
  font-size: calc(7.5px + 1vw);
  line-height: calc(7.5px + 1vw);
  font-weight: 400;
  width: 100%;
  color: #f4f4f4;
  height: max-content;
  @media (max-width: 600px) {
    font-size: calc(16px + 1vw);
    line-height: calc(16px + 1vw);
  }
  ${props =>
    props.secAndTrd &&
    `
    font-size: calc(2px + 1vw);
    line-height: calc(2px + 1vw);
  `}
`;
export const Badge = styled.h1`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1em;
  line-height: 1em;
  width: max-content;
  height: max-content;
  margin-left: 5%;
  padding: 1vh;
  background-color: #f4f4f4;
  color: #303033;
  font-weight: bold;
  border-radius: 5%;
  margin-right:2.5vh;
  @media (max-width: 600px) {
    margin-top:20%;
  }
`;
export const SubTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: lighter;
  font-size: calc(7px + 1vw);
  line-height: calc(8px + 1vw);
  letter-spacing: 1px;
  margin: auto;
  width: 90%;
  text-align: start;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;  /* Number of lines displayed before it truncate */
  overflow: hidden;
  margin-bottom:5%;
  @media (max-width: 600px) {
    margin-bottom: 2.5%;
  }
  ${props =>
    props.secAndTrd &&
    `
    font-size: calc(2px + 1vw);
    line-height: calc(4px + 1vw);
  `}
`;

export const DivPosts = styled.div`
  transition: all 300ms;
  background-color: #f4f4f4;
  min-height: max-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 120%;
  padding: 5% 2.5%;
  margin-left: -10%;
  @media (max-width: 600px) {

  }
  ${props =>
    props.side &&
    `
    width: 100%;
    margin: 0;
    padding: 0;
    padding-bottom: 5%;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
    
    width: 100%;
    justify-content: center;
  }
  }
  `}
`;
export const DivLatests = styled.div`
  transition: all 300ms;
  background-color: #f4f4f4;
  min-height: max-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin:auto;
  padding-top: 5%;
  @media (max-width: 600px) {
    display:none;
  }
  ${props =>
    props.secAndTrd &&
    `
    padding: 0;
    margin:0;
    height:80vh;
    width:49%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
  `}
  ${props =>
    props.fourthAndFifth &&
    `
    padding: 0;
    margin:0;
    width:100%;
    margin-top:1%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
  `}
`;
export const Check = styled.div`
  transition: all 300ms;
  width: 5.3vh;
  height: 5.3vh;
  border-radius: 100%;
  border: 2px solid #ccc;
  background-color: #f4f4f4;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 4vh;
    height: 4vh;
  }
  ${props =>
    props.active &&
    `
    transition:all 500ms ease;
    background-color: #0077ff;
    border:2px solid #ccc;
    
  `}
`;
export const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  margin: 0;
  background: ${props => props.background || "#fafafa"};
  text-align: center;
  color: #0077ff;
  font-size: calc(18px + 3vw);
  line-height: calc(18px + 3vw);
  margin-top: 10vh;
  width: max-content;
  padding-bottom: 1.5vh;
  border-bottom: 1vh solid pink;
`;
export const DivHeading = styled.h1`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2.5%;
  margin-bottom:0;
  @media (max-width: 600px) {
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
    
  }
`;
export const Form = styled.div`
  background-color: #f4f4f4;
  transition: all 300ms;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
  width: 80%;
  margin: 0;
  margin-left: auto;
  
  @media (max-width: 600px) {
    width:100%;
    margin-top:5%;
  }
`;