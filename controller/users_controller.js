const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('database.db')

exports.all=(req,res)=> {
    db.all('SELECT * FROM users', [], (err, data) => {
        res.send(data)
    })
}

exports.dataID=(req,res) => {
    const id = req.params.id
    db.get('SELECT * FROM users WHERE user_id=?', [id], (err, data) => {
        res.send(data)
    })
}

exports.deleteId= (req,res) => {
    const data_id = req.params.id
    db.run('DELETE FROM users WHERE user_id=?', [data_id],(e)=>{
        res.send("User is succesfully deleted")
    })
}
