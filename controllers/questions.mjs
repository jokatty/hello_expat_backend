export default function initQuestionsController(db) {
  // route to render a list of all the questions
  const index = (request, response) => {
    db.Question.findAll()
      .then((questions) => {
        response.render('questions/index', { questions });
      })
      .catch((error) => console.log(error));
  };
  return {
    index,
  };
}
