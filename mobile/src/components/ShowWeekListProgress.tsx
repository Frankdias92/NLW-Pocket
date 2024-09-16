import { TouchableOpacity } from "react-native";
import { Text, VStack, HStack } from "@gluestack-ui/themed";
import dayjs from "dayjs";
import { getSummary } from "../service/api";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPendingGoals, PeendingGoalsResponse } from "../service/get-peendingGoals";
import { decrementGoalCompletion } from "../service/decremente-goal-completion";

export type ShowWeekListProps = {
    id: string;
    title: string;
    completedAt: string;
}

interface ShowWeekList {
    goalPerDay: ShowWeekListProps
}

export function ShowWeekListProgress({ goalPerDay }: ShowWeekList) {
    const queryClient = useQueryClient()
    const weekDay = dayjs(goalPerDay.completedAt).format('HH:mm')

    const handleDelete= async(goalId: string) => {
        await decrementGoalCompletion(goalId)

        queryClient.invalidateQueries({ queryKey: ['summary']})
        queryClient.invalidateQueries({ queryKey: ['peending-goals']})
    }
    
    return ( 
        <VStack w={"$full"} >
            <HStack gap={6} >
                <Text color="$secondary400">Your have finished</Text>
                <Text color="$secondary100">{goalPerDay.title}</Text>
                <Text color="$secondary400">at</Text>
                <Text color="$secondary100">{ weekDay }</Text>
                <TouchableOpacity onPress={() => handleDelete(goalPerDay.id)}>
                    <Text underline color="$secondary400">undo</Text>
                </TouchableOpacity>
            </HStack>            
        </VStack>
    )
}