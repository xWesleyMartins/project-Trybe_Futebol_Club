import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './Teams';

export default class Matches extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  // ... Campos
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  homeTeamId: {
    type: INTEGER,
    allowNull: false,
    // references: {
    //   model: 'teams',
    //   key: 'id',
    // },
  },

  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },

  awayTeamId: {
    type: INTEGER,
    allowNull: false,
    // references: {
    //   model: 'teams',
    //   key: 'id',
    // },
  },

  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },

  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },

}, {
  // ... Outras configs
  underscored: true,
  timestamps: false,
  sequelize: db,
  modelName: 'matches',
});

Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

Teams.hasMany(Matches, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Teams.hasMany(Matches, { foreignKey: 'awayTeamId', as: 'awayTeam' });
