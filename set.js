mr-X-force' fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'LUCKY-XFORCE••<=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU4yV2RDSXRIOFpvZkVkMUNSWHJqRWw5VVZEM3ZaSjlFMU1ZL2lvYS9FUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0tjMWZoampVdUgwdmVOSDZLZTFZdWtMQ0tLeUdsL3l0Zmo1ZDVxTmVYUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQ1FidStwd3l2VFZLdktHSDNnajM2djI1MmcrZkphcFZkZnVxTkNya0UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdS8wTDdXRjhSaDBtL0hybUdhV2ZkenJqVWNQK3JBSHFRK2xoY2IvTGljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGNjIxRDQvN3FpcTlJWTh3SEZUMThRMjh6eDdKWWZMVm0zV0k3eG1wbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVrYUkwN01RWVVVVk1qS0NOWTM3b0hSUEhMdWdCUDNNV3JHTS90S0lsUjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU4wSVBJbmJzM1ZwVjBROENGM2RvWG9meWo2VnRjS2twbG9ZNXdYZ1VYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWR2WlY3dGJZVGdkTjRiYnRoS1BYSWo1VjA0eVdXeWt0MDRuQWNFcG1TQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJZRTJDcENjR2NQbXk2em9CQllaaFg2eWZZRU9RTVMrcmg2anBCVU50eVRuaGxnZWJSRVYwR1kwYXpxSE9tbTYwdmFFTXV5YnZQY2ZpSm9QTlBqVUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJoSUZJWEd0UWRta0xyY3FJcHpVaHUwMEhDZWtDUTZIWldJNFVwMHFINVpnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2OTc5OTk4MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDN0NFMDVGNzE4NTY5OUIxNEQ0QzRCQkJEMENBOEMzMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0OTM1NTQ3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3Njk3OTk5ODJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEVERDRGNzMwMEE5ODcxRjE5OEM0QjRFQkJEQ0NGRTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDkzNTU0N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMkoxTUpSUUwiLCJtZSI6eyJpZCI6IjI1NDc2OTc5OTk4MjozMkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1NjI5ODcyNTM1MTU3NjozMkBsaWQiLCJuYW1lIjoiTC5ZLi5SLkkuQyBBIEwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01yV3BJSUhFT3JoNk1RR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9rRTI3SVBRUzNRNXBFWVNGSnJ3UDBrckJscFloRXdXMkxKUUNaQUljQ2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJaaGkxaHpOcFh2bWE2Mk9jd0x2QUpoZnhzVFZMRStkSFJMUFhKNXpiUGJuT3FRSGFrZnJXMEtCQzNnRm1vRmFOMHJ5RE45UEpaYWJNWkU2aVdSV0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5bWhranlxTUE0L2wzdUtZYWtEbTZrWDBxaTcvdnY4elEwR000anc1Z1ZIc1hDYml6Nk1Pd0dhbnVQUTljQnlBcVlJOVcxUnE1RndSeHY1RFpzZldBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2OTc5OTk4MjozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhSkJOdXlEMEV0ME9hUkdFaFNhOEQ5Skt3WmFXSVJNRnRpeVVBbVFDSEFvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ5MzU1NDMsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmRDIn0=',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/mr-X-force/LUCKY-MD-XFORCE',
    OWNER_NAME : process.env.OWNER_NAME "lyrical",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254769799982",
    DEV : process.env.DEV || "FrediEzra Tz",
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT : process.env.AUTO_REACTION || "no", 
    AUTO_STICKER : process.env.AUTO_STICKER || "no",
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/uw4l17.jpeg",  
    URL2: process.env.URL2 || "https://files.catbox.moe/3o37c5.jpeg",
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'no',              
    CHAT_BOT: process.env.CHAT_BOT || "no",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'no', 
    GREET : process.env.GREET_MESSAGE || "no", 
    AUTO_STICKER : process.env.AUTO_STICKER || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || 'Your Status Seen By LUCKY-MD-XFORCE',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    ANTI_BUG : process.env.ANTI_BUG || "no",
    ANTI_MENTION_GROUP : process.env.ANTI_MENTION_GROUP || "on",
    ANTI_TAG : process.env.ANTI_TAG || "on",
    ANTI_BAD : process.env.ANTI_BAD || "on",
    ANTI_SHARE_GROUP : process.env.ANTI_SHARE_GROUP || "on",
    ANTI_LINK_GROUP : process.env.ANTI_LINK_GROUP || "on",
    AUTO_BIO: process.env.AUTO_BIO || 'yes',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    WEBSITE :process.env.GURL || "https://fredi-ai-site.vercel.app",
    CAPTION : process.env.CAPTION || "LUCKY-MD-XFORCE",
    BOT : process.env.BOT_NAME || 'LUCKY-MD-XFORCE',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    LUCKY_ADM : process.env.ANTI_DELETE_MESSAGES || 'no',
    ANTI_DELETE_GROUP : process.env.ANTI_DELETE_GROUP || 'no',
    ANTI_CALL: process.env.ANTI_CALL || 'yes', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes', 
    VOICE_CHATBOT_INBOX : process.env.VOICE_CHATBOT_INBOX || "no",
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, 
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
