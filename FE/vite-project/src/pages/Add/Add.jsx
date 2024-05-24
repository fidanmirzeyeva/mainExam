import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Add.scss'


function Add() {
  async function addProducts(val) {
    const res = await fetch("http://localhost:9000/fidan",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(val)
    })
    const data = await res.json()
    return data

    
  }
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Add Page</title> 
      </Helmet>
  </HelmetProvider>
    <div className="formik"> <Formik
       initialValues={{ name: '', image: '', price: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         image: Yup.string()
           .required('Required'),
         price: Yup.string().required('Required'),
       })}
       onSubmit={(values) => {
         setTimeout(() => {
         addProducts(values)
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name"> Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="image">image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <label htmlFor="price">price </label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit">Add</button>
       </Form>
     </Formik></div>
    </>
  )
}

export default Add
