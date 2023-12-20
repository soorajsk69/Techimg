import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'; 
import './Home.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function HomePage() {



    // fetching Data
    const [allimg, setAllimg] = useState([]);
    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:8000/getAllimages');
            if (result.data.statusCode === 200) {
                setAllimg(result.data.images);
            } else {
                console.error('Error fetching images:', result.data.message);
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };
    console.log(allimg);

    // handledelete
    const handledelete=async(id)=>{
        const result = await axios.delete('http://localhost:8000/deleteimg/'+id);
        alert(result.data.message);
        fetchData()
    }    

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='container mt-3'>
        <div>
          <div>
            <h1 className='text-center'>Home Page</h1>
          </div>
  
          <Row xs={1} md={3} className='g-4 m-3'>
          {allimg?.map((item, index) => (
            <Col key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Link to={`/single/${item.id}`}>
                    <Button className='btn-primary'>Edit</Button>
                  </Link>
                  <Button onClick={()=>handledelete(item.id)} className='btn-danger ms-2'>Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
      </div>
          );
}
