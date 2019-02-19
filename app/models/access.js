'use strict';
module.exports = (sequelize, DataTypes) => {
  const Access = sequelize.define('Access', {
    playlistId: DataTypes.INTEGER,
    accessCode: DataTypes.INTEGER
  }, {});
  Access.associate = function(models) {
    // associations can be defined here
  };
  return Access;
};