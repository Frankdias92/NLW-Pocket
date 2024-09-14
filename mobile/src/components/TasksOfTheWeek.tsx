import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { ShowWeekListProgress, ShowWeekListProps } from "./ShowWeekListProgress";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../service/api";
import { ItemOfList } from "./ItemOfList";
import dayjs from "dayjs";



export function TaskOfTheWeek() {
    const { data } = useQuery({
        queryKey: ['summary'],
        queryFn: getSummary,
        staleTime: 1000 * 60 // 60 seconds
    })
    // console.log('show week', { data })
    
    return (
        <VStack px={'$8'} gap={24}>
            <Heading color="$secondary100">
                Your week
            </Heading>


            {data ? (
                <VStack w={"$full"} gap={16}>
                    <FlatList
                        data={Object.entries(data.goalPerDay)}
                        keyExtractor={([date]) => date}
                        renderItem={({ item: [date, goals] }) => {
                            const weekDay = dayjs(date).format('dddd') 
                            const formatDate = dayjs(date).format('D MMMM') 
                            
                            return (
                                <VStack key={date} gap={"$1"} mb={"$4"}>
                                    <VStack>
                                        <HStack gap={4} alignItems="center">
                                            <Text 
                                                fontSize={"$lg"} 
                                                color="$secondary100"
                                                >
                                                { weekDay } 
                                            </Text>
                                            <Text>
                                                ({ formatDate })
                                            </Text>
                                        </HStack>
                                    </VStack>
                                    {goals.map((goal: ShowWeekListProps) => (
                                        <ShowWeekListProgress 
                                            key={goal.id} 
                                            goalPerDay={goal}
                                        />
                                    ))}
                                </VStack>
                            )
                        }}
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