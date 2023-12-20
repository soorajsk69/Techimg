const express = require('express');
const server = express();
const cors = require('cors');
const logic = require('./service/logic');

// Connect frontend
server.use(cors({ origin: 'http://localhost:5173' }));
server.use(express.json());

server.listen(8000, () => {
  console.log('Server started');
});

// Define route to get all images
server.get('/getAllimages', (req, res) => {
  logic.allimages()
    .then(result => {
      res.status(result.statusCode).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: err.message }); // Handle errors
    });
});

server.get('/getAnimage/:id', (req, res) => {
  logic.animages(req.params.id).then(result=>{
    res.status(result.statusCode).json(result)
  })})

// edit
server.post('/edit', (req, res) => {
  logic.edit(req.body.id,req.body.name,req.body.img).then(result=>{
    res.status(result.statusCode).json(result)
  })})
// Delete
  server.delete('/deleteimg/:id', (req, res) => {
    logic.removeImg(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
    })})
  
  // Registration
  server.post('/reg', (req, res) => {
    logic.reg(req.body.id, req.body.name, req.body.email, req.body.password)
      .then(result => {
        res.status(result.statusCode).json(result);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
    //LOGIN 
    server.post('/login', (req, res) => {
      logic.login(req.body.name, req.body.password)
        .then(result => {
          res.status(result.statusCode).json(result);
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    });
        

