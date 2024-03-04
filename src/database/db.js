const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/database/taskfy.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados SQLite', err.message);
    } else {
        console.log('Conexão bem sucedidada com o banco de dados SQLite');
    }
});

module.exports = db;