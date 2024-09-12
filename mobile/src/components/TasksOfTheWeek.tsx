import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { ShowWeekListProgress } from "./ShowWeekListProgress";


type data = {
    tasks: {
        id: number
        task: string
        time: string
    }[],
    weekTitle: string
}

export interface TaskOfWeekProps {
    data: data
}

export function TaskOfTheWeek({ data }: TaskOfWeekProps) {
    
    return (
        <VStack px={'$8'} gap={24}>
            <Heading color="$secondary100">
                { data.weekTitle}
            </Heading>


            {data ? (
                <VStack w={"$full"} gap={16}>
                    <VStack>
                        <Text 
                            fontSize={"$lg"} 
                            color="$secondary100"
                            >
                            Today
                        </Text>
                    </VStack>
                    <FlatList
                        data={data.tasks}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ShowWeekListProgress 
                                key={item.id} 
                                task={item.task}
                                time={item.time}
                            />
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                </VStack>
            ) : (
                <Text color="$secondary400">
                    You have not completed any goals this week.
                </Text>
            )}
        </VStack>
    )
}