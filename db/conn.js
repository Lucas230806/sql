const {Sequelize} = require ("Sequelize");

const sequelize = new Sequelize('nodesequelize', 'root', 'Sen@iDev77!.', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
})

//try{
   // sequelize.authenticate()
   // console.log('conectado com sucesso')
//}catch(err){
   // console.log('não foi possivel conectar: '+err)
//}

module.exports = sequelize







