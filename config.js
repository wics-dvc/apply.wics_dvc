var config;

config = {
    port: process.env.PORT,
	db: {
	  url: process.env.DB_URL
	},
	slack: {
	  username: process.env.SLACK_USERNAME,
      token: process.env.SLACK_TOKEN,
      webhook: process.env.SLACK_WEBHOOK
	}
 };

module.exports = config;