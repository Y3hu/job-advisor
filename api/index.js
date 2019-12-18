const express = require('express')
const app = express()
const port = 3001

var redis = require('redis'),
    client = redis.createClient()

const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client)

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync('github')
    
    return res.send(jobs)
})

app.listen(port, () => console.log(`Running at port ${port}`))