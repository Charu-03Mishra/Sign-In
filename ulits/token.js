const jwt = require("jsonwebtoken")

const token = (data)=>{
   return jwt.sign(data, process.env.JWT_SECRET)
}

module.exports = token