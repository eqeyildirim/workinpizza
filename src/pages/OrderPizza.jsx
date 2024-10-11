import styled, { createGlobalStyle } from 'styled-components';
import { Form, Label, Input, Button, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AddsIngredients from '../components/AddsIngredients';
import SizeSelection from '../components/SizeSelection';
import NameInput from '../components/NameInput';
import NoteInput from '../components/NoteInput';
import DoughSelection from '../components/DoughSelection';
import Footer from '../components/Footer';
import pizza from '../assets/pictures/form-banner.png';


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
    font-family: "Barlow", sans-serif;
  }
`;
const PageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const Banner = styled.div`
background-color: #CE2829;
display: flex;
flex-direction: column;
gap: 2rem;
width: 100%;
padding: 2rem;
align-items: center;
margin: 0; 
position: relative;
h1{
color: white;
font-size:3em;}
h2 {
color:white;}
@media (max-width: 480px) {
h1{
font-size:2em;}
}
`;
const Meal = styled.div`
width: 100%;
background-color: #FAF7F2;
display:flex;
justify-content:center;
align-items: center;
h3 {
text-align:left;
}
p {
text-align:left;
}
`;
const MealContent = styled.div`
width:70%;
padding: 0 0 2rem 0;
img {
 max-width: 100%;
height: auto;
}
`;
const MainPage = styled.div`
background-color: white;
display: flex;
flex-direction: column;
gap: 0.5rem;
width: 70%;
padding: 1rem;
`;
const Description2 = styled.p`
text-align:left;
color:#5F5F5F;
`;
const Details = styled.p`
display:flex;
justify-content:space-between;
padding: 1rem 0;
`;
const Score = styled.div`
display:flex;
align-items:flex-end;
gap:6rem;
`;
const SelectSizeDough = styled.div`
display:flex;
flex-wrap: wrap;
gap: 5rem;
width:100%;
justify-content: space-between;
`;
const SizeOptions =styled.div`
text-align:left;
`;
const DoughThickness = styled.div`
padding-right: 15rem;
text-align:left;
`;
const NameNoteWrapper = styled.div`
padding: 1rem 0 1rem 0;
`;
const Titles = styled.p`
display: flex;
flex-direction: column;
text-align:left;
font-weight: bold;

