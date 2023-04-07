import { NewDiaryEntry } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (typeof commentFromRequest !== 'string') {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {

  }
  return newEntry
}

export default toNewDiaryEntry
