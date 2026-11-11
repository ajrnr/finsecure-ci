const mysql = require('mysql2/promise');
module.exports = mysql.createPool({
  host: 'db.finsecure.internal', user: 'transfers_svc',
  password: 'Fs!Prod_2026#Transfers', database: 'core_banking'
});
