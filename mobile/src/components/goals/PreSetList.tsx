import { ItemOfList } from "@components/ItemOfList";
import { Button, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";


export function PreSetList() {
    const [list, setList] = useState([
        'one', 'two', 'three', 'four', 'five'
    ])

    return ( 
        <VStack w={"$full"} >
            <FlatList
                data={list}
                keyExtractor={item => item}
                renderItem={({ item, index}) => (
                    <ItemOfList key={index} itemList={item} />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 32 }}
                style={{ maxHeight: 44, minHeight: 44 }}
            />
        </VStack>
    )
}