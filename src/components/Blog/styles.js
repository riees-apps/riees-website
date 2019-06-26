import styled from "styled-components";

export const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x}) inset;
  position: relative;
  height: ${props => props.height};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 500ms;
  width: ${props => props.width};
  @media (max-width: 600px) {
  background-size: 100% 100%;
  height: ${props => props.height};
  justify-content: center;
  align-content: center;
  }
  :hover {
    transition: all 500ms;
    box-shadow: 0px 150vh rgba(0, 0, 0, 0.7) inset;
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  font-family: "Puppin", sans-serif;
  color: white;
  font-weight: bolder;
  font-size: calc(10px + 1.75vw);
  line-height: calc(10px + 1.75vw);
  letter-spacing: 1px;
  margin: auto;
  width: 80%;
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
    font-size: calc(9px + 1vw);
    line-height: calc(8px + 1vw);
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1em;
  line-height: 1em;
  width: max-content;
  height: max-content;
  margin-left: 10%;
  padding: 1vh;
  background-color: #f4f4f4;
  color: #606060;
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
  font-size: calc(10px + 1vw);
  line-height: calc(10px + 1vw);
  letter-spacing: 1px;
  margin: auto;
  width: 80%;
  text-align: start;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;  /* Number of lines displayed before it truncate */
  overflow: hidden;
  @media (max-width: 600px) {
    margin-bottom: 2.5%;
  }
  ${props =>
    props.secAndTrd &&
    `
    font-size: calc(3px + 1vw);
    line-height: calc(6px + 1vw);
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
    width: 120%;
    justify-content: space-between;
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
  width: 90%;
  margin-left:5%;
  padding-top: 5%;
  @media (max-width: 600px) {
    width: 120%;
    justify-content: space-between;
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
  font-family: "Oswald", sans-serif;
  margin: 0;
  background: ${props => props.background || "#fafafa"};
  text-align: center;
  color: #0077ff;
  font-size: calc(10px + 4vw);
  line-height: calc(10px + 4vw);
  letter-spacing: 3px;
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
  justify-content: flex-start;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  @media (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
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
    margin:auto;
    margin: 2vh 0;
    flex-direction: row;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
  }
  h1 {
    font-size: 0.45em;
    line-height: 0.35em;
    margin: auto 0.2vw auto 0.5vw;
    cursor: pointer;
    @media (max-width: 600px) {
      font-size: 0.3em;
      line-height: 0.1em;
      margin: auto 3vw auto 0.5vw;
  }
  }
  ${props =>
    props.active &&
    `
    h1{
      transition:all 500ms ease;
      color: #0077ff;
  }
  `}
`;