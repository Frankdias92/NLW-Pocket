import { Center, FlatList, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { HeadingNewGoals } from "./headingNewGoals";
import { InputText } from "@components/InputText";
import { ButtonText } from "@components/ButtonText";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { View } from "react-native";
import { LabelValues, RadioGroupItem } from "@components/ui/radio-group";
import { useState } from "react";
import { createNewGoal } from "../../service/create-goal-new";
import { useQueryClient } from "@tanstack/react-query";


export function Main() {
  const queryClient = useQueryClient()
  const [titleGoal, setTitleGoal] = useState<string>('');
  const [task, setTask] = useState<number | undefined>(undefined)
  const [desiredWeekly, setDesiredWeekly] = useState<number | null >(null)

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const dataWeek: LabelValues[] = [
    { label: '1x in week', emoji: '🥱', times: 1 },
    { label: '2x in week', emoji: '😎', times: 2 },
    { label: '3x in week', emoji: '😜', times: 3 },
    { label: '4x in week', emoji: '🤨', times: 4 },
    { label: '5x in week', emoji: '🤨', times: 5 },
    { label: '6x in week', emoji: '🤯', times: 6 },
    { label: 'Every week!!!', emoji: '🔥', times: 7 }
  ];

 const handleWithTask = async() => {
    if (!desiredWeekly || !titleGoal) {
      return console.log('Missing value of desire week')
    }
    await createNewGoal(titleGoal, desiredWeekly)
    setTitleGoal('')
    setDesiredWeekly(null)

    queryClient.invalidateQueries({ queryKey: ['summary']})
    queryClient.invalidateQueries({ queryKey: ['peending-goals']})
    navigation.goBack()
  }
  
  function onClickNewTask(times: number) {
    setDesiredWeekly(times)
  }

    return (
        <Center flex={1} my={"$10"} gap={24} px={"$8"}>
            <VStack h={"$full"} alignItems="stretch" justifyContent="space-between">
                <HStack>
                    <VStack gap={24}>
                        <HeadingNewGoals />
                        <InputText 
                          placeholder='Be a better person!'
                          onChangeText={(e) => setTitleGoal(e)}
                          autoFocus
                        />
                        
                        <FlatList<LabelValues>
                          data={dataWeek}
                          keyExtractor={(item) => item.times?.toString() || item.label}
                          renderItem={({ item }) => (
                            <RadioGroupItem
                              key={item.times}
                              labelValues={item}
                              isSelelected={item.times === desiredWeekly}
                              onPress={() => onClickNewTask(item.times)}
                            />
                          )}
                        />                  

                    </VStack>
                </HStack>

                <HStack w={"$full"} gap={12} alignSelf="flex-end">
                    <ButtonText title="Close" showIcon={false} variant="solid" onPress={() => navigation.goBack()}/>
                    <ButtonText title="Save" showIcon={false} onPress={handleWithTask}/>
                </HStack >
            </VStack>
        </Center>
    )
}