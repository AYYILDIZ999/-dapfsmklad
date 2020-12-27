const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});


const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const ta1 = new Discord.Client();
const ta2 = new Discord.Client();
const ta3 = new Discord.Client();
const ta4 = new Discord.Client();
const ta5 = new Discord.Client();
const ta6 = new Discord.Client();
const ta7 = new Discord.Client();
const ta8 = new Discord.Client();
const ta9 = new Discord.Client();
const ta10 = new Discord.Client();
const ta11 = new Discord.Client();
const ta12 = new Discord.Client();
const ta13 = new Discord.Client();
const ta14 = new Discord.Client();
const ta15 = new Discord.Client();
const ta16 = new Discord.Client();
const ta17 = new Discord.Client();
const ta18 = new Discord.Client();
const ta19 = new Discord.Client();
const ta20 = new Discord.Client();
const ta21 = new Discord.Client();
const ta22 = new Discord.Client();
const ta23 = new Discord.Client();
const ta24 = new Discord.Client();
const ta25 = new Discord.Client();
const ta26 = new Discord.Client();
const ta27 = new Discord.Client();
const ta28 = new Discord.Client();
const ta29 = new Discord.Client();
const ta30 = new Discord.Client();
const ta31 = new Discord.Client();
const ta32 = new Discord.Client();
const ta33 = new Discord.Client();
const ta34 = new Discord.Client();
const ta35 = new Discord.Client();
const ta36 = new Discord.Client();
const ta37 = new Discord.Client();
const ta38 = new Discord.Client();
const ta39 = new Discord.Client();
const ta40 = new Discord.Client();
const ta41 = new Discord.Client();



 ta1.login("Nzg1MDcwNDIwNTgzMjUxOTc5.X8ygaA.BV00auL0mf7v4h2TjcQk8mdzAWk");
 ta2.login("Nzg0MTAyMTEyMDU3MDk4MjYw.X8kbkg.8K4n28eR9Rujz0L7If-KaTXbOdo");
 ta3.login("Nzg0MTE3MjExMDI2NDIzODQ4.X8kpKQ.my4AD7mt7Hv1ua0wg5pMy9Z415o");
 ta4.login("Nzg0MTIxNzE0ODA4MDYxOTkz.X8ktWg.0H9CKXADjhAsIwEcdW3-mRYI6xw");
 ta5.login("Nzg0MzU4OTY0ODI1MTYxNzU4.X8oJZQ.HkzIjhQ6tEtLxQbrtYMOI6L7-7I");
 ta6.login("Nzg0Mzg4MTYxODg2NDg2NTc4.X8oscA.UXNDcnyBSV3jQYzUGv_Fzpg7ugY");
 ta7.login("Nzg0NDE0MTI0NjgyNTEwMzU4.X8o90g.fSPk4ZEm_QDCKxtHPv0iHED8Ing");
 ta8.login("Nzg0ODY4NzcwMjI4NjAwODMz.X8vmBw.YUWUJQ6kbji4-SWeJaY9A4_stp4");
 ta9.login("Nzg0ODcxNTYyMzYwNzgyODU4.X8vm-A._6lhrtOJ8mc5ThB6hjP5tqM_xPw");
