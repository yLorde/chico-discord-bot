const { Events, Presence, ActivityType, Status } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Bot está pronto! Logado como ${client.user.tag}`);

        const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
        const chico = guild.roles.cache.find(role => role.id === process.env.CHICO_VERIFIED_ROLE_ID);

        guild.channels.cache.find(channel => channel.id === process.env.CHICO_SIZE_CHANNEL_ID)
            .setName(`CHICOS: ${chico.members.size}`);

        client.user.presence.set({
            status: Status.Idle,
            activities: [{
                name: 'Fazendo coisas de Chico',
                type: ActivityType.Playing,
            }]
        });

        setInterval(() => {
            guild.channels.cache.find(channel => channel.id === process.env.CHICO_SIZE_CHANNEL_ID)
                .setName(`CHICOS: ${chico.members.size}`);
        }, 15 * 60 * 1000)

    },
};