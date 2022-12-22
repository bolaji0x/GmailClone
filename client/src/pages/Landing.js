import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <div className='bd-container register-container'>
        <div className='register-head'>
          <h1 className='rh-title'>Create a Gmail account</h1>
          <p>To sign up for Gmail, create a Google Account. You can use the username and password to sign in to Gmail and other Google products like YouTube, Google Play, and Google Drive.</p>
        </div>
        <div className='register-content'>
          <h3 className='rc-title'>Sign up for a Gmail account</h3>
          <ol className='signup-content'>
            <li className='each-sign'>Go to the <Link to='/signup'>Google Account creation page.</Link></li>
            <li className='each-sign'>Follow the steps on the screen to set up your account.</li>
            <li className='each-sign'>Use the account you created to sign in to Gmail.</li>
          </ol>
          <Link to='/signup' className='submit-btn'>Create an account</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
