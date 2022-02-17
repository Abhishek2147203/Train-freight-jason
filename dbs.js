const mysql = require('mysql2');
const express = require('express');
var app = express();
const parser = require('body-parser');
app.use(parser.json());
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cisco@91',
    database: 'WSD'
});

connection.connect((err) => {
    if (!err)
        console.log('DB Connected....');
    else
        console.log('Error');
})
app.listen(9011, () => console.log('server Start...'));
app.get('/employee', (req, res) => {
    connection.query('SELECT * from USER', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log("error");
    })
})
app.get('/employee/:id', (req, res) => {
    connection.query('SELECT * from USER WHERE UID=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log("error");
    })
})



app.get('/add', (req, res) => {
    var post = { UID: 11, USER_NAME: "Suku", EMAIL: "suku@gmail.com", PHONE: 9162326098 }
    var sql = 'INSERT INTO USER SET ?';
    var query = connection.query(sql, post, (err, result) => {
        if (err) throw error;
        res.send("Inserted Rows....")
    });
});

app.get('/update/:id', (req, res) => {
    var name1 = 'Shinu'
    var sql =
        'UPDATE USER SET USER_NAME = '
    $ { name1 }

    ' WHERE UID=${req.params.id}';
    var query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send("UPDATED Rows....")
    });
});



app.get('/delete/:id', (req, res) => {
    var sql = 'DELETE FROM USER WHERE UID=${req.params.id}';
    var query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send("DELETED Rows....")
    });
});