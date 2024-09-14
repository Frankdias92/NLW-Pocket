import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, VStack, HStack } from "@gluestack-ui/themed";




type ShowWeekListProps = Record<string, {
    id: string;
    title: string;
    completedAt: string;
}[]>

export function ShowWeekListProgress({ goalPerDay }: ShowWeekListProps) {

    console.log('show week', { goalPerDay })

    return ( 
        <VStack w={"$full"} >
            <VStack>
                <Text 
                    fontSize={"$lg"} 
                    color="$secondary100"
                    >
                    {JSON.stringify(goalPerDay)}
                </Text>
            </VStack>

            <HStack gap={6} >
                <Text color="$secondary400">Your have finished</Text>
                <Text color="$secondary100">{goalPerDay[0].title}</Text>
                <Text color="$secondary400">at</Text>
                <Text color="$secondary100">{goalPerDay[0].completedAt}</Text>
                <TouchableOpacity>
                    <Text underline color="$secondary400">undo</Text>
                </TouchableOpacity>
            </HStack>            
        </VStack>
    )
}