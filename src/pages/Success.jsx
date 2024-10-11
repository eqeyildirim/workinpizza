import styled, { createGlobalStyle } from 'styled-components';

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
    background-color: #CE2829;
    font-family: "Barlow", sans-serif;
  }
`;
const PageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 3rem;
height: 100vh;
@media (max-width: 480px) {
gap:1rem;
}
`;
const SectionFirst = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
h1{
color: white;
font-size:3rem;};
h2 {
color:white;
font-size:2rem}
@media (max-width: 480px) {
gap: 0.5rem;
h1 {
font-size: 2rem;
}
h2 {
font-size: 1rem;
}}`;
const Ontheway = styled.div`
color: #FDC913;
font-size: 2rem;
font-family: "Satisfy", cursive;
`;
const Separator = styled.div`
border-bottom: white solid 0.05rem;
margin: 0 ;
width: 70%;
`;
const OrderTotal = styled.div`
border:#FFFFFF solid 0.05rem;
border-radius: 0.5rem;
text-align:left;
padding: 2rem;
h2 {
color:white;
	font-weight: 500;
  padding: 0 2rem;
  font-size: 1.5rem;
}
h3 {
color:white;
	font-weight: 300;
  padding: 0 2rem;
  font-size:1.5rem;
}
@media (max-width: 480px) {
h2{
font-size:1rem;}
h3{
font-size:1rem;}
padding: 0.5rem;
}
`;
const TotalWrapper = styled.p`
display:flex;
justify-content:space-between;
align-items: center;
`;
const SelectedAddtWrapper=styled.p`
display: flex;
flex-direction:column;
gap:0.5rem;
width:70%;
align-items:flex-start;
color: #FFFFFF;
font-weight:lighter;
text-align:left;
`;

export default function Success(props) {
  const { size, dough, addtIngredients, addtIngredientsTotal, unit } = props;

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
     

      </PageWrapper>
    </>
  );
}