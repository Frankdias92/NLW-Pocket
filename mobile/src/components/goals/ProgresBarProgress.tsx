import { ProgresBarProgress } from "@components/ui/ProgresBar";
import { Center, HStack, Text } from "@gluestack-ui/themed";
import { useQuery } from "@tanstack/react-query";
// import { ProgressBar } from '@react-native-community/progress-bar-android';
import { View, StyleSheet } from 'react-native'
import { getSummary } from "../../service/api";


export function ProgresBar() {
    const { data } = useQuery({
        queryKey: ['summary'],
        queryFn: getSummary,
        staleTime: 1000 * 60 // 60 seconds
    })
    
    if (!data) {
        return null
    }

    const completedPorcentage = Math.round(data?.completed * 100 / data?.total)
    
    return (
        <Center w={"$full"} gap={12} px={'$8'}>
            <ProgresBarProgress progress={ completedPorcentage } />
            <HStack w={"$full"} justifyContent="space-between">
                <Text alignSelf="flex-start" color="$secondary400">
                    Você completou <Text color="$secondary100">{ data?.completed }</Text> de <Text color="$secondary100">{ data?.total }</Text>.
                </Text>

                <Text color="$secondary400">
                    { completedPorcentage }%
                </Text>
            </HStack>
        </Center>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    example: {
      marginVertical: 24,
    },
  });