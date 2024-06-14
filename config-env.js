
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID: PRABATH-MD~ZQhz0YgJ#CNXeLpd9aoSbCBTGeJ4aPiY3P5mWjaalu6_tjlYWrIc process.env.SESSION_ID,    
    BOT_NUMBER: 22899869601 process.env.BOT_NUMBER,
    GITHUB_USERNAME: Itsmeji username,
    GITHUB_AUTH_TOKEN: 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 process.env.GITHUB_AUTH_TOKEN,
};
