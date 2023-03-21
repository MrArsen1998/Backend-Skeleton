const sql = ("CREATE TABLE IF NOT EXISTS card (card_id INTEGER PRIMARY KEY, user_id INTEGER, product_id INTEGER, quantity INTEGER, FOREIGN KEY (user_id) REFERENCES users(user_id), FOREIGN KEY (product_id) REFERENCES products(product_id))");

function create_card(my_database){
    my_database.run(sql)
}

module.exports = {create_card};