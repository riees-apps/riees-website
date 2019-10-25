import React, { Component } from "react";
import {
  Div,
  DivText,
  Text,
  Image,
  Title,
  Container
} from "./stylesContact";
import { FormattedMessage } from "react-intl";
import img from "./oi.jpg";
import Footer from "../components/Footer/index";
import "./index.css";
import Button from "../components/Button/index";

class Contact extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div>
        <Image x="0.5" height="60vh" image={img}>
          <Title>
            <FormattedMessage id="Contact" />
          </Title>
        </Image>
        <Container>
          <DivText>
            <Div>
              <Text color="#505050">
                <i className="fas fa-map-marker-alt iconContact" />
                <span className="textContact">
                  Universidade Federal do Espirito Santo - Secretaria de
                  Relações Internacionais
                </span>
                <br />
                <span className="local2">Avenida Fernando Ferrari</span>
                <span className="local2">
                  514.Vitória / Espirito Santo - Brasil.
                </span>
                <span className="local2">CEP 29075-910</span>
              </Text>
              <Text color="#505050">
                <i className="fas fa-clock iconContact" />
                <span className="textContact">
                  <FormattedMessage id="Atendimento" />
                </span>
                <span className="local2">
                  <FormattedMessage id="Time" />
                </span>
              </Text>
              <Text color="#505050">
                <i className="fas fa-envelope iconContact" />
                <span className="textContact">E-mail</span>
                <span className="emailContact">
                  <a href="mailto:app.riees@gmail.com">app.riees@gmail.com</a>
                </span>
              </Text>
              <Text color="#505050">
                <i className="fab fa-facebook-square iconContact" />
                <span className="textContact">Facebook</span>
                <span className="emailContact">
                  <a href="http://facebook.com/riees.es" target="_blank">
                    RIEES - Rede de Internacionalização da Educação do Espírito Santo
                  </a>
                </span>
              </Text>
            </Div>
          </DivText>
          <DivText>
            <Div>
              <Text color="#505050">
                <span className="textContact">
                  <FormattedMessage id="Contact3" />
                </span>
              </Text>
              <Text color="#505050">Full Name</Text>
              <input type="text" name="fullname" className="form" />
              <Text color="#505050">Email</Text>
              <input type="email" name='email' className="form" />
              <Text color="#505050">Subject</Text>
              <input type="text" name="subject" className="form" />
              <Text color="#505050">Your message</Text>
              <textarea type="text" className="textarea" />
              <Button onClick={console.log('sdasok')} url='' name={<FormattedMessage id="Submit"/>} />
            </Div>
          </DivText>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Contact;
