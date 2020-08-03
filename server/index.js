const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const ProductRoutes = require('./routes/products')

// mongoDBクリア＆ダミーデータsave
mongoose.connect(config.dburi, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        const fakedb = new FakeDb()
        fakedb.InitDb()
    }
)


//ProductRoutes API設定（MONGODBアクセス：find)
const app = express()
app.use('/api/v1/products', ProductRoutes)


//APIが叩かれるのを待つ
const port = process.env.PORT || '3001'
app.listen('3001', function() {
    console.log('I am running!')
})