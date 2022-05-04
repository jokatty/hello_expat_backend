export default function initAnswerModel(sequelize, DataTypes) {
  return sequelize.define('answer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    answer: {
      type: DataTypes.STRING,
    },
    questionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'questions',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    // The underscored option makes Sequelize reference snake_case names in the DB.
    underscored: true,
  });
}
