require("dotenv").config();

exports.config = {
    mongoURL:process.env.URLDB,
    tokenSecret:process.env.TOKENSECRET
}