import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
`;

const InputWrapper = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`;
const HiddenRadio = styled.input`
display: none;

&:checked + label::before {
  background-color: #FDC913;
  border-color: #ccc;
}`;
const Label = styled.label`
position: relative;
padding-left: 2rem;
cursor: pointer;
user-select: none;

&::before {
  content: attr(data-size);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.1rem solid #ccc;
  border-radius: 2rem;
  background-color: #FAF7F2;
}`;

function SizeSelection({ size, handleChange }) {
  return (
    <Container>
      <InputWrapper>
        <HiddenRadio type="radio" id="small" name="size" value="small" checked={size === 'small'} onChange={handleChange} />
        <Label htmlFor="small" data-size="Küçük"></Label>
      </InputWrapper>
      <InputWrapper>
        <HiddenRadio type="radio" id="medium" name="size" value="medium" checked={size === 'medium'} onChange={handleChange} />
        <Label htmlFor="medium" data-size="Orta"></Label>
      </InputWrapper>
      <InputWrapper>
        <HiddenRadio type="radio" id="large" name="size" value="large" checked={size === 'large'} onChange={handleChange} />
        <Label htmlFor="large" data-size="Büyük"></Label>
      </InputWrapper>
    </Container>
  );
}

export default SizeSelection;
