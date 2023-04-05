import express from 'express'
// EcmaScriptModules
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('Saving a diary!')
})

export default router
