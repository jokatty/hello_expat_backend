import db from './models/index.mjs';

// import the controllers
import initQuestionController from './controllers/questions.mjs';

export default function bindRoutes(app) {
  // pass in the db for callback
  const questionsController = initQuestionController(db);

  app.get('/', (req, res) => {
    res.send('yay!!');
  });
  app.get('/questions', questionsController.index);
}
