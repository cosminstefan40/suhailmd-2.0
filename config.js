const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0770811929";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_53_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI5LFxuICAgICAgICA1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICA5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWcmpNbU5KZVpVMXpVMzBSL244SHpEOGtyVWJ0bTV5Y2RMeGh5MjhNM1ZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMTM4RDVBN0JBNDdCNjEzQTc2OEY4OTlEQjg3MDUzOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQwNDc2MDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc3MDgxMTkyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjIzNzUyQUEyODExQzYyQ0FGMDM4MkMyRTFGMzc3RUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MDQ3NjAxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlcwUllGN3pwU0NDck1mS0diZ19UVFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTk1ZTliNTYtMDMwNC00NzRjLWFmOTUtZjhjZThiOTBkOWE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDEwMyxcbiAgICAgIDI4LFxuICAgICAgOTAsXG4gICAgICAzNyxcbiAgICAgIDIwMSxcbiAgICAgIDY5LFxuICAgICAgNTIsXG4gICAgICAxMzIsXG4gICAgICA2OCxcbiAgICAgIDg2LFxuICAgICAgMjQ3LFxuICAgICAgMjUzLFxuICAgICAgMTY0LFxuICAgICAgNTMsXG4gICAgICA3OSxcbiAgICAgIDI0NSxcbiAgICAgIDE5MixcbiAgICAgIDY3LFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTQ0LFxuICAgICAgMTg2LFxuICAgICAgMTk5LFxuICAgICAgMjMxLFxuICAgICAgMTQ2LFxuICAgICAgMTkzLFxuICAgICAgNjAsXG4gICAgICAyMDMsXG4gICAgICAxNzUsXG4gICAgICAyNDUsXG4gICAgICAxNTAsXG4gICAgICA3OSxcbiAgICAgIDEwNCxcbiAgICAgIDEzNyxcbiAgICAgIDMwLFxuICAgICAgMjAxLFxuICAgICAgNDcsXG4gICAgICAxNjUsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkhKWU01MURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQwNzcwODExOTI5OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYW5vbmltXCIsXG4gICAgXCJsaWRcIjogXCIyMDc0MzAyNjA2MzM3Mjk6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT245ejVVRkVPenU3Ym9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZblp2bkdNN3M0YWV6NGJ5Nnd2alUxcVhITEZxbEVEcjMySlM5Q3ZIc2tvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxvNzRPQ252RjZ0akx6YS9uQzgyeVVPK1RHcGNGOHhsU2lNZlozdFFwRWpiNDQ0OHJhRkt1NEdjNm56SDRSbVJ3QjNQZDNjbVBaa2c1UmU5T08xSkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRaZE94eWJkczBnZ2dTS3RBbkRlbjFobWRzRk91aE9yTXE4VjJHU01vT2tGbnJUTHlwdGFGNzJ2dVlmeTZocExyaGp2REdtVEp4U3RvdE9PcFM0QUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQwNzcwODExOTI5OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MDQ3NTk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDkzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMOTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaVWcra0MxMTBzUjNXeTgrRE5oTkhmV1lpcGZ4Qk8xRk9DZ2ZTK3B4RWNjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzODc1Mjc5MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzkyMTI5NzI0NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "ANONIM",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
