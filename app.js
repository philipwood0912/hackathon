const express = require('express');
const path = require('path');
const hbs = require('hbs');
const sql = require('./utils/sql');

const port = process.env.PORT || 5000;

const app = express();

var sqlArrText = [],
    sqlArrName = [],
    sqlArrRate = [];

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + "/views"));

app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    //res.render('home', { message: "yo what up"});
    //res.sendfile(__dirname + '/public/main.js');

    sql.getConnection((err, connection) => {
        if(err) {
            return console.log(err.message);
        }
        let query = "SELECT * FROM tbl_reviews";

        sql.query(query, (err, rows) => {
            connection.release();
            if (err) { return console.log(err.message) }
            rows.forEach(row => {
                sqlArrText.push(row.Text);
                sqlArrName.push(row.Name);
                sqlArrRate.push(row.Rating);
            })
            
            res.render('home', {
                messageOneText: sqlArrText[0],
                messageOneName: sqlArrName[0],
                messageOneRate: sqlArrRate[0], 
                messageTwoText: sqlArrText[1],
                messageTwoName: sqlArrName[1],
                messageTwoRate: sqlArrRate[1],
                messageThreeText: sqlArrText[2],
                messageThreeName: sqlArrName[2],
                messageThreeRate: sqlArrRate[2], 
                messageFourText: sqlArrText[3],
                messageFourName: sqlArrName[3],
                messageFourRate: sqlArrRate[3]
            });

            console.log(sqlArrName);
            console.log(sqlArrRate);
            console.log(sqlArrText);
            
            //console.log(rows[0]);
        })
    })
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
  })

//module.exports = sqlArr;