
export type PeendingGoalsResponse =  {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completionCount: number;
}[]

export async function getPendingGoals(): Promise<PeendingGoalsResponse> {
    const response = await fetch('http://192.168.1.21:3333/pending-goals')
    if (!response.ok) {
        throw new Error('Failed to fetch pending goals')
    }
    const data = await response.json()
    // if (!data) {
    //     throw  console.log('Error fetch data')
    // }

    return data.pendingGoals 
}