const Sequelize = require('sequelize');

require('dotenv').config()

const databaseurl = process.env.DB_URL

const sequelize = new Sequelize(databaseurl, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false
}); 

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso!');
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados', error);
    }

}

testConnection();

module.exports = sequelize;