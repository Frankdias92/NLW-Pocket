import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { WeekOfTask } from "./goals/WeekOfTask";
import { ProgresBar } from "./goals/ProgresBarProgress";
import { View } from "react-native";
import { PeendingGoals } from "./goals/PeendingGoals";
import { TaskOfTheWeek } from "./TasksOfTheWeek";

import { EntryPage } from '@components/EntryPage'
import { useQuery } from "@tanstack/react-query";
import { getSummary, SummaryProps } from "../service/api";



export function GoalsTasks() {    
    const { data } = useQuery<SummaryProps>({
        queryKey: ['summary'],
        queryFn: getSummary,
        staleTime: 1000 * 60 // 60 seconds
    })

    return (
        <View>
            {data?.total && data?.total > 0 ? (
                <Center flex={1} justifyContent="flex-start" mt={"$10"} gap={24} >
                    <Text>
                    {data.total}
                    </Text>
                    <VStack gap={24} >
                        <WeekOfTask />
                        <ProgresBar />
                        <Center px={'$8'}>
                            <View className="min-w-full h-0.5 bg-stone-800 rounded-full"/>
                        </Center>
                        <PeendingGoals />
                        <TaskOfTheWeek /> 
                    </VStack>
                    <HStack>
        
                    </HStack>
                </Center>
            ) : (
                <EntryPage />
            )}
        </View>
        
    )
}