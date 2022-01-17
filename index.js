//conectando biblioteca Discord e criando client
const Discord = require("discord.js")

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Notificar status online!
client.on("ready", () => {
    console.log("Estou online ✔")
})

//monitorarando mensagens dos usuarios
client.on("messageCreate", (message) => {

    if (message.content == "Ola") {
        console.log("Usuario mandou Ola")
    } else {
        console.log(message.content)
    }

})

//comandos que o bot pode responder
client.on("messageCreate", (message) => {

    //Comando de Ping
    if (message.content == "$ping") {
        message.channel.send("Pong")
    }

    //evitar conflito entre bots e mensagens na DM
    if (message.author.bot == true) return
    if (message.channel.type == "dm") return



})

//login de Token do BOT
client.login("OTMyNDgxMjIyNTA3MTEwNDAw.YeTm0A.iXT5N1d2hItuJgDLCVdt38ufMl8")