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
  day: '--',
  dayOptions: ['--', '01', '02', '03', '04', '05', '06', '07'], 
  year: '--',
  yearOptions: ['--', '1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014'],
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
              <FormRowSelect
                name='day'
                labelText='Day'
                value={values.day}
                list={values.dayOptions}
                handleChange={handleChange}
              />
              <FormRowSelect
                name='year'
                labelText='Year'
                value={values.year}
                list={values.yearOptions}
                handleChange={handleChange}
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