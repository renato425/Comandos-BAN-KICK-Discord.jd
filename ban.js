//Funciona em Handler e index.js,sem erro!

const Discord = require("discord.js"); //é necessário para o comando funcionar

exports.run = (bot,message,args) => {
    const user = message.mentions.users.first(); //Toda a linha de código vai acontecer com o usuário mencionado
    if (user) {
        const member = message.guild.member(user); //Ele faz pelo usuário que está no servidor
        if (member) {
            member
            .ban({
                reason: "Você foi banido do servidor,siga as regras da próxima vez!" //Mensagem(ou razão) e executa o ban
            })
            .then(() => {
                message.reply(`O usuário ${user.tag} foi **BANIDO** Com sucesso!`) //Mensagem que aparece no chat ao banir o usuário
            })
            .catch(err => {
                message.reply("Eu não consegui banir esse membro!"); //Quando acontecer algum erro,vai aparecer essa mensagem no chat
                console.error(err); // e o erro no console
            });
        } else {
            message.reply("Este usuário não está nesse servidor!") // Aparece se o usuário não estiver no servidor
        }
    } else {
        message.reply("Você esqueceu de mencionar um usuário para banir!") // Aparece quando você não menciona um usuário
    }
}

exports.help = {
    name : "ban" // nome do seu comando
}

//Comando criado por Guilherme Renato-renatin#1914
