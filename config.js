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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_17_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MixcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDk1LFxuICAgICAgICA2MixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR2hQOVNrcmtKSUlWb3BlSHJWNzlTallzTnBxZ01ZdVZYUGlBM3FRbnQvRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MDYwMjQwODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI2RDdFRDQzNUU5N0VCNzEyNTBEQzQxQTg0OUI5M0REXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE1MTAyNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5U1BrcHN1M1N0aW1YQ2U2bWNLekRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY5MjQ5YWYxLWUzOTYtNDQ0MC05MTJmLTg4Nzc2YjI5NDJhZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAyMTAsXG4gICAgICAzNCxcbiAgICAgIDEzMCxcbiAgICAgIDI0NSxcbiAgICAgIDEyMyxcbiAgICAgIDExNyxcbiAgICAgIDY5LFxuICAgICAgMjM4LFxuICAgICAgMTQ4LFxuICAgICAgMjQxLFxuICAgICAgMjQyLFxuICAgICAgMTk4LFxuICAgICAgNDksXG4gICAgICA3NSxcbiAgICAgIDE5LFxuICAgICAgMzQsXG4gICAgICAxNDQsXG4gICAgICAyMjUsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjI1LFxuICAgICAgMTU3LFxuICAgICAgMTI3LFxuICAgICAgNjQsXG4gICAgICAxNzIsXG4gICAgICAxMDAsXG4gICAgICAxNzksXG4gICAgICAyMDYsXG4gICAgICA4MCxcbiAgICAgIDgxLFxuICAgICAgMjMwLFxuICAgICAgMTUsXG4gICAgICAxMDEsXG4gICAgICAxODEsXG4gICAgICAyMzUsXG4gICAgICA0MixcbiAgICAgIDE2NSxcbiAgICAgIDMwLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVks2Tlc3SzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNjAyNDA4NjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkVtb2p5X0JXWVwiLFxuICAgIFwibGlkXCI6IFwiMjgwNzAyMTY3ODY3NTA1OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pDT21ma0NFT0xnbDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXJESzVXU2tDTUlRaHcyTTBIQktZT1VTN2crYzZrRzFYSXBYRnhsUjdDUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqYUVabndBaUw4U05JUng4bVhYWVJUUTVBb0lGZURtSU50by9VWUROSWFaQ2ZrdTNVYkozQkdIUm5VM3U3L2htM0FmRlBNYjRrV3NiZ0dTR2N3TnFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXREZzY3BkR0hmVmJHK052SXU5N1NkNkJQQW05QlhIcy9iRHdjR0o2d2M2bEJpOWVMRlFYdk5Ldmk4ZTF2UzZLTDR0aWs5MHVjVW5PTGJlM2VMR1Vndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDYwMjQwODY6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNTEwMTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDRmxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNGbC5qc29uIjogIntcImtleURhdGFcIjpcIkhHVVF1Nnc5eGtmSGl3MURxL2lEdGdTWEdIT2NNWksrUmEzeXRvL3lxRTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzkxMDM3NzEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxNTEwMjU3MzlcIn0iCn0="  // PUT your SESSION_ID 


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
