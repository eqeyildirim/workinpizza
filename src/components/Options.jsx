import styled, { createGlobalStyle } from 'styled-components';
import icon1 from '../assets/icons/1.svg';
import icon2 from '../assets/icons/2.svg';
import icon3 from '../assets/icons/3.svg';
import icon4 from '../assets/icons/4.svg';
import icon5 from '../assets/icons/5.svg';
import icon6 from '../assets/icons/6.svg';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    margin: auto;
    padding: 0;
    width: 100%;

  }
    body {
    background-size: cover;
    background-position: center;
    }
`;
const Opts = styled.div`
display:flex;
flex-wrap: wrap;
gap: 0.5rem;
justify-content:center;
`;
const Option = styled.div`
display:flex;
text-align:center;
gap:0.8rem;
align-items:center;
border-radius: 2rem;
background-color: white;
padding: 0.5rem 1rem;
`;

export default function Options() {
  return (
    <>
      <GlobalStyle />
      
      <Opts>
        <Option><img src={icon1} alt="YENİ! Ramen"/>YENİ! Ramen</Option>
        <Option><img src={icon2} alt="Pizza"/>Pizza</Option>
        <Option><img src={icon3} alt="Burger"/>Burger</Option>
        <Option><img src={icon4} alt="French Fries"/>French Fries</Option>
        <Option><img src={icon5} alt="Fast Food"/>Fast Food</Option>
        <Option><img src={icon6} alt="Soft Drinks"/>Soft Drinks</Option>
      </Opts>
    </>
  );
}