label {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  }
input {
  width: 20rem;
  height: 2.5rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.3rem;
  background-color: #FAF7F2;
  padding-left: 0.5rem;
  font-size: 0.9rem;
}
@media (max-width: 480px) {
input {
  width: 17rem;
  font-size: 0.7rem;
}
}`;
const AdditionalIng = styled.div`
display:flex;
flex-direction:column;
padding: 1rem 0 1rem 0;
`;
const AdditionalIngText = styled.div`
display:flex;
flex-direction:column;
padding: 1rem 0;
`;
const StyledInput =styled(Input)`
color:#292929;
width:100%;
padding:1rem;
margin: 0.5rem 0;
border: #5F5F5F solid 0.05rem;
border-radius: 0.5rem;
`;
const Separator = styled.div`
border-bottom: #ccc solid 0.05rem;
margin: 2rem 0 ;
min-width:18rem;
`;
const Summary = styled.div`
padding: 1rem 0 1rem 0;
display:flex;
gap: 1rem;
justify-content:space-between;
@media (max-width: 480px) {
flex-direction: column;
}`;
const AddSubtract = styled.div`
display:flex;
`;
const ButtonDecrease = styled(Button)`
width:2.5rem;
height:3rem;
background-color:#FDC913;
text-align:center;
align-content:center;
`;
const Num = styled.p`
text-align:center;
align-content:center;
width:2.5rem;
height:3rem;
border-top:#ccc solid 0.05rem;
border-bottom:#ccc solid 0.05rem;
border-radius: 0.2rem;
`;
const ButtonIncrease = styled(Button)`
width:2.5rem;
height:3rem;
background-color:#FDC913;
text-align:center;
align-content:center;
`;
const OrderTotal = styled.div`
border: 0.1rem solid #ccc;
border-radius: 0.3rem;
width:25rem;
background-color: #FAF7F2;
@media (max-width: 480px) {
width: 17rem;
}`;
const OrderTexts = styled.div`
padding:1rem 1rem;
`;
const SelectionsWrapper = styled.p`
display:flex;
justify-content:space-between;
`;
const Selections = styled.p`
padding-top:1rem;
text-align:left;
color: #292929;
`;
const SelectionsLira = styled.p`
padding-top:1rem;
text-align:left;
`;
const TotalWrapper = styled.p`
display:flex;
justify-content:space-between;
`;
const Total = styled.p`
text-align:left;
color:#CE2829;
font-weight:bold;
`;
const TotalLira = styled.p`
text-align:left;
color:#CE2829;
font-weight:bold;
`;
const PlaceOrder = styled.button`
background-color:#FDC913;
width:100%;
border-radius: 0.2rem;
font-weight:bold;
`;
const ErrorMessage=styled.p`
color:red;
`;

const initialFormData = {
username:"",
orderNote:"",
size:"small",
dough:"thin",
addtIngredients:[]
}

const errorMessages = {
  username: "Lütfen en az 3 karakterden oluşan bir isim girin.",
  orderNote: "Lütfen bir sipariş notu girin.",
  size: "Lütfen bir pizza boyutu seçin.",
  dough: "Lütfen bir hamur kalınlığı seçin.",
  addtIngredients: "Lütfen en az 4 ve en fazla 10 seçenek seçin.",
};


export default function OrderPizza() {

const [formData, setFormData] = useState(initialFormData);
const [errors, setErrors] = useState(
{
username:false,
orderNote:false,
size:false,
dough:false,
addtIngredients:false,
});

const [isValid, setIsValid] = useState(false);
const [addtIngredientsTotal, setaddtIngredientsTotal] = useState(0);
const [unit, setUnit] = useState(1);
const history = useHistory();

useEffect(()=> {
    const {username, orderNote, size, dough, addtIngredients} = formData;
    if(validateName(username) && validateNote(orderNote) && validateSize(size) && validateDough(dough) && validateAddtIngredients(addtIngredients)){
        setIsValid(true)
    } else {
        setIsValid(false)
    }
}, [formData])

function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;

    const URL="https://reqres.in/api/pizza";
    axios.post(URL, formData).then((response)=> {
        setFormData(initialFormData);
        console.log(response)
        history.push({
          pathname: "/success",
          state: {
            size: formData.size,
            dough: formData.dough,
            addtIngredients: formData.addtIngredients,
            addtIngredientsTotal: addtIngredientsTotal,
            unit: unit
        }
        });
    });
}

function validateName(username) {
    return username.length >= 3;
}

function validateNote(orderNote) {
    return orderNote.length >= 3;
}

function validateSize(size) {
    return size !== '';
}

function validateDough(dough) {
    return dough !== '';
}

function validateAddtIngredients(addtIngredients) {
    const selectedCount = addtIngredients.length;
    return selectedCount >= 4 && selectedCount <= 10;
}

function handleArtir() {
    setUnit(unit + 1);
}

function handleAzalt() {
    if (unit > 1) {
        setUnit(unit - 1);
    }
}

function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
        const updatedAddtIngredients = checked
          ? [...formData.addtIngredients, value]
          : formData.addtIngredients.filter(item => item !== value);
      
        setFormData({ ...formData, addtIngredients: updatedAddtIngredients });
      
        const isAddtIngredientsValid = validateAddtIngredients(updatedAddtIngredients);
        setErrors({ ...errors, addtIngredients: !isAddtIngredientsValid });
      
        setaddtIngredientsTotal(updatedAddtIngredients.length * 5); 
      } else {
        setFormData({ ...formData, [name]: value });

    if (name === "username") {
            setErrors({ ...errors, username: !validateName(value) });
        } else if (name === "orderNote") {
            setErrors({ ...errors, orderNote: !validateNote(value) });
        } else if (name === "size") {
            setErrors({ ...errors, size: !validateSize(value) });
        } else if (name === "dough") {
            setErrors({ ...errors, dough: !validateDough(value) });
        }
    }

    const { username, orderNote, size, dough, addtIngredients } = formData;
    setIsValid(
        validateName(username) &&
        validateNote(orderNote) &&
        validateSize(size) &&
        validateDough(dough) &&
        validateAddtIngredients(addtIngredients)
    );
}

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Banner>
          <h1>Teknolojik Yemekler</h1>
        </Banner>
        <Meal>
          <MealContent>
            <img src={pizza}/>
        <h3>Position: Absolute Spicy Pizza</h3>
        <Details>
            <h3>85.50₺</h3>
            <Score>
            <h4>4.9</h4>
            <h4>(200)</h4>
            </Score>
          </Details>
        <p>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        </MealContent>
        </Meal>
        <MainPage>

        <Form onSubmit={handleSubmit}>

        <SelectSizeDough>
        <Row>
        <Titles>
        <Label htmlFor='size'>Pizza Büyüklüğü</Label>
        </Titles>
        <SizeOptions>
        <SizeSelection size={formData.size} handleChange={handleChange}/>
        </SizeOptions>
        {errors.size && <ErrorMessage>{errorMessages.size}</ErrorMessage>}
        </Row>

        <Row>
        <Titles>
        <Label htmlFor='dough'>Boyut Seç</Label>
        </Titles>
        <DoughThickness>
        <DoughSelection dough={formData.dough} handleChange={handleChange} />
        </DoughThickness>
        {errors.dough && <ErrorMessage>{errorMessages.dough}</ErrorMessage>}
        </Row>
        </SelectSizeDough>

       <Row>
       <AdditionalIng>
       <AdditionalIngText>
       <Titles>Ek Malzemeler:</Titles>
        <Description2>En fazla 10 malzeme ekleyebilirsiniz. (5₺)</Description2>
        </AdditionalIngText>
        
          <AddsIngredients addtIngredients={formData.addtIngredients} handleChange={handleChange} />
          
        </AdditionalIng>
        {errors.addtIngredients && <ErrorMessage>{errorMessages.addtIngredients}</ErrorMessage>}
        </Row>
       <NameNoteWrapper>
            <Row>
            <Titles>
              <Label htmlFor="username">İsim:</Label>
              <NameInput username={formData.username} handleChange={handleChange}/>
              {errors.username && <ErrorMessage>{errorMessages.username}</ErrorMessage>}
              </Titles>
            </Row>

            <Row>
            <Titles>
              <Label htmlFor="orderNote">Sipariş Notu:</Label>
              <NoteInput orderNote={formData.orderNote} handleChange={handleChange}/>
              {errors.orderNote && <ErrorMessage>{errorMessages.orderNote}</ErrorMessage>}
              </Titles>
            </Row>
            </NameNoteWrapper>
          <Separator></Separator>

    <Summary>

    <AddSubtract>
    <ButtonDecrease onClick={handleAzalt}>-</ButtonDecrease>
    <Num>{unit}</Num>
    <ButtonIncrease onClick={handleArtir}>+</ButtonIncrease>
    </AddSubtract>
    
    <OrderTotal>
        <OrderTexts>
        <Titles>Sipariş Toplamı</Titles>
        <SelectionsWrapper><Selections>Seçimleriniz</Selections><SelectionsLira>{addtIngredientsTotal*unit} ₺</SelectionsLira></SelectionsWrapper>
        <TotalWrapper><Total>Toplam</Total><TotalLira>{(85.50 + addtIngredientsTotal) * unit} ₺</TotalLira></TotalWrapper>
        </OrderTexts>
        <PlaceOrder type="submit" disabled={!isValid} data-cy="submit-orderPizza-form">Fırına Yolla!</PlaceOrder>
    </OrderTotal>
    </Summary>
    </Form>
    </MainPage>
    </PageWrapper>
    <Footer/>
    </>
  );
}