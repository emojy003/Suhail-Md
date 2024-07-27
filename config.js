const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_31_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI4LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwLFxuICAgICAgICA0LFxuICAgICAgICA2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxR3g3elF2bnk0a2xSTjJNcXJNVkJCWktwWm5MbG9rNGpXU0lWajVtQUswPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwNjAyNDA4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTAzMzNFRTcyNDk2M0YzNzc0RjVGNEFENjMxQkRBNjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTIzMTEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk4wVER6NGlpUk9tbGRzX1NlRUtHR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjAyNmEzZjctMWM3ZS00Y2Q2LThmN2UtZTIzY2I0MWE4ZWY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDE3OCxcbiAgICAgIDAsXG4gICAgICAyMzIsXG4gICAgICAyMTksXG4gICAgICAxMDUsXG4gICAgICAyMzUsXG4gICAgICAxOSxcbiAgICAgIDE0NyxcbiAgICAgIDE3MyxcbiAgICAgIDIxNSxcbiAgICAgIDIxNSxcbiAgICAgIDcsXG4gICAgICAyNTIsXG4gICAgICAxNzQsXG4gICAgICAyMTcsXG4gICAgICAxODksXG4gICAgICAzLFxuICAgICAgMTUyLFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDE0MCxcbiAgICAgIDQ0LFxuICAgICAgMTEwLFxuICAgICAgMTU5LFxuICAgICAgNTQsXG4gICAgICAxMzksXG4gICAgICAxMDIsXG4gICAgICAxMDEsXG4gICAgICA1NyxcbiAgICAgIDMxLFxuICAgICAgNzYsXG4gICAgICAyMyxcbiAgICAgIDI1NCxcbiAgICAgIDgzLFxuICAgICAgMTA3LFxuICAgICAgMjM0LFxuICAgICAgMjI4LFxuICAgICAgMTA3LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlM2TFNMUTI5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDYwMjQwODY6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFbW9qeV9CV1lcIixcbiAgICBcImxpZFwiOiBcIjI4MDcwMjE2Nzg2NzUwNTozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJK09tZmtDRU9HR2xyVUdHQTRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlyREs1V1NrQ01JUWh3Mk0wSEJLWU9VUzdnK2M2a0cxWElwWEZ4bFI3Q1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYU5ZMFpna2s4dE9oQzhVZ3BpdzRCcS9hbmRuQlJvWGVCYVZQUXYybHJqeUxPUzNnUjYxOTAyVnZ5aE5YdTY0UWdGTWRwRUFNbTdEbUxJT1pOdEVNQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieWNTUnR0RTJWVjE3NEJsNzhmZk5ZcU9vTFlnYVpvSTBUUzRuR3A2aFVrRmh4RWxBMnhrYmtTWmkybWhWbXMwUFZtSVdhaXBxMUlxRm55Znd5S2ovaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA2MDI0MDg2OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTIzMTA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlc5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGVzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvVFJmbDhhVTZmUWdLSnBtUmtBT3ZBN2tJTFBGOUdDMGF4bjRzeTExNnJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc5MTAzNzcxMSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
