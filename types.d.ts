// este es un fichero que TS siempre mira y busca por defecto, aca estaran todos los tipados que queremos definir y uililizar

export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// la diferencia entre type (es como cualquier otro tipo ej Boolean y que Ts permite hacer el propio el typo que yo necesite)
//  e interface (que es un contrato que debe tener un objeto, en el cual yo puedo usar los type que defini a mi necesidad)
// esto se podria hacer con un type pero la interface esta preparada para ser extendida con el extend

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
// otra forma de hacer seria:

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
