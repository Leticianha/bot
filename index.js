import { Client, IntentsBitField, Message } from "discord.js";
import * as dotenv from "dotenv"
dotenv.config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', () =>{
    console.log("No ar")
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "oi") {
        message.reply("Oi lebre, como está?")
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "estou bem e você?") {
        message.reply("Estou bem também, obrigado por perguntar!!")
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "quebom lindo") {
        message.reply("linda(o) é só você")
    }
})

client.login(process.env.TOKEN)