const mongoose = require("mongoose")
mongoose.connect(`${process.env.MONGODB_URL}/userSign`)

let db = mongoose.connection;




module.exports = db