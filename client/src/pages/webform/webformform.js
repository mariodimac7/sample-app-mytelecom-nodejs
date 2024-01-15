import React, { useState } from 'react';

const WebformForm = (props) => {
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    e.preventDefault();
    props.onSubmit(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WebformForm;
