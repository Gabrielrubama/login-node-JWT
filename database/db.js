const { createPool } = require('mysql2/promise');

const conexion = createPool({
    host: "localhost",
    user: "root",
    password: "170798",
    database: "login_node_jwt",
});

(async () => {
    try {
        await conexion.getConnection();
        console.log("Connected to MySQL database!");
    } catch (error) {
        console.error(`Error de conexión: ${error.message}`);
    }
})();

module.exports = conexion;