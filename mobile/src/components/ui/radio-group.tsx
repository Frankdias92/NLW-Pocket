import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckCircle, Circle } from 'lucide-react-native'; 
import { HStack, Text } from '@gluestack-ui/themed';


export interface LabelValues {
  label: string,
  emoji: string,
  times: 1
}

export interface RadioGroupProps {
  labelValues: LabelValues
}

export function RadioGroupItem({ labelValues, ...rest }: RadioGroupProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <HStack gap={6} 
      justifyContent='space-between' 
      bgColor='$secondary950'
      paddingHorizontal={'$4'}
      paddingVertical={'$3'}
      rounded={'$lg'}
      borderWidth={1}
      borderColor='$secondary700'
      >
        {isSelected ? (
          <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
              <CheckCircle size={24} color="#FF4081" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
            <Circle size={24} color="#9E9E9E" />
          </TouchableOpacity>
        )}
        <Text color='$secondary100'>{labelValues.label}</Text>

        <Text>{labelValues.emoji}</Text>
    </HStack>
  );
}

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