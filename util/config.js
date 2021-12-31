require("dotenv").config();
let config = {
    prefix : process.env.prefix,
    token : process.env.token
}
module.exports = config;