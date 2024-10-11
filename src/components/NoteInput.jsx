import React from 'react';

function NoteInput({ orderNote, handleChange }) {
  return (
    <div>
      <input
        type="text"
        id="orderNote"
        name="orderNote"
        rows="1"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        value={orderNote}
        onChange={handleChange}
        data-cy="input-orderNote"
      />
    </div>
  );
}

export default NoteInput;