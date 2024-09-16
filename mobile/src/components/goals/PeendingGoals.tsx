import { FlatList } from "react-native";

import { VStack, Text } from "@gluestack-ui/themed";
import { ItemOfList } from "@components/ItemOfList";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPendingGoals, PeendingGoalsResponse } from "../../service/get-peendingGoals";
import { createGoalCompletion } from "../../service/create-goal-completion";


export function PeendingGoals() {
    const queryClient = useQueryClient()

    const { data }  = useQuery<PeendingGoalsResponse>({
        queryKey: ['peending-goals'],
        queryFn: getPendingGoals,
    })

    if (!data) {
        return null
    }

    const handleCompleteGoal = async (goalId: string) => {
        await createGoalCompletion(goalId)

        queryClient.invalidateQueries({ queryKey: ['summary']})
        queryClient.invalidateQueries({ queryKey: ['peending-goals']})
    }

    return ( 
        <VStack w={"$full"} >
            {data && data ? (
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item}) => (
                        <ItemOfList 
                            key={item.id} 
                            itemList={item} 
                            disabled={ item.completionCount >= item.desiredWeeklyFrequency}
                            onPress={() => handleCompleteGoal(item.id)}
                        />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 32 }}
                    style={{ maxHeight: 44, minHeight: 44 }}
                />
            ) : (<Text fontWeight={"$medium"} fontSize={"$sm"} color="$secondary400" px={"$8"}>loading...</Text>)}
        </VStack>
    )
}