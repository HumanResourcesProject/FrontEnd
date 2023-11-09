import React, { useState } from 'react';
import "./emailInput.scss";
const EmailInput = (props) => {
  const [email, setEmail] = useState('');
  const regex = new RegExp(
    '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
    '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
    '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
  )

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    
    if(props.onEmailChange){
      props.onEmailChange(inputValue);
    }
  };

  return (
    <div className={`email ${regex.test(email) ? 'success' : ''}`}>
      <input
        className="input-email"
        type="text"
        placeholder="test@test.com"
        value={email}
        onChange={handleInputChange}
      />
      <svg viewBox="0 0 16 16">
        <path d="M10.8000002,10.8000002 C9.85000038,11.6500006 9.18349609,12 8,12 C5.80000019,12 4,10.1999998 4,8 C4,5.80000019 5.80000019,4 8,4 C10.1999998,4 12,6 12,8 C12,9.35332031 12.75,9.5 13.5,9.5 C14.25,9.5 15,8.60000038 15,8 C15,4 12,1 8,1 C4,1 1,4 1,8 C1,12 4,15 8,15 C12,15 15,12 15,8"></path>
        <polyline points="5 8.375 7.59090909 11 14.5 4" transform='translate(0 -0.5)'></polyline>
      </svg>
    </div>
  );
}
export default EmailInput