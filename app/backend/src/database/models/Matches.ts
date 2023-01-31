import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './Teams';
// import OtherModel from './OtherModel';

export default class Matches extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare homeTeamsGoals: number; // atenção para TEAMS no plural diferente do anterior no singular
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
    references: {
      model: 'teams',
      key: 'id',
    },
  },

  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },

  awayTeamId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'teams',
      key: 'id',
    },
  },

  homeTeamsGoals: { // atenção para TEAMS no plural diferente do anterior no singular
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
  sequelize: db,
  // modelName: 'example',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Matches.belongsTo(Teams, { foreignKey: 'home_team_id', as: 'homeTeamId' });
Matches.belongsTo(Teams, { foreignKey: 'away_team_id', as: 'awayTeamId' });

Teams.hasMany(Matches, { foreignKey: 'home_team_id', as: 'homeTeamId' });
Teams.hasMany(Matches, { foreignKey: 'away_team_id', as: 'awayTeamId' });
