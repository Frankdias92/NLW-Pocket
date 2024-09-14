
type PeendingGoalsResponse =  {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completionCount: number;
}[]

export async function getPendingGoals(): Promise<PeendingGoalsResponse> {
    const response = await fetch('http://192.168.1.21:3333/pending-goals')
    const data = await response.json()

    return data.summary
}