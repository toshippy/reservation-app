const Product = require('./model/product')


class FakeDb {
    constructor() {
        this.products = [{
                coverImage: './assets/img/img_300_250.jpg',
                name: 'name1',
                price: 799,
                description: 'description 1 1 1 1 1 ',
                heding1: 'サンプル１　サンプル１　サンプル１',
                heding2: 'サンプル２　サンプル２　サンプル２',
                heding3: 'サンプル３　サンプル３　サンプル３',
                headingtext1: 'ヘッドテキスト１　ヘッドテキスト１　ヘッドテキスト１',
                headingtext2: 'ヘッドテキスト２　ヘッドテキスト２　ヘッドテキスト２',
                headingtext3: 'ヘッドテキスト３　ヘッドテキスト３　ヘッドテキスト３'
            },
            {
                coverImage: './assets/img/img_300_250.jpg',
                name: 'name2',
                price: 699,
                description: 'description 2 2 2 2 2 ',
                heding1: 'サンプル１　サンプル１　サンプル１',
                heding2: 'サンプル２　サンプル２　サンプル２',
                heding3: 'サンプル３　サンプル３　サンプル３',
                headingtext1: 'ヘッドテキスト１　ヘッドテキスト１　ヘッドテキスト１',
                headingtext2: 'ヘッドテキスト２　ヘッドテキスト２　ヘッドテキスト２',
                headingtext3: 'ヘッドテキスト３　ヘッドテキスト３　ヘッドテキスト３'
            },
            {
                coverImage: './assets/img/img_300_250.jpg',
                name: 'name3',
                price: 299,
                description: 'description 3 3 3 3 3 ',
                heding1: 'サンプル１　サンプル１　サンプル１',
                heding2: 'サンプル２　サンプル２　サンプル２',
                heding3: 'サンプル３　サンプル３　サンプル３',
                headingtext1: 'ヘッドテキスト１　ヘッドテキスト１　ヘッドテキスト１',
                headingtext2: 'ヘッドテキスト２　ヘッドテキスト２　ヘッドテキスト２',
                headingtext3: 'ヘッドテキスト３　ヘッドテキスト３　ヘッドテキスト３'
            },
            {
                coverImage: './assets/img/img_300_250.jpg',
                name: 'name4',
                price: 999,
                description: 'description 4 4 4 4 4 ',
                heding1: 'サンプル１　サンプル１　サンプル１',
                heding2: 'サンプル２　サンプル２　サンプル２',
                heding3: 'サンプル３　サンプル３　サンプル３',
                headingtext1: 'ヘッドテキスト１　ヘッドテキスト１　ヘッドテキスト１',
                headingtext2: 'ヘッドテキスト２　ヘッドテキスト２　ヘッドテキスト２',
                headingtext3: 'ヘッドテキスト３　ヘッドテキスト３　ヘッドテキスト３'
            }
        ]
    }

    async InitDb() {
        await this.CleanDb()
        this.PushProductstoDb()
    }

    async CleanDb() {
        await Product.deleteMany({})

    }

    PushProductstoDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()　
            }
        )
    }

}
module.exports = FakeDb