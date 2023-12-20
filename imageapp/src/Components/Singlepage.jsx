import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';


export default function Singlepage() {

    const [id,setid]=useState('')
    const [name,setname]=useState('')
    const [img,setimg]=useState('')
    
    

const params=useParams();
console.log(params.id);

const fetchimg=async()=>{
    const result = await axios.get('http://localhost:8000/getAnimage/'+params.id);
    console.log(result.data.images);

setid(result.data.images.id)
setname(result.data.images.name)
setimg(result.data.images.img)
// console.log(name);
}

const handleUpdate=async(e)=>{
    e.preventDefault()
    
    const body={
        id,
        name,
        img
    }
 const result= await axios.post('http://localhost:8000/edit',body);
 alert(result.data.message)
}
useEffect(() => {
    fetchimg();
}, []);



  return (
<Container className="App p-5">
      <h1>Simple Form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e)=>setname(e.target.value)} />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label>Image URL:</Form.Label>
          <Form.Control type="email" placeholder="Enter image URL" value={img} onChange={(e)=>setimg(e.target.value)} />
        </Form.Group>

        <Button  onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>  );
}
