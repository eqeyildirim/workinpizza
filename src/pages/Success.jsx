import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';


const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%; 
    display: flex;
    justify-content: center; 
    align-items: center; 
  }

  body {
    font-family: 'Barlow', sans-serif;
    background-color: #f8f8f8;
  }
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SuccessContainer = styled.div`
  background: linear-gradient(135deg, #ff0000, #ff8c00);
  color: white;
  width: 100%; 
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Icon = styled(FaCheckCircle)`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #fff;
`;

const Message = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-family: 'Barlow', sans-serif;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  font-family: 'Barlow', sans-serif;
`;

function Success() {
  return (
    <>
      <GlobalStyle /> 
      <SuccessContainer>
        <Icon />
        <Message>Onaylandı!</Message>
        <SubText>Teşekkür ederiz, siparişiniz başarıyla oluşturuldu ve hemen Workintech'e gönderiyoruz 😊</SubText>
      </SuccessContainer>
    </>
  );
}

export default Success;
