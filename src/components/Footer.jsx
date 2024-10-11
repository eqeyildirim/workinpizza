import styled, { createGlobalStyle } from 'styled-components';
import li0 from '../assets/footer/insta/li-0.png';
import li1 from '../assets/footer/insta/li-1.png';
import li2 from '../assets/footer/insta/li-2.png';
import li3 from '../assets/footer/insta/li-3.png';
import li4 from '../assets/footer/insta/li-4.png';
import li5 from '../assets/footer/insta/li-5.png';
import icon1 from '../assets/footer/icons/icon-1.png';
import icon2 from '../assets/footer/icons/icon-2.png';
import icon3 from '../assets/footer/icons/icon-3.png';

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
display: flex;
flex-direction: column;
gap: 1rem;
background-color: #1A1A1A;
color: white;
padding-bottom: 1rem;
`;
const ContentWrapper = styled.div`
display: flex;
flex-wrap:wrap;
flex-direction: row;
gap: 4rem;
justify-content:center;
padding: 2rem;
margin: 0 auto;
h4 {
font-weight: lighter
}
@media (max-width: 480px) {
flex-direction: column;
}`;
const Section1 = styled.div`
display: flex;
flex-direction: column;
gap:1rem;
text-align: left;
flex: 1;
li {
    display:flex;
    gap:0.5rem;
	list-style-type: none;
    align-items: center;
}`;
const Section2 = styled.div`
display: flex;
flex-direction: column;
text-align: left;
flex: 1;
gap:3rem;
li {
	list-style-type: none;
}`;
const Section3 = styled.div`
display: flex;
flex-direction: column;
flex-wrap:wrap;
gap:3rem;
text-align: left;
flex: 1;
`;
const Separator = styled.div`
border-bottom: #5F5F5F solid 0.05rem;
min-width:18rem;
`;
const Insta = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 0.5rem;
width:25vh;
@media (max-width: 480px) {
grid-template-columns: repeat(2, 1fr);
}
`;
const Instagram = styled.div`
`;
const InstagramImg = styled.img`
border-radius: 1rem;
`;

export default function Footer () {

const instagram=[
    {image: li0},
    {image: li1},
    {image: li2},
    {image: li3},
    {image: li4},
    {image: li5}
]

    return (
        <>
        <GlobalStyle />
        <Wrapper>
            <ContentWrapper>
            <Section1>
            <h2>Teknolojik Yemekler</h2>
            <ul>
            <li><img src={icon1}/> Burhaniye / Balıkesir</li>
            <li><img src={icon2}/> eqeyildirims@gmail.com</li>
            <li><img src={icon3}/> 0 (226) 312 12 12</li>
            </ul>
            </Section1>
            <Section2>
            <h2>Menü</h2>
            <ul>
            <li>Terminal Pizza</li>
            <li>Hackathlon Pizza</li>
            <li>useEffect Chicken Burger</li>
            <li>Position Absolute Spicy Pizza</li>
            </ul>
            </Section2>
            <Section3>
            <h2>Instagram</h2>
            <Insta>
                {instagram.map((insta, index) => (
                    <Instagram key={index}>
                        <InstagramImg src={insta.image}/>
                        </Instagram>
                ))}
            </Insta>
            </Section3>
            </ContentWrapper>
            <Separator></Separator>
            <h4>Design with ❤️ 2024</h4>
        </Wrapper>
        </>
    )
}