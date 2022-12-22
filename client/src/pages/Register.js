import React, { useEffect, useState } from 'react'
import { Logo, FormRow, FormRowSelect, Alert } from '../components';

import { useAppContext } from '../context/appContext'
import {useNavigate} from 'react-router-dom'

//Dummy Phone Number +23412345678541

const initialState = {
  firstName: '', 
  lastName: '', 
  username: '', 
  password: '', 
  phoneNo: '', 
  day: '', 
  year: '',
  month: '--',
  monthOptions: ['--', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
  gender: '--', 
  genderOptions: ['--', 'Male', 'Female'],

  isMember: true,
}

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const {user, isLoading, showAlert, displayAlert, setupUser} = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, username, password, phoneNo, day, year, isMember, gender, month} = values;
    if (!username || !password || (!isMember && !firstName && !lastName && !phoneNo && !day && !year && !gender && !month )) {
      displayAlert();
      return;
    }
    const currentUser = { firstName, lastName, username, password, phoneNo, day, year, gender, month };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login Successful! Redirecting...',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'User Created! Redirecting...',
      });
    }
  };


  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);




  return (
    <div className='bd-container register-ection'>
      <form className='register-form' onSubmit={onSubmit}>
        <Logo />
        <h2 className='rh-title'>{values.isMember ? 'Login to your Google Account' : 'Create your Google Account'}</h2>
        {showAlert && <Alert />}
        {!values.isMember && (
          <div className='form-flex bd-grid'>
          <FormRow
            type='text'
            name='firstName'
            value={values.firstName}
            labelText='First Name'
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='lastName'
            value={values.lastName}
            labelText='Last name'
            handleChange={handleChange}
          />
  
        </div>
        )}
    
        <FormRow
          type='text'
          name='username'
          value={values.username}
          labelText='Username'
          handleChange={handleChange}

        />   
        <FormRow
            type='text'
            name='password'
            value={values.password}
            handleChange={handleChange}
            labelText='Password'
          />
        {/* 
        <div className='form-flex bd-grid' >
          
          
          {!values.isMember && (
            <div>
              <FormRow
              type='text'
              name='confirm'
              labelText='Confirm'
            />
            </div>
            )}

          
        </div>  
            */}
        {!values.isMember && (
          <div>
            <FormRow
              type='number'
              name='phoneNo'
              value={values.phoneNo}
              handleChange={handleChange}
              labelText='Phone Number'
            />
            <div className='select-flex'>
            <FormRowSelect
                name='month'
                labelText='Month'
                value={values.month}
                list={values.monthOptions}
                handleChange={handleChange}
              />
              <FormRow
                type='number'
                name='day'
                value={values.day}
                handleChange={handleChange}
                labelText='Day'
              />
              <FormRow
                type='number'
                name='year'
                value={values.year}
                handleChange={handleChange}
                labelText='Year'
              />
        
            </div>
            <FormRowSelect
                name='gender'
                labelText='Gender'
                value={values.gender}
                handleChange={handleChange}
                list={values.genderOptions}
              />
          </div> 
        )}

          

                
        <div className='btn-container'>
          <button disabled={isLoading} onClick={toggleMember} type='button' className='signin-btn'>{values.isMember ? 'Sign up instead' : 'Sign in instead'}</button>
          
          <button disabled={isLoading} type='submit' className='submit-btn'>{values.isMember ? 'Login' : 'Register'}</button>
          
        </div>
      </form>
    </div>
  )
}

export default Register