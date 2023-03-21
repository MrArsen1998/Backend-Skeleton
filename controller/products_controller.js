const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('database.db')

exports.showAll=(req, res)=> {
    db.all('SELECT * FROM products', [], (err, data) => {
        res.send(data)
    })
}

exports.showProduct=(req, res) => {
    const id = req.params.id
    db.get('SELECT * FROM products WHERE id=?', [id], (err, data) => {
        res.send(data)
    })
}

exports.add=(req,res)=> {
        const name = req.body.name
        const price = req.body.price
        db.run('INSERT INTO products (name,price) values (?,?)', [name,price],(err) => {
            res.send("Product is added succesfully")
        })
}

exports.update=(req, res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const price = req.body.price;
    db.run('UPDATE products SET name=?,  price=? WHERE id=?',[name,price,id],(e)=>{
        res.send('Product updated succesfully')
    })
}

exports.delete=(req, res) => {
    const data_id = req.params.id
    db.run('DELETE FROM products WHERE id=?', [data_id],(e)=>{
        res.send("Product is deleted succesfully")
    })
}
