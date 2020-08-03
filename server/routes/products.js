const product = require('../model/product')

const express = require('express')
const router = express.Router()

router.get('', function(req, res) {
    //MONGODBアクセス
    product.find({}, function(err, foundProducts) {
        return res.json(foundProducts)
    })
})

router.get('/:productId', function(req, res) {
    //MONGODBアクセス
    const productId = req.params.productId
    product.findById(productId, function(err, foundProduct) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'product err', detail: 'product not found!' }] })
        }
        return res.json(foundProduct)
    })
})

module.exports = router