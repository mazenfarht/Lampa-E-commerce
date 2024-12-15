import React from 'react'
import * as Yup from 'yup'; // Import Yup for schema-based validation
import { useFormik } from 'formik'; // Import Formik library for managing form state and validation
import axios from 'axios'; // Import Axios for making HTTP requests
import { baseUrl } from '../../baseUrl';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { type } from '@testing-library/user-event/dist/type';



export default function Register() {

    let navigate = useNavigate()

    const notify = (msg,type) =>{
        toast[type](msg);
    };
    
    let validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .max(15, "Name must be 15 characters or less")
            .required("Name is required"), // Field is required
        // Validate the "email" field
        email: Yup.string()
            .email("Invalid email address") // Must be a valid email
            .required("Email is required"), // Field is required
        // Validate the "password" field
        password: Yup.string()
            .matches(
                /^[A-Z][A-Za-z0-9@#$%]{7,}$/,
                'Password must start with an uppercase letter and be at least 8 characters long'
            ) // Regex for password rules
            .required("Password is required"), // Field is required
        // Validate the "rePassword" (confirm password) field
        rePassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match") // Must match the password field
            .required("Confirm Password is required"), // Field is required
    })

    let register = useFormik({
        initialValues :{
            name: '', // Initial value for name
            email: '', // Initial value for email
            password: '', // Initial value for password
            rePassword: '', // Initial value for confirm password

        },
        validationSchema,
        onSubmit:(values) => {
            axios.post(`${baseUrl}/auth/signup`, values)
            .then((data) => {
                if (data.status === 201) { // If the request is successful
                    localStorage.setItem("tokan", data.data.token); // Save the token to localStorage
                    notify("Success", 'success'); // Show a success toast notification
                    navigate('/Login'); // Redirect the user to the Login page
                }
            })
            .catch((errors) => {
                if (errors.response?.status === 409) { // If the email already exists (status 409)
                    notify(errors.response.data.message, 'error'); // Show an error toast notification
                }
            });

        }
    })


  return (
    <>
    <div className="w-50 m-auto my-5">
        <h2>Register</h2>
        <form onSubmit={register.handleSubmit}>

                {/* Name input */}
            <label htmlFor='name'>Name</label>
            <input 
            value={register.values.name}
            onChange={register.handleChange}
            onBlur={register.handleBlur}
            type='text'
            id='name'
            name='name'
            className='form-control my-3'
            />
            {register.errors.name && register.touched.name ? ( // Show error if name is invalid and touched
                        <div className="alert alert-danger">{register.errors.name}</div>
            ) : ''}



             {/* Email input */}
            <label htmlFor='email'>Email</label>
                    <input
                        value={register.values.email} // Bind Formik's email value
                        onChange={register.handleChange} // Update Formik state on change
                        onBlur={register.handleBlur} // Mark field as "touched" on blur
                        type='email'
                        id='email'
                        name='email'
                        className='form-control my-3'
                    />
                    {register.errors.email && register.touched.email ? ( // Show error if email is invalid and touched
                        <div className="alert alert-danger">{register.errors.email}</div>
                    ) : ''}

                    {/* Password input */}
                    <label htmlFor='password'>Password</label>
                    <input
                        value={register.values.password} // Bind Formik's password value
                        onChange={register.handleChange} // Update Formik state on change
                        onBlur={register.handleBlur} // Mark field as "touched" on blur
                        type='password'
                        id='password'
                        name='password'
                        className='form-control my-3'
                    />
                    {register.errors.password && register.touched.password ? ( // Show error if password is invalid and touched
                        <div className="alert alert-danger">{register.errors.password}</div>
                    ) : ''}

                    {/* Confirm Password input */}
                    <label htmlFor='rePassword'>Confirm Password</label>
                    <input
                        value={register.values.rePassword} // Bind Formik's confirm password value
                        onChange={register.handleChange} // Update Formik state on change
                        onBlur={register.handleBlur} // Mark field as "touched" on blur
                        type='password'
                        id='rePassword'
                        name='rePassword'
                        className='form-control my-3'
                    />
                    {register.errors.rePassword && register.touched.rePassword ? ( // Show error if confirm password is invalid and touched
                        <div className="alert alert-danger">{register.errors.rePassword}</div>
                    ) : ''}

                    <button 
                    disabled={!(register.isValid && register.dirty)}
                    type='submit'
                    className='btn bg-black text-bg-danger'
                    >
                        Submit
                    </button>
            
            
            
        </form>
    </div>

      
    </>
  )
}
