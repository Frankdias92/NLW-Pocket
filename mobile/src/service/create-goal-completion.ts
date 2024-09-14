import { getSummary } from "./api"
import { getPendingGoals } from "./get-peendingGoals"

export async function createGoalCompletion(goalId: string) {
    const response = await fetch('http://192.168.1.21:3333/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            goalId
        })
    })
    if (response.ok) {
        getSummary()
        getPendingGoals()
    }
}