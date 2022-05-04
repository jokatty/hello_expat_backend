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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
