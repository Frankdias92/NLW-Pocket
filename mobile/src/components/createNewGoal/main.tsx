import { Center, FlatList, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { HeadingNewGoals } from "./headingNewGoals";
import { InputText } from "@components/InputText";
import { ButtonText } from "@components/ButtonText";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { View } from "react-native";
import { RadioGroupItem } from "@components/ui/radio-group";
import { useState } from "react";


export function Main() {
    const [selectedValue, setSelectedValue] = useState('');
    const [task, setTask] = useState('')
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const labelValues = [
        {
          label: '1x in week',
          emoji: '🥱',
          times: 1
        },
        {
          label: '2x in week',
          emoji: '😎',
          times: 2
        },
        {
          label: '3x in week',
          emoji: '😜',
          times: 3
        },
        {
          label: '4x in week',
          emoji: '🤨',
          times: 4
        },
        {
          label: '5x in week',
          emoji: '🤨',
          times: 5
        },
        {
          label: '6x in week',
          emoji: '🤯',
          times: 6
        },
        {
          label: 'Every week!!!',
          emoji: '🔥'
        },
      ]

    function handleWithTask() {
        setTask(selectedValue)
    }
    
    return (
        <Center flex={1} my={"$10"} gap={24} px={"$8"}>
            <VStack h={"$full"} alignItems="stretch" justifyContent="space-between">
                <HStack>
                    <VStack gap={24}>
                        <HeadingNewGoals />
                        <InputText onChangeText={(e) => setSelectedValue(e)}/>
                        
                        <FlatList
                            data={labelValues}
                            keyExtractor={(item) => item.times}
                            renderItem={({ item }) => (
                                <RadioGroupItem 
                                    key={item.times} 
                                    labelValues={item}
                                />
                            )}
                            showsHorizontalScrollIndicator={false}
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