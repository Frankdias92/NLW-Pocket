export type SummaryProps = {
    completed: number;
    total: number;
    goalPerDay:  Record<string, {
        id: string;
        title: string;
        completedAt: string;
    }[]>
}

export async function getSummary(): Promise<SummaryProps> {
    const response = await fetch('http://192.168.1.21:3333/summary')
    const data = await response.json()

    return data.summary
}