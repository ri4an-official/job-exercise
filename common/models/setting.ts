import { createEvent, restore } from "effector"

export const setWordsCount = createEvent<number>()
export const $wordsCount = restore(setWordsCount, 0)

export const setLettersCount = createEvent<number>()
export const $lettersCount = restore(setLettersCount, 0)

export const setStartWidth = createEvent<number>()
export const $startWidth = restore(setStartWidth, 0)

export const setWidth = createEvent<number>()
export const $width = restore(setWidth, 0)

export const setSpeed = createEvent<number>()
export const $speed = restore(setWidth, 0)
