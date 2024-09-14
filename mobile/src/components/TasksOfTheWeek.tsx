import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { ShowWeekListProgress } from "./ShowWeekListProgress";
import { SummaryProps } from "./GoalsTasks";


type GoalPerDayProps = {
    id: string;
    title: string;
    completedAt: string;
}[]

interface GoalPerDay extends SummaryProps {
    goalPerDay: GoalPerDayProps
}

export function TaskOfTheWeek({ goalPerDay }: GoalPerDay ) {

    console.log('show week', { goalPerDay })
    
    return (
        <VStack px={'$8'} gap={24}>
            <Heading color="$secondary100">
                Your week
            </Heading>


            {goalPerDay ? (
                <VStack w={"$full"} gap={16}>
                    <VStack>
                        <Text 
                            fontSize={"$lg"} 
                            color="$secondary100"
                            >
                            Today {JSON.stringify(goalPerDay)}
                        </Text>
                    </VStack>
                    <FlatList
                        data={goalPerDay}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <ShowWeekListProgress 
                                key={item.toString()} 
                                goalPerDay={item}
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