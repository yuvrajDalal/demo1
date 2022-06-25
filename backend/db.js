const mysql=require('mysql');
const Pool=mysql.createPool({
    host:'db',
    user:'newuser',
    password:'password',
    port:3306,
    database:'lab',
    connectionLimit:10

})
module.exports={
    Pool,
}