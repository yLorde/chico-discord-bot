const { Events, Presence, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Bot está pronto! Logado como ${client.user.tag}`);

        client.user.presence.set({
            status: 'idle',
            activities: [{
                name: 'Fazendo coisas de Chico',
                type: ActivityType.Playing,
            }]
        })
    },
};