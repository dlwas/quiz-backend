import { getCleanArray } from '../utils.js'

export default function ({ db, getRandomIds, rounds, checkLang }) {
  const results = []
  for (let i = 0; i < rounds; i++) {
    const good = [getRandomIds[i][0]].map((itemId) => db[itemId])[0]
    const randoms = getRandomIds[i][1]
      .map((itemId) => [db[itemId].capital[checkLang]])
      .map((item) => item[0])

    const correct = good.name[checkLang]
    const answers = getCleanArray([correct, ...randoms])

    results.push({
      type: 'capital',
      capital: good.capital[checkLang],
      correct,
      answers,
    })
  }
  return results
}
