module.exports = (sequelize, DataTypes) => {
    return sequelize.define( 'user', {
        name : {
            type : DataTypes.STRING(20),
            allowNull : false,
            unique : true,
        },
        age : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
        married : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
        },
        create_at : {
            type : DataTypes.DATE,
            allowNull : false,
            dafaultValue : sequelize.literal('now()'),
        },
    },{
        timestamps : false, // true이면 자동으로 createdAt과 updatedAt 컬럼을 추가함.
        freezeTableName: true
    })
}