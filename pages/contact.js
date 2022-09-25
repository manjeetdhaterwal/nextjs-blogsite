import React from 'react'
import styles from '../styles/Contact.module.css'
import { useState } from 'react'
const {parse, stringify} = require('flatted');
import { createClient } from "next-sanity"

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');

  const submit = (e)=>
  {
    e.preventDefault();
    // console.log(name, email, phone, desc);
    const data = {name, email, phone, desc}
    fetch('http://localhost:3000/api/postContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data =>
      {
        console.log("sucess", data)
        alert("Thanks for your concern, We will contact you asap")
      })
      .catch((err)=>
      {
        console.log("error", err);
      })
    setName('');
    setPhone('');
    setEmail('');
    setDesc('');
  }

  const change = (e)=>
  {
    if(e.target.name === 'name')
    {
      setName(e.target.value);
    }
    else if(e.target.name === 'email')
    {
      setEmail(e.target.value);
    }
    else if(e.target.name === 'phone')
    {
      setPhone(e.target.value);
    }
    else if(e.target.name === 'desc')
    {
      setDesc(e.target.value);
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Fill your Concern  here !!</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" value = {name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="name" aria-describedby="emailHelp" name='name' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
          <input type="phone" value = {phone} onChange = {change} className="form-control" id="phone" name='phone' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value = {email} onChange = {change} className="form-control" id="email" aria-describedby="emailHelp" name='email' />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="floatingTextarea">Comments</label>
          <textarea value = {desc} onChange = {change} className="form-control" placeholder="Leave a comment here" id="desc" name='desc' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact