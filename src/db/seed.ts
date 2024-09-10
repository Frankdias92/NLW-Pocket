import { db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  //   await db.delete(goalCompletions).execute()
  //   await db.delete(goals)

  await db.insert(goals).values([
    { title: 'Wake up early', desiredWeeklyFrequency: 5 },
    { title: 'Workout', desiredWeeklyFrequency: 3 },
    { title: 'Meditation', desiredWeeklyFrequency: 1 },
  ])
}

seed()
