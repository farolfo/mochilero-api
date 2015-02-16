module.exports = function(sequelize, DataTypes) {
  var Hitch = sequelize.define("Hitch", {
    lat:  DataTypes.FLOAT,
    long: DataTypes.FLOAT
  });

  return Hitch;
};
