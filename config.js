const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.port= process.env.PORT || 5000
global.email = 'botwhatsapp204@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'shehansa hansaka bot' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'lokuh-xx' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ?'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0MrMUtpSldnVTVTVVBrVjJKMC93NkU4dGpCcGRWNWlTcktjSDBkZG1sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFRhK0xDSlFWMnFIVkpBTUpHZzZ4Z0tVeU51VHh3SFcxK2Mrc2hsNU1RQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQ0VRazB6UkFZK1lrZ213TlRSNWhMMWloQngyY0cxdDdGU2VKbk9sV0U0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUFArUmRTTEowSlZXYUQ3MzhLK29paUw2R01IaSszOGVuTDdGV1djVWtzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLTk1kMnBsSk5LaFZvNUZ1cysvL0M0MmJhbFhHZzA0Z1BrNVhPOEo3a3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJndEM4NHIrcUZ3eTNyeFFwZkZ0d2t6OW04K2RNejQyM0Evb000eFNZUzg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiVEdWK1ZZRWQwbmdCYU5YblFoR2owaW9lZFY2NVdPQkN0TjdRYlpHdU9FVU1pWXMzSnI4Vlorc3dHOXhlTjdHZTE0bnppd0ZBRTBhTFE3SVoxZmZqQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4OSwiYWR2U2VjcmV0S2V5IjoibGFhYjkwVUM2V0JRaE41bmkzbWtPMWRzMm8wb3MxWTVibHpDb1Z4dkVqWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTXFiLU1RSGxSWjZjU04tYWhudVlUUSIsInBob25lSWQiOiI4ZTI0NTllNC00MzA4LTQ3ZjgtODk3ZC1jNzExNmM0ZmUxNzYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFg1blR2elNidng1aHMzTUJXQTJRSHN1c3BnPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUGR1Ky9RUFFlMzRoN3kreTNsMktTVjlQZlU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQalBxYklFRU1mUWhhMEdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1QTRPN1AyUXpPWUkwcTF3RmRGUWJkZ2p3alN4K1ZJSFFkemduUlJUVzNBPSIsImFjY291bnRTaWduYXR1cmUiOiJWWVZEUDA3eHlmTjVQWFVVQUFLNHdiV2djTnJWOU5vVjlsNDk4b1R2WjYreDlnN0xwa01jb2g2UWpDcDhpd1FVM1NXUDUrOGdPUUxKL0FOM2xwSktDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNVNhTlVSV05IdVVhVndxV0JTZldJUkdpNHUyeGJ2ZVpqZkNrMHV2emgrYWhkcUdxcTNqelN2OXM2WHpOQXhVaUpZbVVwU1YvOStpRldWdndyTk45aVE9PSJ9LCJtZSI6eyJpZCI6Ijk0NzUxNTYyODM4OjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmbvwnZm+8J2ZuvCdmoRcIvCdmpEt8J2aofCdmqEifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTE1NjI4Mzg6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmdPRHV6OWtNem1DTkt0Y0JYUlVHM1lJOEkwc2ZsU0IwSGM0SjBVVTF0dyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNTA3NjgxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNSnAifQ==': process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Vajira-Rathnayaka' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Vajira-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ?'true': process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ?'true' : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
