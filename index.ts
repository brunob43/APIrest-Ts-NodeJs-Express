import express from 'express'
// esta es la forma de EcmaSriptModules---> lo usamos asi pero cuando se compila usamos commonJs
// const express = require("express") --> asi se hacia en commonjs

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())
//  MD que transforma las req.body a json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!! ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
