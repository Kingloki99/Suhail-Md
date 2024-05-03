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



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348028367644";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348028367644";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_23_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI2LFxuICAgICAgICA4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNixcbiAgICAgICAgMjA4LFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQxLFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY3LFxuICAgICAgICA5MyxcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA1NSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk3LFxuICAgICAgICA4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFbC9iQllrWTlBOGxQbUxNV3ExRU1BNlJnT1pQZjNDNzh4aU9WWWFMWTRJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMjgzNjc2NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExQTAzN0NCM0I1N0M0MEQ2QjU2QTIxNjE2RjkzQTk5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDcxNzQyMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIycnpuU0JPcVRrZUR0R3lhZGRiZEJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgwOTI2Zjk0LTMwMmEtNGQ5ZS1iNWI4LWQ3ZWZmZjhhNGYxYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyMzksXG4gICAgICA2NixcbiAgICAgIDEyNixcbiAgICAgIDEyNCxcbiAgICAgIDE5NCxcbiAgICAgIDE0MCxcbiAgICAgIDIwOCxcbiAgICAgIDUyLFxuICAgICAgNTgsXG4gICAgICAxMzksXG4gICAgICAxNDgsXG4gICAgICAxMCxcbiAgICAgIDE4MixcbiAgICAgIDE1NCxcbiAgICAgIDIwOSxcbiAgICAgIDE5LFxuICAgICAgMTYyLFxuICAgICAgMTcwLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgNTcsXG4gICAgICA2OSxcbiAgICAgIDQyLFxuICAgICAgMjMwLFxuICAgICAgMTY1LFxuICAgICAgNTMsXG4gICAgICAxOSxcbiAgICAgIDIyOCxcbiAgICAgIDI1MSxcbiAgICAgIDI2LFxuICAgICAgMjIzLFxuICAgICAgMTAwLFxuICAgICAgMzcsXG4gICAgICAxMTMsXG4gICAgICAyNDksXG4gICAgICAxMDYsXG4gICAgICA3NSxcbiAgICAgIDYwLFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVRUzhKMjQ4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDI4MzY3NjQ0OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR2hvc3QgR2FtaW5nIEluYy5cIixcbiAgICBcImxpZFwiOiBcIjExMDkwOTA1Nzk3NDMyNToyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYlcrcDhFRU9PRjByRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitGMmhKWnpGUDE5R1h0Zno3NmVxbnhFUlBkVTVER3phZUhHUWZENVg4QW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNTBhNHIvUlJwb0owMW5rU2FFdm1jZEE1UW1wb0szbG4xYnBhL2xEM0NxMk1VNjZWNVFDdWRZd0lIWGRyYm9mQUdDbGh2RHdVUEV1STA4VHhvRmtFQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTWZXVEE2ZGI5dlMwc1E1ckFnK0VVM1IzRlBzTllycThaMW4waCs4WkhZWHNrUHk3MnN0QTBXalZ5Z2I2NzNMa0FMc3VkS3UrWWFHTXBJTmF2Q3BpRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyODM2NzY0NDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ3MTc0MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTVJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpNUi5qc29uIjogIntcImtleURhdGFcIjpcIjZsOGduU0pTN1RVdEI0Q0Z2bUpybFM4aDJZLzZac0RtSmplYzc4UmV0eUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE0MDc2MzM5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDY0NTQ4OTMwMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "GHOST-MD",
  ownername:process.env.OWNER_NAME|| "GHOST",


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
