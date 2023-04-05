import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

//  En TS hay una cadena de prioridad en busqueda de extensiones para importar archivos:
//  seria: ".tsx", ".ts", ".node", ".js", ".json" . En EcmaModules es obligatorio poner las extensiones
//  en TS no.

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}
export const addEntry = (): undefined => undefined
