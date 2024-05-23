import { useRef, useState } from 'react';
import Button from './Button';

const AddItemForm = ({ handleAddItem }) => {
  const [text, setText] = useState('');
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (!text) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    handleAddItem(text);
    setText('');
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        ref={inputRef}
        autoFocus
        value={text}
        onChange={handleChange}
        type="text"
      />
      <Button label="Add To list" />
    </form>
  );
};

export default AddItemForm;
