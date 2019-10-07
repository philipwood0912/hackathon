const express = require('express');
const path = require('path');
const hbs = require('hbs');
const sql = require('./utils/sql');

const port = process.env.PORT || 5001;

const app = express();

var sqlArr = [];

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + "/views"));

app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    var sqlArr = [];
    //res.render('home', { message: "yo what up"});
    //res.sendfile(__dirname + '/public/main.js');

    sql.getConnection((err, connection) => {
        if(err) {
            return console.log(err.message);
        }
        let query = "SELECT * FROM tbl_test";

        sql.query(query, (err, rows) => {
            connection.release();
            if (err) { return console.log(err.message) }
            rows.forEach(row => {
                sqlArr.push(row.Text);
            })
            
            res.render('home', {messageOne: sqlArr[0], messageTwo: sqlArr[1], messageThree: sqlArr[2], messageFour: sqlArr[3]});

            console.log(sqlArr);
            
            //console.log(rows[0]);
        })
    })
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
  })

//module.exports = sqlArr;