const express = require('express');
const router = express.Router();

const pool = require('../database');

// AQUI SE LLENA EL INICIO DE LA APP
router.get('/product', (req, res) => {
    pool.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// AQUI SE LLENA EL SELECT DEL HTML
router.get('/category', (req, res) => {
    pool.query('SELECT * FROM category', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
    // console.log(query.)
});

//'SELECT * FROM product WHERE name LIKE ?',[`%${req.body.buscar}%`],
//"SELECT * FROM product WHERE name LIKE '%"+ req.body.buscar +"%' ORDER BY name ASC"
// AQUI SE BUSCA POR EL BUSCADOR DE LA APP BAR
router.get('/product/:buscar', (req, res) => {
    pool.query('SELECT * FROM product WHERE name LIKE ? ORDER BY price ASC', [`%${req.params.buscar}%`], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
    // console.log(query.)
    console.log(req.params.buscar)

});

// 'SELECT pr.id, pr.name, pr.url_image, pr.price, pr.discount FROM product pr, category ca  WHERE pr.id = ca.?',[`${req.params.id}`]
// `SELECT pr.id, pr.name, pr.url_image, pr.price, pr.discount FROM product pr, category ca WHERE ca.id = ${req.params.id} AND ca.id = pr.id`
// AQUI SE BUSCA POR EL ID DEL SELECT
router.get('/category/:id', (req, res) => {
    pool.query('SELECT pr.id, pr.name, pr.url_image, pr.price, pr.discount FROM product pr, category ca WHERE ca.id = ? AND pr.category = ca.id',[`${req.params.id}`], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
    // console.log(query.)
    console.log(req.params.id)

});



module.exports = router;