ta10.login("Nzg0ODcyMTQxNTgwNzk1OTY4.X8yekg.2GnJjZBgoi8Z3pkB2f0k1W9_3N4");
ta11.login("Nzg1MDY5NzIzNDA5NzExMTM0.X8yfSw.YNWt54bj8H-pxOlEPIw7AssAO8c");
ta12.login("Nzg1MDcwNDIwNTgzMjUxOTc5.X8zGdA.JXHiKoTTq-DM-NhMAYh9EkXH9YQ");
ta13.login("Nzg0NzQwNTY5MTYzMTA0MjY2.X8ts_Q.zxUU4lO5g8tuOb4hZrvSYzyotDw");
ta14.login("Nzg0NzQxMTMyMTM5MzY0MzUy.X8ttjg.3kJOTs9y9M9yHRt6TBONzYnZkU4");
ta15.login("Nzg0NzQxNzE5NzE0ODI0MjAy.X8tuNg.8fxHrg7bvwF_hbu8E_VRRGN64Yg");
ta16.login("Nzg0NzQyMzg5Mzg5NDU5NDY2.X8tuzg.086knYg5FA8zp7q7wlcATI8k5q4");
ta17.login("Nzg0NzQzMDUxMjYzMjEzNTc5.X8tvWA.BjsSnW7zeVwVYk6OV4-mz8C3lD0");
ta18.login("Nzg0NzQzNjI5NzQ2OTk1MjEw.X8tv6g.m1cW8LkUM19Ycv0_q2q8s15D10I");
ta19.login("Nzg0NzQ0MjYxNjMxNDc1NzUy.X8twcw.RmE5h18253_JW4jErMw73W9NRrA");
ta20.login("Nzg0NzQ0ODI1MDU2MDAyMDc4.X8tw6A.a4GEQZS1Vm-UWBNfunKZlgD-4u8");
ta21.login("Nzg0NzQ1MzAzNzY4NTYzNzEy.X8txew.8GNSK83G0yqUjkgRW2oU-_E5ITA");
ta22.login("Nzg0NzQ1OTE1ODk3NzQxMzIz.X8tyDQ.5qOmCAAkwiNy72Nc-byKOQ6aYT4");
ta23.login("Nzg0NzQ2NTA3MTM1MzUyODUy.X8tyiA.oFaNIDUas67iwoE5B0w-evLqbxk");
ta24.login("Nzg0NzQ3MDU1MjU0ODYzODcy.X8tzHg.NjVOU5O3tMiOJ9GYoeNjd0bOHbM");
ta25.login("Nzg0NzQ3Njk4NTAxNzEzOTIw.X8tzzA.qFdj4BGrg2LON6LI7M2TEGvCqdU");
ta26.login("Nzg0NzQ4NDU2NDU0NTIwODYy.X8t0Pg.xJw-60TzFpjZCisQ5gDvZGuF87k");
ta27.login("Nzg0NzQ4OTAyMjgwNzI0NTEx.X8t0vg.7DUInuviuf1FeMYsylp-ViNB9M0");
ta28.login("Nzg0NzQ5NDAyMTIzMjcyMjEy.X8t1ag.LgyOV1WLzb6-u8wtvHZMxBFqT18");
ta29.login("Nzg0NzUwMTk1MTk5NDQyOTQ0.X8t19Q.Za4IWER6KFYlmcCCjgTALliJTs4");
ta30.login("Nzg0NzUwODAzODUyMTk3ODg4.X8t2aQ.LDPWT_p8eS4aekFsh7eghj0caNA");
ta31.login("Nzg0NzUxMzYyNTAzOTk5NTM4.X8t3Dg.WpDXD-nOcfktj2H-C49kjJGx9Ys");
ta32.login("Nzg0ODE4MTM5NDM0OTc1MjUy.X8u4UA.cGgNOaifi1z6w3-59ardJeCbZSk");
ta33.login("Nzg1MjYxMDkzMTAxNjMzNTg2.X81T-A.UEYFjioneukgtyz4BZVtFNjrzH8");
ta34.login("Nzg1MjY0NTg0OTExMDkzODAw.X81Vfg.mNj5udNRF4OrQdYrHaufGNGB7OM");
ta35.login("Nzg1MjY2MTQ0Nzg4NzQyMTQ0.X81Wkg.axoDg8NEv0P6tkEXvaUt2KcDrbw");
ta36.login("Nzg1MjY3MzIxODcwNDgzNTI2.X81X1g.tpus_TzydMQwEOeG6emOXkHghg0");
ta37.login("Nzg1MjY4ODMxMzQ5MjQzOTI1.X81ZYA.y9StCXcSx7XUcWI0o02JZlpPdkM");
ta38.login("Nzg1MjcwMzcwNjM4NjI2ODU2.X81aqA.FZt0RikCWVv6448fd4S2RiaLT8U");
ta39.login("Nzg1MjcxNzA3MTc0ODMwMDkx.X81dCA.jLLDS-2efzfSYZ1qZP5wFR1wGU4");
ta40.login("Nzg1Mjc0NTIyNzM5NDA4OTQ2.X81eag.Hg5WoA9aTBV4XujsTvbrzC5gwco");
ta41.login("Nzg1Mjc1NzM4ODkzODQ0NTAw.X81fuQ.tgXJTZWLZJQChUtaH-ZFgT7JU2g");


client.on("ta", async function() {
const voiceChannel = "769617209018023946"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})

ta1.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 5 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



ta2.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 5 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta3.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 2};
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta4.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta5.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta6.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta7.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 10 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta8.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta9.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta10.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta11.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta12.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta13.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta14.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta15.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta16.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta17.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta18.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta19.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta20.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta21.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta22.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta23.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta24.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta25.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta26.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta27.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta28.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta29.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta30.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta31.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta32.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta33.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta34.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta35.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta36.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta37.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta38.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta39.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta40.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta41.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

