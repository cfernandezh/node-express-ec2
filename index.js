import express from 'express'

const app = express()

app.listen(443, () => console.log('Api running on port 443'))

app.get('/', (req, res) => res.json('My API running'))