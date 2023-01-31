'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('matches', { 
    id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

     homeTeamId: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id',
      },
      field: home_team_id,
    },

     homeTeamGoals: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      field: home_team_goals,
    },

     awayTeamId: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id',
      },
      field: away_team_id,
    },
    
     homeTeamsGoals: { // atenção para TEAMS no plural diferente do anterior no singular
      type: Sequelize.INTEGER,
      allowNull: false,
      field: home_teams_goals, // atenção para TEAMS no plural diferente do anterior no singular
    },
    inProgress: { 
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: in_progress,
    },
  });
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.dropTable('matches');
  }
};
