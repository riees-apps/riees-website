import React, { Component } from 'react'
import styled from 'styled-components'
import img from './img-01.jpg'
import img2 from './img-02.png'
import './admin.css'
import { FaUser, FaLock } from 'react-icons/fa';

const Image = styled.div`
  background-image: url(${props => props.image});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
  z-index:2;
`;
const Container = styled.div`
  position: absolute;
  z-index: 3;
  background: rgb(10, 178, 228,0.92);
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
  margin-top:0;
  margin-bottom:auto;
`;

class Admin extends Component {
  render() {
    return (
      <div>
        <Image image={img}>
          <Container>
            <Div>
              <div class="login-form-avatar">
                <FaUser />
              </div>
              <h1 className='formTitle'>Admin</h1>
              <Form>
                <div class="wrap-input" data-validate="Username is required">
                  <input autocomplete='off' class="input" type="text" name="username" placeholder="Username" />
                  <span class="focus-input"></span>
                  <span class="symbol-input">
                    <FaUser />
                  </span>
                </div>
                <div class="wrap-input" data-validate="Password is required">
                  <input class="input" type="password" name="pass" placeholder="Password" />
                  <span class="focus-input"></span>
                  <span class="symbol-input">
                    <FaLock />
                  </span>
                </div>
                <div class="container-login-form-btn">
                  <button class="login-form-btn">
                    LOGIN
                  </button>
                </div>
              </Form>
            </Div>

          </Container>
        </Image>
      </div>
    )
  }
}
export default Admin
