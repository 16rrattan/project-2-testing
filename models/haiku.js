module.exports = function (sequelize, DataTypes) {
    var Haiku = sequelize.define("Haiku", {
        poem: DataTypes.STRING
    });

    Haiku.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Haiku.belongsTo(models.Author, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Haiku;

};