module.exports = {
  async up(queryInterface) {
    const categoryList = [
      {
        category: 'housing',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category: 'jobs',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category: 'lifestyle',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category: 'general',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // list of questions
    const questionsList = [
      {
        question: 'Recommended housing agency in Amsterdam?',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: 'Must visit museums in Amsterdam?',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: 'What to do on weekends in Amsterdam?',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('categories', categoryList, { returning: true });
    await queryInterface.bulkInsert('questions', questionsList, { returning: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('questions', null, {});
    await queryInterface.bulkDelete('categories', null, {});
  },
};
