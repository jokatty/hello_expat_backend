import sequelizePackage from 'sequelize';
import allConfig from '../config/config';

import initCategoryModel from './category';
import initAnswerModel from './answer';
import initQuestionModel from './question';
import initExperienceModel from './experience';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Category = initCategoryModel(sequelize, Sequelize.DataTypes);
db.Answer = initAnswerModel(sequelize, Sequelize.DataTypes);
db.Question = initQuestionModel(sequelize, Sequelize.DataTypes);
db.Experience = initExperienceModel(sequelize, Sequelize.DataTypes);

// define relationships b/w tables
db.Category.hasMany(db.Question);
db.Category.hasMany(db.Experience);
db.Question.belongsTo(db.Category);
db.Experience.belongsTo(db.Category);
db.Question.hasMany(db.Answer);
db.Answer.belongsTo(db.Question);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
