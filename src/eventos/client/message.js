const Discord = require("discord.js");
const db = require("quick.db");
const talkedRecently = new Set();
module.exports = async (bot, message) => {
let user = message.author;

  
	db.set(`teste_${message.author.id}`, 1)
  let prefix = '!'
  if (!message.content.startsWith(prefix)) {
    if(message.author.bot) return;
    if(message.channel.id === "800892168713666570"){
      message.delete()
    }
  }

  if (!message.content.startsWith(prefix)) return;
 
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
    let command2 = messageArray[1];
  let args = messageArray.slice(1);
  
  if(message.content.includes(prefix + 'help') || message.content.includes(prefix + 'ajuda')){
	  if(args[0]){
		  let comando = bot.commands.get(command2) ||
    bot.commands.get(bot.aliases.get(command))
		  console.log(comando)
		  if(!comando) {
		  } else {
			  if(message.channel.id === "812804403517849611") {
			  } else {
				  if(message.member.roles.cache.has('812804308029669407')){
				  } else {
					  message.delete()
				  message.reply('a não ser que você seja um Staff da Cleosan, você não poderá usar este comando neste canal. Para isso existe o <#812804403517849611>!').then(msg => {
                msg.delete({ timeout: 7000 });
				  }) 
				  return;
				  }}
			  let embed = new Discord.MessageEmbed()
			  .setTitle('Ajuda de Comando | Scruffy v1.0.6')
			  .addField('Nome', comando.config.name, true)
			  .addField('Formas Aceitas', comando.config.aliases, true)
			  .addField('Exemplo', comando.config.example, true)
			  .addField('Uso', comando.config.usage, true)
			  .addField('Pode ser usado por', comando.config.usado, true)
			  .addField('Descrição', comando.config.description, false)
			  .setFooter('Scruffy, um bot Cleosan.', 'https://images-ext-2.discordapp.net/external/0j6ncM1WV5wcPQvju1ZKo2nnoarVUDLA4Cq668PaMQI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/742727340940984320/f0331ab1192538f4ee7857b20b41c7df.png?width=406&height=406')
			  .setColor('#f9f9f9')
			  .setAuthor('Scruffy BOT | Developed by Cleosan.', 'https://images-ext-2.discordapp.net/external/0j6ncM1WV5wcPQvju1ZKo2nnoarVUDLA4Cq668PaMQI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/742727340940984320/f0331ab1192538f4ee7857b20b41c7df.png?width=406&height=406')
		      .setThumbnail('https://images-ext-2.discordapp.net/external/0j6ncM1WV5wcPQvju1ZKo2nnoarVUDLA4Cq668PaMQI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/742727340940984320/f0331ab1192538f4ee7857b20b41c7df.png?width=406&height=406')
		  message.inlineReply(embed).then(msg => {
                msg.delete({ timeout: 20000 });
				  }) 
		  return;
		  }
	  } else {
		  if(message.channel.id === "812804403517849611") {
			  } else {
				  if(message.member.roles.cache.has('812804308029669407')){
				  } else {
					  message.delete()
				  message.reply('a não ser que você seja um Staff da Cleosan, você não poderá usar este comando neste canal. Para isso existe o <#812804403517849611>!').then(msg => {
                msg.delete({ timeout: 7000 });
				  }) 
				  return;
				  }}
			  message.inlineReply('Use: `!help <comando>` para pesquisar as informações sobre o comando.').then(msg => {
                msg.delete({ timeout: 7000 });
				  }) 
	  return;
	  }

  }
  
  let arquivocmd = bot.commands.get(command.slice(prefix.length)) ||
    bot.commands.get(bot.aliases.get(command.slice(prefix.length)))
  if (arquivocmd) arquivocmd.run(bot, message, args);
  if(!arquivocmd) return message.delete()
};
