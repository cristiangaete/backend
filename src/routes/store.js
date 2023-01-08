const {Router}= require('express');
const { loadProduct, loadCategory, searchProduct, searchCategory } = require('../controllers/storeController');
const router = Router();

router.route('/product')
.get(loadProduct)

router.route('/product/:buscar')
.get(searchProduct)

router.route('/category')
.get(loadCategory)

router.route('/category/:id')
.get(searchCategory)

module.exports = router;