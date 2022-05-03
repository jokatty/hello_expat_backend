import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import initCategoryModel from './category.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Category = initCategoryModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;