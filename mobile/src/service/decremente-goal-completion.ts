import { getSummary } from "./api"
import { getPendingGoals } from "./get-peendingGoals"

export async function decrementGoalCompletion(goalId: string) {
    const response = await fetch('http://192.168.1.21:3333/completions/decrement', {
        method: 'DELETE',
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
