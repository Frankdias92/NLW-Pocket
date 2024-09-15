import { getSummary } from "./api"
import { getPendingGoals } from "./get-peendingGoals"

export async function createNewGoal(title: string, desiredWeeklyFrequency: number ) {
    const response = await fetch('http://192.168.1.21:3333/goals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            desiredWeeklyFrequency
        })
    })
    if (response.ok) {
        getSummary()
        getPendingGoals()
    }
}