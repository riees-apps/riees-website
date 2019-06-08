import React, { Component } from "react";
import styled from "styled-components";
import img from "./img-01.jpg";
import api from "../api/api";
import { login } from "../api/auth";
import { withRouter } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./admin.css";
import { FaUser, FaLock } from "react-icons/fa";

const Image = styled.div`
  background-image: url(${props => props.image});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
  z-index: 999;
`;
const Container = styled.div`
  position: absolute;
  z-index: 3;
  background: rgb(10, 178, 228, 0.92);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Div = styled.div`
  position: absolute;
  z-index: 3;
  background: transparent;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: auto;
  h1 {
    color: #ff3333;
    font-family: "Poppin";
    font-size: 40px;
    margin-top: 5vh;
    height: max-content;
    border: 1px solid #ff3333;
    width: 40%;
    text-align: center;
  }
`;

class Admin extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: "",
      password: "",
      error: "",
      smShow: false,
      lgShow: false
    };
  }

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        error: "Preencha e-mail e senha para continuar!",
        smShow: true
      });
    } else {
      try {
        const response = await api
          .post(
            "/admin/auth",
            { senha: password, email: email },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then(response => {
            login(response.data.token);
            this.props.history.push("/dashboard/blog-overview");
          })
          .catch(error => {
            this.setState({
              smShow: true,
              error:
                "Houve um problema com o login, verifique suas credenciais."
            })
            console.log(this.state.smShow);
          });
      } catch (err) {
        this.setState({
          smShow: true,
          error: "Houve um problema com o login, verifique suas credenciais."
        })
        console.log(this.state.smShow);
      }
    }
  };

  render() {
    let smClose = () => this.setState({ smShow: false });
    return (
      <div>
        <Image image={img}>
          <Container>
            <Div>
              <div class="login-form-avatar">
                <FaUser />
              </div>
              <h1 className="formTitle">Admin</h1>
              <Form onSubmit={this.handleSignIn}>
                <div class="wrap-input" data-validate="Username is required">
                  <input
                    onChange={e => this.setState({ email: e.target.value })}
                    autoComplete="off"
                    class="input"
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                  <span class="focus-input" />
                  <span class="symbol-input">
                    <FaUser />
                  </span>
                </div>
                <div class="wrap-input" data-validate="Password is required">
                  <input
                    onChange={e => this.setState({ password: e.target.value })}
                    class="input"
                    type="password"
                    name="pass"
                    placeholder="Password"
                  />
                  <span class="focus-input" />
                  <span class="symbol-input">
                    <FaLock />
                  </span>
                </div>
                <div class="container-login-form-btn">
                  <button
                    style={{ textDecoration: "none", color: "white" }}
                    type="submit"
                    class="login-form-btn"
                  >
                    LOGIN
                  </button>
                </div>
                <Modal
                  size="sm"
                  show={this.state.smShow}
                  onHide={smClose}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                      Erro!
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{this.state.error}</Modal.Body>
                </Modal>
              </Form>
            </Div>
          </Container>
        </Image>
      </div>
    );
  }
}
export default withRouter(Admin);
