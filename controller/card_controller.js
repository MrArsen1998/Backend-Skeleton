const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('database.db')

exports.showAll=(req, res)=> {
    db.all('SELECT card.card_id, products.name, products.price, card.quantity FROM card JOIN products ON card.product_id = products.product_id', [], (err, data) => {
        res.send(data)
    })
}

exports.showProduct=(req, res) => {
    const user_id = req.params.id
    db.get('SELECT products.name, products.price, card.quantity FROM card JOIN products ON card.product_id = products.product_id WHERE card.user_id=?', [user_id], (err, data) => {
        res.send(data)
    })
}

exports.add=(req,res)=> {
        const user_id = req.params.id
        const product_id = req.body.product_id
        const quantity = req.body.quantity
        db.run('INSERT INTO card (user_id, product_id, quantity) VALUES (?,?,?)', [user_id, product_id, quantity],(err) => {
            res.send("Product is added to card succesfully")
        })
}

exports.delete=(req, res) => {
    const user_id = req.params.id
    const product_id = req.body.product_id
    db.run('DELETE FROM card WHERE user_id=? AND product_id =?', [user_id, product_id],(e)=>{
        res.send("Product is deleted from card succesfully")
    })
}