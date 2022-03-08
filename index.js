const Discord = require('discord.js')

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

const TK = 'OTMyNDgxMjIyNTA3MTEwNDAw.YeTm0A.5_2vkfyvPNb9yjdT5S8qDqZ7c0M'
const prefixo = "$"

client.on("ready", () => {
    console.log('Estou Online')
})

client.on("message", async(msg) => {
    // filtro
    if (!msg.guild) return

    if (!msg.content.startsWith(prefixo)) return

    // comandos
    if (msg.content == prefixo + 'aoba') {
        msg.channel.send('Bão ' + msg.author.username + '?')
    }

})


//discord.js and client declaration
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('messageCreate', message => {
    if (message.content === prefixo + 'join') {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
})

client.login(TK)