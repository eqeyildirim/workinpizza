import React from 'react';
import styled from 'styled-components';

const DoughStyle = styled.div`
  select {
    background-color: #FAF7F2;
    margin-right: 10px;
    padding: 0.5rem 3rem 0.5rem 1rem;
    border: 0.1rem solid #ccc;
    border-radius: 0.3rem;
    font-family: "Barlow", sans-serif;
    text-align: left;
    font-size: 0.9rem;
    color: black;
  }
  
  option {
    text-align: left;
    color: black;
  }
`;

function DoughSelection({ dough, handleChange }) {
  return (
    <DoughStyle>
      <label htmlFor="dough">Hamur Seçimi:</label>
      <select name="dough" id="dough" value={dough} onChange={handleChange} data-cy="input-dough">
        <option value="thin">İnce</option>
        <option value="medium">Orta</option>
        <option value="thick">Kalın</option>
      </select>
    </DoughStyle>
  );
}

export default DoughSelection;
