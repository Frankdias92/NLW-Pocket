import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { WeekOfTask } from "./goals/WeekOfTask";
import { ProgresBar } from "./goals/ProgresBar";
import { View } from "react-native";
import { PreSetList } from "./goals/PreSetList";
import { TaskOfTheWeek, TaskOfWeekProps } from "./TasksOfTheWeek";
import { useState } from "react";

type data = {
    tasks: {
        id: number
        task: string
        time: string
    }[],
    weekTitle: string
}[]

export function GoalsTasks() {
    const [data] = useState<data>(
        [{
            tasks:[
                { 
                    id: 1,
                    task: 'Please',
                    time: '08:10'
                },
                { 
                    id: 2,
                    task: 'Works',
                    time: '08:10'
                }
            ],
            weekTitle: 'Some Title'
        }]
    )

    return (
        <Center flex={1} justifyContent="flex-start" mt={"$10"} gap={24} >
            <VStack gap={24} >
                <WeekOfTask />
                <ProgresBar />
                <Center px={'$8'}>
                    <View className="min-w-full h-0.5 bg-stone-800 rounded-full"/>
                </Center>
                <PreSetList />

                <TaskOfTheWeek  data={data[0]} /> 
            </VStack>
            <HStack>

            </HStack>
        </Center>
    )
}