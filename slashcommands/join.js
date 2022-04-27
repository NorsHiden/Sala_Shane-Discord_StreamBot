const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const { joinVoiceChannel } = require('@discordjs/voice')
const ytdl = require("ytdl-core-discord")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("join")
		.setDescription("Joins voice channel"),
	run: async ({ bot, interaction }) => {
		if (!interaction.member.voice.channel)
			return interaction.editReply({embeds: [
			new MessageEmbed().setDescription(
				`**You need to be in a VC to use this command**`
			).setColor(process.env.embedColor)
		]})
		const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator
        })
		interaction.editReply({embeds: [
			new MessageEmbed().setDescription(
				`**Joined Channel**`
			).setColor(process.env.embedColor)
		]})
		
	}
}