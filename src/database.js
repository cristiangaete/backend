require('dotenv').config();
const mysql= require('mysql');

// const mysqlConnection = mysql.createConnection({
//     host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//     user: 'bsale_test',
//     password: 'bsale_test',
//     database: 'bsale_test'
// });

// mysqlConnection.connect(function(err){
//     if(err){
//         throw err;
        
//     }else{
//         console.log('DB conectada');
//     }
// });

// module.exports = mysqlConnection;

// const pool = mysql.createPool({
//     host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//     user: 'bsale_test',
//     password: 'bsale_test',
//     database: 'bsale_test'
// });
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
// pool.getConnection(function(err, connection) {
//     // Usa la conexión
//     connection.query( 'SELECT * FROM product', function(err, rows) {
//         // Y listo con la conexión.
//         connection.release();
        
//         // No use la conexión aquí, se ha devuelto al grupo.
//     });
// });

pool.on('connection', function (connection) {
    console.log("Connected");
    // Establecer una variable de sesión
    //connection.query('SET SESSION auto_increment_increment=1')
});

module.exports = pool;
