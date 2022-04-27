const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const { getVoiceConnection, joinVoiceChannel, createAudioResource } = require('@discordjs/voice')
const ytdl = require("ytdl-core-discord")

const playNightcore = async (bot, interaction, connection) => {
	let embed = new MessageEmbed()
			.setDescription('**Live Stream 🔴**\nPlaying Nightcore Radio 24/7 | Top Nightcore Songs Of All Time ♪')
			.setColor(process.env.embedColor)
			.setThumbnail('https://wallpaperboat.com/wp-content/uploads/2020/10/30/58815/red-anime-girl-20.jpg')
	const stream = await ytdl("THN8ihZ6qy0", { filter: 'audioonly' })
	connection.subscribe(bot.player)
	bot.player.play(createAudioResource(stream))
	interaction.editReply({embeds: [embed]})
}

const playDeephouse = async (bot, interaction, connection) => {
	let embed = new MessageEmbed()
			.setDescription('**Live Stream 🔴**\nPlaying Deep Feelings | Mix Get High & Relax | Deep House, Vocal House, Nu Disco, Chillout')
			.setColor(process.env.embedColor)
			.setThumbnail('https://i.pinimg.com/550x/c6/05/7a/c6057aeb65a1bc8868c6da5ddebad859.jpg')
	const stream = await ytdl("SCtRx9FO4g0", { filter: 'audioonly' })
	connection.subscribe(bot.player)
	bot.player.play(createAudioResource(stream))
	interaction.editReply({embeds: [embed]})
}

const playLofi = async (bot, interaction, connection) => {
	let embed = new MessageEmbed()
			.setDescription('**Live Stream 🔴**\nPlaying coffee shop radio // 24/7 lofi hip-hop beats')
			.setColor(process.env.embedColor)
			.setThumbnail('https://cdn.vox-cdn.com/thumbor/0syL9Iu_5O0ychH07DEpxnnYXNw=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22695668/P3_still.png')
	const stream = await ytdl("5qap5aO4i9A", { filter: 'audioonly' })
	connection.subscribe(bot.player)
	bot.player.play(createAudioResource(stream))
	interaction.editReply({embeds: [embed]})
}

const playRock = async (bot, interaction, connection) => {
	let embed = new MessageEmbed()
			.setDescription('**Live Stream 🔴**\nPlaying Rock Radio Live 24/7')
			.setColor(process.env.embedColor)
			.setThumbnail('https://thumbs.dreamstime.com/b/new-york-rock-roll-grunge-print-apparel-guitar-typography-emblem-t-shirt-slogan-hard-music-never-dies-design-vintage-109039195.jpg')
	const stream = await ytdl("U2wfGCojp3w", { filter: 'audioonly' })
	connection.subscribe(bot.player)
	bot.player.play(createAudioResource(stream))
	interaction.editReply({embeds: [embed]})
}

const playSlaphouse = async (bot, interaction, connection) => {
	let embed = new MessageEmbed()
			.setDescription('**Live Stream 🔴**\nPlaying Music Mix 2022 ♫ EDM Remix of Popular Songs ♫ Best EDM Live Radio')
			.setColor(process.env.embedColor)
			.setThumbnail('https://cdn.dancemidisamples.com/wp-content/uploads/2022/02/Black-Octopus-Sound-Slap-House-Essentials-Artwork-1000.jpg')
	const stream = await ytdl("HZBdB-66FGA", { filter: 'audioonly' })
	connection.subscribe(bot.player)
	bot.player.play(createAudioResource(stream))
	interaction.editReply({embeds: [embed]})
}

const playTropicalhouse = async (bot, interaction, connection) => {
	let embed = new MessageEmbed()
			.setDescription('**Live Stream 🔴**\nPlaying Tropical House Radio | 24/7 Livestream')
			.setColor(process.env.embedColor)
			.setThumbnail('https://angartwork.akamaized.net/?id=142736826&size=640')
	const stream = await ytdl("Edk0TfK94pA", { filter: 'audioonly' })
	connection.subscribe(bot.player)
	bot.player.play(createAudioResource(stream))
	interaction.editReply({embeds: [embed]})
}

const playPop = async (bot, interaction, connection) => {
	let embed = new MessageEmbed()
			.setDescription('**Live Stream 🔴**\nPlaying 西洋流行音樂電台 | POP Music➨24/7')
			.setColor(process.env.embedColor)
			.setThumbnail('https://i.scdn.co/image/ab67616d0000b273a9b86a8c3807b1312f9ffbd1')
	const stream = await ytdl("uUBfbLdXArA", { filter: 'audioonly' })
	connection.subscribe(bot.player)
	bot.player.play(createAudioResource(stream))
	interaction.editReply({embeds: [embed]})
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('select')
		.setDescription('Select a music genre to stream')
		.addStringOption(option =>
			option.setName('genre')
				.setDescription('Music genre')
				.setRequired(true)
				.addChoices({ name: 'Nightcore', value: 'nightcore' },
						{ name: 'Lofi', value: 'lofi' },
						{ name: 'Rock', value: 'rock' },
						{ name: 'Pop', value: 'pop' },
						{ name: 'Deephouse', value: 'deephouse' },
						{ name: 'Slaphouse', value: 'slaphouse' },
						{ name: 'Tropicalhouse', value: 'tropicalhouse' })),
	run: async ({ bot, interaction }) => {
		if (!interaction.member.voice.channel)
			return interaction.editReply("**You need to be in a VC to use this command**")
		if (!interaction.guild.me.voice.channel){
			var connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator
        })
		}
		else {
			var connection = getVoiceConnection(process.env.GUILD_ID)
		}
		const choice = interaction.options.getString('genre')
		if (choice == 'nightcore')
			playNightcore(bot, interaction, connection)
		else if (choice == 'deephouse')
			playDeephouse(bot, interaction, connection)
		else if (choice == 'slaphouse')
			playSlaphouse(bot, interaction, connection)
		else if (choice == 'tropicalhouse')
			playTropicalhouse(bot, interaction, connection)
		else if (choice == 'lofi')
			playLofi(bot, interaction, connection)
		else if (choice == 'pop')
			playPop(bot, interaction, connection)
		else if (choice == 'rock')
			playRock(bot, interaction, connection)
		
	}
}