'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
  };
  return Playlist;
};