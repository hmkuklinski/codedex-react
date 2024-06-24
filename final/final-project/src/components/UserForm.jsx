import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export default function UserForm({onSubmit}) {
  const [inputName, setInputName] = useState('');
  const { setName } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName);  // Set the name in context
    window.history.pushState({}, '', '/quiz');  // Change the URL without reloading the page
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);  // Dispatch a navigation event
  }
  function handleChange(e){
    setInputName(e.target.value);
  }
  function handleFocus(e){
    e.target.style.color= 'blue';
  }

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Your Name </label>
            <input type="text" name="name" id="name" placeholder="My name is..." onChange={handleChange} value={inputName} onFocus={handleFocus}></input>
            <button type="submit">Submit</button>
        </form>
    </div>   
  );
}