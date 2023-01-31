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

    home_team_id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id',
      },
      // field: home_team_id,
    },
    
    home_team_goals: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      // field: home_team_goals, 
    },

    away_team_id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id',
      },
      // field: away_team_id,
    },

    away_team_goals: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    
    in_progress: { 
      type: Sequelize.BOOLEAN,
      allowNull: false,
      // field: in_progress,
    },
  });
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.dropTable('matches');
  }
};
