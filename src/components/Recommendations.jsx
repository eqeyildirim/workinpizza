import styled, { createGlobalStyle } from 'styled-components';
import card1 from '../assets/cta/card-1.png';
import card2 from '../assets/cta/card-2.png';
import card3 from '../assets/cta/card-3.png';
import { Link } from 'react-router-dom';
import Options from './Options';
import Meals from './Meals';


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
const Wrapper = styled.div`
background-color: #FAF7F2;
display: flex;
flex-direction: column;
gap: 1rem;
justify-content: center;
align-items: center;
`;
const Cards = styled.div`
display:flex;
flex-direction: row;
padding: 2rem;
gap: 1rem;
flex-wrap:wrap;
justify-content: center;
`;
const Card1 = styled.div`
display:flex;
flex-direction: column;
text-align:left;
padding:2rem;
background-image: url(${card1});
background-size: cover;
background-position: center;
width:30rem;
height: 31rem;
gap: 2rem;
border-radius: 1rem;
h1 {
    font-weight:bold;
    color:white;
    font-size:4.5rem;
  };
h3 {
    font-weight:light;
    color:white;
    font-size:1.3rem;
  }

@media (max-width: 480px) {
  width:25rem;
}
`;
const Card2and3 = styled.div`
display:flex;
flex-direction: column;
gap: 1rem;
`;
const Card2 = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
background-image: url(${card2});
width:30rem;
height: 15rem;
text-align:left;
padding:2rem;
gap: 1rem;
border-radius: 1rem;
h2 {
    font-weight:bold;
    color:white;
    font-size:2rem;
  };
@media (max-width: 480px) {
  width:25rem;
}
`;
const Card3 = styled.div`
background-image: url(${card3});
background-size: cover;
background-position: center;
display:flex;
flex-direction: column;
justify-content: space-around;
width:30rem;
height: 15rem;
text-align:left;
padding:2rem;
border-radius: 1rem;
h2 {
    font-weight:bold;
    font-size:2rem;
  };
@media (max-width: 480px) {
  width:25rem;
}
`;
const Button = styled(Link)`
color:black;
background-color: #FFFFFF;
padding: 0.5rem 1rem;
border-radius: 2rem;
width: 10rem;
height:2.5rem;
text-align: center; 
cursor: pointer;
font-weight: bold;
&:hover {
    background-color: #FDC913;
    color:black;
  }
`;
const Subtitle = styled.h1`
color: red;
font-size: 2rem;
font-family: "Satisfy", cursive;
`;
const Title = styled.div`
color: black;
font-size: 2rem;
font-weight: bold;
padding:0 1rem;
`;

export default function Recommendations() {

  return (
    <>
      <GlobalStyle />
      <Wrapper>
      <Cards>
        <Card1>
                <h1>Special</h1> <h1>Pizza</h1>
                <h3>Position: Absolute Spicy</h3>
                <Button to="/OrderPizza">Sipariş</Button>
        </Card1>

        <Card2and3>
            <Card2>
                <h2>Hackathlon</h2><h2>Burger Menu</h2> 
                <Button to="/OrderPizza">Sipariş</Button>
            </Card2>
            <Card3>
                <h2>Çoook hızlı</h2>
                <h2>NPM gibi kurye</h2>
                <Button to="/OrderPizza">Sipariş</Button>
            </Card3>
        </Card2and3>
      </Cards>

    <Subtitle>En popüler menüler</Subtitle>
    
    <Options/>

    <Meals/>
    </Wrapper>
    </>
  );
}