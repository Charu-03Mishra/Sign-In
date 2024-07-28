// user-controller.js

const userModel = require("../model/user-model");
const bcrypt = require("bcrypt")
const genreatToken = require("../ulits/token");
const tokens = require("../ulits/token");

module.exports.home = function(req, res) {
    res.render("index");
}

module.exports.register =  function(req, res) {
    res.render("sign"); 
    
}
module.exports.signup = async function(req, res){

    let { email, password } = req.body;
        let user = await userModel.findOne({email})
    if(user) {
        res.send("register")     
    } 
    else{
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(password, salt, async(err, hash)=>{
                let users=  await userModel.create({
                    email,
                    password:hash
                })
                let token = genreatToken({ email })
                res.cookie("token", token,{
                    httpOnly: true,
                    secure: true,
                    maxage: 30*24*60*60*1000
                    
                })
                res.redirect("/")
        
            })
        })
    }
}


module.exports.login = function(req, res) {
    res.render("login"); // Make sure the view name matches your EJS file
}

module.exports.log = async function(req, res){
    let { email, password } = req.body;
        let user = await userModel.findOne({email})
    if(!user) {
        res.send("Someting is Wrong")     
    } 
    else{
        bcrypt.compare(password, user.password, function(err, result){
            if(result) return res.status(200).redirect("/")
        })
    }

}

module.exports.logout = function(req, res) {
    res.cookie("token", "")
    res.redirect("/login");
}
