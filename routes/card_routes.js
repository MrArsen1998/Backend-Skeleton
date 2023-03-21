const card_controller = require('../controller/card_controller')
const userToken= require("../middleware/userToken_middleware")
const adminToken= require("../middleware/authenticateToken_middleware")

 function create_card_routes(app) {
    app.get('/cardProducts', adminToken.authMidlweare,card_controller.showAll )
    app.get('/cardProduct/:id',userToken.userAuthMidlweare, card_controller.showProduct)
    app.post('/addProductToCard/:id', userToken.userAuthMidlweare, card_controller.add)
    app.delete('/deleteProductFromCard/:id', userToken.userAuthMidlweare, card_controller.delete)
 }

 module.exports = {create_card_routes}