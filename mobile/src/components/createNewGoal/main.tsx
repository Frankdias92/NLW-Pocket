import { Center, FlatList, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { HeadingNewGoals } from "./headingNewGoals";
import { InputText } from "@components/InputText";
import { ButtonText } from "@components/ButtonText";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { View } from "react-native";
import { LabelValues, RadioGroupItem } from "@components/ui/radio-group";
import { useState } from "react";


export function Main() {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [task, setTask] = useState<number | undefined>(undefined)
  const [isSelelected, setIsSelected] = useState(false)
  const [taskNumber, setTaskNumber] = useState<number | undefined>(undefined)

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

function handleWithTask() {
    setTask(taskNumber)
  }
  
  function onClickNewTask(times?: number) {
    setTaskNumber(times)
  }

    return (
        <Center flex={1} my={"$10"} gap={24} px={"$8"}>
            <VStack h={"$full"} alignItems="stretch" justifyContent="space-between">
                <HStack>
                    <VStack gap={24}>
                        <HeadingNewGoals />
                        <InputText 
                          onChangeText={(e) => setSelectedValue(e)}
                          autoFocus
                        />
                        
                        <FlatList<LabelValues>
                          data={dataWeek}
                          keyExtractor={(item) => item.times?.toString() || item.label}
                          renderItem={({ item }) => (
                            <RadioGroupItem
                              key={item.times}
                              labelValues={item}
                              isSelelected={item.times === taskNumber}
                              onPress={() => onClickNewTask(item.times)} // Controlando a seleção
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