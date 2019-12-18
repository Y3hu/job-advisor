var CronJob = require('cron').CronJob

const fetchGithub = require('../worker/tasks/fetch-github')

//fetch github jobs
new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles')