import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { Zoom, toast, ToastContainer } from 'react-toastify';

const Login = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating login, replace with actual authentication logic
    if (username === "admin" && password === "1234") {
      localStorage.setItem("username", username);
      navigate("/admin");
      toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    } else {
      toast.error('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    }
  };

  useEffect(() => {
    const credential = localStorage.getItem('username');
    if (credential) {
      navigate('/admin');
    }
  }, []);

  return (
    <Wrapper style={{ backgroundColor: "#6254f3" }}>
      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="off" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off" />
            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;


    .container {
      margin-top: 6rem;
      margin-bottom: 6rem;
      height: 35rem;
      width: 65rem;
      border-radius: 3rem;
      background-color: ${({ theme }) => theme.colors.footer_bg};

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          margin-top: 6rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
      }

        @import "bourbon";

// Colors
$greenSeaweed: rgba(2, 128, 144, 1);
$blueQueen: rgba(69, 105, 144, 1);
$redFire: rgba(244, 91, 105, 1);

// Fonts
$fontAsap: 'Asap', sans-serif;

body {
  background-color: $redFire;
  font-family: $fontAsap;
}

.login {
  overflow: hidden;
  background-color: white;
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  @include transform(translate(-50%, -50%));
  @include transition(transform 300ms, box-shadow 300ms);
  box-shadow: 5px 10px 10px rgba($greenSeaweed, 0.2);
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;
    z-index: -1;
  }
  
  &::before {
    left: 40%;
    bottom: -130%;
    background-color: rgba($blueQueen, 0.15);
    @include animation(wawes 6s infinite linear);
  }
  
  &::after {
    left: 35%;
    bottom: -125%;
    background-color: rgba($greenSeaweed, 0.2);
    @include animation(wawes 7s infinite);
  }
  
  > input {
    font-family: $fontAsap;
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    width: 100%;
    border: 0;
    padding: 10px 10px;
    margin: 15px -10px;
  }
  
  > button {
    font-family: $fontAsap;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    width: 80px;
    border: 0;
    padding: 10px 0;
    margin-top: 10px;
    margin-left: -5px;
    border-radius: 5px;
    background-color: $redFire;
    @include transition(background-color 300ms);
    
    &:hover {
      background-color: darken($redFire, 5%);
    }
  }
}

@include keyframes (wawes) {
  from { @include transform(rotate(0)); }
  to { @include transform(rotate(360deg)); }
}

a {
  text-decoration: none;
  color: rgba(white, 0.6);
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 12px;
}


    }
  `;



export default Login;
