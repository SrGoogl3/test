const Discord = require('discord.js');



module.exports = {
  config: {
      name: "registrar",
      aliases: ['registrar', 'r'],
      description: "Registrar-se automaticamente no servidor.",
      example: "!registrar",
      usage: '!registrar',
	  usado: 'Todos os usuários.'
  },
  run: async (bot, message, args) => {
	  let usuario = message.member;

      if(message.channel.id === "819069057273430037"){

      } else {
          message.delete();
          return;
      }
      let pagina = 0;
    let inicio = false;
    let terminou = false;

    let cargo1 = ""
    let cargo2 = ""
    let cargo3 = ""
    let cargo4 = ""


      let registrando = new Discord.MessageEmbed()
      .setTitle("Vamos dar um jeito no servidor!")
   .setDescription(`*Como irá funcionar?* \n> **Você deverá reajir com os emojis corresponde conforme a sua escolha!**`)
   .addField('Para que isto? ', "Através do registro que nós iremos personalizar o servidor corretamente conforme o seu gosto e preferência! \n\n*Para iniciar, reaja com o emoji <:check:812805820474720326>!*")
   .setAuthor("Registro de: " + message.author.username)
   registrando.setColor('#7289da')
   registrando.setThumbnail('https://cdn.discordapp.com/emojis/812136818359009291.gif?v=1')

   let embed_eventos = new Discord.MessageEmbed() // eventos
                        .setAuthor('Vai terminar jaja! Parte 2 de 4', 'https://cdn.discordapp.com/emojis/629750074552877096.gif?v=1')
                        .setTitle('Você deseja ver canais e receber notificações de Eventos?')
                        .setDescription('> <a:1_:812805916058976306> - Sim \n > <a:2__cleosan:812805935893708830> - Não')
                        .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor('#F7E249')
                        .setThumbnail('https://i.imgur.com/aRKrsnO.png')

                         let embed_besteirol = new Discord.MessageEmbed() // eventos
                         .setAuthor('Tá quase! Pera ae! Parte 3 de 4', 'https://cdn.discordapp.com/emojis/808502560100450324.gif?v=1')
                         .setTitle('Você deseja ver canais de Games, Entreterimento, Comunidade, dentre outros?')
                         .setDescription('> <a:1_:812805916058976306> - Sim \n > <a:2__cleosan:812805935893708830> - Não')
                         .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                         .setThumbnail('https://i.imgur.com/Jx0hfxr.png')
                        .setColor('5F55AF')

                          let embed_genero = new Discord.MessageEmbed() // genero
                          .setAuthor('Final! Parte 4 de 4', 'https://cdn.discordapp.com/emojis/808514767198093343.gif?v=1')
                          .setTitle('Escolha a baixo o seu Gênero')
                          .setDescription('> <a:1_:812805916058976306> - <@&819082819808526347> \n> <a:2__cleosan:812805935893708830> - <@&819073973421080616> \n> <a:3_:812805959101054977> - <@&819082343037534208> \n> <a:4__cleosan:812805986301116438> - Prefiro não responder.')
                          .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                          .setThumbnail('https://i.imgur.com/WAPFegQ.png')
                        .setColor('#00F190')
                         
      let categoria = message.guild.channels.cache.find(ct=>ct.name === "📄 » REGISTRO" && ct.type === "category");
                 
      message.guild.channels.create(`registro-${message.author.username}`, { // Criando o canal
        
        permissionOverwrites: [
            {
                id: usuario.id,
                allow: ["SEND_MESSAGES", "READ_MESSAGE_HISTORY", "VIEW_CHANNEL"] // Adicionando permissão somente ao author do comando
            },
            {
                id: message.guild.roles.everyone,
                deny: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY", "SEND_MESSAGES" ] 
            }
        ],
              type: 'Text'
          }).then(async channel => {
              channel.setParent(categoria, { lockPermissions: false });
            const msg = await channel.send(`<@${message.author.id}>`, registrando);
            const emoji1 = ['812805916058976306', '812805935893708830', '81280595910105497', '812805986301116438', '812805820474720326', '819107748158898176', '819107784486027294', '812805959101054977'];
            let mes = await message.channel.send(`<@${message.author.id}>, o seu registro foi iniciado na sala: ${channel}`)
            message.delete()
            mes.delete({ timeout: 5000 })
    
            setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                if(inicio === false){
                    channel.delete();
                usuario.send('O seu registro foi cancelado pelo sistema pelo motivo: Tempo para iniciar expirou! Tente novamente, más dessa vez seja mais rápido!')
                return;
                }
                }, 40000) // tempo em milessegundos
    
    
            msg.react('812805820474720326');
        
        
            const collector = msg.createReactionCollector((r, u) => emoji1.includes(r.emoji.id) && u.id === message.author.id);
        
            collector.on('collect', (r, u) => {
                r.users.remove(message.author.id);
        
                switch (r.emoji.id) {
                    case "812805820474720326": // emoji check ====================
                        if(pagina === 0) {

                        msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                        msg.react("812805916058976306")
                        msg.react("812805935893708830")
                        let embed_programas = new Discord.MessageEmbed()
                        .setAuthor('Inicio! Parte 1 de 4', 'https://cdn.discordapp.com/emojis/808515954647892028.gif?v=1')
                        .setTitle('Você deseja ver canais, receber atualizações e anuncios sobre nossos Softwares/Bots?')
                        .setDescription('> <a:1_:812805916058976306> - Sim \n> <a:2__cleosan:812805935893708830> - Não')
                        .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor('2B3890')        
                        .setThumbnail('https://i.imgur.com/HNzcN88.png')
                        msg.edit(embed_programas)

                        pagina = 1;
                        inicio = true;

                        setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                                if(terminou === false){
                                    channel.delete();
                                    usuario.send('O seu registro foi cancelado pelo sistema pelo motivo: Tempo para concluir expirou! Tente novamente, más dessa vez seja mais rápido!')
                                
                            return;
                            }
                            }, 120000) // tempo em milessegundos
                        }
                        break;
                        case "812805916058976306": // emoji numero 1 ====================
                        /// pagina 2
                        if(pagina === 4){
                            cargo4 = "819082819808526347" 
                            pagina = 5
                                msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                msg.react('819107748158898176')
                                msg.react('819107784486027294')
                                let preferencia11 = "";

                                if(cargo1 === false){
                                    preferencia11 += "Não receberá atualizações sobre programas/bots."
                                } else {
                                    preferencia11 += "Receberá atualizações sobre programas/bots."
                                }
                                if(cargo2 === false){
                                    preferencia11 += "\n> Não receberá notificações de eventos."
                                } else {
                                    preferencia11 += "\n> Receberá notificações sobre eventos."
                                } 
                                if(cargo3 === false) {
                                    preferencia11 += "\n> Não terá acesso aos chat's de besteirol."
                                } else {
                                    preferencia11 += "\n> Acesso aos chat's de besteirol."
                                } 
                                if(cargo4 === false){
                                    preferencia11 += "\n> Não desejo adicionar meu gênero."
                                } else {
                                    preferencia11 += `\n> Desejo deixar meu gênero <@&${cargo4}> público neste servidor.`
                                }
                                let embed_correto1 = new Discord.MessageEmbed()
                         .setAuthor('Vamos revisar tudo! Parte 4 de 4', 'https://cdn.discordapp.com/emojis/808514767198093343.gif?v=1')
                        .setTitle('Veja a baixo as suas preferências:')
                        .setDescription(`> ${preferencia11}\n\n *Caso esteja correto, reaja com o emoji <:correto:819107748158898176>, caso contrario reaja com <:errado:819107784486027294>*`)
                        .setFooter('Lembre-se que você só possuí 2 minutos para isto!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor('#ffb155')        

                        msg.edit(embed_correto1)
                        }
                        if(pagina === 3) {
                            msg.edit(embed_genero)
                            cargo3 = "819073974138044456"
                            msg.react('812805959101054977')
                            msg.react('812805986301116438')
                            pagina = 4

                        }
                        if(pagina === 2) {
                            msg.edit(embed_besteirol)
                            cargo2 = "819073973408628756";
                            pagina = 3;
                        }
                        // pagina 1
                        if(pagina === 1) {
                            
                        msg.edit(embed_eventos)
                        cargo1 = "819072952485150741";

                        pagina = 2;

                        }

                             break;
 
                              case "812805935893708830": // emoji numero 2 ================================
                              if(pagina === 4){
                                cargo4 = "819073973421080616"
                                pagina = 5
                                msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                msg.react('819107748158898176')
                                msg.react('819107784486027294')
                                let preferencia1 = ""

                                if(cargo1 === false){
                                    preferencia1 += "Não receberá atualizações sobre programas/bots."
                                } else {
                                    preferencia1 += "Receberá atualizações sobre programas/bots."
                                }
                                if(cargo2 === false){
                                    preferencia1 += "\n> Não receberá notificações de eventos."
                                } else {
                                    preferencia1 += "\n> Receberá notificações sobre eventos."
                                } 
                                if(cargo3 === false) {
                                    preferencia1 += "\n> Não terá acesso aos chat's de besteirol."
                                } else {
                                    preferencia1 += "\n> Acesso aos chat's de besteirol."
                                } 
                                if(cargo4 === false){
                                    preferencia1 += "\n> Não desejo adicionar meu gênero."
                                } else {
                                    preferencia1 += `\n> Desejo deixar meu gênero <@&${cargo4}> público neste servidor.`
                                }
                                let embed_correto2 = new Discord.MessageEmbed()
                         .setAuthor('Vamos revisar tudo! Parte 4 de 4', 'https://cdn.discordapp.com/emojis/808514767198093343.gif?v=1')
                        .setTitle('Veja a baixo as suas preferências:')
                        .setDescription(`> ${preferencia1}\n\n *Caso esteja correto, reaja com o emoji <:correto:819107748158898176>, caso contrario reaja com <:errado:819107784486027294>*`)
                        .setFooter('Lembre-se que você só possuí 2 minutos para isto!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor('#ffb155')        

                        msg.edit(embed_correto2)
                    }
                              if(pagina === 3) {
                                cargo3 = false
                                msg.edit(embed_genero)
                                msg.react('812805959101054977')
                                msg.react('812805986301116438')
                                pagina = 4
                            }
                            if(pagina === 2) {
                                cargo2 = false
                                msg.edit(embed_besteirol)
                                pagina = 3
                            }
                              if(pagina === 1) {
                                  cargo1 = false
                                msg.edit(embed_eventos)   
                                pagina = 2;
        
                                }

                                  break; // emoji numero 3 ========================================
                                  case "812805959101054977":
                                      if(pagina === 4) {
                                          cargo4 = "819082343037534208"
                                          pagina = 5
                                msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                msg.react('819107748158898176')
                                msg.react('819107784486027294')
                                let preferencia3 = "";

                                if(cargo1 === false){
                                    preferencia3 += "Não receberá atualizações sobre programas/bots."
                                } else {
                                    preferencia3 += "Receberá atualizações sobre programas/bots."
                                }
                                if(cargo2 === false){
                                    preferencia3 += "\n> Não receberá notificações de eventos."
                                } else {
                                    preferencia3 += "\n> Receberá notificações sobre eventos."
                                } 
                                if(cargo3 === false) {
                                    preferencia3 += "\n> Não terá acesso aos chat's de besteirol."
                                } else {
                                    preferencia3 += "\n> Acesso aos chat's de besteirol."
                                } 
                                if(cargo4 === false){
                                    preferencia3 += "\n> Não desejo adicionar meu gênero."
                                } else {
                                    preferencia3 += `\n> Desejo deixar meu gênero <@&${cargo4}> público neste servidor.`
                                }
                                let embed_correto3 = new Discord.MessageEmbed()
                         .setAuthor('Vamos revisar tudo! Parte 4 de 4', 'https://cdn.discordapp.com/emojis/808514767198093343.gif?v=1')
                        .setTitle('Veja a baixo as suas preferências:')
                        .setDescription(`> ${preferencia3} \n\n *Caso esteja correto, reaja com o emoji <:correto:819107748158898176>, caso contrario reaja com <:errado:819107784486027294>*`)
                        .setFooter('Lembre-se que você só possuí 2 minutos para isto!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor('#ffb155')        

                                 msg.edit(embed_correto3)
                                      }

                                        break; // emoji numero 4 =====================================
                                        case "812805986301116438":

                                        if(pagina === 4){
                                            pagina = 5
                                msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                cargo4 = false
                                msg.react('819107748158898176')
                                msg.react('819107784486027294')
                                let preferencia14 = "";

                                if(cargo1 === false){
                                    preferencia14 += "Não receberá atualizações sobre programas/bots."
                                } else {
                                    preferencia14 += "Receberá atualizações sobre programas/bots."
                                }
                                if(cargo2 === false){
                                    preferencia14 += "\n> Não receberá notificações de eventos."
                                } else {
                                    preferencia14 += "\n> Receberá notificações sobre eventos."
                                } 
                                if(cargo3 === false) {
                                    preferencia14 += "\n> Não terá acesso aos chat's de besteirol."
                                } else {
                                    preferencia14 += "\n> Acesso aos chat's de besteirol."
                                } 
                                if(cargo4 === false){
                                    preferencia14 += "\n> Não desejo adicionar meu gênero."
                                } else {
                                    preferencia14 += `\n> Desejo deixar meu gênero <@&${cargo4}> público neste servidor.`
                                }
                                let embed_correto4 = new Discord.MessageEmbed()
                         .setAuthor('Vamos revisar tudo! Parte 4 de 4', 'https://cdn.discordapp.com/emojis/808514767198093343.gif?v=1')
                        .setTitle('Veja a baixo as suas preferências:')
                        .setDescription(`> ${preferencia14}\n\n *Caso esteja correto, reaja com o emoji <:correto:819107748158898176>, caso contrario reaja com <:errado:819107784486027294>*`)
                        .setFooter('Lembre-se que você só possuí 2 minutos para isto!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor('#BE87EF')
                        .setThumbnail('https://i.imgur.com/js4ZHjE.png')        
                        msg.edit(embed_correto4)
                                        }

                                          break;
                                           case "819107784486027294":
                                               if(pagina === 5){
                                               pagina = 1
                                               msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                               msg.react("812805916058976306")
                                               msg.react("812805935893708830")
                                               let embed_programas = new Discord.MessageEmbed()
                        .setAuthor('Inicio! Parte 1 de 4', 'https://cdn.discordapp.com/emojis/808515954647892028.gif?v=1')
                        .setTitle('Você deseja ver canais, receber atualizações e anuncios sobre nossos Softwares/Bots?')
                        .setDescription('> <a:1_:812805916058976306> - Sim \n> <a:2__cleosan:812805935893708830> - Não')
                        .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor('2B3890')        
                        .setThumbnail('https://i.imgur.com/HNzcN88.png')
                                               msg.edit(embed_programas)
                                            }
                                               break; 
                                                case "819107748158898176":
                                                    if(pagina === 5){
                                                        terminou = true;
                                                        if(cargo1 === false){

                                                        } else{
                                                         usuario.roles.add(cargo1)
                                                         let mensagem_1 = new Discord.MessageEmbed()
                                                         .setTitle('Avisos sobre os nossos Softwares e Bots;')
                                                         .setThumbnail('Veja a baixo os canais aonde anunciamos tudo sobre nossos Softwares e Bots.')
                                                         .addField('Canais', 'Na categoria <#817508213028028488> se encontra todos os canais relacionados aos nossos Bots e Softwares. > Atualizações programadas de bots são anunciados em <#812804393949986847>.')
                                                         .setThumbnail('https://i.imgur.com/8Yw9BeI.png')
                                                         .setColor('2FDF84')

                                                         let mensagem_2 = new Discord.MessageEmbed()
                                                         .setTitle('Reportando Falhas | Softwares e Bots')
                                                         .setDescription('Em <#812804399440330752> é o lugar aonde você poderá reportar falhas e bugs em nossos Softwares/Bots! (Caçadores de bugs ganham beneficios especiais!)')
                                                         .setThumbnail('https://i.imgur.com/4UgeMxy.png')
                                                         .setColor('2FDF84')
                                                        
                                                        let mensagem_3 = new Discord.MessageEmbed()
                                                        .setTitle('Contate os Developers da Cleosan!')
                                                        .setDescription('Caso queira entrar em contato com os Developers da Cleosan, basta, no privado deste bot, use: `!msg-dev <assunto>`.')
                                                        .addField('Lembre-se', 'Antes de usar esta opção, contate primeiro o Suporte em <#812804400833101885>, caso não esteja tendo sucesso, ou não está sendo respondido, use está opção. Você também pode usar em casos que necessita de uma resposta mais precisa, que somente os desenvolvedores podem dar.')
                                                        .setThumbnail('https://i.imgur.com/D5tBgRF.png')
                                                        .setColor('2FDF84')

                                                        usuario.send(mensagem_1)
                                                        usuario.send(mensagem_2)
                                                        usuario.send(mensagem_3)
                                                        }
                                                        if(cargo2 === false){

                                                        } else {
                                                            usuario.roles.add(cargo2)
                                                            let mensagem_1 = new Discord.MessageEmbed()
                                                            .setTitle('Eventos | Notificações e Canais')
                                                            .setDescription('Ao acontecer um evento, você será notificado que ele está acontecendo. Você pode mudar isso mudando as configurações de notificação do servidor!')
                                                            .addField('Canais', 'Os canais aparecem quando um evento é iniciado.')
                                                            .setThumbnail('https://i.imgur.com/aRKrsnO.png')
                                                            .setColor('F7E249')
                                                            usuario.send(mensagem_1)
                                                        }
                                                        if(cargo3 === false ){

                                                        } else {
                                                            usuario.roles.add(cargo3)
                                                            let mensagem_1 = new Discord.MessageEmbed()
                                                            .setTitle('Chats Besteirol | Texto e Voz')
                                                            .setDescription('Você agora tem acesso aos canais de voz e texto de Games, Entreterimento, e alguns outros! Bora lá dá uma olhada?!')
                                                            .setThumbnail('https://i.imgur.com/lNjC2Ew.png')
                                                            .setColor('F3705A')
                                                            usuario.send(mensagem_1)
                                                        }
                                                        if(cargo4 === false){

                                                        } else {
                                                        usuario.roles.add(cargo4)
                                                        }
                                                        if(cargo1 === false & cargo2 === false & cargo3 === false){
                                                            let mensagem1 = new Discord.MessageEmbed()
                                                            .setTitle('Você se registrou, porém prefiriu não optar por nada!')
                                                            .setDescription('O seu registro foi concluido com sucesso, as salas de usuários registrados foram liberadas, más como você optou por não escolher nenhuma preferencia, não foi liberado as demais salas.')
                                                            .setColor('0ED678')
                                                            usuario.send(mensagem1)
                                                        }
                                                        usuario.roles.add('819073976030462013')
                                                        msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                                    let embed_final = new Discord.MessageEmbed()
                                                    .setAuthor('Concluido!', 'https://cdn.discordapp.com/emojis/808516145447305228.gif?v=1')
                                                    .setTitle('Você agora está registrado na Cleosan!')
                                                    .setDescription(`> O servidor agora está do jeito que você prefere! Caso queira modificar algo em seu registro, contate o Suporte. \n\nCaso você tenha o seu privado desbloqueado, você recebeu mensagens do bot informando as principais instruções do servidor!`)
                                                    .setFooter('Obrigado por se registrar!', 'https://cdn.discordapp.com/emojis/812924200204763178.png?v=1')
                                                    .setThumbnail('https://i.imgur.com/cgWwl8S.png')
                                                    .setColor('0ED678')
                                                    msg.edit(embed_final)
                                                    setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                                                            channel.delete();
                                                        return;
                                                        }, 8000) // tempo em milessegundos

                                                        let embed_logs = new Discord.MessageEmbed()
                                                        .setTitle('Usuário Registrado!')
                                                        .setDescription(`O usuário ${message.member} se registrou no servidor!`)
                                                        .setTimestamp()
                                                        .setColor('#0D5257')

                                                        var log = bot.channels.cache.get("819230613851865088");

                                                        log.send(embed_logs)
                                                    }
                }
            })
        })
        
}
}
