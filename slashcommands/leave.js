const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const { getVoiceConnection } = require('@discordjs/voice')
const ytdl = require("ytdl-core-discord")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("leave")
		.setDescription("Leaves voice channel"),
	run: async ({ bot, interaction }) => {
		if (!interaction.member.voice.channel)
			return interaction.editReply({embeds: [
			new MessageEmbed().setDescription(
				`**You need to be in a VC to use this command**`
			).setColor(process.env.embedColor)
		]})
		if (!interaction.guild.me.voice.channel)
			return interaction.editReply({embeds: [
			new MessageEmbed().setDescription(
				`**I'm already disconnected**`
			).setColor(process.env.embedColor)
		]})
		getVoiceConnection(process.env.GUILD_ID).disconnect()
		return interaction.editReply({embeds: [
			new MessageEmbed().setDescription(
				`**Hope you have a nice day, see ya !**`
			).setColor(process.env.embedColor)
		]})
	}
}