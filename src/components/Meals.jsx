import styled, { createGlobalStyle } from 'styled-components';
import food1 from '../assets/pictures/food-1.png';
import food2 from '../assets/pictures/food-2.png';
import food3 from '../assets/pictures/food-3.png';

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
  justify-content: center;
  gap:1rem;
  margin: 1rem 10rem 3rem 10rem;
  flex-wrap: wrap;
`;
const MealItem = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  padding: 1rem 0;
`;
const MealImage = styled.img`
`;
const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width:90%;
  padding:1rem;
	justify-content: space-between;
`;
export default function Meals() {
  const mealoptions = [
    { image: food1, name: 'Terminal Pizza', point: '4.9', orderNum: '(200)', price: '60₺' },
    { image: food2, name: 'Position Absolute Spicy Pizza', point: '4.7', orderNum: '(120)', price: '85₺' },
    { image: food3, name: 'useEffect Chicken Burger', point: '4.5', orderNum: '(147)', price: '75₺' }
  ];

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {mealoptions.map((meal, index) => (
          <MealItem key={index}>
            <MealImage src={meal.image} alt={meal.name} />
            <h3>{meal.name}</h3>
            <Description>
              <div>{meal.point}</div>
              <div>{meal.orderNum}</div>
              <h3>{meal.price}</h3>
            </Description>
          </MealItem>
        ))}
      </Wrapper>
    </>
  );
}
