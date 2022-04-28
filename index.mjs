import expres from 'express';

// create app from express instance
const app = expres();
// assign a port 
const PORT = 3004

// listen to the app at the port
app.listen(PORT, ()=>{
  console.log('app started on port', PORT)
})