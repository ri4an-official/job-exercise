import { createEvent, restore } from "effector"
import { sample } from "lodash"

export const setWordsCount = createEvent<number>()
export const $wordsCount = restore(setWordsCount, 5)

export const setLettersCount = createEvent<number>()
export const $lettersCount = restore(setLettersCount, 5)

export const setStartWidth = createEvent<number>()
export const $startWidth = restore(setStartWidth, 10)

export const setWidth = createEvent<number>()
export const $width = restore(setWidth, 5)

export const setSpeed = createEvent<number>()
export const $speed = restore(setSpeed, 1)
