module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Author.associate = function(models) {
    Author.hasMany(models.Haiku, {
      onDelete: "cascade"
    });
  };

  // Syncs with DB
  Author.sync();

  return Author;
};
