import express from 'express'
// EcmaScriptModules
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id) // 'unary + operator' (el +) es para transformar el id que vien como string a numero

  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body

  const newDiaryEntry = diaryServices.addDiary({
    date,
    weather,
    visibility,
    comment
  })
  res.json(newDiaryEntry)
})

export default router
