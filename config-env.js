const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}




module.exports = {
    SESSION_ID: "PRABATH-MD~piMSlLYJ#IBZ5GdTiXMkWhhj_zh729znusTL2-n7xeAnvlJD_pog" process.env.SESSION_ID,    
    BOT_NUMBER: "22899869601" BOT_NUMBER,
    GITHUB_USERNAME: "Itsmeji" username,
    GITHUB_AUTH_TOKEN: "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" GITHUB_TOKEN,
};
