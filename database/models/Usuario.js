module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(75),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        telefone: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'usuarios',
        timestamps: false
    });

    return Usuario;
}