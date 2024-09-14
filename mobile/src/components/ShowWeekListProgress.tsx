import { TouchableOpacity } from "react-native";
import { Text, VStack, HStack } from "@gluestack-ui/themed";
import dayjs from "dayjs";

export type ShowWeekListProps = {
    id: string;
    title: string;
    completedAt: string;
}

interface ShowWeekList {
    goalPerDay: ShowWeekListProps
}

export function ShowWeekListProgress({ goalPerDay }: ShowWeekList) {
    const weekDay = dayjs(goalPerDay.completedAt).format('HH:mm')

    return ( 
        <VStack w={"$full"} >
            <HStack gap={6} >
                <Text color="$secondary400">Your have finished</Text>
                <Text color="$secondary100">{goalPerDay.title}</Text>
                <Text color="$secondary400">at</Text>
                <Text color="$secondary100">{ weekDay }</Text>
                <TouchableOpacity>
                    <Text underline color="$secondary400">undo</Text>
                </TouchableOpacity>
            </HStack>            
        </VStack>
    )
}