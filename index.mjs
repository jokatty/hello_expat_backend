import expres from 'express';
import bindRoutes from './routes.mjs';

// create app from express instance
const app = expres();
// assign a port
const PORT = 3004;

// Set the Express view engine to expect EJS templates
app.set('view engine', 'ejs');

// bind route definations to the express application
bindRoutes(app);

// listen to the app at the port
app.listen(PORT, () => {
  console.log('app started on port', PORT);
});
