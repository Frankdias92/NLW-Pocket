import { FlatList } from "react-native";
import { useState } from "react";

import { VStack } from "@gluestack-ui/themed";
import { ItemOfList } from "@components/ItemOfList";

import { useQuery } from "@tanstack/react-query";
import { getPendingGoals, PeendingGoalsResponse } from "../../service/get-peendingGoals";
import { err } from "react-native-svg";


export function PeendingGoals() {
    const { data = [] } = useQuery<PeendingGoalsResponse>({
        queryKey: ['peending-goals'],
        queryFn: getPendingGoals,
        // staleTime: 1000 * 60 // 60 seconds
    })
    
    if (!data) {
        return null
    }
    console.log('result', data.map(item => `${item.title} : ${item.completionCount }`))
    
    return ( 
        <VStack w={"$full"} >
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item}) => (
                    <ItemOfList key={item.id} itemList={item} disabled={ item.completionCount >= item.desiredWeeklyFrequency }/>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 32 }}
                style={{ maxHeight: 44, minHeight: 44 }}
            />
        </VStack>
    )
}