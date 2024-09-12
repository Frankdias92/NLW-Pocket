import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, VStack, HStack } from "@gluestack-ui/themed";


interface ShowWeekListProps {
    task: string
    time: string
}

export function ShowWeekListProgress({ task, time }: ShowWeekListProps) {

    return ( 
        <VStack w={"$full"} >
            <HStack gap={6} >
                <Text color="$secondary400">Your have finished</Text>
                <Text color="$secondary100">{task}</Text>
                <Text color="$secondary400">at</Text>
                <Text color="$secondary100">{time}</Text>
                <TouchableOpacity>
                    <Text underline color="$secondary400">undo</Text>
                </TouchableOpacity>
            </HStack>            
        </VStack>
    )
}