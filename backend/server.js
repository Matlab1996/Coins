const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connection = mysql.createConnection({
    host:       'localhost',
    port:       3306,
    user:       '',
    password:   '',
    database:   'coins',
});

app.get('/coinlist/:type', (req, res) => {
    const type = req.params.type;
    connection.query(
        `select * from coins_info where type='${type}';`, (err, data) => {
            if(err){
                return res.status(500);
            }
            res.status(200).json(data);
        }
    )
})

app.get('/coin/:id', (req, res) => {
    const id = +req.params.id;
    connection.query(
        `select * from coins_info where id=${id}`, (err, data) => {
            if(err){
                return res.status(500);
            }
            // console.log(JSON.stringify(data))
            res.status(200).json(data);
        }
    )
})

app.get('/image/:name', (req, res) => {
    // console.log(req.params.name);
    res.sendFile(`C:/users/matla/documents/vs code/coins/backend/img/${req.params.name}`);
})

app.get('/filter', (req, res) => {
    let where = '';

    let desc = req.query.desc;
    if(desc){
        where += (where) ? ' AND ' : '';
        where += `full_desc like '%${desc}%'`
    }
    
    let country = req.query.country;
    if(country){
        where += (where) ? ' AND ' : '';
        where += `country='${country}'`
    }

    let composition = req.query.metal;
    if(composition){
        where += (where) ? ' AND ' : '';
        where += `composition='${composition}'`
    }

    let quality = req.query.quality;
    if(quality){
        where += (where) ? ' AND ' : '';
        where += `quality='${quality}'`
    }

    let priceFrom = req.query.priceFrom;
    if(priceFrom){
        where += (where) ? ' AND ' : '';
        where += `price>${priceFrom}`
    }

    let priceTo = req.query.priceTo;
    if(priceTo){
        where += (where) ? ' AND ' : '';
        where += `price<${priceTo}`
    }
    
    let yearFrom = req.query.yearFrom;
    if(yearFrom){
        where += (where) ? ' AND ' : '';
        where += `year>${yearFrom}`
    }
    
    let yearTo = req.query.yearTo;
    if(yearTo){
        where += (where) ? ' AND ' : '';
        where += `year<${yearTo}`
    }

    connection.query(
        `select * from coins_info where ${where};`, (err, data) => {
            if(err){
                return res.status(500);
            }
            res.status(200).json(data);
        }
    )
})

app.get('/countrylist', (req, res) => {
    connection.query(
        `select distinct country from coins_info;`, (err, data) => {
            if(err){
                return res.status(500);
            }
            res.status(200).json(data);
        }
    )
})

app.get('/metallist', (req, res) => {
    connection.query(
        `select distinct composition from coins_info;`, (err, data) => {
            if(err){
                return res.status(500);
            }
            res.status(200).json(data);
        }
    )
})

app.get('/qualitylist', (req, res) => {
    connection.query(
        `select distinct quality from coins_info;`, (err, data) => {
            if(err){
                return res.status(500);
            }
            res.status(200).json(data);
        }
    )
})

app.listen(3003, () => {
    console.log('SUCCES 3003');
})