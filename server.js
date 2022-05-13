const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

// app.get('/:indexOfPlantsArray', (req, res) => {
    // res.send(plants[req.params.indexOfPlantsArray]);
// });

// app.get('/oops/:indexOfPlantsArray', (req, res)=>{
//     res.send(plants[req.params.indexOfPlantsArray]);
//     //error cannot send more than one response!
//     res.send('this is the index:' + req.params. indexOfPlantsArray);
// });

// app.get('/:indexOfPlantsArray', (req, res) => { //:indexOfPlantsArray can be anything, even awesome
//     res.send(plants[req.params.indexOfPlantsArray]);
// });

// app.get('/awesome', (req, res) => { //this will never be reached
//   res.send(`
//     <h1>Plants are awesome!</h1>
//     <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
//   `);
// });

// app.get('/awesome', (req, res) => {
//     res.send(`
//       <h1>Plants are awesome!</h1>
//       <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
//     `);
//   });
  
//   app.get('/:indexOfPlantsArray', (req, res) => {
//       res.send(plants[req.params.indexofPlantsArray]);
//   });

  app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log('=========================================');
    console.log('This is the entire Request Object sent from the browser to the server: ');
    console.log(req);
    console.log('========================================');
    console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});