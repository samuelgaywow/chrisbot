const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setPresence({game: {name: "?help", type: 0 } });
});

// Set the prefix
let prefix = "?";
client.on("message", (message) => {
  // Exit and stop if it's not there
  
// Functions
  function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
  
  
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "funne")) {
    var fun = ["barbingo", "puhskinti", "haha epic", "eheheheh", "woah", "bahgingi", "would you fuck with a tiny hitler", "N-"];
    message.channel.send(fun[randNum(0, fun.length-1)]);
  } else
    if (message.content.startsWith(prefix + "julian")) {
      message.channel.send("youre a good man julian");
  } else
    if (message.content.startsWith(prefix + "dingdong")) {
      message.channel.send("DING DOOONG")
  } else
    if (message.content.startsWith(prefix + "hypothetical")) {
      var hypo = ["what if you had a clone of your partner and i fucked them but then the real one died. Would you be mad? :thinking:", "what if crash, actually meant, gay??? :thinking:",
                  "what is the best thing you ever threw away? :thinking:", "what if,, i forgot. :sad:"];
      message.channel.send(hypo[randNum(0, hypo.length-1)]);
  } else
    if (message.content.startsWith(prefix + "monkey")) {
      var mon = ["https://goo.gl/fqkvTS", "https://goo.gl/xWLhjm", "https://goo.gl/qKTZZk", "https://goo.gl/tYgfJc", "https://goo.gl/buJm79", "haha lookit all de funne monkeys"];
    message.channel.send(mon[randNum(0, mon.length-1)]);
  } else
    if (message.content.startsWith(prefix + "penny")) {
      message.channel.send("https://goo.gl/emM1xz")
  } else
    if (message.content.startsWith(prefix + "remix")) {
      message.channel.send("https://goo.gl/oGgVrX")
  } else 
    if (message.content.startsWith(prefix + "art")) {
      message.channel.send("https://goo.gl/3JDkB5")
  } else
    if (message.content.startsWith(prefix + "commands")) {
      message.channel.send("**COMMAND LIST**:?ping |?julian |?dingdong |?funne |?hypothetical |?monkey |?penny |?remix |?art |?sing")
  } else
    if (message.content.startsWith(prefix + "help")) {
      message.channel.send(" |?commands|?invite|?contact| ")
  } else
    if (message.content.startsWith(prefix + "invite")) {
      message.channel.send("https://discordapp.com/oauth2/authorize?client_id=409514918207815680&scope=bot")
  } else
     if (message.content.startsWith(prefix + "contact")) {
       message.channel.send("This bot's creator can be contacted @evileidolons on Twitter :)")
  }else
    if (message.content.startsWith(prefix + "sing")) {
      message.channel.send("https://soundcloud.com/treefiddey/chris-oneil-matt-is-a-faggot-ft-julian-matt-the-fag")
  }
});

client.login("NDA5NTE0OTE4MjA3ODE1Njgw.DVfuFA.DUQoPnG5j89gs-gkxVLlzp-AhGg");