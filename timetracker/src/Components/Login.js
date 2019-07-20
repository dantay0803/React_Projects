import React from 'react';
import windowsLogo from '../images/windows-logo.png';

export default function Login(props) {
  return (
    <>
      <h1 className='loginTitle'>Time Tracker</h1>
      <div className='fade_rule' />
      <button className='flexDisplay loginButton' onClick={() => props.login()}>
        <span>
          <img src={windowsLogo} alt='Microsoft Windows Logo' />
        </span>
        <div className='loginButtonText'>Log in with Microsoft</div>
      </button>
    </>
  );
}
