import express from 'express'
// EcmaScriptModules
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

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
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e) {
    res.status(400).send(e)
  }
})

export default router
